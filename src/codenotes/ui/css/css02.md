---
# 当前页面内容标题
title: CSS进阶

author: 黑马_pink

sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: false
# 是否将该文章添加至文章列表中
article: false
# 是否将该文章添加至时间线中
timeline: false

# 是否原创
isOriginal: true

date: 2024-12-18

---

<br>



## 1. 复合选择器

定义：由两个或多个基础选择器，通过不同的方式组合而成。

作用：更准确、更高效的选择目标元素（标签）。

### 1.1 后代选择器

后代选择器：**选中某元素的后代元素**。

选择器写法：父选择器  子选择器 { CSS 属性}，父子选择器之间用**空格**隔开。

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    /* li {
      color: red;
    } */

    /* .red {
      color: red;
    } */
    /* 后代选择器 中间用空格隔开 */
    /* ul li {
      color: red;
    } */

    /* 只让第一组ul 里面的li变色 */
    .first li {
      color: red;
    }
  </style>
</head>

<body>
  <ul class="first">
    <li>我是无序列表</li>
    <li>我是无序列表</li>
    <li>我是无序列表</li>
    <li>我是无序列表</li>
  </ul>
  <ul>
    <li>我是无序列表</li>
    <li>我是无序列表</li>
    <li>我是无序列表</li>
    <li>我是无序列表</li>
  </ul>
  <ol>
    <li>我是有序列表</li>
    <li>我是有序列表</li>
    <li>我是有序列表</li>
    <li>我是有序列表</li>
  </ol>
</body>

</html>
```

>小技巧： 后代选择器执行代码的时候，先执行孩子，后执行父亲。 先找li 后找ul
>
>我们找刘德华，先确定刘德华（li）， 然后确定刘德华在淄博 ul  吃烧烤

### 1.2 子代选择器

子代选择器：选中某元素的子代元素（**最近的子级**）。

选择器写法：父选择器 > 子选择器 { CSS 属性}，父子选择器之间用 **>** 隔开。

```html
<style>
  div > span {
    color: red;
  }
</style>

<div>
  <span>这是 div 里面的 span</span>
  <p>
    <span>这是 div 里面的 p 里面的 span</span>
  </p>
</div>

```

### 1.3 并集选择器

并集选择器：选中**多组标签**设置**相同**的样式。

选择器写法：选择器1, 选择器2, …, 选择器N { CSS 属性}，选择器之间用 **,** 隔开。

```html
<style>
  div,
  p,
  span {
    color: red;
  }
</style>

<div> div 标签</div>
<p>p 标签</p>
<span>span 标签</span>
```

### 1.4 交集选择器

交集选择器：选中**同时满足多个条件**的元素。

选择器写法：选择器1选择器2 { CSS 属性}，选择器之间连写，没有任何符号。 

```html
<style>
  p.box {
  color: red;
}
</style>

<p class="box">p 标签，使用了类选择器 box</p>
<p>p 标签</p>
<div class="box">div 标签，使用了类选择器 box</div>
```

> 注意：如果交集选择器中有标签选择器，标签选择器必须书写在最前面。 

### 1.5 伪类选择器

伪类选择器：伪类表示元素**状态**，选中元素的某个状态设置样式。

鼠标悬停状态：**选择器:hover { CSS 属性 }**

```html
<style>
  a:hover {
    color: red;
  }
  .box:hover {
    color: green;
  }
</style>

<a href="#">a 标签</a>
<div class="box">div 标签</div>
```

#### 1.6 超链接伪类

![](assets/1680319272736.png)

> 提示：如果要给超链接设置以上四个状态，需要按 LVHA 的顺序书写。 
>
> 经验：工作中，一个 a 标签选择器设置超链接的样式， hover状态特殊设置 

```css
a {
  color: red;
}

a:hover {
  color: green;
}
```

### 1. 7 基本选择器

| 基本选择器   | 说明                 | 举例                                            |
| ------------ | -------------------- |-----------------------------------------------|
| 标签选择器   | 选择页面中同名标签   | `div {color: red;} `                           |
| 类选择器     | 选择1个或者多个      | `.red {color: red;}      <div class="red"></div>` |
| id选择器     | 唯一的，只能使用一次 | `#red {color: red;}  <div id="red"></div> `     |
| 通配符选择器 | 选择所有的标签       | `* {color: red;}`                               |

### 1.8 复合选择器

| 复合选择器 | 说明                                          | 举例                       |
| ---------- | --------------------------------------------- | -------------------------- |
| 后代选择器 | 选择子孙后代  用 `空格` 隔开                  | `div span {color: red;}`     |
| 子代选择器 | 只选最近一级孩子（亲儿子选择器） 用  `>` 隔开 | `div>span{color: red;}`      |
| 并集选择器 | 选择多个标签， 用 `逗号` 隔开   理解为 和     | `div, span, p {color: red;}` |
| 交集选择器 | 既又的关系，既是某标签，又是某类名            | `p.one  {color: red;}`       |
| 伪类选择器 | 状态关系，  :hover 鼠标经过                   | `div:hover {color: red;}`    |



## 2. 特性

CSS特性：化简代码 / 定位问题，并解决问题

* 继承性
* 层叠性
* 优先级

### 2.1 继承性

继承性：子级默认继承父级的**文字控制属性**。 

![](assets/1680319376438.png)

> 注意：如果标签有默认文字样式会继承失败。 例如：a 标签的颜色、标题的字体大小。

~~~html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>继承性</title>
    <style>
      /* div {
      color: red;
      font-size: 30px;
      height: 100px;
      }

      span {
      color: green;
      } */

      p {
        color: pink;
      }

      /* 特殊情况1： 链接不会继承颜色 */
      a {
        color: red;
      }

      div {
        color: red;
        font-weight: 400;
        font-size: 14px;
      }

      /* 特殊情况2： 标题的字号和加粗不会继承 */
      h1 {
        font-weight: 400;
        font-size: 14px;
      }
    </style>
  </head>

  <body>
    <!-- <div>
<span>我是孩子</span>
</div> -->
    <p>
      <a href="#">我是链接</a>
    </p>
    <div>
      <h1>一级标题</h1>
    </div>
  </body>

</html>
~~~



### 2.2 层叠性

特点：

* 相同的属性会覆盖：**后面的 CSS 属性覆盖前面的 CSS 属性**
* 不同的属性会叠加：**不同的 CSS 属性都生效**

```html
<style>
  div {
    color: red;
    font-weight: 700;
  }
  div {
    color: green;
    font-size: 30px;
  }
</style>

<div>div 标签</div>
```

> 注意：选择器类型相同则遵循层叠性，否则按选择器优先级判断。 

 ![](assets/1682997033134.png)

### 2.3 优先级

优先级：也叫权重，当一个标签**使用了多种选择器时**，基于不同种类的选择器的**匹配规则**。

```html
<style>
  div {
    color: red;
  }
  .box {
    color: green;
  }
</style>

<div class="box">div 标签</div>
```

#### 2.3.1 基础选择器

规则：选择器**优先级高的样式生效**。

公式：**通配符选择器 < 标签选择器 < 类选择器 < id选择器 < 行内样式 < !important**

​           **（选中标签的范围越大，优先级越低）**

#### 2.3.2 复合选择器-叠加

叠加计算：如果是复合选择器，则需要**权重叠加**计算。

公式：（每一级之间不存在进位）

![](assets/1680319646205.png)

规则：

* 从左向右依次比较选个数，同一级个数多的优先级高，如果个数相同，则向后比较
* **!important 权重最高**
* 继承权重最低

| 选择器              | 权重 | 说明     |
| ------------------- | ---- | -------- |
| 继承/ *通配符       | 0    | 没有权重 |
| 标签选择器          | 1    | 累加     |
| 类选择器/伪类选择器 | 10   | 累加     |
| id选择器            | 100  | 累加     |
| 行内                | 1000 |          |
| !important          | ∞    |          |
|                     |      |          |

#### 2.3.3 继承的权重是0

~~~html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      /* li的权重是1 ，比 0 高 */
      li {
        color: red;
      }

      /* 继承的权重是 0, 所以无法直接修改 li的样式 */
      .box {
        color: green !important;
      }
      /* 结论： 想要修改谁的样式，就要选择谁 */
    </style>
  </head>

  <body>
    <ul class="box">
      <li>我是文字</li>
    </ul>
  </body>

</html>
~~~



## 3. Emmet 写法

Emmet写法：代码的**简写**方式，输入缩写 VS Code 会自动生成对应的代码。 

* HTML标签

![](assets/1680319897697.png)

* CSS：大多数简写方式为属性单词的**首字母** 

![](assets/1680319926111.png)

## 4. 背景属性

![](assets/1680319971861.png)

### 4.1 背景图

网页中，使用背景图实现装饰性的图片效果。

* 属性名：**background-image**（bgi）
* 属性值：url(背景图 URL)

```css
div {
  width: 400px;
  height: 400px;

  background-image: url(./images/1.png);
}
```

> 提示：背景图默认有**平铺（复制）效果**。 

### 4.2 平铺方式

属性名：**background-repeat**（bgr） 

![](assets/1680320072292.png)

```css
div {
  width: 400px;
  height: 400px;
  background-color: pink;
  background-image: url(./images/1.png);

  background-repeat: no-repeat;
}
```

### 4.3 背景图位置

属性名：**background-position**（bgp）

属性值：水平方向位置 垂直方向位置

* 关键字

![](assets/1680320211424.png)

* 坐标
  * 水平：正数向右；负数向左
  * 垂直：正数向下；负数向上

```css
div {
  width: 400px;
  height: 400px;
  background-color: pink;
  background-image: url(./images/1.png);
  background-repeat: no-repeat;

  background-position: center bottom;
  background-position: 50px -100px;
  background-position: 50px center;
}
```

```css
/*  一般的设置 */
<style>
    body {
       background-image: url(./images/bg.jpg);
       background-repeat: no-repeat;
       background-position: center 40px;
    }
</style>
```

> 提示：
>
> * 关键字取值方式写法，可以颠倒取值顺序
> * 可以只写一个关键字，另一个方向默认为居中；数字只写一个值表示水平方向，垂直方向为居中
> * 只要有了一个数字，第一个一定为水平，第二个一定为垂直

### 4.4 背景图缩放

作用：设置背景图大小

属性名：**background-size**（bgz）

常用属性值：

* 关键字
  *  cover：等比例缩放背景图片以完全覆盖背景区，可能背景图片部分看不见
  * contain：等比例缩放背景图片以完全装入背景区，可能背景区部分空白

* 百分比：根据盒子尺寸计算图片大小
* 数字 + 单位（例如：px）

```css
div {
  width: 500px;
  height: 400px;
  background-color: pink;
  background-image: url(./images/1.png);
  background-repeat: no-repeat;
  
  background-size: cover;
  background-size: contain;
}
```

> 提示：工作中，**图片比例与盒子比例相同**，使用 cover 或 contain 缩放背景图效果相同。

### 4.5 背景图固定

作用：背景不会随着元素的内容滚动。

属性名：**background-attachment**（bga）

属性值：**fixed**

```css
body {
  background-image: url(./images/bg.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
}
```

### 4.5 背景复合属性

属性名：**background**（bg）

属性值：背景色 背景图 背景图平铺方式 背景图位置/背景图缩放  背景图固定（**空格隔开各个属性值，不区分顺序**）

```css
div {
  width: 400px;
  height: 400px;

  background: pink url(./images/1.png) no-repeat right center/cover;
}
```

## 5. 显示模式

显示模式：标签（元素）的显示方式。 

![](assets/1680320464551.png)

作用：布局网页的时候，根据标签的显示模式选择合适的标签摆放内容。 

### 5.1 块级元素

特点：

* 独占一行
* 宽度默认是父级的100%
* 添加宽高属性生效

![](assets/1680320578369.png)

~~~html
<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>块元素</title>
    <style>
      /* 块级元素 */
      /* 1. 独占一行 */
      /* 2. 可以设置宽度和高度 */
      /* 3. 宽度默认和父亲一样宽，如果么有父亲，则和浏览器一样宽 */
      .box1,
      .box2 {
        width: 100px;
        height: 100px;
        background-color: pink;
      }
    </style>
  </head>

  <body>
    <p>abc</p>
    <div class="box1">div1</div>
    <div class="box2">
      <p>123</p>
      <p>123</p>
    </div>
  </body>

</html>
~~~



### 5.2 行内元素

特点：

* 一行可以显示多个(盒子间有缝隙)
* 设置宽高属性不生效
* 宽高尺寸由内容撑开

> 有em span strong a b i u ...

![](assets/1680320583985.png)

### 5.3 行内块元素

特点：

* 一行可以显示多个
* 设置宽高属性生效
* 宽高尺寸也可以由内容撑开

> 有img input td...

![](assets/1680320590005.png)

### 5.4 转换显示模式

属性：**display**

![](assets/1680320613034.png)

>经验： 
>
>1. 我们重点记住把行内元素比如链接转换为 块级或者行内块即可
>2.  display: block 尽量写到样式的第一行
>3. 块级元素可以控制里面的行内元素或者行内块元素 左中右对齐  tac 控制
>4. 块级元素不能控制里面的块级元素对齐

#### 5.4.1 隐藏与显示

display: none;

display: block;

 visibility: hidden; 

 visibility: visible; 

::: warning

使用 `display: none;` 隐藏后不占位置

使用 `visibility: hidden; `来隐藏后占位置

:::