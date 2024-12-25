---
# 当前页面内容标题
title: Mybatis
# 当前页面图标
icon: /icon/mybatisplus.svg
author:
- name: 杨博超
- name: Ahzy
# 分类
category:
- 计算机
# 标签
tag:
- 框架
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
&nbsp;![](https://gitee.com/private_crh/notes/raw/master/typora/15098957900254528.png =800x320)
:::

::: right
**勇敢就是，在你还没开始的时候就知道自己注定会输，但依然义无反顾地去做，并且不管发生什么都坚持到底。一个人很少能赢，但也总会有赢的时候。**
:::





## 1. 简介

MyBatis-Plus（简称 MP）是一个 MyBatis的增强工具，在 MyBatis 的基础上只做增强不做改变，为 简化开发、提高效率而生。

> 我们的愿景是成为 MyBatis 最好的搭档，就像魂斗罗中的 1P、2P，基友搭配，效率翻倍。

![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241018204838350.png)



### 特性

- 无侵入，对工程无影响
- 性能损耗小
- 强大的 CRUD 操作
- 支持 Lambda 形式调用
- 支持主键自动生成
- 支持 ActiveRecord 模式
- 支持自定义全局通用操作
- 内置代码生成器
- 内置分页插件
- 分页插件支持多种数据库：
- 内置性能分析插件
- 内置全局拦截插件



### 支持的数据库

> 任何能使用MyBatis进行 CRUD, 并且支持标准 SQL 的数据库

例如：

MySQL，Oracle，DB2，H2，HSQL，SQLite，PostgreSQL，SQLServer，Phoenix，Gauss ， ClickHouse，Sybase，OceanBase，Firebird，Cubrid，Goldilocks，csiidb，达梦数据库，虚谷数据库，人大金仓数据库，南大通用(华库)数据库，南大通用数据库，神通数据 库，瀚高数据库



### 官网地址

http://mp.baomidou.com

https://github.com/baomidou/mybatis-plus

https://gitee.com/baomidou/mybatis-plus

https://baomidou.com/pages/24112f



## 2. springboot基本配置

使用Spring Initializr创建springboot工程

引入依赖

```xml
<dependencies>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter</artifactId>
	</dependency>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-test</artifactId>
		<scope>test</scope>
	</dependency>
	<dependency>
		<groupId>com.baomidou</groupId>
		<artifactId>mybatis-plus-boot-starter</artifactId>
		<version>3.5.1</version>
	</dependency>
	<dependency>
		<groupId>org.projectlombok</groupId>
		<artifactId>lombok</artifactId>
		<optional>true</optional>
	</dependency>
	<dependency>
		<groupId>mysql</groupId>
		<artifactId>mysql-connector-java</artifactId>
		<scope>runtime</scope>
	</dependency>
</dependencies>
```

使用lombok简化实体类开发

配置application.yml

```yml
spring:
	# 配置数据源信息
	datasource:
		# 配置数据源类型
		type: com.zaxxer.hikari.HikariDataSource
		# 配置连接数据库信息
		driver-class-name: com.mysql.cj.jdbc.Driver
		url: jdbc:mysql://localhost:3306/mybatis_plus?characterEncoding=utf8&useSSL=false
		username: root
		password: 123456
		
	# 配置MyBatis日志
	mybatis-plus:
		configuration:
			log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
```

==注意：==

> 1. 驱动类driver-class-name（否则有warn警告）：
     >    	spring boot 2.0（内置jdbc5驱动）：driver-class-name: com.mysql.jdbc.Driver
     >    	spring boot 2.1及以上（内置jdbc8驱动）：driver-class-name: com.mysql.cj.jdbc.Driver
> 2. 连接地址url（否则抛异常）：
     >         MySQL5.7版本：jdbc:mysql://localhost:3306/mybatis_plus?characterEncoding=utf-8&useSSL=false
     >         MySQL8.0版本：jdbc:mysql://localhost:3306/mybatis_plus? serverTimezone=GMT%2B8&characterEncoding=utf-                         								  8&useSSL=false

springboot启动类上添加

```
// 路径中填写真实路径
@MapperScan("com.atguigu.mybatisplus.mapper") 
```

这样mapper接口不用加@mapper或@Respositive注解

> 但是还是加了比较好，避免在其他地方注入时显示报错，实际上是正确的





## 3. 基本CRUD

### BaseMapper

MyBatis-Plus中的基本CRUD在内置的BaseMapper中都已得到了实现，我们可以直接使用

```
public interface XxxMapper extends BaseMapper<实体类>
```



#### 增

> // insert into user ( id, name...... ) VALUES ( ?, ?........)
> int result = userMapper.==insert==(user);

- 返回受影响行数
- 有参id传入null，MyBatis-Plus在实现插入数据时，会默认基于雪花算法的策略生成id



#### 删

> 1. 通过id删除记录
     >    // DELETE FROM user WHERE id=?
     >    int result = userMapper.==deleteById==(1475754982694199298L);
>
> 2. 通过id批量删除记录
     >
     >    // DELETE FROM user WHERE id IN ( ? , ? , ? )
     >    int result = userMapper.==deleteBatchIds==(idList);
>
> 3. 通过map条件删除记录
     >
     >    // DELETE FROM user WHERE name = ? AND age = ?
     >    int result = userMapper.==deleteByMap==(map);

- 在map中，根据map的key作为where的条件



#### 改

> // UPDATE user SET name=?, age=? WHERE id=?
> int result = userMapper.==updateById==(user);

- 不会修改未设置属性的值



#### 查

> 1. 根据id查
     >    // SELECT id,name,age,email FROM user WHERE id=?
     >    User user = userMapper.==selectById==(4L);
> 2. 根据多个id查
     >    // SELECT id,name,age,email FROM user WHERE id IN ( ? , ? )
     >    List list = userMapper.==selectBatchIds==(idList);
> 3. 通过map条件查
     >    // SELECT id,name,age,email FROM user WHERE name = ? AND age = ?
     >    List list = userMapper.==selectByMap==(map);
> 4. 查询所有数据
     >    // SELECT id,name,age,email FROM user
     >    List list = userMapper.==selectList==(null);



#### 自定义功能

通过Mybatis-Plus的mapper-locations配置映射文件路径（需要自定义路径才配置，否则用默认的不用配置）

默认在任意目录mapper下任意目录的xml

这样可以通过自己写的sql实现自己的功能



**注意：**
BaseMapper中的方法，大多方法中都有Wrapper类型的形参，此为条件构造器，可针 对于SQL语句设置不同的条件，若没有条件，则可以为该形参赋值null，即查询（删除/修改）所有数据



### Service

service接口中继承Iservice

```
public interface UserService extends IService<实体类>
```

service继承了IService，所以实现了service接口时，需要重写IService的所有方法，为了不自己重写，继承包含重写方法的ServiceImpl

```
public class UserServiceImpl extends ServiceImpl<XxxMapper, 实体类> implements UserService
```

使用Mybatis-Plus的Service时最好自己创建一个service，这样既可以使用MP中service的功能，也能使用自定义的功能



#### 查询记录数

> // select count(*) from user
> long count = userService.count();



#### 批量插入

> // SQL:INSERT INTO t_user ( username, age ) VALUES ( ?, ? )
> 并非真正的批量增加，而是通过单条添加的sql重复执行实现
> userService.saveBatch(users);





## 4. 注解

### @TableName

MyBatis-Plus在确定操作的表时，由BaseMapper的泛型决定，默认操作的表名和实体类型首字母转小写的类名一致

我们将表user更名为t_user

```
@TableName("t_user")
public class User {
  // 实体类属性
}
```

也可以进行全局配置

```yml
mybatis-plus:
	configuration:
		# 配置MyBatis日志
		log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
	global-config:
		db-config:
			# 配置MyBatis-Plus操作表的默认前缀
			table-prefix: t_
```

为实体类所对应的表名设置默认的前缀，那么就不需要在每个实体类上通过@TableName标识实体类对应的表



### @TableId

若实体类和表中表示主键的不是id，而是其他字段，例如uid

需要在实体类中uid属性上通过@TableId将其标识为主键

```java
public class User {
	@TableId(value="uid", type = IdType.AUTO)
	private Long uid
}
```

value在单字段可以省略写成@TableId("uid")

也可以全局配置

```yml
mybatis-plus:
	global-config:
		db-config:
			# 配置MyBatis-Plus操作表的默认前缀
			table-prefix: t_
			# 配置MyBatis-Plus的主键策略
			id-type: auto
```

| 值                        | 描述                                                         |
| ------------------------- | ------------------------------------------------------------ |
| IdType.ASSIGN_ID（默 认） | 基于雪花算法的策略生成数据id，与数据库id是否设置自增无关     |
| IdType.AUTO               | 使用数据库的自增策略，注意，该类型请确保数据库设置了id自增， 否则无效 |



#### 雪花算法

> 雪花算法是由Twitter公布的分布式主键生成算法，它能够保证不同表的主键的不重复性，以及相同表的 主键的有序性。



优点：整体上按照时间自增排序，并且整个分布式系统内不会产生ID碰撞，并且效率较高



核心思想：

长度共64bit（一个long型）

- 首先是一个符号位，1bit标识，由于long基本类型在Java中是带符号的，最高位是符号位，正数是0，负 数是1，所以id一般是正数，最高位是0。
- 41bit时间截(毫秒级)，存储的是时间截的差值（当前时间截 - 开始时间截)，结果约等于69.73年。
- 10bit作为机器的ID（5个bit是数据中心，5个bit的机器ID，可以部署在1024个节点）。
- 12bit作为毫秒内的流水号（意味着每个节点在每毫秒可以产生 4096 个 ID）。

![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241019090027070.png)



### @TableField

MyBatis-Plus在执行SQL语句时，要保证实体类中的属性名和 表中的字段名一致

#### 驼峰

例如实体类属性userName，表中字段user_name

此时MyBatis-Plus会自动将下划线命名风格转化为驼峰命名风格



#### 字段不对应

例如实体类属性name，表中字段username

使用@TableField("username")注解

```java
public class User {
	@TableField("username")
	private String name;
}
```





### @TableLogic

- 物理删除：真实删除，将对应数据从数据库中删除，之后查询不到此条被删除的数据
- 逻辑删除：假删除，将对应数据中代表是否被删除字段的状态修改为“被删除状态”，之后在数据库 中仍旧能看到此条数据记录



> step1：数据库中创建逻辑删除状态列，设置默认值为0
>
> step2：实体类中添加逻辑删除属性

```java
public class User {
	@TableLogic
	private Integer isDeleted;
}
```

测试==删除==功能，真正执行的是修改
UPDATE t_user SET is_deleted=1 WHERE id=? AND is_deleted=0

测试==查询==功能，被逻辑删除的数据默认不会被查询
SELECT id,username AS name,age,email,is_deleted FROM t_user WHERE is_deleted=0





## 5. 条件构造器

### 结构

![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241019095412412.png)

### QueryWrapper

#### 组装查询条件

```java
@Test
public void test01(){
	//查询用户名包含a，年龄在20到30之间，并且邮箱不为null的用户信息
	//SELECT id,username AS name,age,email,is_deleted FROM t_user WHERE is_deleted=0 AND (username LIKE ? AND age BETWEEN ? AND ? AND email IS NOT NULL)
	QueryWrapper<User> queryWrapper = new QueryWrapper<>();
	queryWrapper.like("username", "a")
				.between("age", 20, 30)
				.isNotNull("email");
	List<User> list = userMapper.selectList(queryWrapper);
	list.forEach(System.out::println);
}
```

#### 组装排序条件

```java
@Test
public void test02(){
	//按年龄降序查询用户，如果年龄相同则按id升序排列
	//SELECT id,username AS name,age,email,is_deleted FROM t_user WHERE is_deleted=0 ORDER BY age DESC,id ASC
	QueryWrapper<User> queryWrapper = new QueryWrapper<>();
	queryWrapper.orderByDesc("age")
 				.orderByAsc("id");
	List<User> users = userMapper.selectList(queryWrapper);
	users.forEach(System.out::println);
}
```

#### 组装删除条件

```java
@Test
public void test03(){
	//删除email为空的用户
	//DELETE FROM t_user WHERE (email IS NULL)
	QueryWrapper<User> queryWrapper = new QueryWrapper<>();
	queryWrapper.isNull("email");
	//条件构造器也可以构建删除语句的条件
	int result = userMapper.delete(queryWrapper);
	System.out.println("受影响的行数：" + result);
}
```

#### 条件的优先级

```java
@Test
public void test04() {
	QueryWrapper<User> queryWrapper = new QueryWrapper<>();
	//将（年龄大于20并且用户名中包含有a）或邮箱为null的用户信息修改
	//UPDATE t_user SET age=?, email=? WHERE (username LIKE ? AND age > ? OR email IS NULL)
	queryWrapper.like("username", "a")
				.gt("age", 20)
				.or()
				.isNull("email");
	User user = new User();
	user.setAge(18);
	user.setEmail("user@atguigu.com");
	int result = userMapper.update(user, queryWrapper);
	System.out.println("受影响的行数：" + result);
}
```

```java
@Test
public void test04() {
	QueryWrapper<User> queryWrapper = new QueryWrapper<>();
	//将用户名中包含有a并且（年龄大于20或邮箱为null）的用户信息修改
	//UPDATE t_user SET age=?, email=? WHERE (username LIKE ? AND (age > ? OR email IS NULL))
	//lambda表达式内的逻辑优先运算
	queryWrapper.like("username", "a")
				.and(i -> i.gt("age", 20).or().isNull("email"));
	User user = new User();
	user.setAge(18);
	user.setEmail("user@atguigu.com");
	int result = userMapper.update(user, queryWrapper);
	System.out.println("受影响的行数：" + result);
}
```

#### 组装select子句

```java
@Test
public void test05() {
	//查询用户信息的username和age字段
	//SELECT username,age FROM t_user
	QueryWrapper<User> queryWrapper = new QueryWrapper<>();
	queryWrapper.select("username", "age");
	//selectMaps()返回Map集合列表，通常配合select()使用，避免User对象中没有被查询到的列值为null
	List<Map<String, Object>> maps = userMapper.selectMaps(queryWrapper);
	maps.forEach(System.out::println);
}
```

#### 实现子查询

```java
@Test
public void test06() {
	//查询id小于等于3的用户信息
	//SELECT id,username AS name,age,email,is_deleted FROM t_user WHERE (id IN(select id from t_user where id <= 3))
	QueryWrapper<User> queryWrapper = new QueryWrapper<>();
	queryWrapper.inSql("id", "select id from t_user where id <= 3");
	List<User> list = userMapper.selectList(queryWrapper);
	list.forEach(System.out::println);
}
```



### UpdateWrapper

```java
@Test
public void test07() {
	//将（年龄大于20或邮箱为null）并且用户名中包含有a的用户信息修改
	//组装set子句以及修改条件
	UpdateWrapper<User> updateWrapper = new UpdateWrapper<>();
	//lambda表达式内的逻辑优先运算
	updateWrapper.set("age", 18)
				.set("email", "user@atguigu.com")
				.like("username", "a")
				.and(i -> i.gt("age", 20).or().isNull("email"));
	//这里必须要创建User对象，否则无法应用自动填充。如果没有自动填充，可以设置为null
	//UPDATE t_user SET username=?, age=?,email=? WHERE (username LIKE ? AND(age > ? OR email IS NULL))
	//User user = new User();
	//user.setName("张三");
	//int result = userMapper.update(user, updateWrapper);
	//UPDATE t_user SET age=?,email=? WHERE (username LIKE ? AND (age > ? OR email IS NULL))
	int result = userMapper.update(null, updateWrapper);
	System.out.println(result);
}
```



### condition

> 条件数据来源于用户输入，在组装条件时，必须先判断用户是否选择了这些条件，若没有选择则一定不能组装，以免影响SQL执行的结果

#### 原始方法

```java
@Test
public void test08() {
	//定义查询条件，有可能为null（用户未输入或未选择）
	String username = null;
	Integer ageBegin = 10;
	Integer ageEnd = 24;
	QueryWrapper<User> queryWrapper = new QueryWrapper<>();
	//StringUtils.isNotBlank()判断某字符串是否不为空且长度不为0且不由空白符(whitespace)构成
	if(StringUtils.isNotBlank(username)){
		queryWrapper.like("username","a");
	}
	if(ageBegin != null){
		queryWrapper.ge("age", ageBegin);
	}
	if(ageEnd != null){
		queryWrapper.le("age", ageEnd);
	}
	//SELECT id,username AS name,age,email,is_deleted FROM t_user WHERE (age >= ? AND age <= ?)
	List<User> users = userMapper.selectList(queryWrapper);
	users.forEach(System.out::println);
}
```



#### 改进方法

```java
@Test
public void test08UseCondition() {
	//定义查询条件，有可能为null（用户未输入或未选择）
	String username = null;
	Integer ageBegin = 10;
	Integer ageEnd = 24;
	QueryWrapper<User> queryWrapper = new QueryWrapper<>();
	//StringUtils.isNotBlank()判断某字符串是否不为空且长度不为0且不由空白符(whitespace)构成
	queryWrapper.like(StringUtils.isNotBlank(username), "username", "a")
    			.ge(ageBegin != null, "age", ageBegin)
				.le(ageEnd != null, "age", ageEnd);
	//SELECT id,username AS name,age,email,is_deleted FROM t_user WHERE (age >= ? AND age <= ?)
	List<User> users = userMapper.selectList(queryWrapper);
	users.forEach(System.out::println);
}
```





### LambdaQueryWrapper

>  lambda的使用避免自己写错字段名

```java
@Test
public void test09() {
	//定义查询条件，有可能为null（用户未输入）
	String username = "a";
	Integer ageBegin = 10;
	Integer ageEnd = 24;
	LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper<>();
	//避免使用字符串表示字段，防止运行时错误
	queryWrapper.like(StringUtils.isNotBlank(username), User::getName, username)
				.ge(ageBegin != null, User::getAge, ageBegin)
				.le(ageEnd != null, User::getAge, ageEnd);
	List<User> users = userMapper.selectList(queryWrapper);
	users.forEach(System.out::println);
}
```

### LambdaUpdateWrapper

```java
@Test
public void test10() {
	//组装set子句
	LambdaUpdateWrapper<User> updateWrapper = new LambdaUpdateWrapper<>();
	updateWrapper.set(User::getAge, 18)
				 .set(User::getEmail, "user@atguigu.com")
				 .like(User::getName, "a")
 				 .and(i -> i.lt(User::getAge, 24).or().isNull(User::getEmail));
    //lambda表达式内的逻辑优先运算
	User user = new User();
	int result = userMapper.update(user, updateWrapper);
	System.out.println("受影响的行数：" + result);
}
```





## 6. 插件

### 分页插件

> MyBatis Plus自带分页插件，只要简单的配置即可实现分页功能

#### 基本使用

添加配置类

```java
@Configuration
@MapperScan("com.atguigu.mybatisplus.mapper") // 如果有MP的配置类可以将启动类中的注解移到此处
public class MybatisPlusConfig {
	@Bean
	public MybatisPlusInterceptor mybatisPlusInterceptor() {
		MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        //添加分页插件
		interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL));
		return interceptor;
	}
}
```

测试

```java
@Test
public void testPage(){
	//设置分页参数
	Page<User> page = new Page<>(1, 5);
	userMapper.selectPage(page, null);
	//获取分页数据
	List<User> list = page.getRecords();
	list.forEach(System.out::println);
}
```

| 方法 | 功能 |
| ------------ | -------------- |
| getCurrent() | 当前页         |
| getSize() | 每页显示的条数 |
|   getTotal()   | 总记录数     |
|   getPages()     | 总页数     |
|hasPrevious() | 是否有上一页   |
| page.hasNext() |  是否有下一页|

#### 自定义分页

UserMapper中定义接口方法

```java
Page<User> selectPageVo(@Param("page") Page<User> page, @Param("age") Integer age);
```

UserMapper.xml中编写SQL

>  首先设置类型别名  (默认根据路径的类名映射且==不区分大小写==)
> 这样pojo下有User实体类，resultType中不用写实体类的路径

```yml
mybatis-plus:
	configuration:
	global-config:
	#配置类型别名所对应的包
	type-aliases-package: com.atguigu.mybatisplus.pojo
```

```
<!--SQL片段，记录基础字段-->
<sql id="BaseColumns">id,username,age,email</sql>

<!--IPage<User> selectPageVo(Page<User> page, Integer age);-->
<select id="selectPageVo" resultType="User">
	SELECT <include refid="BaseColumns"></include> FROM t_user WHERE age > #{age}
</select>
```

测试

```java
@Test
public void testSelectPageVo(){
	//设置分页参数
	Page<User> page = new Page<>(1, 5);
	userMapper.selectPageVo(page, 20);
	//获取分页数据
	List<User> list = page.getRecords();
	list.forEach(System.out::println);
}
```





### 乐观锁插件

#### 乐观锁与悲观锁

> 乐观锁：修改字段前，会检查下字段是否被人修改过了。如果被修改过，则重新取出的被修改后的字段
>
> 悲观锁：数据被取出后，只能等别人操作完之后，才能对数据进行操作



#### 乐观锁实现流程

- 取出记录时，获取当前version

  ```
  SELECT id,'name',price,'version' FROM product WHERE id=1
  ```

- 更新时，version + 1，如果where语句中的version版本不对，则更新失败

  ```
  UPDATE product SET price=price+50, 'version'='version' + 1 WHERE id=1 AND 'version'=1
  ```



#### 基本使用

添加乐观锁插件配置

```java
@Configuration
@MapperScan("com.atguigu.mybatisplus.mapper") // 如果有MP的配置类可以将启动类中的注解移到此处
public class MybatisPlusConfig {
	@Bean
	public MybatisPlusInterceptor mybatisPlusInterceptor() {
		MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
		//添加乐观锁插件
		interceptor.addInnerInterceptor(new OptimisticLockerInnerInterceptor());
		return interceptor;
	}
}
```

添加@Version注解

```java
@Data
	public class Product {
	private Long id;
	private String name;
	private Integer price;
    @Version    
	private Integer version;
}
```

添加mapper

```java
public interface ProductMapper extends BaseMapper<Product> {
}
```

测试

```java
@Test
public void testConcurrentVersionUpdate() {
	//小李取数据
	Product p1 = productMapper.selectById(1L);
	//小王取数据
	Product p2 = productMapper.selectById(1L);
    
	//小李修改 + 50
	p1.setPrice(p1.getPrice() + 50);
	int result1 = productMapper.updateById(p1);
	System.out.println("小李修改的结果：" + result1);
    
	//小王修改 - 30
	p2.setPrice(p2.getPrice() - 30);
	int result2 = productMapper.updateById(p2);
	System.out.println("小王修改的结果：" + result2);
	if(result2 == 0){
		//失败重试，重新获取version并更新
		p2 = productMapper.selectById(1L);
		p2.setPrice(p2.getPrice() - 30);
		result2 = productMapper.updateById(p2);
	}
	System.out.println("小王修改重试的结果：" + result2);
    
	//老板看价格
	Product p3 = productMapper.selectById(1L);
	System.out.println("老板看价格：" + p3.getPrice());
}
```





## 7. 通用枚举

> 表中的有些字段值是固定的，例如性别（男或女），此时我们可以使用MyBatis-Plus的通用枚举来实现



### 基本使用

数据库表添加字段sex，数据类型为int

创建通用枚举类型

```java
@Getter
public enum SexEnum {
	MALE(1, "男"),
	FEMALE(2, "女");
    
	@EnumValue  // 该注解所标识的属性值存储到数据库
	private Integer sex;
	private String sexName;
    
	SexEnum(Integer sex, String sexName) {
		this.sex = sex;
		this.sexName = sexName;
	}
}
```

配置扫描通用枚举

```yml
mybatis-plus:
	configuration:
	global-config:
	# 配置扫描通用枚举
	type-enums-package: com.atguigu.mybatisplus.enums
```

测试

```java
@Test
public void testSexEnum(){
	User user = new User();
	user.setName("Enum");
	user.setAge(20);
	//设置性别信息为枚举项，会将@EnumValue注解所标识的属性值存储到数据库
	user.setSex(SexEnum.MALE);
	userMapper.insert(user);
}
```





## 8. 代码生成器

> Mybatis的逆向工程：通过表生成实体类，mapper接口，映射xml文件
>
> MP的代码生成器：controller，service........统统都能生成



### 基本使用

引入依赖

```
<dependency>
	<groupId>com.baomidou</groupId>
	<artifactId>mybatis-plus-generator</artifactId>
	<version>3.5.1</version>
</dependency>
<dependency>
	<groupId>org.freemarker</groupId>
	<artifactId>freemarker</artifactId>
	<version>2.3.31</version>
</dependency>
```

快速生成

```java
public class FastAutoGeneratorTest {
	public static void main(String[] args) {
		FastAutoGenerator.create("jdbc:mysql://127.0.0.1:3306/mybatis_plus?characterEncoding=utf-8&userSSL=false", "root", "123456")
						.globalConfig(builder -> {
							builder.author("atguigu") // 设置作者
									//.enableSwagger() // 开启 swagger 模式
									.fileOverride() // 覆盖已生成文件
									.outputDir("D://mybatis_plus"); // 指定输出目录
						})
						.packageConfig(builder -> {
							builder.parent("com.atguigu") // 设置父包名
								   .moduleName("mybatisplus") // 设置父包模块名
								   .pathInfo(Collections.singletonMap(OutputFile.mapperXml, "D://mybatis_plus")); // 设置mapperXml生成路径
						})
						.strategyConfig(builder -> {
							builder.addInclude("t_user") // 设置需要生成的表名
								   .addTablePrefix("t_", "c_"); // 设置过滤表前缀
						})
 						.templateEngine(new FreemarkerTemplateEngine()) // 使用Freemarker引擎模板，默认的是Velocity引擎模板
						.execute();
	}
}
```







## 9. 多数据源

> 适用于多种场景：纯粹多库、 读写分离、 一主多从、 混合模式等



### 模拟一个纯粹多库

> 说明：我们创建两个库，每个库一张表，通过一个测试用例分别获取两张表数据

**引入依赖**

```xml
<dependency>
	<groupId>com.baomidou</groupId>
	<artifactId>dynamic-datasource-spring-boot-starter</artifactId>
	<version>3.5.0</version>
</dependency>
```

**配置多数据源**

```yml
spring:
	# 配置数据源信息
	datasource:
		dynamic:
			# 设置默认的数据源或者数据源组,默认值即为master
			primary: master
			# 严格匹配数据源,默认false  如果设置为true未匹配到指定数据源时抛异常,设置为false使用默认数据源
			strict: false
			datasource:
				master:
					url: jdbc:mysql://localhost:3306/mybatis_plus?characterEncoding=utf8&useSSL=false
					driver-class-name: com.mysql.cj.jdbc.Driver
					username: root
					password: 123456
				slave_1:
					url: jdbc:mysql://localhost:3306/mybatis_plus_1?characterEncoding=utf8&useSSL=false
					driver-class-name: com.mysql.cj.jdbc.Driver
					username: root
					password: 123456
```

**创建service**

```
@DS("slave_1")
@Service
public class ProductServiceImpl extends ServiceImpl<ProductMapper, Product> implements ProductService {
}


@DS("master")
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {
}
```

> @DS方法上的注解优先于类上的注解





## 10. MybatisX

> - MyBatis-Plus为我们提供了强大的mapper和service模板，能够大大的提高开发效率
> - 但是在真正开发过程中，MyBatis-Plus并不能为我们解决所有问题，例如一些复杂的SQL，多表 联查，我们就需要自己去编写代码和SQL语句，我们该如何快速的解决这个问题呢，这个时候可 以使用MyBatisX插件
> - MyBatisX一款基于 IDEA 的快速开发插件，为效率而生。

使用方法：https://baomidou.com/guides/mybatis-x/

IDEA 安装 mybatisx 插件，即可根据数据库表一键生成常用CRUD

![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241017234437611.png)

![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241017234456608.png)

> 在mapper配置类中加入@MapperScan("包名.mapper")
>
> 则mapper下的mapper都无需写@Mapper注解