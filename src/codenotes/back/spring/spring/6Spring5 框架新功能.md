---
# 当前页面内容标题
title: Spring5 新特性

# 分类
category:
- 计算机
# 标签
tag:
- Spring

sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: false
# 是否将该文章添加至文章列表中
article: false
# 是否将该文章添加至时间线中
timeline: false

date: 2024-11-07

headerDepth: 2

---





## 1. Spring5 框架新功能

1 、整个 **Spring5** 框架的代码基于 **Java8** ，运行时兼容 **JDK9** ，许多不建议使用的类和方
法在代码库中删除

2 、Spring 5.0 框架自带了通用的日志封装
（ 1 ）Spring5已经移除Log4jConfigListener，官方建议使用Log4j2
（ 2 ）Spring5框架整合Log4j2
第一步 引入jar包

![](https://gitee.com/private_crh/notes/raw/master/typora/202411071628735.png)

第二步 创建log4j2.xml配置文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--日志级别以及优先级排序: OFF > FATAL > ERROR > WARN > INFO > DEBUG > TRACE > ALL -->
<!--Configuration 后面的 status 用于设置 log4j2 自身内部的信息输出，可以不设置，当设置成 trace 时，可以看到 log4j2 内部各种详细输出-->
<configuration status="INFO">
   <!--先定义所有的 appender-->
   <appenders>
   		<!--输出日志信息到控制台-->
   		<console name="Console" target="SYSTEM_OUT">
 			<!--控制日志输出的格式-->
 			<PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} [%t] %-5level %logger{36} - %msg%n"/>
 		</console>
    </appenders>
    
 	<!--然后定义 logger，只有定义 logger 并引入的 appender，appender 才会生效-->
 	<!--root：用于指定项目的根日志，如果没有单独指定 Logger，则会使用 root 作为默认的日志输出-->
 	<loggers>
 		<root level="info">
 			<appender-ref ref="Console"/>
 		</root>
 	</loggers>
</configuration>
```







**3** 、 **Spring5** 框架核心容器支持 **@Nullable** 注解
（ 1 ）@Nullable注解可以使用在方法上面，属性上面，参数上面，表示方法返回可以为空，属性值可以为空，参数值可以为空

（ 2 ）注解用在方法上面，方法返回值可以为空

（ 3 ）注解使用在方法参数里面，方法参数可以为空

（ 4 ）注解使用在属性上面，属性值可以为空





**4** 、 **Spring5** 核心容器支持函数式风格 **GenericApplicationContext**

```java
//函数式风格创建对象，交给 spring 进行管理
@Test
public void testGenericApplicationContext() {
 	//1 创建 GenericApplicationContext 对象
 	GenericApplicationContext context = new GenericApplicationContext();
 	//2 调用 context 的方法对象注册
 	context.refresh();
 	context.registerBean("user1",User.class,() -> new User());
 	//3 获取在 spring 注册的对象
 	// User user = (User)context.getBean("com.atguigu.spring5.test.User");
 	User user = (User)context.getBean("user1");
 	System.out.println(user);
}
```



**5** 、 **Spring5** 支持整合 **JUnit5**
（ 1 ）整合JUnit4
第一步 引入Spring相关针对测试依赖

![](https://gitee.com/private_crh/notes/raw/master/typora/202411071656362.png)

第二步 创建测试类，使用注解方式完成

```java
@RunWith(SpringJUnit4ClassRunner.class) //单元测试框架
@ContextConfiguration("classpath:bean1.xml") //加载配置文件
public class JTest4 {
 	@Autowired
 	private UserService userService;
    
 	@Test
 	public void test1() {
 		userService.accountMoney();
 	}
}
```



（ 2 ）Spring5整合JUnit5
第一步 引入JUnit5的jar包

第二步 创建测试类，使用注解完成

```java
@ExtendWith(SpringExtension.class)
@ContextConfiguration("classpath:bean1.xml")
public class JTest5 {
 	@Autowired
 	private UserService userService;
    
 	@Test
 	public void test1() {
 		userService.accountMoney();
 	}
}
```



第三步 使用一个复合注解替代上面两个注解完成整合

```java
@SpringJUnitConfig(locations = "classpath:bean1.xml")
public class JTest5 {
 	@Autowired
 	private UserService userService;
    
 	@Test
 	public void test1() {
 		userService.accountMoney();
 	}
}
```



## 2.  Webflux

### 2.1 SpringWebflux 介绍

（ 1 ）是Spring5添加新的模块，用于web开发的，功能和SpringMVC类似的，Webflux使用
当前一种比较流程响应式编程出现的框架。

![](https://gitee.com/private_crh/notes/raw/master/typora/202411071800102.png)

（ 2 ）使用传统web框架，比如SpringMVC，这些基于Servlet容器，Webflux是一种异步非阻
塞的框架，异步非阻塞的框架在Servlet3.1以后才支持，核心是基于Reactor的相关API实现
的。

（ 3 ）解释什么是异步非阻塞

- 异步和同步
- 非阻塞和阻塞

<span style="color: red;">异步和同步针对调用者</span>，调用者发送请求，如果等着对方回应之后才去做其他事情就是同
步，如果发送请求之后不等着对方回应就去做其他事情就是异步

<span style="color: red;">阻塞和非阻塞针对被调用者</span>，被调用者受到请求之后，做完请求任务之后才给出反馈就是阻
塞，受到请求之后马上给出反馈然后再去做事情就是非阻塞

（ 4 ）Webflux特点：

1. 非阻塞式：在有限资源下，提高系统吞吐量和伸缩性，以Reactor为基础实现响应式编程
2. 函数式编程：Spring5框架基于java8，Webflux使用Java8函数式编程方式实现路由请求

（ 5 ）比较SpringMVC

1. 两个框架都可以使用注解方式，都运行在Tomet等容器中
2. SpringMVC采用命令式编程，Webflux采用异步响应式编程

![](https://gitee.com/private_crh/notes/raw/master/typora/202411071801374.png)



### 2.2 响应式编程（ **Java** 实现）

（ 1 ）什么是响应式编程
响应式编程是一种面向数据流和变化传播的编程范式。这意味着可以在编程语言中很方便地表达静态或动态的数据流，而相关的计算模型会自动将变化的值通过数据流进行传播。电子表格程序就是响应式编程的一个例子。单元格可以包含字面值或类似"=B1+C1"的公式，而包含公式的单元格的值会依据其他单元格的值的变化而变化。

（ 2 ）Java8及其之前版本

- 提供的观察者模式两个类Observer和Observable

```java
public class ObserverDemo extends Observable {
 	public static void main(String[] args) {
 		ObserverDemo observer = new ObserverDemo();
        
 		//添加观察者
 		observer.addObserver((o,arg)->{
 		System.out.println("发生变化");
 		});
        
 		observer.addObserver((o,arg)->{
		 System.out.println("手动被观察者通知，准备改变");
		});
        
 		observer.setChanged(); //数据变化
 		observer.notifyObservers(); //通知
 	}
}
```



### 2.3 响应式编程（ **Reactor** 实现）

（ **1** ）响应式编程操作中， **Reactor** 是满足 **Reactive** 规范框架

（ **2** ） **Reactor** 有两个核心类， **Mono** 和 **Flux** ，这两个类实现接口 **Publisher** ，提供丰富操作符。 **Flux** 对象实现发布者，返回 **N** 个元素； **Mono** 实现发布者，返回 **0** 或者 **1** 个元素

（ 3 ）Flux和Mono都是数据流的发布者，使用Flux和Mono都可以发出三种数据信号：元素值，错误信号，完成信号，错误信号和完成信号都代表终止信号，终止信号用于告诉订阅者数据流结束了，错误信号终止数据流同时把错误信息传递给订阅者

![](https://gitee.com/private_crh/notes/raw/master/typora/202411071800180.png)

（ **4** ）代码演示 **Flux** 和 **Mono**

第一步 引入依赖

```xml
<dependency>
 	<groupId>io.projectreactor</groupId>
 	<artifactId>reactor-core</artifactId>
 	<version>3.1.5.RELEASE</version>
</dependency>
```

第二步 编程代码

```java
public static void main(String[] args) {
 	//just 方法直接声明
 	Flux.just(1,2,3,4);
 	Mono.just(1);
 	//其他的方法
 	Integer[] array = {1,2,3,4};
 	Flux.fromArray(array);

 	List<Integer> list = Arrays.asList(array);
 	Flux.fromIterable(list);
 	Stream<Integer> stream = list.stream();
 	Flux.fromStream(stream);
}
```

（ 5 ）三种信号特点

- 错误信号和完成信号都是终止信号，不能共存的
- 如果没有发送任何元素值，而是直接发送错误或者完成信号，表示是空数据流
- 如果没有错误信号，没有完成信号，表示是无限数据流

（ 6 ）调用just或者其他方法只是声明数据流，数据流并没有发出，只有进行订阅之后才会触
发数据流，不订阅什么都不会发生的

```java
//just方法直接声明
Flux.just(1,2,3,4).subscribe(System.out::print)
Mono.just(1).subscribe(System.out::print).
```

（ **7** ）操作符

> 对数据流进行一道道操作，成为操作符，比如工厂流水线

第一 map 元素映射为新元素
![](https://gitee.com/private_crh/notes/raw/master/typora/202411071800447.png)

第二 flatMap 元素映射为流

- 把每个元素转换流，把转换之后多个流合并大的流
  ![](https://gitee.com/private_crh/notes/raw/master/typora/202411071800123.png)

### 2.4  **SpringWebflux** 执行流程和核心 **API**

SpringWebflux基于Reactor，默认使用容器是Netty，Netty是高性能的NIO框架，异步非阻塞的框架

（ 1 ）Netty

- BIO

![](https://gitee.com/private_crh/notes/raw/master/typora/202411071740083.png)

- NIO

![](https://gitee.com/private_crh/notes/raw/master/typora/202411071801957.png)

（ 2 ）SpringWebflux执行过程和SpringMVC相似的

- SpringWebflux核心控制器 DispatchHandler，实现接口WebHandler
- 接口WebHandler有一个方法

（ 3 ）SprinWebflux 里面 DispatcherHandler，负责请求的处理

- HandlerMapping：请求查询到处理的方法
- HandlerAdapter：真正负责请求处理
- HandlerResultHandler：响应结果处理

（ 4 ）SpringWebflux实现函数式编程，两个接口：RouterFunction（路由处理）和 HandlerFunction（处理函数）





### 2.5 SpringWebflux （基于注解编程模型）

SpringWebflux实现方式有两种：注解编程模型和函数式编程模型使用注解编程模型方式，和之前SpringMVC使用相似的，只需要把相关依赖配置到项目中，SpringBoot自动配置相关运行容器，默认情况下使用Netty服务器

第一步 创建SpringBoot工程，引入Webflux依赖

```xml
<dependency>
    <group>groupIdorg.springframework. boot</groupId>
	<artifactId>spring boot-starter-webflux</artifactId
<dependency>
```

第二步 配置启动端口号

```properties
server.port=8081
```

第三步 创建包和相关类

- 实体类

- 创建接口定义操作的方法

```java
//用户操作接口
public interface UserService {
 	//根据 id 查询用户
 	Mono<User> getUserById(int id);
 	//查询所有用户
 	Flux<User> getAllUser();
 	//添加用户
 	Mono<Void> saveUserInfo(Mono<User> user);
}
```

- 接口实现类

```java
public class UserServiceImpl implements UserService {
 	//创建 map 集合存储数据
 	private final Map<Integer,User> users = new HashMap<>();
    
 	public UserServiceImpl() {
 		this.users.put(1,new User("lucy","nan",20));
 		this.users.put(2,new User("mary","nv",30));
 		this.users.put(3,new User("jack","nv",50));
 	}
    
 	//根据 id 查询
 	@Override
 	public Mono<User> getUserById(int id) {
 		return Mono.justOrEmpty(this.users.get(id));
 	}
    
 	//查询多个用户
 	@Override
 	public Flux<User> getAllUser() {
 		return Flux.fromIterable(this.users.values());
 	}
    
 	//添加用户
 	@Override
 	public Mono<Void> saveUserInfo(Mono<User> userMono) {
 		return userMono.doOnNext(person -> {
 			//向 map 集合里面放值
 			int id = users.size()+1;
 			users.put(id,person);
 		}).thenEmpty(Mono.empty());
 	}
}

```

- 创建 controller

```java
@RestController
public class UserController {
 	//注入 service
 	@Autowired
 	private UserService userService;
    
 	//id 查询
 	@GetMapping("/user/{id}")
 	public Mono<User> geetUserId(@PathVariable int id) {
 		return userService.getUserById(id);
 	}
 	//查询所有
 	@GetMapping("/user")
 	public Flux<User> getUsers() {
 		return userService.getAllUser();
 	}
 	//添加
 	@PostMapping("/saveuser")
 	public Mono<Void> saveUser(@RequestBody User user) {
 		Mono<User> userMono = Mono.just(user);
 		return userService.saveUserInfo(userMono);
 	}
}
```

**说明**
SpringMVC方式实现，同步阻塞的方式，基于SpringMVC+Servlet+Tomcat
SpringWebflux方式实现，异步非阻塞 方式，基于SpringWebflux+Reactor+Netty





### 2.6 SpringWebflux （基于函数式编程模型）

（ 1 ）在使用函数式编程模型操作时候，需要自己初始化服务器

（ 2 ）基于函数式编程模型时候，有两个核心接口：RouterFunction（实现路由功能，请求转发给对应的handler）和HandlerFunction（处理请求生成响应的函数）。核心任务定义两个函数式接口的实现并且启动需要的服务器。

（ 3 ）SpringWebflux 请 求 和 响 应 不 再 是 ServletRequest 和 ServletResponse，而是
ServerRequest和ServerResponse

第一步 把注解编程模型工程复制一份 ，保留entity和service内容
第二步 创建Handler（具体实现方法）

```java
public class UserHandler {
 	private final UserService userService;
    
 	public UserHandler(UserService userService) {
 		this.userService = userService;
 	}
    
 	//根据 id 查询
	public Mono<ServerResponse> getUserById(ServerRequest request) {
 		//获取 id 值
 		int userId = Integer.valueOf(request.pathVariable("id"));
 		//空值处理
 		Mono<ServerResponse> notFound = ServerResponse.notFound().build();
 		//调用 service 方法得到数据
 		Mono<User> userMono = this.userService.getUserById(userId);
 		//把 userMono 进行转换返回
 		//使用 Reactor 操作符 flatMap
 		return userMono.flatMap(person -> ServerResponse.ok()
                       									.contentType(MediaType.APPLICATION_JSON)
 					   									.body(fromObject(person)))
				       .switchIfEmpty(notFound);
 	}
    
 	//查询所有
 	public Mono<ServerResponse> getAllUsers() {
 		//调用 service 得到结果
 		Flux<User> users = this.userService.getAllUser();
 		return ServerResponse.ok()
            				 .contentType(MediaType.APPLICATION_JSON)
            				 .body(users,User.class);
 	}
 	
    //添加
 	public Mono<ServerResponse> saveUser(ServerRequest request) {
 		//得到 user 对象
 		Mono<User> userMono = request.bodyToMono(User.class);
 		return ServerResponse.ok()
            				 .build(this.userService.saveUserInfo(userMono));
 	}
}
```



第三步 初始化服务器，编写Router

- 创建路由的方法

```java
//1 创建 Router 路由
public RouterFunction<ServerResponse> routingFunction() {
 	//创建 hanler 对象
 	UserService userService = new UserServiceImpl();
 	UserHandler handler = new UserHandler(userService);
 	//设置路由
 	return RouterFunctions.route(GET("/users/{id}").and(accept(APPLICATION_JSON)), handler::getUserById)
 						  .andRoute(GET("/users").and(accept(APPLICATION_JSON)), handler::getAllUsers);
}
```

- 创建服务器完成适配

```java
//2 创建服务器完成适配
public void createReactorServer() {
 	//路由和 handler 适配
 	RouterFunction<ServerResponse> route = routingFunction();
 	HttpHandler httpHandler = toHttpHandler(route);
 	ReactorHttpHandlerAdapter adapter = new ReactorHttpHandlerAdapter(httpHandler);
 	
    //创建服务器
 	HttpServer httpServer = HttpServer.create();
 	httpServer.handle(adapter).bindNow();
}
```

- 最终调用

```java
public static void main(String[] args) throws Exception{
 	Server server = new Server();
 	server.createReactorServer();
 	System.out.println("enter to exit");
 	System.in.read();
}
```

（ 4 ）使用WebClient调用

```java
public class Client {
 	public static void main(String[] args) {
 		//调用服务器地址
 		WebClient webClient = WebClient.create("http://127.0.0.1:5794");
 		
        //根据 id 查询
 		String id = "1";
 		User userresult = webClient.get().uri("/users/{id}", id)									 									.accept(MediaType.APPLICATION_JSON).retrieve().bodyToMono(User.class)
 								.block();
 		System.out.println(userresult.getName());
 
        //查询所有
 		Flux<User> results = webClient.get().uri("/users")
 						   		.accept(MediaType.APPLICATION_JSON).retrieve().bodyToFlux(User.class);
 		results.map(stu -> stu.getName())
 			   .buffer().doOnNext(System.out::println)
               .blockFirst();
 }
}

```