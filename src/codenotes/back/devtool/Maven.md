---
# 当前页面内容标题
title: Maven
# 当前页面图标
icon: /icon/maven.svg
# 分类
category:
- 计算机
# 标签
tag:
- 工具
  
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
&nbsp;![](https://gitee.com/private_crh/notes/raw/master//typora/image-20241011213525291.png =800x270)
:::

::: right
**你笑，全世界都跟你笑；你哭，全世界只有你一个人哭。**
:::







## 1. 简介

<https://maven.apache.org/what-is-maven.html>

Maven 是一款为 Java==项目管理构建、依赖管理==的工具（软件），使用 Maven 可以自动化构建、测试、打包和发布项目，大大提高了开发效率和质量。

- **依赖管理：**Maven 可以管理项目的依赖，包括自动下载所需依赖库、自动下载依赖需要的依赖并且保证版本没有冲突、依赖版本管理等。
- **构建管理：**项目构建是指将源代码、配置文件、资源文件等转化为能够运行或部署的应用程序或库的过程。Maven 可以管理项目的编译、测试、打包、部署等构建过程。通过实现标准的构建生命周期，Maven 可以确保每一个构建过程都遵循同样的规则和最佳实践。同时，Maven 的插件机制也使得开发者可以对构建过程进行扩展和定制。

![](https://gitee.com/private_crh/notes/raw/master//typora/202410111125003.png)



## 2. 安装

[Maven的安装.pdf](https://gitee.com/private_crh/notes/raw/070386557ab987294c9eba006a1f9728abd16dcb/typora/202410111137664.pdf)



## 3. IDEA创建Maven

### GAVP

- **GroupID 格式**：com.{公司/BU }.业务线.\[子业务线]，最多 4 级。

  > com.alibaba.sourcing.multilang

- **ArtifactID 格式**：产品线名-模块名。语义不重复不遗漏，先到仓库中心去查证一下。

  > tc-client

- **Version版本号格式推荐**：主版本号.次版本号.修订号

  > 初始→1.0.0  修改bug → 1.0.1  功能调整 → 1.1.1等



**Packaging定义规则：**

​	指示将项目打包为什么类型的文件，idea根据packaging值，识别maven项目类型！

​	packaging 属性为 jar（默认值），代表普通的Java工程，打包以后是.jar结尾的文件。

​	packaging 属性为 war，代表Java的web工程，打包以后.war结尾的文件。

​	packaging 属性为 pom，代表不会打包，用来做继承的父工程。





### IDEA构建Maven Java SE

注意：此处省略了version，直接给了一个默认值：**1.0-SNAPSHOT**

自己后期可以在项目中随意修改！

![](https://gitee.com/private_crh/notes/raw/master//typora/202410111218218.png)





### IDEA构建Maven Java Web

#### 手动创建

1. 创建一个maven的javase工程

2. 修改pom.xml文件打包方式

   修改位置：项目下/pom.xml
   ```
   <groupId>com.atguigu</groupId>
   <artifactId>maven_web</artifactId>
   <version>1.0-SNAPSHOT</version>
   <!-- 新增一列打包方式packaging -->
   <packaging>war</packaging>
   ```

3. 设置**web资源路径**和**web.xml路径**

   点击File-->Project Structure

   ![](https://gitee.com/private_crh/notes/raw/master//typora/202410111222442.png)

   ![](https://gitee.com/private_crh/notes/raw/master//typora/202410111223187.png)

   ![](https://gitee.com/private_crh/notes/raw/master//typora/202410111223006.png)


#### 插件创建

1.  安装插件JBLJavaToWeb

2.  创建一个javase maven工程
3.  右键、使用插件快速补全web项目

    ![](https://gitee.com/private_crh/notes/raw/master//typora/202410111225375.png)



### Maven工程项目结构

Maven 是一个强大的构建工具，它提供一种标准化的项目结构，可以帮助开发者更容易地管理项目的依赖、构建、测试和发布等任务。以下是 Maven Web 程序的文件结构及每个文件的作用：

```
|-- pom.xml                               # Maven 项目管理文件 
|-- src
    |-- main                              # 项目主要代码
    |   |-- java                          # Java 源代码目录
    |   |   `-- com/example/myapp         # 开发者代码主目录
    |   |       |-- controller            # 存放 Controller 层代码的目录
    |   |       |-- service               # 存放 Service 层代码的目录
    |   |       |-- dao                   # 存放 DAO 层代码的目录
    |   |       `-- model                 # 存放数据模型的目录
    |   |-- resources                     # 资源目录，存放配置文件、静态资源等
    |   |   |-- log4j.properties          # 日志配置文件
    |   |   |-- spring-mybatis.xml        # Spring Mybatis 配置文件
    |   |   `-- static                    # 存放静态资源的目录
    |   |       |-- css                   # 存放 CSS 文件的目录
    |   |       |-- js                    # 存放 JavaScript 文件的目录
    |   |       `-- images                # 存放图片资源的目录
    |   `-- webapp                        # 存放 WEB 相关配置和资源
    |       |-- WEB-INF                   # 存放 WEB 应用配置文件
    |       |   |-- web.xml               # Web 应用的部署描述文件
    |       |   `-- classes               # 存放编译后的 class 文件
    |       `-- index.html                # Web 应用入口页面
    `-- test                              # 项目测试代码
        |-- java                          # 单元测试目录
        `-- resources                     # 测试资源目录
```





## 4. IDEA进行Maven工程构建

### 命令方式项目构建

| 命令        | 描述                        |
| ----------- | --------------------------- |
| mvn compile | 编译项目，生成target文件    |
| mvn package | 打包项目，生成jar或war文件  |
| mvn clean   | 清理编译或打包后的项目结构  |
| mvn install | 打包后上传到maven本地仓库   |
| mvn deploy  | 只打包，上传到maven私服仓库 |
| mvn site    | 生成站点                    |
| mvn test    | 执行测试源码                |

war包打包插件和jdk版本不匹配：pom.xml 添加以下代码即可

```
<build>
    <!-- jdk17 和 war包版本插件不匹配 -->
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-war-plugin</artifactId>
            <version>3.2.2</version>
        </plugin>
    </plugins>
</build>
```

可以同时执行多个命令

```shell
#清理，并重新打包
mvn clean package
```



### 可视化方式项目构建

<img src="https://gitee.com/private_crh/notes/raw/master//typora/202410111249217.png" alt="image-20241011124948173" style="zoom: 67%;" />



### 注意

测试类下类名`...Test`  方法名`test....`，否则无法编译......



**package与install关系**

> package是将工程打成jar或war文件，保存在target目录下
>
> install是将当前工程所生成的jar或war文件，安装到本地仓库，按照坐标保存到指定位置



**构建生命周期：**一组固定构建命令的有序集合，触发周期后的命令，会==自动触发周期前==的命令，简化构建过程

- **默认周期：**定义了真正构件时所需要执行的所有步骤，它是生命周期中最核心的部分

  ```
  包含命令：compile -  test - package - install - deploy
  ```



**插件、命令、周期三者关系**

> 周期→包含若干命令→包含若干插件
>
> 使用周期命令构建，简化构建过程
>
> 最终进行构建的是插件





## 5. IDEA 进行Maven依赖管理

### 核心信息配置

```
<!-- 模型版本 -->
<!-- 公司或者组织的唯一标志，并且配置时生成的路径也是由此生成， 如com.companyname.project-group，maven会将该项目打成的jar包放本地路径：/com/companyname/project-group -->
<!-- 项目的唯一ID，一个groupId下面可能多个项目，就是靠artifactId来区分的 -->
<!-- 版本号 -->
<!--打包方式
    默认：jar
    jar：普通模块打包，springboot项目基本都是jar包（内嵌tomcat运行）
    war：普通web程序打包，需要部署在外部的tomcat服务器中运行
    pom：父工程或聚合工程，该模块不写代码，仅进行依赖管理
-->

<modelVersion>4.0.0</modelVersion>
<groupId>com.companyname.project-group</groupId>
<artifactId>project</artifactId>
<version>1.0.0</version>
<packaging>jar/pom/war</packaging>
```



### 依赖管理配置

```
<!-- 
   通过编写依赖jar包的gav必要属性，引入第三方依赖！
   scope属性是可选的，可以指定依赖生效范围!
 -->
<dependencies>
    <dependency>
        <groupId>log4j</groupId>
        <artifactId>log4j</artifactId>
        <version>1.2.17</version>
        <scope>runtime</scope>
    </dependency>
</dependencies>
```

依赖版本统一提取和维护

```
<!--声明版本-->
<properties>
  	<!--命名随便,内部制定版本号即可！-->
  	<junit.version>4.12</junit.version>
  	<!-- 也可以通过 maven规定的固定的key，配置maven的参数！如下配置编码格式！-->
  	<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  	<project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
</properties>

<dependencies>
  	<dependency>
    	<groupId>junit</groupId>
    	<artifactId>junit</artifactId>
    	<!--引用properties声明版本 -->
   	 	<version>${junit.version}</version>
  	</dependency>
</dependencies>
```





### 依赖范围

通过设置==scope==，可以设置对应jar包的作用范围：编译环境、测试环境、运行环境

| 依赖范围     | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| **compile**  | 编译依赖范围，scope 元素的==缺省值==。使用此依赖范围的 Maven 依赖，对于三种 classpath 均有效，即该 Maven 依赖在上述三种 classpath 均会被引入。例如，log4j 在编译、测试、运行过程都是必须的。 |
| **test**     | 测试依赖范围。使用此依赖范围的 Maven 依赖，只对测试 classpath 有效。例如，Junit 依赖只有在测试阶段才需要。 |
| **provided** | 已提供依赖范围。使用此依赖范围的 Maven 依赖，只对编译 classpath 和测试 classpath 有效。例如，servlet-api 依赖对于编译、测试阶段而言是需要的，但是运行阶段，由于外部容器已经提供，故不需要 Maven 重复引入该依赖。 |
| runtime      | 运行时依赖范围。使用此依赖范围的 Maven 依赖，只对测试 classpath、运行 classpath 有效。例如，JDBC 驱动实现依赖，其在编译时只需 JDK 提供的 JDBC 接口即可，只有测试、运行阶段才需要实现了 JDBC 接口的驱动。 |
| system       | 系统依赖范围，其效果与 provided 的依赖范围一致。其用于添加非 Maven 仓库的本地依赖，通过依赖元素 dependency 中的 systemPath 元素指定本地依赖的路径。鉴于使用其会导致项目的可移植性降低，一般不推荐使用。 |
| import       | 导入依赖范围，该依赖范围只能与 dependencyManagement 元素配合使用，其功能是将目标 pom.xml 文件中 dependencyManagement 的配置导入合并到当前 pom.xml 的 dependencyManagement 中。 |



### 依赖下载失败解决

- 检查网络连接和 Maven 仓库服务器状态。
- 确保依赖项的版本号与项目对应的版本号匹配，并检查 POM 文件中的依赖项是否正确。
- 清除本地 Maven 仓库缓存（lastUpdated 文件）

> 可以将清除**lastUpdated文件**的操作写在一个脚本文件中，手动创建文件"clearLastUpdated.bat"，名字任意，但是后缀必须是bat，将以下内容复制到文件中

```bat
cls
@ECHO OFF 
SET CLEAR_PATH=D: 
SET CLEAR_DIR=D:\maven-repository(本地仓库路径)
color 0a 
TITLE ClearLastUpdated For Windows 
GOTO MENU 
:MENU 
CLS
ECHO. 
ECHO. * * * *  ClearLastUpdated For Windows  * * * * 
ECHO. * * 
ECHO. * 1 清理*.lastUpdated * 
ECHO. * * 
ECHO. * 2 查看*.lastUpdated * 
ECHO. * * 
ECHO. * 3 退 出 * 
ECHO. * * 
ECHO. * * * * * * * * * * * * * * * * * * * * * * * * 
ECHO. 
ECHO.请输入选择项目的序号： 
set /p ID= 
IF "%id%"=="1" GOTO cmd1 
IF "%id%"=="2" GOTO cmd2 
IF "%id%"=="3" EXIT 
PAUSE 
:cmd1 
ECHO. 开始清理
%CLEAR_PATH%
cd %CLEAR_DIR%
for /r %%i in (*.lastUpdated) do del %%i
ECHO.OK 
PAUSE 
GOTO MENU 
:cmd2 
ECHO. 查看*.lastUpdated文件
%CLEAR_PATH%
cd %CLEAR_DIR%
for /r %%i in (*.lastUpdated) do echo %%i
ECHO.OK 
PAUSE 
GOTO MENU 
```





### Build构建配置

默认情况下，构建不需要额外配置，都有对应的缺省配置。当然了，我们也可以在pom.xml定制一些配置，来修改默认构建的行为和产物！

**指定打包命名**

```
<!-- 默认的打包名称：artifactid+verson.打包方式 -->
<build>
  <finalName>定义打包名称</finalName>
</build>  
```

**指定打包文件**

> 如果在java文件夹中添加java类，会自动打包编译到classes文件夹下！
>
> 但是在java文件夹中添加xml文件，默认不会被打包！

默认情况下，按照maven工程结构放置的文件会默认被编译和打包！

但是mybatis中有时会将用于编写SQL语句的映射文件和mapper接口都写在src/main/java下的某个包中，此时映射文件就不会被打包

解决：

```
<build>
    <!--设置要打包的资源位置-->
    <resources>
        <resource>
            <!--设置资源所在目录-->
            <directory>src/main/java</directory>
            <includes>
                <!--设置包含的资源类型-->
                <include>**/*.xml</include>
            </includes>
        </resource>
    </resources>
</build>
```

**配置依赖插件**

dependencies标签下引入开发需要的jar包！我们可以在build/plugins/plugin标签引入插件！

```
<build>
  	<plugins>
      	<!-- tomcat插件 -->
      	<plugin>
        	<groupId>org.apache.tomcat.maven</groupId>
        	<artifactId>tomcat7-maven-plugin</artifactId>
         	<version>2.2</version>
          	<configuration>
          		<port>8090</port>
          		<path>/</path>
          		<uriEncoding>UTF-8</uriEncoding>
          		<server>tomcat7</server>
        	</configuration>
      	</plugin>
    </plugins>
</build>
```





## 6. 依赖传递和依赖冲突

### 依赖传递

#### 概念

假如有Maven项目A，项目B依赖A，项目C依赖B。那么我们可以说 C依赖A。

#### 作用

- 简化依赖导入过程
- 确保依赖版本正确

#### 传递原则

在 A 依赖 B，B 依赖 C 的前提下，C 是否能够传递到 A，取决于 B 依赖 C 时使用的依赖范围以及配置

- B 依赖 C 时使用 compile 范围：可以传递

- B 依赖 C 时使用 test 或 provided 范围：不能传递

- B 依赖 C 时，若配置了以下标签，则不能传递

  ```
  <dependency>
      <groupId>com.alibaba</groupId>
      <artifactId>druid</artifactId>
      <version>1.2.15</version>
      <optional>true</optional>
  </dependency>
  ```

#### 传递终止

-   非compile范围进行依赖传递
-   使用optional配置终止传递
-   依赖冲突（传递的依赖已经存在）

==注意==：

> Maven不支持多继承，一个maven项目只能继承一个父工程，可以支持多重继承
>
>



### 依赖冲突

当直接引用或者间接引用出现了相同的jar包，这时，一个项目就会出现相同的重复jar包，这就算作冲突！依赖冲突避免出现重复依赖，并且终止依赖传递！

![](https://gitee.com/private_crh/notes/raw/master//typora/202410111956603.png)

#### 解决依赖冲突

1. **自动选择原则**

   ==（第一原则）==短路优先原则

   > A—>B—>C—>D—>E—>X(version 0.0.1)
   >
   > A—>F—>X(version 0.0.2)
   >
   > 则A依赖于X(version 0.0.2)。

   ==（第二原则）==依赖路径长度相同情况下，则“先声明优先”

   > 在\<depencies>\</depencies>中，先声明的，路径相同，会优先选择！

2. **手动排除**

   ```
   <dependency>
     	<groupId>com.atguigu.maven</groupId>
     	<artifactId>pro01-maven-java</artifactId>
     	<version>1.0-SNAPSHOT</version>
     	<scope>compile</scope>
     	<!-- 使用excludes标签配置依赖的排除  -->
     	<exclusions>
       	<!-- 在exclude标签中配置一个具体的排除 -->
       	<exclusion>
         	<!-- 指定要排除的依赖的坐标（不需要写version） -->
         		<groupId>commons-logging</groupId>
         		<artifactId>commons-logging</artifactId>
       	</exclusion>
     	</exclusions>
   </dependency>
   ```





## 7. 继承和聚合

### 继承

Maven 继承是指在 Maven 的项目中，让一个项目从另一个项目中继承配置信息的机制。

#### 作用

- 让我们在多个项目中共享同一配置信息，简化项目的管理和维护工作。
- 在父工程中统一管理项目中的依赖信息。

#### 语法

1. 父工程

   ```
   <groupId>com.atguigu.maven</groupId>
   <artifactId>pro03-maven-parent</artifactId>
   <version>1.0-SNAPSHOT</version>
   <!-- 当前工程作为父工程，它要去管理子工程，所以打包方式必须是 pom -->
   <packaging>pom</packaging>
   ```

2. 子工程

   ```
   <!-- 使用parent标签指定当前工程的父工程 -->
   <parent>
     	<!-- 父工程的坐标 -->
     	<groupId>com.atguigu.maven</groupId>
     	<artifactId>pro03-maven-parent</artifactId>
     	<version>1.0-SNAPSHOT</version>
   </parent>
   
   <!-- 子工程的坐标 -->
   <!-- 如果子工程坐标中的groupId和version与父工程一致，那么可以省略 -->
   <!-- <groupId>com.atguigu.maven</groupId> -->
   <artifactId>pro04-maven-module</artifactId>
   <!-- <version>1.0-SNAPSHOT</version> -->
   ```



#### 父工程依赖统一管理

1. 父工程

   ```
   <!-- 使用dependencyManagement标签配置对依赖的管理 -->
   <!-- 被管理的依赖并没有真正被引入到工程 -->
   <dependencyManagement>
     	<dependencies>
       	<dependency>
         		<groupId>org.springframework</groupId>
         		<artifactId>spring-core</artifactId>
         		<version>6.0.10</version>
       	</dependency>
       	<dependency>
         		<groupId>org.springframework</groupId>
         		<artifactId>spring-beans</artifactId>
         		<version>6.0.10</version>
       	</dependency>
     	</dependencies>
   </dependencyManagement>
   ```

2. 子工程

   ```
   <!-- 子工程引用父工程中的依赖信息时，可以把版本号去掉。  -->
   <!-- 把版本号去掉就表示子工程中这个依赖的版本由父工程决定。 -->
   <!-- 具体来说是由父工程的dependencyManagement来决定。 -->
   <dependencies>
     	<dependency>
       	<groupId>org.springframework</groupId>
       	<artifactId>spring-core</artifactId>
     	</dependency>
     	<dependency>
       	<groupId>org.springframework</groupId>
       	<artifactId>spring-beans</artifactId>
     	</dependency>
   </dependencies>
   ```



==注意==

> 1.  若父工程不使用`<dependencyManagement>`，依赖无条件全部传递给子工程



### 聚合

Maven 聚合是指将多个项目组织到一个父级项目中，以便一起构建和管理的机制。聚合可以帮助我们更好地管理一组相关的子项目，同时简化它们的构建和部署过程。

#### 作用

1. 可以将多个子项目组织在一起，方便管理和维护。
2. 可以在一个命令中构建和发布多个相关的项目，简化了部署和维护工作。
3. 可以对多个项目进行顺序控制，避免出现构建依赖混乱导致构建失败的情况。
4. 可以在父项目中管理公共依赖项和插件，避免重复定义。

#### 语法

```
<project>
  <groupId>com.example</groupId>
  <artifactId>parent-project</artifactId>
  <packaging>pom</packaging>
  <version>1.0.0</version>
  <modules>
    <module>child-project1</module>
    <module>child-project2</module>
  </modules>
</project>
```

通过触发父工程构建命令会==引发所有子模块构建==，产生反应堆



## 8. 私服

Maven 私服是一种特殊的Maven远程仓库，它是架设在局域网内的仓库服务，用来代理位于外部的远程仓库（中央仓库、其他远程公共仓库）。

> 也把私服部署到公网，具体看公司业务的性质是否是保密的等等
>
> 局域网只能在公司用，部署到公网的话员工在家里也可以使用

![](https://gitee.com/private_crh/notes/raw/master//typora/202410112019833.png)

### 优势

1. 节省外网带宽
2. 下载速度更快
3. 便于部署第三方构件
4. 提高项目的稳定性，增强对项目的控制
5. 降低中央仓库得负荷压力

### 产品

> Apache的Archiva		JFrog的Artifactory		Sonatype的Nexus（[ˈneksəs]）（当前最流行、使用最广泛）



### Nexus

#### 下载安装

https://help.sonatype.com/repomanager3/product-information/download

解压，以管理员身份打开CMD，进入bin目录下，执行./nexus /run命令启动

首页地址：http://localhost:8081/，8081为默认端口号

#### 初始设置

1. Sign in登录

   > 用户名：admin
   >
   > 密码：查看 **nexus-3.61.0-02-win64\sonatype-work\nexus3\admin.password** 文件

2. 设置自己密码

3. 启用匿名登录后，后续操作比较简单，这里我们演示禁用匿名登录的操作
   ![](https://gitee.com/private_crh/notes/raw/master//typora/202410112027137.png)

4. 初始化完毕





#### Nexus上的各种仓库

![](https://gitee.com/private_crh/notes/raw/master//typora/image-20241011204708662.png)

| 仓库类型 | 说明                                           |
| -------- | ---------------------------------------------- |
| group    | 存放：通过 Nexus 获取的第三方 jar 包           |
| proxy    | 某个远程仓库的代理                             |
| hosted   | 存放：本团队其他开发人员部署到 Nexus 的 jar 包 |

| 仓库名称        | 说明                                                         |
| --------------- | ------------------------------------------------------------ |
| maven-central   | Nexus 对 Maven 中央仓库的代理                                |
| maven-public    | Nexus 默认创建，供开发人员下载使用的组仓库                   |
| maven-releases  | Nexus 默认创建，供开发人员部署自己 jar 包的宿主仓库 要求 releases 版本 |
| maven-snapshots | Nexus 默认创建，供开发人员部署自己 jar 包的宿主仓库 要求 snapshots 版本 |

> RELEASE(发布版本)：功能趋于稳定、当前更新停止，可以用于发行的版本，存储在私服中 的RELEASE仓库中。
>
>  SNAPSHOT(快照版本)：功能不稳定、尚处于开发中的版本，即快照版本，存储在私服的 SNAPSHOT仓库中。





#### 通过 Nexus 下载 jar 包

新增一个settings.xml   避免影响现存的配置

1. 修改本地maven的核心配置文件settings.xml，设置新的本地仓库地址

   ```
   <!-- 配置一个新的 Maven 本地仓库 -->
   <localRepository>新的本地仓库地址</localRepository>
   ```

2. 将原来配置阿里云仓库地址的 mirror 标签更改

   ```
   <mirror>
   	<id>nexus-mine</id>
   	<mirrorOf>central</mirrorOf>
   	<name>Nexus mine</name>
   	<url>http://localhost:8081/repository/maven-public/</url>
   </mirror>
   ```

3. 我们禁用了匿名访问，要继续配置 settings.xml

   ```
   <server>
       <id>nexus-mine</id>
       <username>admin</username>
       <password>密码</password>
   </server>
   ```

   ==server 标签内的 id 标签值必须和 mirror 标签中的 id 值一样==

4. 可以设置私服中中央仓库的地址为阿里云仓库地址

   ![](https://gitee.com/private_crh/notes/raw/master//typora/image-20241011204024695.png)
   ![](https://gitee.com/private_crh/notes/raw/master//typora/image-20241011204041111.png)

   > http://maven.aliyun.com/nexus/content/groups/public/



#### 将 jar 包部署到 Nexus

maven工程中配置：

```
<distributionManagement>
    <snapshotRepository>
        <id>nexus-mine</id>
        <name>Nexus Snapshot</name>
        <url>http://localhost:8081/repository/maven-snapshots/</url>
    </snapshotRepository>
</distributionManagement>
```

> 这里 snapshotRepository 的 id 标签必须和 settings.xml 中指定的 mirror 标签的 id 属性一致



#### 引用别人部署的 jar 包

maven工程中配置：

```
<repositories>
    <repository>
        <id>nexus-mine</id>
        <name>nexus-mine</name>
        <url>http://localhost:8081/repository/maven-snapshots/</url>
        <snapshots>
            <enabled>true</enabled>
        </snapshots>
        <releases>
            <enabled>true</enabled>
        </releases>
    </repository>
</repositories>
```





## 9. 附录

有时候给idea配置完maven仓库信息后，在idea中依然搜索不到仓库中的jar包。这是因为仓库中的jar包索引尚未更新到idea中。这个时候我们就需要更新idea中maven的索引了，具体做法如下：

![](https://gitee.com/private_crh/notes/raw/master//typora/image-20241011205231980.png)