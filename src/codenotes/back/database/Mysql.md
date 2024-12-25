---
# 当前页面内容标题
title: Mysql
# 当前页面图标
icon: https://gitee.com/private_crh/notes/raw/master/typora/202411151558687.svg
# 分类
category:
  - 计算机
# 标签
tag:
  - 工具
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: false
# 是否将该文章添加至文章列表中
article: false
# 是否将该文章添加至时间线中
timeline: false
# 是否原创
isOriginal: true

date: 2024-11-07

headerDepth: 2

---

::: left
&nbsp;![](https://gitee.com/private_crh/notes/raw/master//typora/018ce95a091491a80121985c45db22.jpg@2o.jpg =800x300)
:::

::: right
**人生最遗憾的，莫过于轻易地放弃了不该放弃的，固执地坚持了不该坚持的。**
:::



## 1. 概述

概念：DB、DBMS、SQL

官网： https://www.mysql.com/

安装：   
<iframe src="/pdf/MySQL安装.pdf" width="100%" height="400px"></iframe>

<br>
<br>


## 2. 启动停止

```
net start mysql80
net stop mysql80
```

<br>
<br>

## 3. 客户端连接

```
mysql [-h 127.0.0.1] [-P 3306] -u root -p
```


<br>
<br>


## 4. 数据模型

关系型(RDBMS)、非关系型
> RDBMS：由多张相互连接的二维表组成的数据库，二维表指由行和列组成的表

<br>

##  5. SQL
定义了 一套操作关系型数据库统一标准

>1. 可以单行或多行书写，以分号结尾
>2. 可以使用空格/缩进来增强语句的可读性
>3.  MySQL数据库的SQL语句不区分大小写，关键字建议使用大写



**注释**
``` 
单行注释：-- 内容   或    #  内容
多行注释：/*   内容   */
```

<br>

### DDL

**数据库**

```
show databases ;   						查所有数据库
select database() ;						查看当前数据库
drop database [ if exists ] 			删除数据库
use 数据库名;							切换数据库
create database [ if not exists ] 数据库名 [ default charset 字符集 ]
[ collate 排序规则 ] ;                   创建数据库                                                        
```






**表**

```
show tables;				       查询当前数据库所有表
desc 表名 ;						   查看指定表结构
show create table 表名 ;		   查询指定表的建表语句
```

```
ALTER TABLE 表名 ADD 字段名 类型 (长度) [ COMMENT 注释 ] [ 约束 ];	    添加字段
ALTER TABLE 表名 MODIFY 字段名 新数据类型 (长度);						    修改数据类型

# 修改字段名和字段类型
ALTER TABLE 表名 CHANGE 旧字段名 新字段名 类型 (长度) [ COMMENT 注释 ] [ 约束 ];

ALTER TABLE 表名 DROP 字段名;				删除字段
ALTER TABLE 表名 RENAME TO 新表名;			修改表名
DROP TABLE [ IF EXISTS ] 表名;			    删除表
TRUNCATE TABLE 表名;						删除指定表, 并重新创建表
```

创建表结构

```
CREATE TABLE 表名(
	字段1 字段1类型 [ COMMENT 字段1注释 ],
	字段2 字段2类型 [COMMENT 字段2注释 ],
	字段3 字段3类型 [COMMENT 字段3注释 ],
	......
	字段n 字段n类型 [COMMENT 字段n注释 ]
) [ COMMENT 表注释 ] ;

```


<br>
<br>


#### 数据类型

**数值**

| 类型        | 大小   | 有符号(SIGNED)范围                                     | 无符号(UNSIGNED)范围                                       | 描述                |
| ----------- | ------ | ------------------------------------------------------ | ---------------------------------------------------------- | ------------------- |
| TINYINT     | 1byte  | (-128，127)                                            | (0，255)                                                   | 小整数值            |
| SMALLINT    | 2bytes | (-32768，32767)                                        | (0，65535)                                                 | 大整数值            |
| MEDIUMINT   | 3bytes | (-8388608，8388607)                                    | (0，16777215)                                              | 大整数值            |
| INT/INTEGER | 4bytes | (-2147483648， 2147483647)                             | (0，4294967295)                                            | 大整数值            |
| BIGINT      | 8bytes | (-2^63 , 2^63-1)                                       | (0，2^64-1)                                                | 极大整数值          |
| FLOAT       | 4bytes | (-3.402823466 E+38， 3.402823466351 E+38)              | 0 和 (1.175494351 E38，3.402823466 E+38)                   | 单精度浮点数 值     |
| DOUBLE      | 8bytes | (-1.7976931348623157 E+308， 1.7976931348623157 E+308) | 0 和 (2.2250738585072014 E-308， 1.7976931348623157 E+308) | 双精度浮点数 值     |
| DECIMAL     |        | 依赖于M(精度)和D(标度) 的值                            | 依赖于M(精度)和D(标度)的 值                                | 小数值(精确定 点数) |





**字符串**

| 类型    | 大小          | 描述                     |
| ------- | ------------- | ------------------------ |
| CHAR    | 0-255 bytes   | 定长字符串(需要指定长度) |
| VARCHAR | 0-65535 bytes | 变长字符串(需要指定长度) |

区别：  
<span style="color: red;">char是定长字符串，指定长度多长，就占用多少个字符，和 字段值的长度无关 。而varchar是变长字符串，指定的长度为最大占用长度 。相对来说，char的性能会更高些。</span>



**日期**

| 类型      | 大小 | 范围                                       | 格式                | 描述                     |
| --------- | ---- | ------------------------------------------ | ------------------- | ------------------------ |
| DATE      | 3    | 1000-01-01 至 9999-12-31                   | YYYY-MM-DD          | 日期值                   |
| TIME      | 3    | -838:59:59 至 838:59:59                    | HH:MM:SS            | 时间值或持续时间         |
| YEAR      | 1    | 1901 至 2155                               | YYYY                | 年份值                   |
| DATETIME  | 8    | 1000-01-01 00:00:00 至 9999-12-31 23:59:59 | YYYY-MM-DD HH:MM:SS | 混合日期和时间值         |
| TIMESTAMP | 4    | 1970-01-01 00:00:01 至 2038-01-19 03:14:07 | YYYY-MM-DD HH:MM:SS | 混合日期和时间值，时间戳 |


<br>


### DML

```
# 给指定字段添加数据
INSERT INTO 表名 (字段名1, 字段名2, ...) VALUES (值1, 值2, ...);

# 给全部字段添加数据
INSERT INTO 表名 VALUES (值1, 值2, ...);

# 批量添加数据
INSERT INTO 表名 VALUES (值1, 值2, ...), (值1, 值2, ...), (值1, 值2, ...) ;
INSERT INTO 表名 (字段名1, 字段名2, ...) VALUES (值1, 值2, ...), (值1, 值2, ...), (值
1, 值2, ...) ;
```

- 字符串和日期型数据应该包含在引号中



```
# 修改数据
UPDATE 表名 SET 字段名1 = 值1 , 字段名2 = 值2 , .... [ WHERE 条件 ] ;

# 删除数据
DELETE FROM 表名 [ WHERE 条件 ] ;
```

- 如果没有条件，则会<span style="color: red;"> 修改或删除 </span>整张表的所有数据
- DELETE 语句不能删除某一个字段的值 ( 可以使用UPDATE，将该字段值置为NULL即可 )



### DQL
**基础查询**

```
SELECT 字段1, 字段2, 字段3 ... FROM 表名 ;
SELECT * FROM 表名 ;
SELECT 字段1 [ AS 别名1 ] , 字段2 [ AS 别名2 ] ... FROM 表名;
SELECT 字段1 [ 别名1 ] , 字段2 [ 别名2 ] ... FROM 表名;

# 去除重复字段
SELECT DISTINCT 字段列表 FROM 表名;
```



**条件查询**

```
SELECT 字段列表 FROM 表名 WHERE 条件列表 ;
```

| 比较运算符          | 功能                          |
| ------------------- |-----------------------------|
| >                   | 大于                          |
| >=                  | 大于等于                        |
| <                   | 小于                          |
| <=                  | 小于等于                        |
| =                   | 等于                          |
| <> 或 !=            | 不等于                         |
| BETWEEN ... AND ... | 在某个范围之内(含最小、最大值)            |
| IN(...)             | 在in之后的列表中的值，多选一             |
| LIKE 占位符         | 模糊匹配( _匹配单个字符,  % 匹配任意个字符 ) |
| IS NULL             | 是NULL                       |

| 逻辑运算符 | 功能                        |
| ---------- | --------------------------- |
| AND 或 &&  | 并且 (多个条件同时成立)     |
| OR 或 \|\| | 或者 (多个条件任意一个成立) |
| NOT 或 !   | 非 , 不是                   |



**聚合函数**

```
SELECT 聚合函数(字段列表) FROM 表名 ;
```

| 函数  | 功能     |
| ----- | -------- |
| count | 统计数量 |
| max   | 最大值   |
| min   | 最小值   |
| avg   | 平均值   |
| sum   | 求和     |

-  <span style="color: red;">NULL值</span>是不参与<span style="color: red;">所有</span>聚合函数运算的

<br>

**分组查询**

```
SELECT 字段列表 FROM 表名 [ WHERE 条件 ] GROUP BY 分组字段名 [ HAVING 分组
后过滤条件 ];
```

where与having区别

- where 是分组之前进行过滤，不满足where条件，不参与分组；而 having 是分组之后对结果进行过滤
- where 不能对聚合函数进行判断，而having可以

注意
> 分组之后，查询的字段一般为聚合函数和分组字段，查询其他字段无任何意义  ;  支持多字段分组, 具体语法为 : group by columnA,columnB

<br>

**排序查询**

```
SELECT 字段列表 FROM 表名 ORDER BY 字段1 排序方式1 , 字段2 排序方式2 ;
```

- ASC : 升序(默认值)      DESC: 降序

<br>

**分页查询**

```
SELECT 字段列表 FROM 表名 LIMIT 起始索引, 查询记录数 ;
```

- 起始索引从0开始，起始索引 = （查询页码 - 1）* 每页显示记录数
- 分页查询是数据库的方言，不同的数据库有不同的实现，MySQL中是LIMIT
- 如果查询的是第一页数据，起始索引可以省略

<br>

**执行顺序**

select   ...   from   ...   where   ...   group by   ...   having   ...   order by   ...   limit   ...  ;  
④&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;①&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;②&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;③&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⑤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⑥



### DCL

```
select * from mysql.user;										查询用户
CREATE USER '用户名'@'主机名' IDENTIFIED BY '密码';				   创建用户

# 修改用户密码
ALTER USER '用户名'@'主机名' IDENTIFIED WITH mysql_native_password BY '新密码' ;

DROP USER '用户名'@'主机名' ;										删除用户
```

- 主机名可以使用 % 通配

```
SHOW GRANTS FOR '用户名'@'主机名' ;								查询权限
GRANT 权限列表 ON 数据库名.表名 TO '用户名'@'主机名';				  授予权限
REVOKE 权限列表 ON 数据库名.表名 FROM '用户名'@'主机名';			  撤销权限
```

- 多个权限之间，使用逗号分隔
- 授权时， 数据库名和表名可以使用 * 进行通配，代表所有



| 权限                | 说明               |
| ------------------- | ------------------ |
| ALL, ALL PRIVILEGES | 所有权限           |
| SELECT              | 查询数据           |
| INSERT              | 插入数据           |
| UPDATE              | 修改数据           |
| DELETE              | 删除数据           |
| ALTER               | 修改表             |
| DROP                | 删除数据库/表/视图 |
| CREATE              | 创建数据库/表      |


<br>
<br>


## 6. 函数

**字符串**

| 函数                     | 功能                                                       |
| ------------------------ | ---------------------------------------------------------- |
| CONCAT(S1,S2,...Sn)      | 字符串拼接，将S1，S2，... Sn拼接成一个字符串               |
| LOWER(str)               | 将字符串str全部转为小写                                    |
| UPPER(str)               | 将字符串str全部转为大写                                    |
| LPAD(str,n,pad)          | 左填充，用字符串pad对str的左边进行填充，达到n个字符 串长度 |
| RPAD(str,n,pad)          | 右填充，用字符串pad对str的右边进行填充，达到n个字符 串长度 |
| TRIM(str)                | 去掉字符串头部和尾部的空格                                 |
| SUBSTRING(str,start,len) | 返回从字符串str从start位置起的len个长度的字符串            |

**数值**

| 函数       | 功能                               |
| ---------- | ---------------------------------- |
| CEIL(x)    | 向上取整                           |
| FLOOR(x)   | 向下取整                           |
| MOD(x,y)   | 返回x/y的模                        |
| RAND()     | 返回0~1内的随机数                  |
| ROUND(x,y) | 求参数x的四舍五入的值，保留y位小数 |

**日期**

| 函数                               | 功能                                               |
| ---------------------------------- | -------------------------------------------------- |
| CURDATE()                          | 返回当前日期                                       |
| CURTIME()                          | 返回当前时间                                       |
| NOW()                              | 返回当前日期和时间                                 |
| YEAR(date)                         | 获取指定date的年份                                 |
| MONTH(date)                        | 获取指定date的月份                                 |
| DAY(date)                          | 获取指定date的日期                                 |
| DATE_ADD(date, INTERVAL expr type) | 返回一个日期/时间值加上一个时间间隔expr后的 时间值 |
| DATEDIFF(date1,date2)              | 返回起始时间date1 和 结束时间date2之间的天数       |

 **流程**

| 函数                                                         | 功能                                                       |
| ------------------------------------------------------------ | ---------------------------------------------------------- |
| IF(value , t , f)                                            | 如果value为true，则返回t，否则返回 f                       |
| IFNULL(value1 , value2)                                      | 如果value1不为空，返回value1，否则 返回value2              |
| CASE WHEN [ val1 ] THEN [res1] ... ELSE [ default ] END      | 如果val1为true，返回res1，... 否 则返回default默认值       |
| CASE [ expr ] WHEN [ val1 ] THEN [res1] ... ELSE [ default ] END | 如果expr的值等于val1，返回 res1，... 否则返回default默认值 |

```
# 案例一
select
	name,
	( case workaddress when '北京' then '一线城市' when '上海' then '一线城市' else
'二线城市' end ) as '工作地址'
from emp;

# 案例二
select
	id,
	name,
	(case when math >= 85 then '优秀' when math >=60 then '及格' else '不及格' end )
'数学',
	(case when english >= 85 then '优秀' when english >=60 then '及格' else '不及格'
end ) '英语',
	(case when chinese >= 85 then '优秀' when chinese >=60 then '及格' else '不及格'
end ) '语文'
from score;
```


<br>
<br>


## 7. 约束

| 约束                      | 描述                                                      | 关键字      |
| ------------------------- | --------------------------------------------------------- | ----------- |
| 非空约束                  | 限制该字段的数据不能为null                                | NOT NULL    |
| 唯一约束                  | 保证该字段的所有数据都是唯一、不重复的                    | UNIQUE      |
| 主键约束                  | 主键是一行数据的唯一标识，要求非空且唯一                  | PRIMARY KEY |
| 默认约束                  | 保存数据时，如果未指定该字段的值，则采用默认值            | DEFAULT     |
| 检查约束(8.0.16版本 之后) | 保证字段值满足某一个条件                                  | CHECK       |
| 外键约束                  | 用来让两张表的数据之间建立连接，保证数据的一致 性和完整性 | FOREIGN KEY |



**外键**

```
# 添加外键
CREATE TABLE 表名(
	字段名 数据类型,
	[CONSTRAINT] [外键名称] FOREIGN KEY (外键字段名) REFERENCES 主表 (主表列名)
);

ALTER TABLE 表名 ADD CONSTRAINT 外键名称 FOREIGN KEY (外键字段名) 
REFERENCES 主表 (主表列名) ;

# 删除外键
ALTER TABLE 表名 DROP FOREIGN KEY 外键名称;
```
<br>

**删除/更新行为**
> 添加了外键之后，再删除父表数据时产生的约束行为，我们就称为删除/更新行为

| 行为        | 说明                                                         |
| ----------- | ------------------------------------------------------------ |
| NO ACTION   | 当在父表中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有则不 允许删除/更新。 (与 RESTRICT 一致) 默认行为 |
| RESTRICT    | 当在父表中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有则不 允许删除/更新。 (与 NO ACTION 一致) 默认行为 |
| CASCADE     | 当在父表中删除/更新对应记录时，首先检查该记录是否有对应外键，如果有，则 也删除/更新外键在子表中的记录。 |
| SET NULL    | 当在父表中删除对应记录时，首先检查该记录是否有对应外键，如果有则设置子表 中该外键值为null（这就要求该外键允许取null）。 |
| SET DEFAULT | 父表有变更时，子表将外键列设置成一个默认的值 (Innodb不支持)  |

```
ALTER TABLE 表名 ADD CONSTRAINT 外键名称 FOREIGN KEY (外键字段) REFERENCES
主表名 (主表字段名) ON UPDATE CASCADE ON DELETE CASCADE;
```



<br>
<br>


## 8. 多表查询

### 多表关系

| 关系   | 实现                                                         |
| ------ | ------------------------------------------------------------ |
| 一对多 | 在多的一方建立外键，指向一的一方的主键                       |
| 多对多 | 建立第三张中间表，中间表至少包含两个外键，分别关联两方主键   |
| 一对一 | 在任意一方加入外键，关联另外一方的主键，并且设置外键为唯一的( UNIQUE ) |

<span style="color: red;">在一对多关系中，</span>  

<span style="color: red;">主表（父表）是“一”的一方</span>  

<span style="color: red;">从表（子表）是“多”的一方</span>  

<br>

### 笛卡尔积  
笛卡尔乘积是指在数学中，两个集合A集合 和 B集合的所有组合情况。  
而在多表查询中，我们是需要消除无效的笛卡尔积的，只保留两张表关联部分的数据。
我们可以给多表查询加上连接查询的条件即可消除笛卡尔积 。

<br>

### 内连接  
内连接查询的是两张表<span style="color: red;">交集部分</span>的数据。  
<br>
**隐式内连接：**  
``` 
SELECT 字段列表 FROM 表1 , 表2 WHERE 条件 ... ;
```
**显式内连接：**   
``` 
SELECT 字段列表 FROM 表1 [ INNER ] JOIN 表2 ON 连接条件 ... ;
```
示例： 
``` 
// 查询每一个员工的姓名 , 及关联的部门的名称 (隐式内连接实现)
select e.name,d.name from emp e , dept d where e.dept_id = d.id;

// 查询每一个员工的姓名 , 及关联的部门的名称 (显式内连接实现)
select e.name, d.name from emp e inner join dept d on e.dept_id = d.id;
```
注意：  
<span style="color: red;">起别名后不能用原始表名调用</span>


<br>

### 外连接  
**左外连接：**  
左外连接相当于查询表1(左表)的所有数据，当然也包含表1和表2交集部分的数据。
``` 
SELECT 字段列表 FROM 表1 LEFT [ OUTER ] JOIN 表2 ON 条件 ... ;
```

**右外连接：**  
右外连接相当于查询表2(右表)的所有数据，当然也包含表1和表2交集部分的数据。
``` 
SELECT 字段列表 FROM 表1 RIGHT [ OUTER ] JOIN 表2 ON 条件 ... ;
```

示例：  
``` 
// 查询emp表的所有数据, 和对应的部门信息
select e.*, d.name from emp e left outer join dept d on e.dept_id = d.id;
```

> 左外连接和右外连接是可以相互替换的，只需要调整在连接查询时SQL中，表结构的先后顺序就可以了。而我们在日常开发使用时，更偏向于左外连接。


<br>

### 自连接
自连接查询，顾名思义，就是自己连接自己，也就是把一张表连接查询多次。而对于自连接查询，可以是内连接查询，也可以是外连接查询。  
<br>
语法：
``` 
SELECT 字段列表 FROM 表A 别名A JOIN 表A 别名B ON 条件 ... ;
```

示例：  
``` 
// 查询所有员工 emp 及其领导的名字 emp , 如果员工没有领导, 也需要查询出来
select a.name '员工', b.name '领导' from emp a left join emp b on a.managerid = b.id;
```

注意：  
在自连接查询中，必须<span style="color: red;">要为表起别名</span>

<br>

### 联合查询  
对于union查询，就是把多次查询的结果合并起来，形成一个新的查询结果集。  
语法：
``` 
SELECT 字段列表 FROM 表A ...
UNION [ ALL ]
SELECT 字段列表 FROM 表B ....;
```
- 对于联合查询的多张表的<span style="color: red;">列数</span>必须保持一致，<span style="color: red;">字段类型</span>也需要保持一致。
- union all 会将全部的数据直接合并在一起，union 会对合并之后的数据<span style="color: red;">去重</span>。

<br>

### 子查询  
SQL语句中嵌套SELECT语句，称为嵌套查询，又称子查询。  
<br>
**标量子查询：**  
子查询返回的结果是单个值（数字、字符串、日期等），最简单的形式，这种子查询称为标量子查询  
常用的操作符：= <> > >= < <=  
示例：
``` 
// 根据 "销售部" 部门ID, 查询员工信息
select * from emp where dept_id = (select id from dept where name = '销售部');
```
<br>

**列子查询：**  
子查询返回的结果是一列（可以是多行），这种子查询称为列子查询。    
常用的操作符：IN 、NOT IN 、 ANY 、SOME 、 ALL  
| 操作符 | 描述                                   |
| ------ | -------------------------------------- |
| IN     | 在指定的集合范围之内，多选一           |
| NOT IN | 不在指定的集合范围之内                 |
| ANY    | 子查询返回列表中，有任意一个满足即可   |
| SOME   | 与ANY等同，使用SOME的地方都可以使用ANY |
| ALL    | 子查询返回列表的所有值都必须满足       |

示例：
``` 
// 查询 "销售部" 和 "市场部" 的所有员工信息
// 1.  查询 "销售部" 和 "市场部" 的部门ID
// 2. 根据部门ID, 查询员工信息
select * from emp where dept_id in (select id from dept where name = '销售部' or
name = '市场部');
```

<br>

**行子查询**  
子查询返回的结果是一行（可以是多列），这种子查询称为行子查询。  
常用的操作符：= 、<> 、IN 、NOT IN
``` 
//  查询与 "张无忌" 的薪资及直属领导相同的员工信息
// 1.  查询 "张无忌" 的薪资及直属领导
// 2.  查询与 "张无忌" 的薪资及直属领导相同的员工信息
select * from emp where (salary,managerid) = (select salary, managerid from emp
where name = '张无忌');
```

<br>

**表子查询**  
子查询返回的结果是多行多列，这种子查询称为表子查询。  
常用的操作符：IN
``` 
// 查询入职日期是 "2006-01-01" 之后的员工信息 , 及其部门信息
// 1. 入职日期是 "2006-01-01" 之后的员工信息
// 2. 查询这部分员工, 对应的部门信息;
select e.*, d.* from (select * from emp where entrydate > '2006-01-01') e left
join dept d on e.dept_id = d.id ;
```

<br>

综合案例：  
数据准备
``` 
create table salgrade(
grade int,
losal int,
hisal int
) comment '薪资等级表';
insert into salgrade values (1,0,3000);
insert into salgrade values (2,3001,5000);
insert into salgrade values (3,5001,8000);
insert into salgrade values (4,8001,10000);
insert into salgrade values (5,10001,15000);
insert into salgrade values (6,15001,20000);
insert into salgrade values (7,20001,25000);
insert into salgrade values (8,25001,30000);
```
``` 
// 1. 查询员工的姓名、年龄、职位、部门信息 （隐式内连接)
select e.name , e.age , e.job , d.name from emp e , dept d where e.dept_id = d.id;

// 2.  查询年龄小于30岁的员工的姓名、年龄、职位、部门信息（显式内连接）
select e.name , e.age , e.job , d.name from emp e inner join dept d on e.dept_id =
d.id where e.age < 30;

// 3.  查询拥有员工的部门ID、部门名称
select distinct d.id , d.name from emp e , dept d where e.dept_id = d.id;

// 4. 查询所有年龄大于40岁的员工, 及其归属的部门名称; 如果员工没有分配部门, 也需要展示出
来(外连接)
select e.*, d.name from emp e left join dept d on e.dept_id = d.id where e.age >
40 ;

// 5. 查询所有员工的工资等级
-- 方式一
select e.* , s.grade , s.losal, s.hisal from emp e , salgrade s where e.salary >=
s.losal and e.salary <= s.hisal;
-- 方式二
select e.* , s.grade , s.losal, s.hisal from emp e , salgrade s where e.salary
between s.losal and s.hisal;

// 6. 查询 "研发部" 所有员工的信息及 工资等级
select e.* , s.grade from emp e , dept d , salgrade s where e.dept_id = d.id and (
e.salary between s.losal and s.hisal ) and d.name = '研发部';

// 7.  查询 "研发部" 员工的平均工资
select avg(e.salary) from emp e, dept d where e.dept_id = d.id and d.name = '研发
部';

// 8. 查询工资比 "灭绝" 高的员工信息。
 select * from emp where salary > ( select salary from emp where name = '灭绝' );
 
// 9. 查询比平均薪资高的员工信息
select * from emp where salary > ( select avg(salary) from emp );

// 10.  查询低于本部门平均工资的员工信息
// ①. 查询指定部门平均薪资
select avg(e1.salary) from emp e1 where e1.dept_id = 1;
select avg(e1.salary) from emp e1 where e1.dept_id = 2;
// ②. 查询低于本部门平均工资的员工信息
select * from emp e2 where e2.salary < ( select avg(e1.salary) from emp e1 where
e1.dept_id = e2.dept_id );

// 11. 查询所有的部门信息, 并统计部门的员工人数
select d.id, d.name , ( select count(*) from emp e where e.dept_id = d.id ) '人数'
from dept d;

// 12. 查询所有学生的选课情况, 展示出学生名称, 学号, 课程名称
select s.name , s.no , c.name from student s , student_course sc , course c where
s.id = sc.studentid and sc.courseid = c.id ;
```

<br>
<br>

## 9. 事务
### 简介
事务 是一组操作的集合，它是一个不可分割的工作单位，事务会把所有的操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。  
默认MySQL的事务是自动提交的，也就是说，当执行完一条DML语句时，MySQL会立即隐式的提交事务。

### 控制事务
**查看/设置事务提交方式**
```
// 设置为1 自动提交
SELECT @@autocommit ;
SET @@autocommit = 0 ;
```

**开启事务**
```
START TRANSACTION 或 BEGIN ;
```

**提交事务**
```
COMMIT;
```

**回滚事务**
``` 
ROLLBACK;
```

### 四大特性(ACID)
- 原子性（Atomicity）：事务是不可分割的最小操作单元，要么全部成功，要么全部失败。
- 一致性（Consistency）：事务完成时，必须使所有的数据都保持一致状态。
- 隔离性（Isolation）：数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立
  环境下运行。
- 持久性（Durability）：事务一旦提交或回滚，它对数据库中的数据的改变就是永久的。

### 并发事务问题
| 问题       | 解释                                                         |
| ---------- | ------------------------------------------------------------ |
| 赃读       | 一个事务读到另外一个事务还没有提交的数据                     |
| 不可重复读 | 一个事务先后读取同一条记录，但两次读取的数据不同             |
| 幻读       | 一个事务按照条件查询数据时，没有对应的数据行，但是在插入数据时，又发现这行数据 已经存在，好像出现了 "幻影" |


### 事务隔离级别
| 隔离级别            | 脏读 | 不可重复读 | 幻读 |
|---------------------|------|------------|------|
| Read uncommitted    | √    | √          | √    |
| Read committed      | x    | √          | √    |
| Repeatable Read(默认) | x    | x          | √    |
| Serializable        | x    | x          | x    |

**查看事务隔离级别**
```
SELECT @@TRANSACTION_ISOLATION;
```

**设置事务隔离级别**
```
SET [ SESSION | GLOBAL ] TRANSACTION ISOLATION LEVEL { READ UNCOMMITTED |
READ COMMITTED | REPEATABLE READ | SERIALIZABLE }
```

<span style="color: red;">事务隔离级别越高，数据越安全，但是性能越低。</span>


<br>
<br>
<br>

## 10. 存储引擎

### 体系结构
![mysql体系结构](https://gitee.com/private_crh/notes/raw/master/typora/image-20241105092920495.png)

**连接池**  
最上层是一些客户端和链接服务，包含本地sock 通信和大多数基于客户端/服务端工具实现的类似于
TCP/IP的通信。主要完成一些类似于连接处理、授权认证、及相关的安全方案。在该层上引入了线程
池的概念，为通过认证安全接入的客户端提供线程。同样在该层上可以实现基于SSL的安全链接。服务
器也会为安全接入的每个客户端验证它所具有的操作权限。

**服务层**  
第二层架构主要完成大多数的核心服务功能，如SQL接口，并完成缓存的查询，SQL的分析和优化，部
分内置函数的执行。所有跨存储引擎的功能也在这一层实现，如 过程、函数等。在该层，服务器会解
析查询并创建相应的内部解析树，并对其完成相应的优化如确定表的查询的顺序，是否利用索引等，
最后生成相应的执行操作。如果是select语句，服务器还会查询内部的缓存，如果缓存空间足够大，
这样在解决大量读操作的环境中能够很好的提升系统的性能。

**引擎层**  
存储引擎层， 存储引擎真正的负责了MySQL中数据的存储和提取，服务器通过API和存储引擎进行通
信。不同的存储引擎具有不同的功能，这样我们可以根据自己的需要，来选取合适的存储引擎。数据库
中的索引是在存储引擎层实现的。

**存储层**  
数据存储层， 主要是将数据(如: redolog、undolog、数据、索引、二进制日志、错误日志、查询
日志、慢查询日志等)存储在文件系统之上，并完成与存储引擎的交互。
和其他数据库相比，MySQL有点与众不同，它的架构可以在多种不同场景中应用并发挥良好作用。主要
体现在存储引擎上，插件式的存储引擎架构，将查询处理和其他的系统任务以及数据的存储提取分离。
这种架构可以根据业务的需求和实际需要选择合适的存储引擎。

<br>

### 简介
存储引擎就是存储数据、建立索引、更新/查询数据等技术的实现方式 。存储引擎是基于表的，而不是
基于库的，所以存储引擎也可被称为表类型。我们可以在创建表的时候，来指定选择的存储引擎，如果
没有指定将自动选择默认的存储引擎。

<br>

### 基本语法
**建表时指定存储引擎**
``` 
CREATE TABLE 表名(
字段1 字段1类型 [ COMMENT 字段1注释 ] ,
......
字段n 字段n类型 [COMMENT 字段n注释 ]
) ENGINE = INNODB [ COMMENT 表注释 ] ;
```

**查询当前数据库支持的存储引擎**
``` 
show engines;
```

<br>

### 三种常见引擎特点
**InnoDB**  
InnoDB是一种兼顾高可靠性和高性能的通用存储引擎，在 MySQL 5.5 之后，InnoDB是默认的MySQL 存储引擎。
- DML操作遵循ACID模型，支持事务；
- 行级锁，提高并发访问性能；
- 支持外键FOREIGN KEY约束，保证数据的完整性和正确性；

**文件**  
xxx.ibd：xxx代表的是表名，innoDB引擎的每张表都会对应这样一个表空间文件，存储该表的表结构（frm-早期的 、sdi-新版的）、数据和索引。
``` 
show variables like 'innodb_file_per_table';
```
<br>

![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241105093844697.png =400x70)  
如果该参数开启，代表对于InnoDB引擎的表，每一张表都对应一个ibd文件。   
<br>
在这个ibd文件中不仅存放表结构、数据，还会存放该表对应的索引信息。 而该文件是基于二进制存储的，不能直接基于记事本打开，我们可以使用mysql提供的一
个指令 ibd2sdi ，通过该指令就可以从ibd文件中提取sdi信息，而sdi数据字典信息中就包含该表
的表结构。  
![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241105094003268.png)

**逻辑存储结构**  
![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241105094045235.png)
- **表空间 :**   
InnoDB存储引擎逻辑结构的最高层，ibd文件其实就是表空间文件，在表空间中可以包含多个Segment段。
- **段 :**   
表空间是由各个段组成的， 常见的段有数据段、索引段、回滚段等。InnoDB中对于段的管理，都是引擎自身完成，不需要人为对其控制，一个段中包含多个区。
- **区 :**   
区是表空间的单元结构，每个区的大小为1M。 默认情况下， InnoDB存储引擎页大小为16K， 即一个区中一共有64个连续的页。
- **页 :**   
页是组成区的最小单元，页也是InnoDB 存储引擎磁盘管理的最小单元，每个页的大小默认为 16KB。为了保证页的连续性，InnoDB 存储引擎每次从磁盘申请 4-5 个区。
- **行 :**   
InnoDB 存储引擎是面向行的，也就是说数据是按行进行存放的，在每一行中除了定义表时所指定的字段以外，还包含两个隐藏字段(后面会详细介绍)。

<br>
<br>

**MyISAM**  
MyISAM是MySQL早期的默认存储引擎。
- 不支持事务，不支持外键
- 支持表锁，不支持行锁
- 访问速度快

**文件**  
1. xxx.sdi：存储表结构信息
2. xxx.MYD: 存储数据
3. xxx.MYI: 存储索引


<br>
<br>

**Memory**  
Memory引擎的表数据时存储在内存中的，由于受到硬件问题、或断电问题的影响，只能将这些表作为
临时表或缓存使用。
- 内存存放
- hash索引（默认）

**文件**  
xxx.sdi：存储表结构信息

<br>

### 联系
| 特点           | InnoDB | MyISAM | Memory |
|----------------|--------|--------|--------|
| 存储限制       | 64TB   | 有     | 有     |
| 事务安全       | 支持   | -      | -      |
| 锁机制         | 行锁   | 表锁   | 表锁   |
| B+tree索引     | 支持   | 支持   | 支持   |
| Hash索引       | -      | -      | 支持   |
| 全文索引       | 支持(5.6版本之后) | 支持   | -      |
| 空间使用       | 高     | 低     | N/A    |
| 内存使用       | 高     | 低     | 中等   |
| 批量插入速度   | 低     | 高     | 高     |
| 支持外键       | 支持   | -      | -      |

> 面试题:
> InnoDB引擎与MyISAM引擎的区别 ?  
> ①. InnoDB引擎, 支持事务, 而MyISAM不支持。  
> ②. InnoDB引擎, 支持行锁和表锁, 而MyISAM仅支持表锁, 不支持行锁。  
> ③. InnoDB引擎, 支持外键, 而MyISAM是不支持的。


### 引擎选择
- **InnoDB:**   
是Mysql的默认存储引擎，支持事务、外键。如果应用对事务的完整性有比较高的要求，在并发条件下要求数据的一致性，数据操作除了插入和查询之外，还包含很多的更新、删除操作，那么InnoDB存储引擎是比较合适的选择。
- **MyISAM:**   
如果应用是以读操作和插入操作为主，只有很少的更新和删除操作，并且对事务的完整性、并发性要求不是很高，那么选择这个存储引擎是非常合适的。
- **MEMORY:**  
将所有数据保存在内存中，访问速度快，通常用于临时表及缓存。MEMORY的缺陷就是对表的大小有限制，太大的表无法缓存在内存中，而且无法保障数据的安全性。