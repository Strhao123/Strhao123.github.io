---
# 当前页面内容标题
title: 循环高级
author: 黑马_阿玮
# 分类
category:
- 计算机
# 标签
tag:
- java

sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: false
# 是否将该文章添加至文章列表中
article: false
# 是否将该文章添加至时间线中
timeline: false

date: 2024-11-06

headerDepth: 2

---





## 1. 无限循环

### 概念

​	又叫死循环。循环一直停不下来。

### for格式

```java
for(;;){
    System.out.println("循环执行一直在打印内容");
}
```

解释：

初始化语句可以空着不写，表示循环之前不定义任何的控制变量。

条件判断语句可以空着不写，如果不写，默认表示true，循环一直进行。

条件控制语句可以空着不写，表示每次循环体执行完毕后，控制变量不做任何变化。

### while格式

```java
while(true){
    System.out.println("循环执行一直在打印内容");
}
```

解释：

​	小括号里面就不能省略了，true一定要写出来，否则代码会报错。

### do...while格式

```java
do{
    System.out.println("循环执行一直在打印内容");
}while(true);
```

解释：

​	小括号里面就不能省略了，true一定要写出来，否则代码会报错。

### 无限循环的注意事项

* 最为常用的格式：while
* 无限循环下面不能再写其他代码了，因为永远执行不到。

## 2. 条件控制语句

* break
* continue

### break

​	不能单独存在的。可以用在switch和循环中，表示结束，跳出的意思。

代码示例：

```java
//1.吃1~5号包子
for (int i = 1; i <= 5; i++) {
    System.out.println("在吃第" + i + "个包子");
    //2.吃完第三个的时候就不吃了
    if(i == 3){
        break;//结束整个循环。
    }
}
```

### continue

​	不能单独存在的。只能存在于循环当中。

​	表示：跳过本次循环，继续执行下次循环。

代码示例：

```java
//1.吃1~5号包子
for (int i = 1; i <= 5; i++) {
    //2.第3个包子有虫子就跳过，继续吃下面的包子
    if(i == 3){
        //跳过本次循环（本次循环中，下面的代码就不执行了），继续执行下次循环。
        continue;
    }
    System.out.println("在吃第" + i + "个包子");
}
```

## 3. Random

Random跟Scanner一样，也是Java提前写好的类，我们不需要关心是如何实现的，只要直接使用就可以了。

### 使用步骤

1. 导包

```java
import java.util.Random;
导包的动作必须出现在类定义的上边。
```

2. 创建对象

```java
Random r = new Random ();
上面这个格式里面，只有r是变量名，可以变，其他的都不允许变。
```

3. 生成随机数

```java
int number = r.nextInt(随机数的范围);
上面这个格式里面，只有number是变量名，可以变，其他的都不允许变。
随机数范围的特点：从0开始，不包含指定值。比如：参数为10，生成的范围[0,10)
```

代码示例：

```java
//1.导包
import java.util.Random;

public class RandomDemo1 {
    public static void main(String[] args) {
        //2.创建对象
        Random r = new Random();
        //3.生成随机数
        int number = r.nextInt(100);//包左不包右，包头不包尾
        //0 ~ 99
        System.out.println(number);

    }
}
```
