<?php
/**
 * run:
 *  kite run script/cgen.php
 *  kite run script/cgen.php -h
 *  KITE_BOOT_FILE=C:\\Users/inhere/.kite/app/boot.php php script/cgen.php --name "install tools by scoop on windows"
 */
use Toolkit\Cli\Cli;
use Toolkit\PFlag\CliCmd;
use Toolkit\PFlag\FlagsParser;
use PhpPkg\EasyTpl\TextTemplate;
use Toolkit\Stdlib\OS;
use Toolkit\Stdlib\Str;

// load kite boot file, allow use all class in the kite.
$kiteBootFile = getenv('KITE_BOOT_FILE');
if (!$kiteBootFile || !is_file($kiteBootFile)) {
    throw new RuntimeException("kite boot file is not exists", 1);
}

date_default_timezone_set('PRC');
echo "... load kite boot file: ", $kiteBootFile, "\n\n";
require $kiteBootFile;

// install tools by scoop on windows
// title: Better parse command line flags in PHP

CliCmd::new()
    ->config(function (CliCmd $cmd) {
        $cmd->name = 'cgen';
        $cmd->desc = 'quickly generate a blog or doc markdown file';

        $osUser = OS::getUserName();

        // config flags
        $cmd->options = [
            'i,interactive' => 'bool;interactive set config',
            'd,draft' => 'bool;create new draft article to the ./draft dir',
            'i18n' => 'i18n language name, generate file to i18n folder. eg: en',
            'a, author' => "author for the new markdwon article, default will auto fetch OS user;;$osUser",
            'name' => 'the new markdown file name;true',
            'tags' => 'tags for the new markdown article, multi by comma',
            'slug' => 'slug name in the site uri path. if empty, will use `name`',
            'title' => 'title for the new markdwon article',
            'type' => 'the new markdwon article file type, allow: docs, blog;;blog',
            'date' => "the article publish date, format: `yyyy-mm-ddThh:ii`,\ndefault is current datetime",
            't,tpl-file'     => 'the tempalte file;;./internal/template/demo.tpl',
        ];
        // or use property
        // $cmd->arguments = [...];
        // $cmd->getFlags()->setHelp();
        $cmd->getFlags()->setExample([
            '{binWithCmd} --name pflag-better-php-command-line-parse-library',
            '{binWithCmd} --name pflag-better-php-command-line-parse-library -d',
        ]);
    })
    // ->withArguments([
    //     'arg1' => 'this is arg1, is string'
    // ])
    ->setHandler('handle_func')
    ->run();

function handle_func(FlagsParser $fs)
{
    // vdump($fs->getOpts());
    $needValues = ['date', 'tpl-file'];

    $basePath = dirname(__DIR__);
    $tplFile = $fs->getOpt('tpl-file');
    $tplFile = $basePath . '/' . ltrim($tplFile, './');
    if (!is_file($tplFile)) {
        throw new InvalidArgumentException('template file not exists, path: ' . $tplFile);
    }

    $i18n = $fs->getOpt('i18n');
    $type = $fs->getOpt('type');
    $tags = $fs->getOpt('tags');
    $name = $fs->getOpt('name');
    $name = strtolower(str_replace(' ', '-', $name));

    $datetime = date('Y-m-d\TH:i');

    $year = substr($datetime, 0, 4);
    $mday = substr($datetime, 5, 5);

    $subDir = $i18n ? "$i18n/docusaurus-plugin-content-$type" : $type;
    if ($fs->getOpt('draft')) {
        $subDir = 'draft';
    }

    $mdFile = implode('/', array_filter([
        $basePath,
        $subDir,
        $year,
        "$mday-$name.md"
    ]));

    $tplVars = [
        'date'   => $datetime,
        'tags'   => $tags,
        'slug'   => $fs->getOpt('slug', $name),
        'author' => $fs->getOpt('author'),
        'title'   => $fs->getOpt('title', str_replace('-', ' ', $name)),
        'genMark' => 'kite run ' . Str::shellQuotesToLine($fs->getFlags(), $fs->getScriptFile()),
    ];
    $infos = $tplVars;
    // add
    $infos['type'] = $type;
    $infos['i18n'] = $i18n;
    $infos['name'] = $name;
    $infos['tplFile'] = $tplFile;
    $infos['mdFile'] = $mdFile;

    Cli::info("Information:");
    vdump($infos);

    // TIP: must end with newline.
    if (DIRECTORY_SEPARATOR !== '\\') {
        println('continue to generate?[y/N]');
    }

    // echo "continue to generate?[y/N]\n";
    $ans = Cli::readln("continue to generate?[y/N]\n");
    if (!$ans || stripos($ans, 'y') !== 0 ) {
        Cli::cyan('Quit, bye!');
        return;
    }

    $contents = file_get_contents($tplFile);
    $tplEng = TextTemplate::new();
    $contents = $tplEng->renderString($contents, $tplVars);

    Cli::info("Write contents to the: $mdFile");
    $ok = file_put_contents($mdFile, $contents);
    if ($ok !== false) {
        Cli::success("Generate new article file completed");
    }
}
