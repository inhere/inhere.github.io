---
title: php 实现一个 Telnet 工具类
tags: [php,socket,telnet]
date: 2017-05-12T09:47
slug: implement-a-telnet-tool-in-php
authors: inhere
# gen by: kite run script/cgen.php --name implement-a-telnet-tool-in-php -c script/conf.ini
---

使用php 里的 socket 相关函数，实现一个简单的 Telnet 工具类。

- 支持发送命令，获取结果
- 进入交互环境，类似于命令行工具telnet
- 持续的监控一个命令 ，类似于命令行的 watch

<!--truncate-->

可选择使用三种连接方式

- fsockopen - php 内置函数
- socket - 需要 `sockets` 扩展
- stream - 使用 `stream_*` 相关函数

完整代码[源文件](https://gist.github.com/inhere/f39d2d1641b2282e54ecefa84a5af8b4#file-telnet-php)：

```php
<?php

/**
 * Class Telnet
 */
class Telnet
{
    const DRIVER_SOCKET = 'socket';
    const DRIVER_STREAM = 'stream';
    const DRIVER_FSOCK = 'fsock';

    /**
     * @var array
     */
    private static $availableDrivers = [
        'socket' => 'socket_create',
        'stream' => 'stream_socket_client',
        'fsock' => 'fsockopen',
    ];

    /**
     * @var resource
     */
    private $sock;

    /**
     * @var string
     */
    private $driver;

    /**
     * @var string
     */
    private $host;

    /**
     * @var int
     */
    private $port;

    /**
     * @var array
     */
    private $config = [
        'driver' => '', // 'fsock' 'stream' 'socket'. if is empry, will auto select.

        // 设置阻塞或者非阻塞模式
        'blocking' => true,

        // 10s
        'timeout' => 10,

        // max watch time 180s, when use watch
        'max_watch_time' => 180,
    ];

    /**
     * Telnet constructor.
     * @param string $host
     * @param int $port
     * @param array $config
     */
    public function __construct($host = '127.0.0.1', $port = 80, array $config = [])
    {
        $this->host = $host ?: '127.0.0.1';
        $this->port = $port ?: 80;

        $this->setConfig($config);

        $this->init();

        $this->connect($this->host, $this->port);
    }

    protected function init()
    {
        $driver = $this->config['driver'];

        if (!$driver || !isset(self::$availableDrivers[$driver])) {
            foreach (self::$availableDrivers as $name => $funcName) {
                if (function_exists($funcName)) {
                    $driver = $name;
                    break;
                }
            }
        }

        $this->driver = $driver;
    }

    /**
     * @param string $host
     * @param string $port
     */
    protected function connect($host, $port)
    {
        try {
            $this->doConnect($host, $port, $this->driver);
        } catch (\Exception $e) {
            throw new \RuntimeException("Use {$this->driver} connect to the server {$host}:{$port} failed, ERROR({$e->getCode()}): {$e->getMessage()}", -500);
        }
    }

    /**
     * @param string $host
     * @param string $port
     * @param string $driver
     */
    protected function doConnect($host, $port, $driver)
    {
        $errNo = $errStr = null;

        switch ($driver) {
            case self::DRIVER_SOCKET:
                $this->sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
                if ($this->sock === false) {
                    throw new \RuntimeException('socket_create() failed. Reason: ' . socket_strerror(socket_last_error()), -400);
                }

                if (socket_connect($this->sock, $host, $port) === false) {
                    throw new \RuntimeException('socket_connect() failed. Reason: ' . socket_strerror(socket_last_error()), -450);
                }

                if ($this->config['blocking']) {
                    socket_set_block($this->sock);
                } else {
                    socket_set_nonblock($this->sock);
                }

                socket_set_option($this->sock, SOL_SOCKET, SO_RCVTIMEO, [
                    'sec' => $this->config['timeout'],
                    'usec' => null
                ]);
                break;

            case self::DRIVER_STREAM:
                $this->sock = stream_socket_client(
                    "tcp://{$host}:{$port}",
                    $errNo,
                    $errStr,
                    $this->config['timeout'],
                    STREAM_CLIENT_CONNECT | STREAM_CLIENT_PERSISTENT
                );
                break;

            case self::DRIVER_FSOCK:
            default:
                $this->sock = fsockopen($host, $port, $errNo, $errStr, $this->config['timeout']);
                break;
        }

        if (!$this->sock) {
            throw new \RuntimeException("Connect to the {$host}:{$port} failed, ERROR: $errNo - $errStr", -500);
        }

        if ($driver !== self::DRIVER_SOCKET) {
            stream_set_blocking($this->sock, $this->config['blocking'] ? 1 : 0);
            stream_set_timeout($this->sock, $this->config['timeout'], 0);
        }
    }

    /**
     * watch a command
     * @param  string  $command
     * @param  integer $interval (ms)
     */
    public function watch($command, $interval = 500)
    {
        $count = 0;
        $activeTime = time();
        $maxTime = (int)$this->config['max_watch_time'];
        $intervalUs = $interval * 1000;

        echo "watch command: $command, refresh interval: {$interval}ms\n";

        while (true) {
            $count++;
            $result = $this->command($command);

            if (0 === strpos($result, 'ERR')) {
                echo "$result\n";
                echo "error command: $command. ";
                break;
            }

            // clear screen before output
            echo "\033[2JThe {$count} times watch {$command} result(refresh interval: {$interval}ms):\n{$result}\n";

            if ($maxTime > 0 && time() - $activeTime >= $maxTime) {
                echo "watch time end. ";
                break;
            }

            usleep($intervalUs);
        }

        echo "Quit\n";
    }

    /**
     * into interactive environment
     */
    public function interactive()
    {
        echo "welcome! please input command('quit' or 'exit' to Quit).\n ";

        while (true) {
            echo "> ";
            if ($cmd = trim(fgets(\STDIN))) {
                // echo "input command: $cmd\n";
                if ($cmd === 'quit' || $cmd === 'exit') {
                    echo "Quit. Bye\n";
                    break;
                }

                echo $this->command($cmd) . PHP_EOL;
            }

            usleep(50000);
        }

        $this->close();
    }

    /**
     * send command
     * @param  string $command
     * @param bool $readResult
     * @param int $readSize
     * @return false|int|string
     */
    public function command($command, $readResult = true, $readSize = 1024)
    {
        $len = $this->write(trim($command) . "\r\n");

        if ($readResult) {
            return $this->read($readSize);
        }

        return $len;
    }

    /**
     * write
     * @param  string $buffer
     * @return int|false
     */
    public function write($buffer)
    {
        if ($this->driver === self::DRIVER_SOCKET) {
            return socket_write($this->sock, $buffer, strlen($buffer));
        } else {
            // $buffer = str_replace(chr(255), chr(255) . chr(255), $buffer);
            return fwrite($this->sock, $buffer);
        }
    }

    /**
     * read
     * @param  integer $size
     * @return string|false
     */
    public function read($size = 1024)
    {
        if ($this->driver === self::DRIVER_SOCKET) {
            return socket_read($this->sock, $size);
        } else {
            return fread($this->sock, $size);
        }
    }

    public function close()
    {
        if ($this->sock) {
            if ($this->driver === self::DRIVER_SOCKET) {
                socket_close($this->sock);
            } else {
                fclose($this->sock);
            }

            $this->sock = null;
        }
    }

    /**
     * @return resource
     */
    public function getSock()
    {
        return $this->sock;
    }

    /**
     * @return array
     */
    public function getConfig()
    {
        return $this->config;
    }

    /**
     * @param array $config
     */
    public function setConfig(array $config)
    {
        if ($config) {
            $this->config = array_merge($this->config, $config);
        }
    }

    public function __destruct()
    {
        $this->close();
    }
}
```

## 简单使用

编写一个简单的入口文件`telnet.php`：

```php
global $argv;
$opts = getopt('h', ['help']);

if (isset($opts['h']) || isset($opts['help'])) {
    $script = array_shift($argv);
    $help = <<<EOF
Start a telnet client.

Usage:
  php $script HOST [PORT]

Options:
  -h,--help  Show this help information
\n
EOF;
    exit($help);
}

$host = isset($argv[1]) ? $argv[1] : '127.0.0.1';
$port = isset($argv[2]) ? $argv[2] : 4730;

echo "Connect to the server {$host}:{$port}\n";

$tt = new Telnet($host, $port);

// echo $tt->command('status');
// $tt->watch('status');
$tt->interactive(); // 进入交互环境，类似于命令行工具telnet
```

调用：

```bash
php telnet.php 127.0.0.1 11211
```
 

