---
# 当前页面内容标题
title: Mybatis
# 当前页面图标
icon: /icon/mybatis.svg
author:
- name: 雷神
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
&nbsp;![](https://gitee.com/private_crh/notes/raw/master//typora/image-20241013235338549.png =800x280)
:::

::: right
**弱小和无知不是生存的障碍, 傲慢才是**
:::




官网：https://mybatis.org/



## 1. 简介

MyBatis 是一款优秀的持久层框架，它支持自定义 SQL、存储过程以及高级映射。

MyBatis 不像 Hibernete 等这些全自动框架，它把关键的SQL部分交给程序员自己编写，而不是自动生成





## 2. 入门案例

### 配置

application.popertities

```:collapsed-lines

# ?allowMultiQueries=true表示开启批量sql发送给数据库执行，每个sql用分号相隔
spring.datasource.url=jdbc:mysql://localhost:3306/mybatis-example?allowMultiQueries=true
spring.datasource.username=root
spring.datasource.password=123456
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# 告诉MyBatis， xml文件(Mapper文件) 都在哪里
mybatis.mapper-locations=classpath:mapper/**.xml
# 开启驼峰命名
mybatis.configuration.map-underscore-to-camel-case=true

# 开启sql日志
logging.level.com.atguigu.mybatis.mapper=debug
#11111
#11111
#11111
#11111
#11111
#11111
#11111
#11111
#11111
#11111
#11111
#11111
#11111
#11111
#11111
#11111
```

### **对比**

> - 以前:  Dao接口 --> Dao实现 --> 标注 @Repository注解
    >
    >  *    现在:  Mapper接口 --> Mapper.xml实现;  --> 标注 @Mapper注解

安装mybatisx插件，自动为 mapper类生成 mapper文件



### **细节**

> 1. 每个Dao 接口 对应一个 XML 实现文件
> 2. Dao 实现类 是一个由 MyBatis 自动创建出来的代理对象
> 3. XML 中 ==namespace== 需要绑定 Dao 接口 的全类名
> 5. 每个 CRUD 标签 的 ==id== 必须为Dao接口的方法名
> 6. 每个 CRUD标签的 ==resultType== 是Dao接口的返回值类型全类名
> 8. 以后 xxxDao 我们将按照习惯命名为 xxxMapper，这样更明显的表示出 持久层是用 MyBatis 实现的





## 3. 获取自增id

```
<insert id="addEmp" useGeneratedKeys="true" keyProperty="id">
```

自增ID回填

- **useGeneratedKeys:**   使用自动生成的id
- **keyProperty:**   指定自动生成id对应的属性; 把自动生成的id封装到Emp对象的id属性中



## 4. 参数处理



### 参数传递

#### 区别

> - #{}：底层使用 PreparedStatement 方式，SQL预编译后设置参数
> - ${}：底层使用 Statement 方式，SQL无预编译，直接拼接参数

#### 使用时机

1. 所有参数位置，都应该用 #{}
2. 需要动态表名等，才用 ${}，而且需要自己编写防SQL注入攻击代码



### 单个参数直接取值

| 传参形式            | 取值方式        |
| ------------------- | --------------- |
| 单个参数 - 普通类型 | #{变量名}       |
| 单个参数 - List类型 | '#{变量名[索引]}' |
| 单个参数 - 对象类型 | #{对象中属性名} |
| 单个参数 - Map类型  | #{map中属性名}  |

一个参数的时候，取值方式随便起名也可以接收



### 多个参数标注参数名称

| 传参形式            | 取值方式             |
| ------------------- | -------------------- |
| 多个参数 - 无@Param | #{变量名} //新版兼容 |
| 多个参数 - 有@Param | #{param指定的名}     |

```
getEmploy(	@Param(“id”)Long id,
			@Param(“ext”)Map<String,Object> m,
			@Param(“ids”)List<Long> ids,
			@Param(“emp”)Employ e			)
			
			
// 传值方式
#{id}、
#{ext.name}、#{ext.age}，
#{ids[0]}、#{ids[1]}，
#{e.email}、#{e.age}
```

即使只有一个参数，也可以用 @Param 指定参数名





## 5. 结果封装

### 返回普通类型

在 resultType 中声明返回值类型==全类名==即可

```
 <select id="getEmp" resultType="com.atguigu.mybatis.entity.Employee">
```

- MyBatis 为 java.lang 下的很多数据类型都起了别名，不用写全类名也可以

默认别名规则：

![](https://gitee.com/private_crh/notes/raw/master//typora/image-20241013153221208.png)



### 返回集合类型

> **List：**resultType 为集合中的 元素类型
>
> **Map：**resultType 为集合中的 元素类型

关于Map一些细节

```
// 实际保存的不是 Emp，是HashMap
// HashMap列名为Map的key    HashMap的值为Map的值
// 该注解指定了Emp中的id作为Map的key，Emp的其他属性作为Map的value
@MapKey("id") 
Map<Integer，Emp> getAllMap();
```

这种方式无法从map中取出emp

```
<select id="getAllMap" resultType="java,util.Map">
	select * from t_emp
</select>
```

直接取出emp

```
<select id="getAllMap" resultType="com.atguigu.mybatis.bean.Emp">
	select * from t_emp
</select>
```



### 自定义结果集

使用原因：

数据库的字段 和 Bean的属性 不能 一 一 对应

#### 入门案例

```xml :collapsed-lines
<resultMap id="EmpRM" type="com.atguigu.mybatis.bean.Emp">
	<!--id:  声明主键映射规则-->
	<id column="id" property="id"></id>
	<!--result:  声明普通列映射规则-->
	<result column="emp_name" property="empName" javaType="java.lang.String" jdbcType="VARCHAR"></result>
	<result column="age" property="age"></result>
	<result column="emp_salary" property="empSalary"></result>
</resultMap>
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
        <!--result:  声明普通列映射规则-->
```

```xml
<!-- resultMap:指定自定义映射规则 还可以通过全类名调用别人的结果集-->
<select id="getEmpById" resultMap="EmpRM">
	select * from t_emp	where id = #{id}
</select>
```



> - column：数据库列名
> - property：对象属性名
>
> 以下两个属性自动识别，不用手动指定
>
> - javaType：对象属性值类型
> - jdbcType：数据库字段类型



#### 一对一的关联封装

进行联合查询时，一个pojo包含另一个pojo时，默认的话无法封装

使用association

```java
@Data
public class Order {
	private Long id;
	private String address;
	private BigDecimal amount;
	private Long customerId;
	//订单对应的客户
	private Customer customer:
}

@Data
public class Customer {
	private Long id;
	private String customerName:
	private String phone;
}
```

```xml
<resultMap id="0rderRM" type="com.atguigu.mybatis.bean.Order">
	<id column="id" property="id"></id>
	<result column="address" property="address"></result>
	<result column="amount" property="amount"></result>
	<result column="customer_id" property="customerId"></result>
    
	<association property="customer" javaType="com.atguigu,mybatis.bean.Customer">
		<id column="c_id" property="id"></id>
		<result column="customer_name" property="customerName"></result>
		<result column="phone" property="phone"></result>
	</association>
</resultMap>
```



#### 一对多关系的关联封装

多对多则是双向的一对多，同样使用collection

```java
@Data
public class Customer {
	private Long id;
	private String oustomerName;
	private String phone;
	//保存所有订单
	private List<Order> orders;
}
```

```xml
<resultMap id="CutomerRM" type="com.atguigu.mybatis.bean.Customer">
	<id column="c_id" property="id"></id>
	<result column="customer_name" property="customerName"></result>
	<result column="phone" property="phone"></result>
    
	<!--   ofType: 集合中元素的类型 	-->
	<collection property="orders" ofType="com.atguigu.mybatis,bean.Order">
		<id column="id" property="id"></id>
		<result column="address" property="address"></result>
		<result column="amount" property="amount"></result>
		<result column="c_id" property="customerId"></result>
	</collection>
</resultMap>
```





#### 分步查询

原生的分步需要写两条sql，手动调用两次方法，再进行合并

mybatis自动的分步查询机制，自动调用

可写在association或collection标签下

```
// 只需传入id
Customer getCustomerByIdAndOrdersStep(Long id);
```

```
<select id="getOrdersByCustomerId" resultType="com.atguigu.mybatis.bean.Order">
	select * from t_order where customer_id = #{cId}
</select>

<resultMap id="CustomerOrdersStepRM" type="com,atquigu.mybatis,bean.Customer">
	<id column="id" property="id"></id>
	<result column="customer_name" property="customerName"></result>
	<result column="phone" property="phone"></result>
	
	<collection property="orders"
				
				select="com.atquigu.mybatis.mapper.OrderCustomerStepMapper.getOrdersByCustomerId"
                column="id" >
	</collection>
</resultMap>
```

> - select：自动调用getOrdersByCustomerId方法
>
> - column：将订单表的id传给cId使用
    >
    >   多个参数的时候 column=“{cid=id, name=customer_name}”     标准写法
>
> - 不用指定ofType，因为调用select后已经明确了返回结果



##### 超级分步

避免出现栈溢出（stackoverflow）

以查询订单起步，查到订单的顾客，又查到顾客的所有订单（该订单不能再使用自定义结果集查顾客）



##### 延迟加载

分步查询有时候并不需要立即运行，我们希望在用到的时候再去查询，可以开启延迟加载的功能。

全局配置

```
mybatis.configuration.lazy-loading-enabled=true
mybatis.configuration.aggressive-lazy-loading=false
```

==注意==

> 不能直接用order测试延迟，应用order.getXXX(); 因为pojo类用了@Data 有toString方法，导致所有的信息都被使用到，则测不出分步







## 6. 动态SQL

### IF

```
<if test="xx != null">
```

test中写判断条件

### where

```
<where></where>
```

自动处理多余的 and，or，where，解决语法

### set

```
<set></set>
```

自动处理多余的 逗号，解决语法错误

### trim

```
select *from t_emp
<trim prefix="where" suffix="">
	<if test="name != null">
		emp_name= #{name}
	</if>
	<if test="salary != null">
		and emp_salary = #{salary};
	</if>
</trim>
```

```
select *from t_emp
<trim prefix="where" prefix0verrides="and|or">
	and emp_salary = #{salary}
</trim>
```

> - trim标签体内有东西时才拼接前置后置
> - 前置覆盖：例如上述将标签体and或or覆盖成where

自定义字符串截串规则，去空白

### choose、when、otherwise

```
select *from t_emp
<where>
	<choose>
		<when test="name != null">
			emp_name=#{name} 
		</when>
		<when test="salary > 3000">
			emp_salary =#{salary}
		</when>
		<otherwise>
			id =1
		</otherwise>
	</choose>
</where>
```

> 多个分支中只选择一个，无需考虑逗号and等问题

### foreach

用于批量插入等场景

| 属性       | 作用                                   |
| ---------- | -------------------------------------- |
| collection | 要遍历的集合名                         |
| item       | 将当前遍历出的元素赋值给指定变量       |
| separator  | 每次遍历时元素间的分隔符               |
| open       | 拼好后，字符串整体的前面要添加的字符串 |
| close      | 拼好后，字符串整体的后面要添加的字符串 |
| index      | 这里起一个名字，便于后面引用           |

- 遍历Lst集合，这里能够得到List集合的索引值
- 遍历Map集合，这里能够得到Map集合的key

==批量sql数据库默认支持回滚，而分布式事务一般不支持==

### sql片段

可复用的片段提取出来

```
<sql id="column_names">
  id,emp_name empName,age,emp_salary empSalary
</sql>

select	<include refid="column_names"></include>	from t_emp
```



## 8. 特殊字符

xml中使用到以下字符需转义

| 原始 | 转义     |
| ---- | -------- |
| &    | `&amp;`  |
| <    | `&lt;`   |
| >    | `&gt;`   |
| "    | `&quot`  |
| '    | `&apos;` |



## 9. 拓展

### 缓存机制

#### 简介：

MyBatis 拥有二级缓存机制

1. 一级缓存（事务级别缓存）==默认==开启;  同一个事务期间，前面查询的数据后面要查询相同的数据，从一级缓存中取

2. 二级缓存需要==手动==配置开启：所有事务共享

#### 一级缓存失效的情况：

1. 查询的东西不一致
2. 两次查询间进行了一次增删改（因为可能会引起数据库变化）

#### 作用：

缓存中有就不用查数据库，加速查询

#### L1~LN：

- N级缓存

- 数字越小离我越近，查的越快。存储越小，造价越高

- 数字越大离我越远，查的越慢。存储越大，造价越低



#### CPU缓存机制

![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241017221604060.png)



#### Mybatis缓存机制

![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241017223624092.png)

**与其他不同mybatis==优先==从==二级==缓存拿数据**

==回源==：缓存中没有回到数据库中查原始数据，放到缓存

==缓存命中率==：二级缓存的东西重复使用的多，命中率高



#### 二级缓存的使用

1. xml中直接写`</cache>`，将所有查询出来的对象转成文件保存在二级缓存中

2. 因此实体对象应实现序列化接口  ==implements Serializable==
3. 被redis代替，几乎不用







### 插件机制

#### 简介

MyBatis 底层使用拦截器（Interceptor）机制提供插件功能，方便用户在SQL执行前后进行拦截增强

拦截器可以拦截 **四大对象** 的执行

- ParameterHandler：处理SQL的参数对象
- ResultSetHandler：处理SQL的返回结果集
- StatementHandler：数据库的处理对象，用于执行SQL语句
- Executor：MyBatis的执行器，用于执行增删改查操作



**注意：**插件自己比较难写，用别人提供的



#### PageHelper分页插件

拦截后统计表的总数 量，自动拼接limit，底层利用ThreadLocal

> 第一个查询从 ThreadLocal 中获取到共享数据，执行分页
>
> 第一个执行完会把 ThreadLocal 分页数据删除
>
> 以后的查询，从 ThreadLocal 中拿不到分页数据，就不会分页



##### 使用：

1. 引入依赖

2. 在MyBatisConfig中设置一个bean

   > 创建分页插件对象
   >
   > 设置一系列参数，使得前端访问合理。如访问1万页，返回最后一页

   ```
   @Configuration
   public class MyBatisConfig {
   	@Bean
   	PageInterceptor pageInterceptor(){
   		//1、创建 分页插件 对象
   		PageInterceptor interceptor =new PageInterceptor();
   		//2、设置 参数
   		//......
   		Properties properties =new Properties();
   		properties.setProperty("reasonable", "true");
   		interceptor.setProperties(properties);
   		return interceptor;
   	}
   }
   ```



3. **==紧跟==**PageHelper.startPage后的方法会执行 SQL 分页查询

```
PageHelper.startPage(3, 5);
List<Emp> all =empService.getAll();
PageInfo<Emp> info = new PageInfo<>(all);
```

> 将查询到的对象放入PageInfo中可以获取总页码，总记录数，当前页码等更多数据





### 逆向生成

#### 概念

mybatis官方提供了mapper自动生成工具mybatis-generator-core来针对单表，生成PO类，以及Mapper接口和mapper.xml映射文件。针对单表，可以不需要再手动编写xml配置文件和mapper接口文件了，非常方便。美中不足的是它不支持生成关联查询。一般做关联查询，就自己单独写SQL就好了。

配置依赖和插件

```
<!-- 依赖MyBatis核心包 -->
<dependencies>
    <dependency>
        <groupId>org.mybatis</groupId>
        <artifactId>mybatis</artifactId>
        <version>3.5.7</version>
    </dependency>
</dependencies>

<!-- 控制Maven在构建过程中相关配置 -->
<build>
    <!-- 构建过程中用到的插件 -->
    <plugins>
    <!-- 具体插件，逆向工程的操作是以构建过程中插件形式出现的 -->
        <plugin>
            <groupId>org.mybatis.generator</groupId>
            <artifactId>mybatis-generator-maven-plugin</artifactId>
            <version>1.3.0</version>
            <configuration>
                    <!-- 输出日志 -->
                    <verbose>true</verbose>
                    <overwrite>true</overwrite>
            </configuration>
            <!-- 插件的依赖 -->
            <dependencies>
                <!-- 逆向工程的核心依赖 -->
                <dependency>
                    <groupId>org.mybatis.generator</groupId>
                    <artifactId>mybatis-generator-core</artifactId>
                    <version>1.3.2</version>
                </dependency>
                <!-- 数据库连接池 -->
                <dependency>
                    <groupId>com.mchange</groupId>
                    <artifactId>c3p0</artifactId>
                    <version>0.9.2</version>
                </dependency>
                <!-- MySQL驱动 -->
                <dependency>
                    <groupId>mysql</groupId>
                    <artifactId>mysql-connector-java</artifactId>
                    <version>5.1.8</version>
                </dependency>
            </dependencies>
        </plugin>
    </plugins>
</build>
```



创建逆向工程的配置文件

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE generatorConfiguration
        PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
        "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">

<generatorConfiguration>
    <!--
    targetRuntime: 执行生成的逆向工程的版本
    MyBatis3Simple: 生成基本的CRUD（清新简洁版）
    MyBatis3: 生成带条件的CRUD（奢华尊享版）
    -->
    <context id="DB2Tables" targetRuntime="MyBatis3Simple">
        <!-- 数据库的连接信息 -->
        <jdbcConnection driverClass="com.mysql.jdbc.Driver"
                        connectionURL="jdbc:mysql://localhost:3306/mybatis"
                        userId="root"
                        password="123456">
        </jdbcConnection>
        <!-- javaBean的生成策略-->
        <javaModelGenerator targetPackage="com.atguigu.mybatis.bean" targetProject=".\src\main\java">
            <property name="enableSubPackages" value="true" />
            <property name="trimStrings" value="true" />
        </javaModelGenerator>
        <!-- SQL映射文件的生成策略 -->
        <sqlMapGenerator targetPackage="com.atguigu.mybatis.mapper" targetProject=".\src\main\resources">
        	<property name="enableSubPackages" value="true" />
        </sqlMapGenerator>
        <!-- Mapper接口的生成策略 -->
        <javaClientGenerator type="XMLMAPPER" targetPackage="com.atguigu.mybatis.mapper" targetProject=".\src\main\java">
        	<property name="enableSubPackages" value="true" />
        </javaClientGenerator>
        <!-- 逆向分析的表 -->
        <!-- tableName设置为*号，可以对应所有表，此时不写domainObjectName -->
        <!-- domainObjectName属性指定生成出来的实体类的类名 -->
        <table tableName="t_emp" domainObjectName="Emp"/>
        <table tableName="t_dept" domainObjectName="Dept"/>
    </context>
</generatorConfiguration>

```

执行MBG插件的generate目标

![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241019134401538.png)
