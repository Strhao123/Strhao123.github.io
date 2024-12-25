---
# 当前页面内容标题
title: Listener
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

Listener 监听器是 JavaWeb 的三大组件之一。JavaWeb 的三大组件分别是：Servlet 程序、Filter 过滤器、Listener监听器。

Listener 它是 JavaEE 的规范，就是接口



### 作用

监听某种事物的变化。然后通过回调函数，反馈给客户（程序）去做一些相应的处理





## 2. ServletContextListener 监听器

### 简介

ServletContextListener 它可以监听 ServletContext 对象的创建和销毁

ServletContext 对象在 web 工程启动的时候创建，在 web 工程停止的时候销毁

监听到创建和销毁之后都会分别调用 ServletContextListener 监听器的方法反馈

### 两个方法

```java
public interface ServletContextListener extends EventListener {
    /**
    * 在 ServletContext 对象创建之后马上调用，做初始化
    */
    public void contextInitialized(ServletContextEvent sce);
    
    /**
    * 在 ServletContext 对象销毁之后调用
    */
    public void contextDestroyed(ServletContextEvent sce);
}
```

### 使用

1. 编写一个类去实现 ServletContextListener
2. 实现其两个回调方法
3. web.xml 中去配置监听器

监听器实现类

```java
public class MyServletContextListenerImpl implements ServletContextListener {
    @Override
    public void contextInitialized(ServletContextEvent sce) {
    System.out.println("ServletContext 对象被创建了");
    }
    @Override
    public void contextDestroyed(ServletContextEvent sce) {
    System.out.println("ServletContext 对象被销毁了");
    }
}
```

web.xml 中的配置

```xml
<!--配置监听器-->
<listener>
	<listener-class>com.atguigu.listener.MyServletContextListenerImpl</listener-class>
</listener>
```

