---
# 当前页面内容标题
title: JSP
author:
- name: 尚硅谷
- name: Ahzy
# 分类
category:
- 计算机
# 标签
tag:
- javaweb

sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: false
# 是否将该文章添加至文章列表中
article: false
# 是否将该文章添加至时间线中
timeline: false
# 是否原创
isOriginal: true
headerDepth: 2

---


## 1. 简介

### 背景

> jsp的主要作用是代替 servlet 程序回传 html 页面的数据
> 因为 servlet 程序回传 html 页面数据是一件非常繁锁的事情。开发成本和维护成本都极高。



### 概念

jsp的全称是 java server pages。Java 的服务器页面



### 使用

![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241019145639488.png)



### 访问方法

web 目录

| 页面        | 访问                             |
| ----------- | -------------------------------- |
| b.jsp 页面  | `http://ip:port/工程路径/b.jsp`  |
| a.html 页面 | `http://ip:port/工程路径/a.html` |



### 本质

> jsp 页面本质上是一个==Servlet 程序==

- 当我们第一次访问 jsp 页面的时候。Tomcat 服务器会帮我们把 jsp 页面翻译成为一个java 源文件。并且对它进行编译成为.class 字节码程序
- jsp 翻译出来的java类，间接了继承了 HttpServlet 类。底层实现，也是通过输出流把html 页面数据回传给客户端





## 2. JSP的三种语法

### jsp头部的page指令

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
```

| 常用属性     | 功能                                                         |
| ------------ | ------------------------------------------------------------ |
| language     | 表示 jsp 翻译后是什么语言文件。暂时只支持java                |
| contentType  | 表示 jsp 返回的数据类型是什么。也是源码中response.setContentType()参数值 |
| pageEncoding | 表示当前 jsp 页面文件本身的字符集                            |
| import       | 跟 java 源代码中一样，用于导包，导类                         |
| autoFlush    | 设置当 out 输出流缓冲区满了之后，是否自动刷新冲级区。默认值是true |
| buffer       | 设置 out 缓冲区的大小，默认是 8kb                            |
| errorPage    | 设置当 jsp 页面运行时出错，自动跳转去的错误页面路径          |
| isErrorPage  | 设置当前 jsp 页面是否是错误信息页面，默认是false。如果是true可以获取异常信息 |
| session      | 设置访问当前 jsp 页面，是否会创建HttpSession 对象，默认是true |
| extends      | 设置 jsp 翻译出来的 java 类默认继承谁                        |

> 缓冲区满了后不能自动刷新就会报错



### jsp三种常用脚本

#### 声明脚本
> 作用：可以给 jsp 翻译出来的 java 类定义属性和方法甚至是静态代码块。内部类等
```
<%! 声明 java 代码 %>
```

示例

```jsp
<%--1、声明类属性--%>
	<%!
        private Integer id;
        private String name;
        private static Map<String,Object> map;
	%>
	
<%--2、声明 static 静态代码块--%>
    <%!
        static {
            map = new HashMap<String,Object>();
            map.put("key1", "value1");
            map.put("key2", "value2");
            map.put("key3", "value3");
        }
    %>
    
<%--3、声明类方法--%>
    <%!
        public int abc(){
        	return 12;
        }
    %>

<%--4、声明内部类--%>
    <%!
        public static class A {
            private Integer id = 12;
            private String abc = "abc";
        }
    %>
```

![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241019155543817.png)







#### 表达式脚本

> 作用：jsp 页面上输出数据



特点

- 所有的表达式脚本都会被翻译到_jspService() 方法中
- 表达式脚本都会被翻译成为 out.print()输出到页面上
- _jspService()方法中的对象都可以直接使用
- 表达式不能以分号结束

```
<%=表达式%>
```

示例

```jsp
<%=12 %> <br>
<%=12.12 %> <br>
<%="我是字符串" %> <br>
<%=map%> <br>
<%=request.getParameter("username")%>
```

![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241019155835106.png)





#### 代码脚本

> 作用：可以在 jsp 页面中，编写我们自己需要的功能（写的是java 语句）



特点

- 代码脚本翻译之后都在_jspService 方法中
- _jspService()方法中的现有对象都可以直接使用
- 可以由多个代码脚本块组合完成一个完整的 java 语句
- 代码脚本还可以和表达式脚本一起组合使用，在 jsp 页面上输出数据

```
<%
	java 语句
%>
```



示例

```jsp
<%--练习：--%>
<%--1.代码脚本----if 语句--%>
    <%
        int i = 13 ;
        if (i == 12) {
    %>
        <h1>国哥好帅</h1>
    <%
        } else {
    %>
        <h1>国哥又骗人了！</h1>
    <%
    	}
    %>
<br>

<%--2.代码脚本----for 循环语句--%>
    <table border="1" cellspacing="0">
    <%
    	for (int j = 0; j < 10; j++) {
    %>
        <tr>
        	<td>第 <%=j + 1%>行</td>
        </tr>
    <%
    	}
    %>
    </table>

<%--3.翻译后 java 文件中_jspService 方法内的代码都可以写--%>
    <%
        String username = request.getParameter("username");
        System.out.println("用户名的请求参数值是：" + username);
    %>
```

![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241019160348751.png)





### jsp的三种注释

####  html 注释

> html 注释会被翻译到 java 源代码中。在_jspService 方法里，以 out.writer 输出到客户端。

```
<!-- 这是 html 注释 -->
```



#### java 注释

> java 注释会被翻译到 java 源代码中。

```
<%
    // 单行 java 注释
    /* 多行 java 注释 */
%>
```



#### jsp 注释

> jsp 注释可以注掉，jsp 页面中所有代码。

```
<%-- 这是 jsp 注释 --%>
```



## 3. JSP九大内置对象

### 简介

jsp 中的内置对象，是指 Tomcat 在翻译 jsp 页面成为 Servlet 源代码后，内部提供的九大对象，叫内置对象

| 变量名      | 对象               |
| ----------- | ------------------ |
| request     | 请求对象           |
| response    | 响应对象           |
| pageContext | jsp上下文对象      |
| session     | 会话对象           |
| application | ServletContext对象 |
| config      | ServletConfig对象  |
| out         | jsp输出流对象      |
| page        | 指向当前jsp对象    |
| exception   | 异常对象           |



### 四大域对象

| 变量名      | 作用范围                                                   |
| ----------- | ---------------------------------------------------------- |
| pageContext | 当前 jsp 页面范围内有效                                    |
| request     | 一次请求内有效                                             |
| session     | 一个会话范围内有效（打开浏览器访问服务器，直到关闭浏览器） |
| application | 整个 web 工程范围内都有效（只要web 工程不停止，数据都在）  |

> 域对象是可以像 Map 一样存取数据的对象。四个域对象功能一样。数据的存取范围不一样



**优先顺序**
`pageContext ---->>> request ---->>> session ---->>> application`



**示例**

```jsp
<body>
    <h1>scope.jsp 页面</h1>
    <%
        // 往四个域中都分别保存了数据
        pageContext.setAttribute("key", "pageContext");
        request.setAttribute("key", "request");
        session.setAttribute("key", "session");
        application.setAttribute("key", "application");
    %>
    pageContext 域是否有值：<%=pageContext.getAttribute("key")%> <br>
    request 域是否有值：<%=request.getAttribute("key")%> <br>
    session 域是否有值：<%=session.getAttribute("key")%> <br>
    application 域是否有值：<%=application.getAttribute("key")%> <br>
    <%
    	request.getRequestDispatcher("/scope2.jsp").forward(request,response);
    %>
</body>
```

```jsp
<body>
    <h1>scope2.jsp 页面</h1>
    pageContext 域是否有值：<%=pageContext.getAttribute("key")%> <br>
    request 域是否有值：<%=request.getAttribute("key")%> <br>
    session 域是否有值：<%=session.getAttribute("key")%> <br>
    application 域是否有值：<%=application.getAttribute("key")%> <br>
</body>
```



## 4. JSP两种输出的区别

1. response.getWriter().write("");
2. out.write("");

![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241019225946532.png)

由于 jsp 翻译之后，底层源代码都是使用 out 来进行输出，所以一般情况下。我们在jsp 页面中统一使用out 来进行输出。避免打乱页面输出内容的顺序

> - out.write() 输出字符串没有问题
> - out.print() 输出任意数据都没有问题（都转换成为字符串后调用的 write 输出）

**结论：统一使用 out.print()来进行输出**





## 5. JSP常用标签

### 静态包含

```jsp
<%--
    <%@ include file=""%> 这是静态包含
        file 属性指定你要包含的 jsp 页面的路径
        地址中第一个斜杠 / 表示为 http://ip:port/工程路径/ 映射到代码的web目录 
--%>
<%@ include file="/include/footer.jsp"%>
```

特点

- 静态包含不会翻译被包含的 jsp 页面
- 静态包含其实是把被包含的 jsp 页面的代码拷贝到包含的位置执行输出



### 动态包含

```jsp
<%--
    <jsp:include page=""></jsp:include> 这是动态包含
    page 属性是指定你要包含的 jsp 页面的路径
    动态包含也可以像静态包含一样。把被包含的内容执行输出到包含位置
--%>
<jsp:include page="/include/footer.jsp">
    <jsp:param name="username" value="bbj"/>
    <jsp:param name="password" value="root"/>
</jsp:include>
```

特点

- 动态包含会把包含的 jsp 页面也翻译成为 java 代码
- 动态包含底层代码使用如下代码去调用被包含的 jsp 页面执行输出。 JspRuntimeLibrary.include(request, response, "/include/footer.jsp", out,false);
- 可以传递参数

底层

![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241019231313189.png)



### 转发

```jsp
示例说明：
<%--
	<jsp:forward page=""></jsp:forward> 是请求转发标签，它的功能就是请求转发page 属性设置请求转发的路径
--%>
<jsp:forward page="/scope2.jsp"></jsp:forward>
```

业务示例

![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241019231649839.png)

创建Student类

```java
public class Student {
    private Integer id;
    private String name;
    private Integer age;
    private String phone;
}
```

SearchStudentServlet 程序

```java
public class SearchStudentServlet extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException,IOException {
		// 获取请求的参数
		// 发 sql 语句查询学生的信息
		// 使用 for 循环生成查询到的数据做模拟
		List<Student> studentList = new ArrayList<Student>();
		for (int i = 0; i < 10; i++) {
			int t = i + 1;
			studentList.add(new Student(t,"name"+t, 18+t,"phone"+t));
		}
		// 保存查询到的结果（学生信息）到 request 域中
		req.setAttribute("stuList", studentList);
		// 请求转发到 showStudent.jsp 页面
    	req.getRequestDispatcher("/test/showStudent.jsp").forward(req,resp);
	}
}
```

showStudent.jsp 页面

```jsp
<%@ page import="java.util.List" %>
<%@ page import="com.atguigu.pojo.Student" %>
<%@ page import="java.util.ArrayList" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<title>Title</title>
    <style>
        table{
            border: 1px blue solid;
            width: 600px;
            border-collapse: collapse;
        }
        td,th{
        	border: 1px blue solid;
   	 	}
    </style>
</head>
    
<body>
<%--练习二：jsp 输出一个表格，里面有 10 个学生信息。--%>
    <%
    List<Student> studentList = (List<Student>) request.getAttribute("stuList");
    %>
    <table>
        <tr>
            <td>编号</td>
            <td>姓名</td>
            <td>年龄</td>
            <td>电话</td>
            <td>操作</td>
        </tr>
    <% for (Student student : studentList) { %>
        <tr>
            <td><%=student.getId()%></td>
            <td><%=student.getName()%></td>
            <td><%=student.getAge()%></td>
            <td><%=student.getPhone()%></td>
            <td>删除、修改</td>
        </tr>
    <% } %>
    </table>
</body>
</html>
```

==注意==：访问程序的顺序一定是  `客户端  --->>>  Servlet  --->>>  jsp`，否则报错

