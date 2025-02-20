---
# 当前页面内容标题
title: CSS基础

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

date: 2024-12-17

---

<br>

## 1. 简介

层叠样式表 (Cascading Style Sheets，缩写为 CSS），是一种 **样式表** 语言，用来**描述 HTML 文档的呈现**（**美化内容**）。

书写位置：**title 标签下方添加 style 双标签，style 标签里面书写 CSS 代码**。

> 提示：属性名和属性值成对出现 → 键值对。



## 2. 引入方式

* **内部**样式表：学习使用
    * CSS 代码写在 style 标签里面
* **外部**样式表：开发使用
    * CSS 代码写在单独的 CSS 文件中（**.css**）
    * 在 HTML 使用 link 标签引入

```html
<link rel="stylesheet" href="./my.css">
```

* **行内**样式：配合 JavaScript 使用
    * CSS 写在标签的 style 属性值里

```html
<div style="color: red; font-size:20px;">这是 div 标签</div>
```



## 3. 选择器

作用：**查找标签**，设置样式。以下是基础选择器

### 3.1 标签选择器

标签选择器：使用**标签名**作为选择器 → 选中**同名标签设置相同的样式**。

例如：p, h1, div, a, img......

```html
<style>
  p {
    color: red;
  }
</style>

```

> 注意：标签选择器**无法差异化**同名标签的显示效果。



### 3.2 类选择器

作用：查找标签，**差异化**设置标签的显示效果。

步骤：

* 定义类选择器 → **.类名**
* 使用类选择器 → 标签添加 **class="类名"**

```html
<style>
  /* 定义类选择器 */
  .red {
    color: red;
  }
</style>

<!-- 使用类选择器 -->
<div class="red">这是 div 标签</div>
<div class="red size">div 标签</div>
```

注意：

* 类名**自定义**，不要用纯数字或中文，尽量用英文命名
* 一个类选择器**可以供多个标签使用**
* **一个标签可以使用多个类名**，类名之间用**空格**隔开

> 开发习惯：类名见名知意，多个单词可以用 - 连接，例如：news-hd。



### 3.3 id选择器

作用：查找标签，差异化设置标签的显示效果。

场景：id 选择器一般**配合 JavaScript** 使用，很少用来设置 CSS 样式

步骤：

* 定义 id 选择器 → #id名
* 使用 id 选择器 → 标签添加 id= "id名"

```html
<style>
  /* 定义 id 选择器 */
  #red {
    color: red;
  }
</style>

<!-- 使用 id 选择器 -->
<div id="red">这是 div 标签</div>
```

> 规则：同一个 id 选择器在一个页面只能使用一次。



### 3.4 通配符选择器

作用：查找页面**所有**标签，设置相同样式。

通配符选择器： ***，不需要调用**，浏览器自动查找页面所有标签，设置相同的样式

```css
* {
  color: red;
}
```

> 经验：通配符选择器可以用于**清除标签的默认样式**，例如：标签默认的外边距、内边距。

![](assets/1680317584651.png)

## 4. 盒子尺寸和背景色

![](assets/1680317605797.png)



## 5. 文字控制属性

### 5.1 字体大小

* 属性名：**font-size**
* 属性值：文字尺寸，PC 端网页最常用的单位 **px**

```css
p {
  font-size: 30px;
}
```

> 经验：谷歌浏览器默认字号是16px。



### 5.2 字体样式（是否倾斜）

作用：清除文字默认的倾斜效果

属性名：**font-style**

属性值

* 正常（不倾斜）：**normal**
* 倾斜：**italic**



### 5.3 行高

作用：设置多行文本的间距

属性名：line-height

属性值

* 数字 + px
* 数字（当前标签font-size属性值的倍数）

```css
line-height: 30px;


/* 当前标签字体大小为16px */
line-height: 2;
```

![](assets/1680317770048.png)

> 行高的测量方法：从一行文字的最顶端（最底端）量到下一行文字的最顶端（最底端）。



#### 5.3.1 单行文字垂直居中

垂直居中技巧：**行高属性值等于盒子高度属性值**

注意：该技巧适用于单行文字垂直居中效果

```css
div {
  height: 100px;
  background-color: skyblue;

  /* 注意：只能是单行文字垂直居中 */
  line-height: 100px;
}
```

- 行高小于盒子高度，文字偏上
- 行高大于盒子高度，文字偏下


### 5.4 字体族

属性名：**font-family**

属性值：字体名

```css
font-family: 楷体;
```

> 拓展（了解）：font-family属性值可以书写多个字体名，各个字体名用逗号隔开，执行顺序是从左向右依次查找
>
> *  font-family 属性最后设置一个字体族名，网页开发建议使用无衬线字体

![](assets/1680318278244.png)

```css
font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
```



### 5.5 font复合属性

使用场景：设置网页文字公共样式

![](assets/1680318326214.png)

复合属性：属性的简写方式，**一个属性对应多个值的写法**，各个属性值之间用**空格**隔开。

**font: 是否倾斜  是否加粗  字号/行高 字体（必须按顺序书写）**

```css
div {
  font: italic 700 30px/2 楷体;
}
```

> 注意：字号和字体值必须书写，否则 font 属性不生效 。



### 5.6 文本缩进

属性名：**text-indent**

属性值：

* 数字 + px
* **数字 + em**（推荐：**1em = 当前标签的字号大小**）

```css
p {
  text-indent: 2em;
}
```



### 5.7 文本对齐方式

作用：控制内容水平对齐方式

属性名：**text-align**

![](assets/1680318461130.png)

```css
text-align: center;
```

> text-align本质是控制内容的对齐方式，<span style="color: red;">属性要设置给内容的父级</span>。

```html
<style>
  div {
    text-align: center;
  }
</style>

<div>
  <img src="./images/1.jpg" alt="">
</div>
```



### 5.8 文本修饰线

属性名： **text-decoration**

![](assets/1680318548558.png)



### 5.9 color 文字颜色

![](assets/1680318569852.png)

> 提示：只要属性值为颜色，都可以使用上述四种颜色表示方式，例如：背景色。


### 5.10 字体粗细

```css
p {
  /*不加粗,两种方式*/
  font-weight: 400;
  font-weight: normal;
  
  /*加粗*/
  font-weight: 700;
  font-weight: bold;
}
```


## 6. 调试工具

作用：检查、调试代码；帮助程序员发现代码问题、解决问题

1. 打开调试工具

* 浏览器窗口内任意位置 / 选中标签 → 鼠标右键 → 检查
* F12

2. 使用调试工具

![](assets/1680318624523.png)


