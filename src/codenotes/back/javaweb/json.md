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

JSON (JavaScript Object Notation) 是一种轻量级的数据交换格式。易于人阅读和编写。同时也易于机器解析和生成。JSON采用完全独立于语言的文本格式，而且很多语言都提供了对 json 的支持（包括 C, C++, C#, Java, JavaScript,Perl,Python等）。 这样就使得 JSON 成为理想的数据交换格式。



- json 是一种轻量级的数据交换格式
- 轻量级指的是跟 xml 做比较
- 数据交换指的是客户端和服务器之间业务数据的传递格式





## 2.  Json在Java中的使用

### javaBean 和 json 的互转

```java
@Test
public void test1(){
    Person person = new Person(1,"国哥好帅!");
    
    // 创建 Gson 对象实例
    Gson gson = new Gson();
    
    // toJson 方法可以把 java 对象转换成为 json 字符串
    String personJsonString = gson.toJson(person);
    System.out.println(personJsonString);
    
    // fromJson 把 json 字符串转换回 Java 对象
    // 第一个参数是 json 字符串
    // 第二个参数是转换回去的 Java 对象类型
    Person person1 = gson.fromJson(personJsonString, Person.class);
    System.out.println(person1);
}
```



### List 和 json 的互转

```java
@Test
public void test2() {
    List<Person> personList = new ArrayList<>();
    personList.add(new Person(1, "国哥"));
    personList.add(new Person(2, "康师傅"));
    
    Gson gson = new Gson();
    // 把 List 转换为 json 字符串
    String personListJsonString = gson.toJson(personList);
    System.out.println(personListJsonString);
    
    List<Person> list = gson.fromJson(personListJsonString, new PersonListType().getType());System.out.println(list);
    Person person = list.get(0);
    System.out.println(person);
}
```

```java
public class PersonListType extends TypeToken<ArrayList<Person>>{
	
}
```



### map 和 json 的互转

```java
@Test
public void test3(){
    Map<Integer,Person> personMap = new HashMap<>();
    personMap.put(1, new Person(1, "国哥好帅"));
    personMap.put(2, new Person(2, "康师傅也好帅"));
    
    Gson gson = new Gson();
    // 把 map 集合转换成为 json 字符串
    String personMapJsonString = gson.toJson(personMap);
    System.out.println(personMapJsonString);
    
    // Map<Integer,Person> personMap2 = gson.fromJson(personMapJsonString, new PersonMapType().getType());
    Map<Integer,Person> personMap2 = gson.fromJson(personMapJsonString, new
    TypeToken<HashMap<Integer,Person>>(){}.getType());
    System.out.println(personMap2);
    Person p = personMap2.get(1);
    System.out.println(p);
}
```

**优化：**<span style="color: red;">使用匿名内部类</span>