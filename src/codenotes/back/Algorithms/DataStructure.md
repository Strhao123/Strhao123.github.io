---
# 当前页面内容标题
title: 数据结构


# 当前页面图标
icon: /icon/jiegou.svg
# 分类
category:
- 计算机
# 标签
tag:
- 数据结构
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: false
# 是否将该文章添加至文章列表中
article: false
# 是否将该文章添加至时间线中
timeline: false

# 是否原创
isOriginal: true


---




## 1. 绪论



### 意义
- 如何用程序代码把现实世界的问题信息化
- 如何用计算机高效地处理这些信息从而创造价值


<br>
<br>
<br>
<br>

## 2. 基础数据结构

### 数组
**概述**

在计算机科学中，数组是由一组元素（值或变量）组成的数据结构，每个元素有至少一个索引或键来标识


因为数组内的元素是<span style="color: red;">连续存储</span><span style="color: red;">连续存储</span>的，所以数组中元素的地址，可以通过其索引计算出来    
知道数组的数据起始地址 **BaseAddress** ，根据公式 <span style="color: red;">BaseAddress + i * size</span>  计算出索引  **i** 元素的地址
- i 即索引，在 Java、C 等语言都是从 0 开始
- size 是每个元素占用字节，例如 int 占 4，double 占 8


<br>
<br>


**性能**
**空间占用**

::: left
&nbsp;![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241031111837824.png =400x250)
:::

- 8 字节 markword
- 4 字节 class 指针（压缩 class 指针的情况）
- 4 字节 数组大小（决定了数组最大容量是 $2^{32}$）
- 数组元素 + 对齐字节（java 中所有对象大小都是 8 字节的整数倍[^12] ，不足的要用对齐字节补足）

例如
```java
int[] array = {1, 2, 3, 4, 5};
// 大小: 8 + 4 + 4 + 5*4 + 4(alignment) = 40 字节
```

<br>
<br>

**随机访问性能**  
即根据索引查找元素  
知道起始地址和索引，就间接知道元素地址，与数据规模无关，因此时间复杂度是 $O(1)$

<br>
<br>


**动态数组**  
自己实现, 不使用java提供的
::: tabs 

@tab 定义类
```java
public class DynamicArray implements Iterable<Integer> {
    private int size = 0; // 逻辑大小
    private int capacity = 8; // 容量
    private int[] array = {};
}
```

@tab 添加元素
```java
public class DynamicArray implements Iterable<Integer> {
    private int size = 0; // 逻辑大小
    private int capacity = 8; // 容量
    private int[] array = {};
    
    /**
     * 向最后位置 [size] 添加元素
     *
     * @param element 待添加元素
     */
    public void addLast(int element) {
        add(size, element);
    }

    /**
     * 向 [0 .. size] 位置添加元素
     *
     * @param index   索引位置
     * @param element 待添加元素
     */
    public void add(int index, int element) {
        checkAndGrow();

        // 添加逻辑
        if (index >= 0 && index < size) {
            // 向后挪动, 空出待插入位置
            System.arraycopy(array, index,
                    array, index + 1, size - index);
        }
        array[index] = element;
        size++;
    }

    private void checkAndGrow() {
        // 容量检查
        if (size == 0) {
            array = new int[capacity];
        } else if (size == capacity) {
            // 进行扩容, 1.5 1.618 2
            capacity += capacity >> 1;
            int[] newArray = new int[capacity];
            System.arraycopy(array, 0,
                    newArray, 0, size);
            array = newArray;
        }
    }

```


@tab 删除元素
```java
public class DynamicArray implements Iterable<Integer> {
    private int size = 0; // 逻辑大小
    private int capacity = 8; // 容量
    private int[] array = {};

    /**
     * 从 [0 .. size) 范围删除元素
     *
     * @param index 索引位置
     * @return 被删除元素
     */
    public int remove(int index) { // [0..size)
        int removed = array[index];
        if (index < size - 1) {
            // 向前挪动
            System.arraycopy(array, index + 1,
                    array, index, size - index - 1);
        }
        size--;
        return removed;
    }
```


@tab 查询元素
```java
public class DynamicArray implements Iterable<Integer> {
    private int size = 0; // 逻辑大小
    private int capacity = 8; // 容量
    private int[] array = {};

     /**
     * 查询元素
     *
     * @param index 索引位置, 在 [0..size) 区间内
     * @return 该索引位置的元素
     */
    public int get(int index) {
        return array[index];
    }

    /**
     * 遍历方法1
     *
     * @param consumer 遍历要执行的操作, 入参: 每个元素
     */
    public void foreach(Consumer<Integer> consumer) {
        for (int i = 0; i < size; i++) {
            // 提供 array[i]
            // 返回 void
            consumer.accept(array[i]);
        }
    }

    /**
     * 遍历方法2 - 迭代器遍历
     */
    @Override
    public Iterator<Integer> iterator() {
        return new Iterator<Integer>() {
            int i = 0;

            @Override
            public boolean hasNext() { // 有没有下一个元素
                return i < size;
            }

            @Override
            public Integer next() { // 返回当前元素,并移动到下一个元素
                return array[i++];
            }
        };
    }

    /**
     * 遍历方法3 - stream 遍历
     *
     * @return stream 流
     */
    public IntStream stream() {
        return IntStream.of(Arrays.copyOfRange(array, 0, size));
    }
}
```
:::


<span style="color: red;">注意: 这些方法实现，都简化了 index 的有效性判断，假设输入的 index 都是合法的</span>


<br>
<br>

**插入与删除性能**  
- 头部位置，时间复杂度是 $O(n)$  
- 中间位置，时间复杂度是 $O(n)$  
- 尾部位置，时间复杂度是 $O(1)$（均摊来说）


<br>
<br>


**二维数组**

内存图如下:
::: left
&nbsp;![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241031212820020.png =600x300)
:::

- 二维数组占 32 个字节，其中 array[0]，array[1]，array[2] 三个元素分别保存了指向三个一维数组的引用
- 三个一维数组各占 40 个字节
- 它们在内层布局上是**连续**的
- 当访问 $Array[i][j]$，$0\leq i \lt m, 0\leq j \lt n$时，就相当于
  - 先找到第 $i$ 个内层数组（行）
  - 再找到此内层数组中第 $j$ 个元素（列）

<br>
<br>

```java
byte[][] array = {
    {11, 12, 13, 14, 15},
    {21, 22, 23, 24, 25},
    {31, 32, 33, 34, 35},
};

```


已知 array 对象起始地址是 0x1000，那么 23 这个元素的地址是什么？  

> - 外层数组大小：16字节对象头 + 3元素 * 每个引用4字节 + 4 对齐字节 = 32 = 0x20
> - 第一个内层数组大小：16字节对象头 + 5元素 * 每个byte1字节 + 3 对齐字节 = 24 = 0x18
> - 第二个内层数组，16字节对象头 = 0x10，待查找元素索引为 2
> - 最后结果 = 0x1000 + 0x20 + 0x18 + 0x10 + 2*1 = 0x104a

<br><br>

**局部性原理**  

这里只讨论空间局部性
- cpu 读取内存（速度慢）数据后，会将其放入高速缓存（速度快）当中，如果后来的计算再用到此数据，在缓存中能读到的话，就不必读内存了
- 缓存的最小存储单位是缓存行（cache line），一般是 64 bytes，一次读的数据少了不划算啊，因此最少读 64 bytes 填满一个缓存行，因此读入某个数据时也会读取其**临近的数据**，这就是所谓**空间局部性**

<br><br>
先遍历行比先遍历列速度快
- 当循环要读入 $[0,0]$ 这条数据，由于局部性原理，读入 $[0,0]$ 的同时也读入了 $[0,1] ... [0,13]$
- 当循环要的是 $[1,0]$ 这条数据，缓存中没有, 又从内存去读
- 若是先遍历列的话, 等到读入$[0,1]$时, 缓存早已被覆盖, 又要从内存去读



<br>
<br>

**越界检查**  

java 中对数组元素的读写都有越界检查
```java 
bool is_within_bounds(int index) const        
{ 
    return 0 <= index && index < length(); 
}
```
此检查代码，不需要由程序员自己来调用，JVM 会帮我们调用



<br>
<br>

### 链表
链表是有序的列表，但是它在内存中是存储如下

::: left
&nbsp;![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241105084326828.png)
:::

- 链表是以节点的方式来存储,是链式存储
- 每个节点包含 data 域， next 域：指向下一个节点
- 链表的各个节点不一定是连续存储
- 链表分带头节点的链表和没有头节点的链表，根据实际的需求来确定
- 单链表(带头结点) 逻辑结构示意图如下

::: left
&nbsp;![](https://gitee.com/private_crh/notes/raw/master/typora/image-20241105084524389.png)
:::


::: info 示例
使用带 head 头的单向链表实现 –水浒英雄排行榜管理完成对英雄人物的增删改查操作
1. 第一种方法在添加英雄时，直接添加到链表的尾部
2. 第二种方式在添加英雄时，根据排名将英雄插入到指定位置(如果有这个排名，则添加失败，并给出提示)
:::

::: code-tabs

@tab 测试

```java
public class SingleLinkedListDemo {
  public static void main(String[] args) {
    // 进行测试
    // 先创建节点
    HeroNode hero1 = new HeroNode(1, "宋江", "及时雨");
    HeroNode hero2 = new HeroNode(2, "卢俊义", "玉麒麟");
    HeroNode hero3 = new HeroNode(3, "吴用", "智多星");
    HeroNode hero4 = new HeroNode(4, "林冲", "豹子头");

    // 创建要给链表
    SingleLinkedList singleLinkedList = new SingleLinkedList();
    // 加入
    // singleLinkedList.add(hero1);
    // singleLinkedList.add(hero4);
    // singleLinkedList.add(hero2);
    // singleLinkedList.add(hero3);
    // 加入按照编号的顺序
    singleLinkedList.addByOrder(hero1);
    singleLinkedList.addByOrder(hero4);
    singleLinkedList.addByOrder(hero2);
    singleLinkedList.addByOrder(hero3);

    //显示一把
    singleLinkedList.list();

    //测试修改节点的代码
    HeroNode newHeroNode = new HeroNode(2, "小卢", "玉麒麟~~");
    singleLinkedList.update(newHeroNode);
    System.out.println("修改后的链表情况~~");
    singleLinkedList.list();

    //删除一个节点
    singleLinkedList.del(1);
    singleLinkedList.del(4);
    System.out.println("删除后的链表情况~~");
    singleLinkedList.list();
  }
}
```

@tab 添加节点1

```java 
//定义 SingleLinkedList 管理我们的英雄
class SingleLinkedList {
  //先初始化一个头节点, 头节点不要动, 不存放具体的数据
  private HeroNode head = new HeroNode(0, "", "");
  //添加节点到单向链表
  //思路，当不考虑编号顺序时
  //1. 找到当前链表的最后节点
  //2. 将最后这个节点的 next 指向 新的节点
  public void add(HeroNode heroNode) {
    //因为 head 节点不能动，因此我们需要一个辅助遍历 temp
    HeroNode temp = head;
    //遍历链表，找到最后
    while(true) {
    //找到链表的最后
      if(temp.next == null) {//
        break;
      }
    //如果没有找到最后, 将将 temp 后移
      temp = temp.next;
    }
  
    //当退出 while 循环时，temp 就指向了链表的最后
    //将最后这个节点的 next 指向 新的节点
    temp.next = heroNode;
  }
```


@tab 添加节点2

```java 
//第二种方式在添加英雄时，根据排名将英雄插入到指定位置
//(如果有这个排名，则添加失败，并给出提示)
public void addByOrder(HeroNode heroNode) {
  //因为头节点不能动，因此我们仍然通过一个辅助指针(变量)来帮助找到添加的位置
  //因为单链表，因为我们找的 temp 是位于 添加位置的前一个节点，否则插入不了
  HeroNode temp = head;
  boolean flag = false; // flag 标志添加的编号是否存在，默认为 false
  while(true) {
    if(temp.next == null) {//说明 temp 已经在链表的最后
      break; //
    }
    if(temp.next.no > heroNode.no) { //位置找到，就在 temp 的后面插入
      break;
    } else if (temp.next.no == heroNode.no) {//说明希望添加的 heroNode 的编号已然存在
      flag = true; //说明编号存在
      break;
    }
    temp = temp.next; //后移，遍历当前链表
  }
  
  //判断 flag 的值
  if(flag) { //不能添加，说明编号存在
    System.out.printf("准备插入的英雄的编号 %d 已经存在了, 不能加入\n", heroNode.no);
  } else {
    //插入到链表中, temp 的后面
    heroNode.next = temp.next;
    temp.next = heroNode;
  }
}
```



@tab 修改节点

```java 
//修改节点的信息, 根据 no 编号来修改，即 no 编号不能改.
//说明
//1. 根据 newHeroNode 的 no 来修改即可
public void update(HeroNode newHeroNode) {
  //判断是否空
  if(head.next == null) {
    System.out.println("链表为空~");
    return;
  }
  
  //找到需要修改的节点, 根据 no 编号
  //定义一个辅助变量
  HeroNode temp = head.next;
  boolean flag = false; //表示是否找到该节点
  while(true) {
    if (temp == null) {
      break; //已经遍历完链表
    }
    if(temp.no == newHeroNode.no) {
      //找到
      flag = true;
      break;
    }
    temp = temp.next;
  }
  
  //根据 flag 判断是否找到要修改的节点
  if(flag) {
    temp.name = newHeroNode.name;
    temp.nickname = newHeroNode.nickname;
  } else { //没有找到
    System.out.printf("没有找到 编号 %d 的节点，不能修改\n", newHeroNode.no);
  }
}
```





@tab 删除节点

```java 
//思路
//1. head 不能动，因此我们需要一个 temp 辅助节点找到待删除节点的前一个节点
//2. 说明我们在比较时，是 temp.next.no 和 需要删除的节点的 no 比较
public void del(int no) {
  HeroNode temp = head;
  boolean flag = false; // 标志是否找到待删除节点的
  
  while(true) {
    if(temp.next == null) { //已经到链表的最后
      break;
    }
    if(temp.next.no == no) {
      //找到的待删除节点的前一个节点 temp
      flag = true;
      break;
    }
    temp = temp.next; //temp 后移，遍历
  }
  
  //判断 flag
  if(flag) { //找到
    //可以删除
    temp.next = temp.next.next;
  }else {
    System.out.printf("要删除的 %d 节点不存在\n", no);
  }
}
```


@tab 遍历

```java 
//显示链表[遍历]
public void list() {
  //判断链表是否为空
  if(head.next == null) {
    System.out.println("链表为空");
    return;
  }

  //因为头节点，不能动，因此我们需要一个辅助变量来遍历
  HeroNode temp = head.next;
  while(true) {
    //判断是否到链表最后
    if(temp == null) {
      break;
    }
  //输出节点的信息
  System.out.println(temp);
  //将 temp 后移， 一定小心
  temp = temp.next;
  }
}
}
```


@tab 定义节点

```java 
//定义 HeroNode ， 每个 HeroNode 对象就是一个节点
class HeroNode {
  public int no;
  public String name;
  public String nickname;
  public HeroNode next; //指向下一个节点

  //构造器
  public HeroNode(int no, String name, String nickname) {
    this.no = no;
    this.name = name;
    this.nickname = nickname;
  }

  //为了显示方法，我们重新 toString
  @Override
  public String toString() {
    return "HeroNode [no=" + no + ", name=" + name + ", nickname=" + nickname + "]";
  }
}
```

:::



[^12]: jdk 版本有关，64位jdk，按8字节对齐