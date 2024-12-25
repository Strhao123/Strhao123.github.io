---
# 当前页面内容标题
title: Filter
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

1. Filter 过滤器它是 JavaWeb 的三大组件之一。三大组件分别是：Servlet 程序、Listener 监听器、Filter 过滤器
2. Filter 过滤器它是 JavaEE 的规范。也就是接口
3. Filter 过滤器它的作用是：<span style="color: red;">拦截请求，过滤响应</span>





## 2. 工作流程

![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241027115633491.png)

**使用方法**

1. 编写一个类去实现 Filter 接口
2. 实现过滤方法 doFilter()
3. 到 web.xml 中去配置 Filter 

```java
public class AdminFilter implements Filter {
    /**
    * doFilter 方法，专门用于拦截请求。可以做权限检查
    */
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse,FilterChainfilterChain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;HttpSession session = httpServletRequest.getSession();
        Object user = session.getAttribute("user");
        // 如果等于 null，说明还没有登录
        if (user == null) {
       		servletRequest.getRequestDispatcher("/login.jsp").forward(servletRequest,servletResponse);
            return;
        }
        else {
            // 让程序继续往下访问用户的目标资源
            filterChain.doFilter(servletRequest,servletResponse);
        }
    }
}
```

```xml
<!--filter 标签用于配置一个 Filter 过滤器-->
<filter>
    <!--给 filter 起一个别名-->
    <filter-name>AdminFilter</filter-name>
    <!--配置 filter 的全类名-->
    <filter-class>com.atguigu.filter.AdminFilter</filter-class>
</filter>

<!--filter-mapping 配置 Filter 过滤器的拦截路径-->
<filter-mapping>
    <!--filter-name 表示当前的拦截路径给哪个 filter 使用-->
    <filter-name>AdminFilter</filter-name>
    <!--url-pattern 配置拦截路径
    / 表示请求地址为：http://ip:port/工程路径/ 映射到 IDEA 的 web 目录/admin/* 表示请求地址为：http://ip:port/工程路径/admin/*
    -->
    <url-pattern>/admin/*</url-pattern>
</filter-mapping>
```



## 3. 生命周期

| 方法              | 功能                          |
| ----------------- | ----------------------------- |
| 构造器方法        | web 工程启动的时候执行        |
| init 初始化方法   | web 工程启动的时候执行        |
| doFilter 过滤方法 | 每次拦截到请求，就会执行      |
| destroy 销毁      | 停止 web 工程的时候，就会执行 |





## 4. FilterConfig

**简介**

是 Filter 过滤器的配置文件类，Tomcat 每次创建 Filter 的时候，也会同时创建一个 FilterConfig 类，这里包含了 Filter 配置文件的配置信息。

**作用**

1. 获取 Filter 的名称 filter-name 的内容
2. 获取在 Filter 中配置的 init-param 初始化参数
3. 获取 ServletContext 对象



```java
@Override
public void init(FilterConfig filterConfig) throws ServletException {
    System.out.println("2.Filter 的 init(FilterConfig filterConfig)初始化");
    // 1、获取 Filter 的名称 filter-name 的内容
    System.out.println("filter-name 的值是：" + filterConfig.getFilterName());
    // 2、获取在 web.xml 中配置的 init-param 初始化参数
    System.out.println("初始化参数 username 的值是：" + filterConfig.getInitParameter("username"));
    System.out.println("初始化参数 url 的值是：" + filterConfig.getInitParameter("url"));
    // 3、获取 ServletContext 对象
    System.out.println(filterConfig.getServletContext());
}
```

```xml
<!--filter 标签用于配置一个 Filter 过滤器-->
<filter>
    <!--给 filter 起一个别名-->
    <filter-name>AdminFilter</filter-name>
    <!--配置 filter 的全类名-->
    <filter-class>com.atguigu.filter.AdminFilter</filter-class>
    
    <init-param>
        <param-name>username</param-name>
        <param-value>root</param-value>
    </init-param>
    
    <init-param>
        <param-name>url</param-name>
        <param-value>jdbc:mysql://localhost3306/test</param-value>
    </init-param>
</filter>
```







## 5. FilterChain

**简介**

过滤器链（多个过滤器如何一起工作）

![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241027121039454.png)





## 6. Filter拦截路径

- 精准匹配

  ```
  <url-pattern>/target.jsp</url-pattern>
  以上配置的路径，表示请求地址必须为：http://ip:port/工程路径/target.jsp
  ```

- 目录匹配

  ```
  <url-pattern>/admin/*</url-pattern>
  以上配置的路径，表示请求地址必须为：http://ip:port/工程路径/admin/*
  ```

- 后缀名匹配

  ```
  <url-pattern>*.html</url-pattern>
  以上配置的路径，表示请求地址必须以.html 结尾才会拦截到
  <url-pattern>*.do</url-pattern>
  以上配置的路径，表示请求地址必须以.do 结尾才会拦截到
  ```

**注意**：<span style="color: red;">Filter 过滤器它只关心请求的地址是否匹配，不关心请求的资源是否存在</span>





