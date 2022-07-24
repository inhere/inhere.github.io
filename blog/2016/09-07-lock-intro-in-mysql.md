---
title: Mysql的锁机制解读
tags: [mysql,lock]
date: 2016-09-07T21:17
slug: lock-intro-in-mysql
authors: inhere
# gen by: kite run script/cgen.php --name lock-intro-in-mysql -c script/conf.ini
---

Mysql的锁机制解读说明

<!--truncate-->

## 基本概念

### 共享锁

共享锁的代号是`S`，是Share的缩写，共享锁的锁粒度是行或者元组（多个行）。一个事务获取了共享锁之后，可以对锁定范围内的数据**执行读操作**。 

### 排它锁

排它锁的代号是`X`，是eXclusive的缩写，排它锁的粒度与共享锁相同，也是行或者元组。一个事务获取了排它锁之后，可以对锁定范围内的数据**执行写操作**。

例：假设有两个事务t1和t2

如果事务t1获取了一个元组的共享锁，事务t2还可以立即获取这个元组的共享锁，但不能立即获取这个元组的排它锁（必须等到t1释放共享锁之后）。
如果事务t1获取了一个元组的排它锁，事务t2不能立即获取这个元组的排共享锁，也不能立即获取这个元组的排它锁（必须等到t1释放排它锁之后）。

### 意向锁

意向锁是**一种表锁，锁定的粒度是整张表**，分为**意向共享锁(IS)**和**意向排它锁(IX)**两类。

意向共享锁表示一个事务有意对数据上共享锁或者排它锁。“有意”这两个字表达的意思比较微妙，说的明白点就是指事务想干这个事但还没真去干。
举例说明下意向共享锁，比如一个事务t执行了这样一个语句：`select * from table lock in share model` ，如果这个语句执行成功，就对表table上了一个意向共享锁。
`lock in share model` 就是说事务t1在接下来要执行的语句中要获取S锁。如果t1的`select * from table lock in share model`执行成功，那么接下来t1应该可以畅通无阻的去执行只需要共享锁的语句了。

意向排它锁的含义同理可知，上例中要获取意向排它锁，可以使用`select * from table for update` 。

`lock in share model` 和 `for update`这两个东西在数据率理论中还有个学名叫**悲观锁**，与悲观锁相对的当然还有乐观锁。大家可以看到各种锁都是成双成对出现的。关于悲观锁和乐观锁的问题暂且不表。 


### 锁的互斥与兼容关系

锁和锁之间的关系，要么是相容的，要么是互斥的。
锁a和锁b相容是指：操作同样一组数据时，如果事务t1获取了锁a,另一个事务t2还可以获取锁b；
锁a和锁b互斥是指：操作同样一组数据时，如果事务t1获取了锁a，另一个事务t2在t1释放锁a之前无法获取锁b。

上面提到的共享锁、排它锁、意向共享锁、意向排它锁相互之前都是有兼容/互斥关系的，可以用一个兼容性矩阵表示(y表示兼容，n表示不兼容):

```
    X    S    IX    IS
X  n     n    n     n
S  n     y    n     y
IX n     n    y     y
IS n     y    y     y  
```

兼容性矩阵为什么是这个样子的？

X和S的相互关系在上文中解释过了，IX和IS的相互关系全部是兼容，这也很好理解，因为它们都只是“有意”，还处于YY阶段，没有真干，所以是可以兼容的；
剩下的就是X和IX，X和IS, S和IX， S和IS的关系了，我们可以由X和S的关系推导出这四组关系。

简单的说：X和IX的=X和X的关系。为什么呢？因为事务在获取IX锁后，接下来就有权利获取X锁。如果X和IX兼容的话，就会出现两个事务都获取了X锁的情况，这与我们已知的X与X互斥是矛盾的，所以X与IX只能是互斥关系。

其余的三组关系同理，可用同样的方式推导出来。

## MySQL有三种锁的级别：页级、表级、行级。

MyISAM和MEMORY存储引擎采用的是**表级锁（table-level locking）**；
BDB存储引擎采用的是**页面锁（page-level locking）**，但也支持表级锁；
InnoDB存储引擎既支持**行级锁（row-level locking）**，也支持表级锁，但默认情况下是采用行级锁。

MySQL这3种锁的特性可大致归纳如下：

- 表级锁：开销小，加锁快；不会出现死锁；锁定粒度大，发生锁冲突的概率最高,并发度最低。
- 行级锁：开销大，加锁慢；会出现死锁；锁定粒度最小，发生锁冲突的概率最低,并发度也最高。
- 页面锁：开销和加锁时间界于表锁和行锁之间；会出现死锁；锁定粒度界于表锁和行锁之间，并发度一般。

## MyISAM表锁

MyISAM存储引擎只支持表锁，是现在用得最多的存储引擎。

### 1、查询表级锁争用情况

可以通过检查table_locks_waited和table_locks_immediate状态变量来分析系统上的表锁定争夺：
mysql> show status like ‘table%’;
+———————–+———-+
| Variable_name | Value |
+———————–+———-+
| Table_locks_immediate | 76939364 |
| Table_locks_waited | 305089 |
+———————–+———-+
2 rows in set (0.00 sec)Table_locks_waited的值比较高，说明存在着较严重的表级锁争用情况。

### 2、MySQL表级锁的锁模式

MySQL的表级锁有两种模式：**表共享读锁（Table Read Lock）**和 **表独占写锁（Table Write Lock）**。

> MyISAM在执行查询语句（SELECT）前，会自动给涉及的所有表加读锁，在执行更新操作（UPDATE、DELETE、INSERT等）前，会自动给涉及的表加写锁。

所以对MyISAM表进行操作，会有以下情况：

a. 对MyISAM表的读操作（加读锁），不会阻塞其他进程对同一表的读请求，但会阻塞对同一表的写请求。只有当读锁释放后，才会执行其它进程的写操作。
b. 对MyISAM表的写操作（加写锁），会阻塞其他进程对同一表的读和写操作，只有当写锁释放后，才会执行其它进程的读写操作。

下面通过例子来进行验证以上观点。数据表gz_phone里有二百多万数据，字段id,phone,ua,day。现在同时用多个客户端同时对该表进行操作分析。

a、当我用客户端1进行一个比较长时间的读操作时，分别用客户端2进行读和写操作：
```

client1:
mysql>select count(*) from gz_phone group by ua;
75508 rows in set (3 min 15.87 sec) client2:
select id,phone from gz_phone limit 1000,10;
+——+——-+
| id | phone |
+——+——-+
| 1001 | 2222 |
| 1002 | 2222 |
| 1003 | 2222 |
| 1004 | 2222 |
| 1005 | 2222 |
| 1006 | 2222 |
| 1007 | 2222 |
| 1008 | 2222 |
| 1009 | 2222 |
| 1010 | 2222 |
+——+——-+
10 rows in set (0.01 sec)
mysql> update gz_phone set phone=’11111111111′where id=1001;
Query OK, 0 rows affected (2 min 57.88 sec)
Rows matched: 1 Changed: 0 Warnings: 0
```

说明当数据表有一个读锁时，其它进程的查询操作可以马上执行，但更新操作需等待读锁释放后才会执行。

b、当用客户端1进行一个较长时间的更新操作时，用客户端2,3分别进行读写操作：

```
client1:
mysql> update gz_phone set phone=’11111111111′;
Query OK, 1671823 rows affected (3 min 4.03 sec)
Rows matched: 2212070 Changed: 1671823 Warnings: 0 client2:
mysql> select id,phone,ua,day from gz_phone limit 10;
+—-+——-+——————-+————+
| id | phone | ua | day |
+—-+——-+——————-+————+
| 1 | 2222 | SonyEricssonK310c | 2007-12-19 |
| 2 | 2222 | SonyEricssonK750c | 2007-12-19 |
| 3 | 2222 | MAUI WAP Browser | 2007-12-19 |
| 4 | 2222 | Nokia3108 | 2007-12-19 |
| 5 | 2222 | LENOVO-I750 | 2007-12-19 |
| 6 | 2222 | BIRD_D636 | 2007-12-19 |
| 7 | 2222 | SonyEricssonS500c | 2007-12-19 |
| 8 | 2222 | SAMSUNG-SGH-E258 | 2007-12-19 |
| 9 | 2222 | NokiaN73-1 | 2007-12-19 |
| 10 | 2222 | Nokia2610 | 2007-12-19 |
+—-+——-+——————-+————+
10 rows in set (2 min 58.56 sec) client3:
mysql> update gz_phone set phone=’55555′where id=1;
Query OK, 1 row affected (3 min 50.16 sec)
Rows matched: 1 Changed: 1 Warnings: 0
```

说明当数据表有一个写锁时，其它进程的读写操作都需等待读锁释放后才会执行。

### 3、并发插入

原则上数据表有一个读锁时，其它进程无法对此表进行更新操作，但在一定条件下，MyISAM表也支持查询和插入操作的并发进行。

MyISAM存储引擎有一个系统变量concurrent_insert，专门用以控制其并发插入的行为，其值分别可以为0、1或2。

a. 当concurrent_insert设置为0时，不允许并发插入。
b. 当concurrent_insert设置为1时，如果MyISAM表中没有空洞（即表的中间没有被删除的行），MyISAM允许在一个进程读表的同时，另一个进程从表尾插入记录。这也是MySQL的默认设置。
c. 当concurrent_insert设置为2时，无论MyISAM表中有没有空洞，都允许在表尾并发插入记录。

### 4、MyISAM的锁调度

由于MySQL认为写请求一般比读请求要重要，所以如果有读写请求同时进行的话，MYSQL将会优先执行写操作。这样MyISAM表在进行大量的更新操作时（特别是更新的字段中存在索引的情况下），会造成查询操作很难获得读锁，从而导致查询阻塞。

我们可以通过一些设置来调节MyISAM的调度行为：

a. 通过指定启动参数`low-priority-updates`，使MyISAM引擎默认给予读请求以优先的权利。
b. 通过执行命令`SET LOW_PRIORITY_UPDATES=1`，使该连接发出的更新请求优先级降低。
c. 通过指定 `INSERT`、`UPDATE`、`DELETE` 语句的`LOW_PRIORITY`属性，降低该语句的优先级。

上面3种方法都是要么更新优先，要么查询优先的方法。这里要说明的就是，不要盲目的给mysql设置为读优先，因为一些需要长时间运行的查询操作，也会使写进程“饿死”。只有根据你的实际情况，来决定设置哪种操作优先。这些方法还是没有从根本上同时解决查询和更新的问题。

在一个有大数据量高并发表的mysql里，我们还可采用另一种策略来进行优化，那就是通过mysql主从（读写）分离来实现负载均衡，这样可避免优先哪一种操作从而可能导致另一种操作的堵塞。

> 转自：[CSDN博客](http://blog.csdn.net/andyxm/article/details/44810313)
 

