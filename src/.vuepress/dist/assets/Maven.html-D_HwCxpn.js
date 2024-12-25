import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as a,o as l}from"./app-eWV4nnR8.js";const i={};function t(d,n){return l(),s("div",null,n[0]||(n[0]=[a(`<div style="text-align:left;"><p> <img src="https://gitee.com/private_crh/notes/raw/master//typora/image-20241011213525291.png" alt="" width="800" height="270" loading="lazy"></p></div><div style="text-align:right;"><p><strong>你笑，全世界都跟你笑；你哭，全世界只有你一个人哭。</strong></p></div><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><p><a href="https://maven.apache.org/what-is-maven.html" target="_blank" rel="noopener noreferrer">https://maven.apache.org/what-is-maven.html</a></p><p>Maven 是一款为 Java<mark>项目管理构建、依赖管理</mark>的工具（软件），使用 Maven 可以自动化构建、测试、打包和发布项目，大大提高了开发效率和质量。</p><ul><li>**依赖管理：**Maven 可以管理项目的依赖，包括自动下载所需依赖库、自动下载依赖需要的依赖并且保证版本没有冲突、依赖版本管理等。</li><li>**构建管理：**项目构建是指将源代码、配置文件、资源文件等转化为能够运行或部署的应用程序或库的过程。Maven 可以管理项目的编译、测试、打包、部署等构建过程。通过实现标准的构建生命周期，Maven 可以确保每一个构建过程都遵循同样的规则和最佳实践。同时，Maven 的插件机制也使得开发者可以对构建过程进行扩展和定制。</li></ul><figure><img src="https://gitee.com/private_crh/notes/raw/master//typora/202410111125003.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装"><span>2. 安装</span></a></h2><p><a href="https://gitee.com/private_crh/notes/raw/070386557ab987294c9eba006a1f9728abd16dcb/typora/202410111137664.pdf" target="_blank" rel="noopener noreferrer">Maven的安装.pdf</a></p><h2 id="_3-idea创建maven" tabindex="-1"><a class="header-anchor" href="#_3-idea创建maven"><span>3. IDEA创建Maven</span></a></h2><h3 id="gavp" tabindex="-1"><a class="header-anchor" href="#gavp"><span>GAVP</span></a></h3><ul><li><p><strong>GroupID 格式</strong>：com.{公司/BU }.业务线.[子业务线]，最多 4 级。</p><blockquote><p>com.alibaba.sourcing.multilang</p></blockquote></li><li><p><strong>ArtifactID 格式</strong>：产品线名-模块名。语义不重复不遗漏，先到仓库中心去查证一下。</p><blockquote><p>tc-client</p></blockquote></li><li><p><strong>Version版本号格式推荐</strong>：主版本号.次版本号.修订号</p><blockquote><p>初始→1.0.0 修改bug → 1.0.1 功能调整 → 1.1.1等</p></blockquote></li></ul><p><strong>Packaging定义规则：</strong></p><p>​ 指示将项目打包为什么类型的文件，idea根据packaging值，识别maven项目类型！</p><p>​ packaging 属性为 jar（默认值），代表普通的Java工程，打包以后是.jar结尾的文件。</p><p>​ packaging 属性为 war，代表Java的web工程，打包以后.war结尾的文件。</p><p>​ packaging 属性为 pom，代表不会打包，用来做继承的父工程。</p><h3 id="idea构建maven-java-se" tabindex="-1"><a class="header-anchor" href="#idea构建maven-java-se"><span>IDEA构建Maven Java SE</span></a></h3><p>注意：此处省略了version，直接给了一个默认值：<strong>1.0-SNAPSHOT</strong></p><p>自己后期可以在项目中随意修改！</p><figure><img src="https://gitee.com/private_crh/notes/raw/master//typora/202410111218218.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="idea构建maven-java-web" tabindex="-1"><a class="header-anchor" href="#idea构建maven-java-web"><span>IDEA构建Maven Java Web</span></a></h3><h4 id="手动创建" tabindex="-1"><a class="header-anchor" href="#手动创建"><span>手动创建</span></a></h4><ol><li><p>创建一个maven的javase工程</p></li><li><p>修改pom.xml文件打包方式</p><p>修改位置：项目下/pom.xml</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;groupId&gt;com.atguigu&lt;/groupId&gt;</span>
<span class="line">&lt;artifactId&gt;maven_web&lt;/artifactId&gt;</span>
<span class="line">&lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;</span>
<span class="line">&lt;!-- 新增一列打包方式packaging --&gt;</span>
<span class="line">&lt;packaging&gt;war&lt;/packaging&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>设置<strong>web资源路径</strong>和<strong>web.xml路径</strong></p><p>点击File--&gt;Project Structure</p><figure><img src="https://gitee.com/private_crh/notes/raw/master//typora/202410111222442.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://gitee.com/private_crh/notes/raw/master//typora/202410111223187.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://gitee.com/private_crh/notes/raw/master//typora/202410111223006.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ol><h4 id="插件创建" tabindex="-1"><a class="header-anchor" href="#插件创建"><span>插件创建</span></a></h4><ol><li><p>安装插件JBLJavaToWeb</p></li><li><p>创建一个javase maven工程</p></li><li><p>右键、使用插件快速补全web项目</p><figure><img src="https://gitee.com/private_crh/notes/raw/master//typora/202410111225375.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ol><h3 id="maven工程项目结构" tabindex="-1"><a class="header-anchor" href="#maven工程项目结构"><span>Maven工程项目结构</span></a></h3><p>Maven 是一个强大的构建工具，它提供一种标准化的项目结构，可以帮助开发者更容易地管理项目的依赖、构建、测试和发布等任务。以下是 Maven Web 程序的文件结构及每个文件的作用：</p><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" data-title="text" style="--vp-collapsed-lines:10;"><pre><code><span class="line">|-- pom.xml                               # Maven 项目管理文件 </span>
<span class="line">|-- src</span>
<span class="line">    |-- main                              # 项目主要代码</span>
<span class="line">    |   |-- java                          # Java 源代码目录</span>
<span class="line">    |   |   \`-- com/example/myapp         # 开发者代码主目录</span>
<span class="line">    |   |       |-- controller            # 存放 Controller 层代码的目录</span>
<span class="line">    |   |       |-- service               # 存放 Service 层代码的目录</span>
<span class="line">    |   |       |-- dao                   # 存放 DAO 层代码的目录</span>
<span class="line">    |   |       \`-- model                 # 存放数据模型的目录</span>
<span class="line">    |   |-- resources                     # 资源目录，存放配置文件、静态资源等</span>
<span class="line">    |   |   |-- log4j.properties          # 日志配置文件</span>
<span class="line">    |   |   |-- spring-mybatis.xml        # Spring Mybatis 配置文件</span>
<span class="line">    |   |   \`-- static                    # 存放静态资源的目录</span>
<span class="line">    |   |       |-- css                   # 存放 CSS 文件的目录</span>
<span class="line">    |   |       |-- js                    # 存放 JavaScript 文件的目录</span>
<span class="line">    |   |       \`-- images                # 存放图片资源的目录</span>
<span class="line">    |   \`-- webapp                        # 存放 WEB 相关配置和资源</span>
<span class="line">    |       |-- WEB-INF                   # 存放 WEB 应用配置文件</span>
<span class="line">    |       |   |-- web.xml               # Web 应用的部署描述文件</span>
<span class="line">    |       |   \`-- classes               # 存放编译后的 class 文件</span>
<span class="line">    |       \`-- index.html                # Web 应用入口页面</span>
<span class="line">    \`-- test                              # 项目测试代码</span>
<span class="line">        |-- java                          # 单元测试目录</span>
<span class="line">        \`-- resources                     # 测试资源目录</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="_4-idea进行maven工程构建" tabindex="-1"><a class="header-anchor" href="#_4-idea进行maven工程构建"><span>4. IDEA进行Maven工程构建</span></a></h2><h3 id="命令方式项目构建" tabindex="-1"><a class="header-anchor" href="#命令方式项目构建"><span>命令方式项目构建</span></a></h3><table><thead><tr><th>命令</th><th>描述</th></tr></thead><tbody><tr><td>mvn compile</td><td>编译项目，生成target文件</td></tr><tr><td>mvn package</td><td>打包项目，生成jar或war文件</td></tr><tr><td>mvn clean</td><td>清理编译或打包后的项目结构</td></tr><tr><td>mvn install</td><td>打包后上传到maven本地仓库</td></tr><tr><td>mvn deploy</td><td>只打包，上传到maven私服仓库</td></tr><tr><td>mvn site</td><td>生成站点</td></tr><tr><td>mvn test</td><td>执行测试源码</td></tr></tbody></table><p>war包打包插件和jdk版本不匹配：pom.xml 添加以下代码即可</p><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" data-title="text" style="--vp-collapsed-lines:10;"><pre><code><span class="line">&lt;build&gt;</span>
<span class="line">    &lt;!-- jdk17 和 war包版本插件不匹配 --&gt;</span>
<span class="line">    &lt;plugins&gt;</span>
<span class="line">        &lt;plugin&gt;</span>
<span class="line">            &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;</span>
<span class="line">            &lt;artifactId&gt;maven-war-plugin&lt;/artifactId&gt;</span>
<span class="line">            &lt;version&gt;3.2.2&lt;/version&gt;</span>
<span class="line">        &lt;/plugin&gt;</span>
<span class="line">    &lt;/plugins&gt;</span>
<span class="line">&lt;/build&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>可以同时执行多个命令</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment">#清理，并重新打包</span></span>
<span class="line">mvn clean package</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可视化方式项目构建" tabindex="-1"><a class="header-anchor" href="#可视化方式项目构建"><span>可视化方式项目构建</span></a></h3><img src="https://gitee.com/private_crh/notes/raw/master//typora/202410111249217.png" alt="image-20241011124948173" style="zoom:67%;"><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意"><span>注意</span></a></h3><p>测试类下类名<code>...Test</code> 方法名<code>test....</code>，否则无法编译......</p><p><strong>package与install关系</strong></p><blockquote><p>package是将工程打成jar或war文件，保存在target目录下</p><p>install是将当前工程所生成的jar或war文件，安装到本地仓库，按照坐标保存到指定位置</p></blockquote><p>**构建生命周期：**一组固定构建命令的有序集合，触发周期后的命令，会<mark>自动触发周期前</mark>的命令，简化构建过程</p><ul><li><p>**默认周期：**定义了真正构件时所需要执行的所有步骤，它是生命周期中最核心的部分</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">包含命令：compile -  test - package - install - deploy</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><p><strong>插件、命令、周期三者关系</strong></p><blockquote><p>周期→包含若干命令→包含若干插件</p><p>使用周期命令构建，简化构建过程</p><p>最终进行构建的是插件</p></blockquote><h2 id="_5-idea-进行maven依赖管理" tabindex="-1"><a class="header-anchor" href="#_5-idea-进行maven依赖管理"><span>5. IDEA 进行Maven依赖管理</span></a></h2><h3 id="核心信息配置" tabindex="-1"><a class="header-anchor" href="#核心信息配置"><span>核心信息配置</span></a></h3><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" data-title="text" style="--vp-collapsed-lines:10;"><pre><code><span class="line">&lt;!-- 模型版本 --&gt;</span>
<span class="line">&lt;!-- 公司或者组织的唯一标志，并且配置时生成的路径也是由此生成， 如com.companyname.project-group，maven会将该项目打成的jar包放本地路径：/com/companyname/project-group --&gt;</span>
<span class="line">&lt;!-- 项目的唯一ID，一个groupId下面可能多个项目，就是靠artifactId来区分的 --&gt;</span>
<span class="line">&lt;!-- 版本号 --&gt;</span>
<span class="line">&lt;!--打包方式</span>
<span class="line">    默认：jar</span>
<span class="line">    jar：普通模块打包，springboot项目基本都是jar包（内嵌tomcat运行）</span>
<span class="line">    war：普通web程序打包，需要部署在外部的tomcat服务器中运行</span>
<span class="line">    pom：父工程或聚合工程，该模块不写代码，仅进行依赖管理</span>
<span class="line">--&gt;</span>
<span class="line"></span>
<span class="line">&lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;</span>
<span class="line">&lt;groupId&gt;com.companyname.project-group&lt;/groupId&gt;</span>
<span class="line">&lt;artifactId&gt;project&lt;/artifactId&gt;</span>
<span class="line">&lt;version&gt;1.0.0&lt;/version&gt;</span>
<span class="line">&lt;packaging&gt;jar/pom/war&lt;/packaging&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="依赖管理配置" tabindex="-1"><a class="header-anchor" href="#依赖管理配置"><span>依赖管理配置</span></a></h3><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" data-title="text" style="--vp-collapsed-lines:10;"><pre><code><span class="line">&lt;!-- </span>
<span class="line">   通过编写依赖jar包的gav必要属性，引入第三方依赖！</span>
<span class="line">   scope属性是可选的，可以指定依赖生效范围!</span>
<span class="line"> --&gt;</span>
<span class="line">&lt;dependencies&gt;</span>
<span class="line">    &lt;dependency&gt;</span>
<span class="line">        &lt;groupId&gt;log4j&lt;/groupId&gt;</span>
<span class="line">        &lt;artifactId&gt;log4j&lt;/artifactId&gt;</span>
<span class="line">        &lt;version&gt;1.2.17&lt;/version&gt;</span>
<span class="line">        &lt;scope&gt;runtime&lt;/scope&gt;</span>
<span class="line">    &lt;/dependency&gt;</span>
<span class="line">&lt;/dependencies&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>依赖版本统一提取和维护</p><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" data-title="text" style="--vp-collapsed-lines:10;"><pre><code><span class="line">&lt;!--声明版本--&gt;</span>
<span class="line">&lt;properties&gt;</span>
<span class="line">  	&lt;!--命名随便,内部制定版本号即可！--&gt;</span>
<span class="line">  	&lt;junit.version&gt;4.12&lt;/junit.version&gt;</span>
<span class="line">  	&lt;!-- 也可以通过 maven规定的固定的key，配置maven的参数！如下配置编码格式！--&gt;</span>
<span class="line">  	&lt;project.build.sourceEncoding&gt;UTF-8&lt;/project.build.sourceEncoding&gt;</span>
<span class="line">  	&lt;project.reporting.outputEncoding&gt;UTF-8&lt;/project.reporting.outputEncoding&gt;</span>
<span class="line">&lt;/properties&gt;</span>
<span class="line"></span>
<span class="line">&lt;dependencies&gt;</span>
<span class="line">  	&lt;dependency&gt;</span>
<span class="line">    	&lt;groupId&gt;junit&lt;/groupId&gt;</span>
<span class="line">    	&lt;artifactId&gt;junit&lt;/artifactId&gt;</span>
<span class="line">    	&lt;!--引用properties声明版本 --&gt;</span>
<span class="line">   	 	&lt;version&gt;\${junit.version}&lt;/version&gt;</span>
<span class="line">  	&lt;/dependency&gt;</span>
<span class="line">&lt;/dependencies&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="依赖范围" tabindex="-1"><a class="header-anchor" href="#依赖范围"><span>依赖范围</span></a></h3><p>通过设置<mark>scope</mark>，可以设置对应jar包的作用范围：编译环境、测试环境、运行环境</p><table><thead><tr><th>依赖范围</th><th>描述</th></tr></thead><tbody><tr><td><strong>compile</strong></td><td>编译依赖范围，scope 元素的<mark>缺省值</mark>。使用此依赖范围的 Maven 依赖，对于三种 classpath 均有效，即该 Maven 依赖在上述三种 classpath 均会被引入。例如，log4j 在编译、测试、运行过程都是必须的。</td></tr><tr><td><strong>test</strong></td><td>测试依赖范围。使用此依赖范围的 Maven 依赖，只对测试 classpath 有效。例如，Junit 依赖只有在测试阶段才需要。</td></tr><tr><td><strong>provided</strong></td><td>已提供依赖范围。使用此依赖范围的 Maven 依赖，只对编译 classpath 和测试 classpath 有效。例如，servlet-api 依赖对于编译、测试阶段而言是需要的，但是运行阶段，由于外部容器已经提供，故不需要 Maven 重复引入该依赖。</td></tr><tr><td>runtime</td><td>运行时依赖范围。使用此依赖范围的 Maven 依赖，只对测试 classpath、运行 classpath 有效。例如，JDBC 驱动实现依赖，其在编译时只需 JDK 提供的 JDBC 接口即可，只有测试、运行阶段才需要实现了 JDBC 接口的驱动。</td></tr><tr><td>system</td><td>系统依赖范围，其效果与 provided 的依赖范围一致。其用于添加非 Maven 仓库的本地依赖，通过依赖元素 dependency 中的 systemPath 元素指定本地依赖的路径。鉴于使用其会导致项目的可移植性降低，一般不推荐使用。</td></tr><tr><td>import</td><td>导入依赖范围，该依赖范围只能与 dependencyManagement 元素配合使用，其功能是将目标 pom.xml 文件中 dependencyManagement 的配置导入合并到当前 pom.xml 的 dependencyManagement 中。</td></tr></tbody></table><h3 id="依赖下载失败解决" tabindex="-1"><a class="header-anchor" href="#依赖下载失败解决"><span>依赖下载失败解决</span></a></h3><ul><li>检查网络连接和 Maven 仓库服务器状态。</li><li>确保依赖项的版本号与项目对应的版本号匹配，并检查 POM 文件中的依赖项是否正确。</li><li>清除本地 Maven 仓库缓存（lastUpdated 文件）</li></ul><blockquote><p>可以将清除<strong>lastUpdated文件</strong>的操作写在一个脚本文件中，手动创建文件&quot;clearLastUpdated.bat&quot;，名字任意，但是后缀必须是bat，将以下内容复制到文件中</p></blockquote><div class="language-bat line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="bat" data-title="bat" style="--vp-collapsed-lines:10;"><pre><code><span class="line">cls</span>
<span class="line">@ECHO OFF </span>
<span class="line">SET CLEAR_PATH=D: </span>
<span class="line">SET CLEAR_DIR=D:\\maven-repository(本地仓库路径)</span>
<span class="line">color 0a </span>
<span class="line">TITLE ClearLastUpdated For Windows </span>
<span class="line">GOTO MENU </span>
<span class="line">:MENU </span>
<span class="line">CLS</span>
<span class="line">ECHO. </span>
<span class="line">ECHO. * * * *  ClearLastUpdated For Windows  * * * * </span>
<span class="line">ECHO. * * </span>
<span class="line">ECHO. * 1 清理*.lastUpdated * </span>
<span class="line">ECHO. * * </span>
<span class="line">ECHO. * 2 查看*.lastUpdated * </span>
<span class="line">ECHO. * * </span>
<span class="line">ECHO. * 3 退 出 * </span>
<span class="line">ECHO. * * </span>
<span class="line">ECHO. * * * * * * * * * * * * * * * * * * * * * * * * </span>
<span class="line">ECHO. </span>
<span class="line">ECHO.请输入选择项目的序号： </span>
<span class="line">set /p ID= </span>
<span class="line">IF &quot;%id%&quot;==&quot;1&quot; GOTO cmd1 </span>
<span class="line">IF &quot;%id%&quot;==&quot;2&quot; GOTO cmd2 </span>
<span class="line">IF &quot;%id%&quot;==&quot;3&quot; EXIT </span>
<span class="line">PAUSE </span>
<span class="line">:cmd1 </span>
<span class="line">ECHO. 开始清理</span>
<span class="line">%CLEAR_PATH%</span>
<span class="line">cd %CLEAR_DIR%</span>
<span class="line">for /r %%i in (*.lastUpdated) do del %%i</span>
<span class="line">ECHO.OK </span>
<span class="line">PAUSE </span>
<span class="line">GOTO MENU </span>
<span class="line">:cmd2 </span>
<span class="line">ECHO. 查看*.lastUpdated文件</span>
<span class="line">%CLEAR_PATH%</span>
<span class="line">cd %CLEAR_DIR%</span>
<span class="line">for /r %%i in (*.lastUpdated) do echo %%i</span>
<span class="line">ECHO.OK </span>
<span class="line">PAUSE </span>
<span class="line">GOTO MENU </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="build构建配置" tabindex="-1"><a class="header-anchor" href="#build构建配置"><span>Build构建配置</span></a></h3><p>默认情况下，构建不需要额外配置，都有对应的缺省配置。当然了，我们也可以在pom.xml定制一些配置，来修改默认构建的行为和产物！</p><p><strong>指定打包命名</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;!-- 默认的打包名称：artifactid+verson.打包方式 --&gt;</span>
<span class="line">&lt;build&gt;</span>
<span class="line">  &lt;finalName&gt;定义打包名称&lt;/finalName&gt;</span>
<span class="line">&lt;/build&gt;  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>指定打包文件</strong></p><blockquote><p>如果在java文件夹中添加java类，会自动打包编译到classes文件夹下！</p><p>但是在java文件夹中添加xml文件，默认不会被打包！</p></blockquote><p>默认情况下，按照maven工程结构放置的文件会默认被编译和打包！</p><p>但是mybatis中有时会将用于编写SQL语句的映射文件和mapper接口都写在src/main/java下的某个包中，此时映射文件就不会被打包</p><p>解决：</p><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" data-title="text" style="--vp-collapsed-lines:10;"><pre><code><span class="line">&lt;build&gt;</span>
<span class="line">    &lt;!--设置要打包的资源位置--&gt;</span>
<span class="line">    &lt;resources&gt;</span>
<span class="line">        &lt;resource&gt;</span>
<span class="line">            &lt;!--设置资源所在目录--&gt;</span>
<span class="line">            &lt;directory&gt;src/main/java&lt;/directory&gt;</span>
<span class="line">            &lt;includes&gt;</span>
<span class="line">                &lt;!--设置包含的资源类型--&gt;</span>
<span class="line">                &lt;include&gt;**/*.xml&lt;/include&gt;</span>
<span class="line">            &lt;/includes&gt;</span>
<span class="line">        &lt;/resource&gt;</span>
<span class="line">    &lt;/resources&gt;</span>
<span class="line">&lt;/build&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><strong>配置依赖插件</strong></p><p>dependencies标签下引入开发需要的jar包！我们可以在build/plugins/plugin标签引入插件！</p><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" data-title="text" style="--vp-collapsed-lines:10;"><pre><code><span class="line">&lt;build&gt;</span>
<span class="line">  	&lt;plugins&gt;</span>
<span class="line">      	&lt;!-- tomcat插件 --&gt;</span>
<span class="line">      	&lt;plugin&gt;</span>
<span class="line">        	&lt;groupId&gt;org.apache.tomcat.maven&lt;/groupId&gt;</span>
<span class="line">        	&lt;artifactId&gt;tomcat7-maven-plugin&lt;/artifactId&gt;</span>
<span class="line">         	&lt;version&gt;2.2&lt;/version&gt;</span>
<span class="line">          	&lt;configuration&gt;</span>
<span class="line">          		&lt;port&gt;8090&lt;/port&gt;</span>
<span class="line">          		&lt;path&gt;/&lt;/path&gt;</span>
<span class="line">          		&lt;uriEncoding&gt;UTF-8&lt;/uriEncoding&gt;</span>
<span class="line">          		&lt;server&gt;tomcat7&lt;/server&gt;</span>
<span class="line">        	&lt;/configuration&gt;</span>
<span class="line">      	&lt;/plugin&gt;</span>
<span class="line">    &lt;/plugins&gt;</span>
<span class="line">&lt;/build&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="_6-依赖传递和依赖冲突" tabindex="-1"><a class="header-anchor" href="#_6-依赖传递和依赖冲突"><span>6. 依赖传递和依赖冲突</span></a></h2><h3 id="依赖传递" tabindex="-1"><a class="header-anchor" href="#依赖传递"><span>依赖传递</span></a></h3><h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h4><p>假如有Maven项目A，项目B依赖A，项目C依赖B。那么我们可以说 C依赖A。</p><h4 id="作用" tabindex="-1"><a class="header-anchor" href="#作用"><span>作用</span></a></h4><ul><li>简化依赖导入过程</li><li>确保依赖版本正确</li></ul><h4 id="传递原则" tabindex="-1"><a class="header-anchor" href="#传递原则"><span>传递原则</span></a></h4><p>在 A 依赖 B，B 依赖 C 的前提下，C 是否能够传递到 A，取决于 B 依赖 C 时使用的依赖范围以及配置</p><ul><li><p>B 依赖 C 时使用 compile 范围：可以传递</p></li><li><p>B 依赖 C 时使用 test 或 provided 范围：不能传递</p></li><li><p>B 依赖 C 时，若配置了以下标签，则不能传递</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;dependency&gt;</span>
<span class="line">    &lt;groupId&gt;com.alibaba&lt;/groupId&gt;</span>
<span class="line">    &lt;artifactId&gt;druid&lt;/artifactId&gt;</span>
<span class="line">    &lt;version&gt;1.2.15&lt;/version&gt;</span>
<span class="line">    &lt;optional&gt;true&lt;/optional&gt;</span>
<span class="line">&lt;/dependency&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="传递终止" tabindex="-1"><a class="header-anchor" href="#传递终止"><span>传递终止</span></a></h4><ul><li>非compile范围进行依赖传递</li><li>使用optional配置终止传递</li><li>依赖冲突（传递的依赖已经存在）</li></ul><p><mark>注意</mark>：</p><blockquote><p>Maven不支持多继承，一个maven项目只能继承一个父工程，可以支持多重继承</p></blockquote><h3 id="依赖冲突" tabindex="-1"><a class="header-anchor" href="#依赖冲突"><span>依赖冲突</span></a></h3><p>当直接引用或者间接引用出现了相同的jar包，这时，一个项目就会出现相同的重复jar包，这就算作冲突！依赖冲突避免出现重复依赖，并且终止依赖传递！</p><figure><img src="https://gitee.com/private_crh/notes/raw/master//typora/202410111956603.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="解决依赖冲突" tabindex="-1"><a class="header-anchor" href="#解决依赖冲突"><span>解决依赖冲突</span></a></h4><ol><li><p><strong>自动选择原则</strong></p><p>==（第一原则）==短路优先原则</p><blockquote><p>A—&gt;B—&gt;C—&gt;D—&gt;E—&gt;X(version 0.0.1)</p><p>A—&gt;F—&gt;X(version 0.0.2)</p><p>则A依赖于X(version 0.0.2)。</p></blockquote><p>==（第二原则）==依赖路径长度相同情况下，则“先声明优先”</p><blockquote><p>在&lt;depencies&gt;&lt;/depencies&gt;中，先声明的，路径相同，会优先选择！</p></blockquote></li><li><p><strong>手动排除</strong></p><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" data-title="text" style="--vp-collapsed-lines:10;"><pre><code><span class="line">&lt;dependency&gt;</span>
<span class="line">  	&lt;groupId&gt;com.atguigu.maven&lt;/groupId&gt;</span>
<span class="line">  	&lt;artifactId&gt;pro01-maven-java&lt;/artifactId&gt;</span>
<span class="line">  	&lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;</span>
<span class="line">  	&lt;scope&gt;compile&lt;/scope&gt;</span>
<span class="line">  	&lt;!-- 使用excludes标签配置依赖的排除  --&gt;</span>
<span class="line">  	&lt;exclusions&gt;</span>
<span class="line">    	&lt;!-- 在exclude标签中配置一个具体的排除 --&gt;</span>
<span class="line">    	&lt;exclusion&gt;</span>
<span class="line">      	&lt;!-- 指定要排除的依赖的坐标（不需要写version） --&gt;</span>
<span class="line">      		&lt;groupId&gt;commons-logging&lt;/groupId&gt;</span>
<span class="line">      		&lt;artifactId&gt;commons-logging&lt;/artifactId&gt;</span>
<span class="line">    	&lt;/exclusion&gt;</span>
<span class="line">  	&lt;/exclusions&gt;</span>
<span class="line">&lt;/dependency&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li></ol><h2 id="_7-继承和聚合" tabindex="-1"><a class="header-anchor" href="#_7-继承和聚合"><span>7. 继承和聚合</span></a></h2><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承"><span>继承</span></a></h3><p>Maven 继承是指在 Maven 的项目中，让一个项目从另一个项目中继承配置信息的机制。</p><h4 id="作用-1" tabindex="-1"><a class="header-anchor" href="#作用-1"><span>作用</span></a></h4><ul><li>让我们在多个项目中共享同一配置信息，简化项目的管理和维护工作。</li><li>在父工程中统一管理项目中的依赖信息。</li></ul><h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h4><ol><li><p>父工程</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;groupId&gt;com.atguigu.maven&lt;/groupId&gt;</span>
<span class="line">&lt;artifactId&gt;pro03-maven-parent&lt;/artifactId&gt;</span>
<span class="line">&lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;</span>
<span class="line">&lt;!-- 当前工程作为父工程，它要去管理子工程，所以打包方式必须是 pom --&gt;</span>
<span class="line">&lt;packaging&gt;pom&lt;/packaging&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>子工程</p><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" data-title="text" style="--vp-collapsed-lines:10;"><pre><code><span class="line">&lt;!-- 使用parent标签指定当前工程的父工程 --&gt;</span>
<span class="line">&lt;parent&gt;</span>
<span class="line">  	&lt;!-- 父工程的坐标 --&gt;</span>
<span class="line">  	&lt;groupId&gt;com.atguigu.maven&lt;/groupId&gt;</span>
<span class="line">  	&lt;artifactId&gt;pro03-maven-parent&lt;/artifactId&gt;</span>
<span class="line">  	&lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;</span>
<span class="line">&lt;/parent&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 子工程的坐标 --&gt;</span>
<span class="line">&lt;!-- 如果子工程坐标中的groupId和version与父工程一致，那么可以省略 --&gt;</span>
<span class="line">&lt;!-- &lt;groupId&gt;com.atguigu.maven&lt;/groupId&gt; --&gt;</span>
<span class="line">&lt;artifactId&gt;pro04-maven-module&lt;/artifactId&gt;</span>
<span class="line">&lt;!-- &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt; --&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li></ol><h4 id="父工程依赖统一管理" tabindex="-1"><a class="header-anchor" href="#父工程依赖统一管理"><span>父工程依赖统一管理</span></a></h4><ol><li><p>父工程</p><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" data-title="text" style="--vp-collapsed-lines:10;"><pre><code><span class="line">&lt;!-- 使用dependencyManagement标签配置对依赖的管理 --&gt;</span>
<span class="line">&lt;!-- 被管理的依赖并没有真正被引入到工程 --&gt;</span>
<span class="line">&lt;dependencyManagement&gt;</span>
<span class="line">  	&lt;dependencies&gt;</span>
<span class="line">    	&lt;dependency&gt;</span>
<span class="line">      		&lt;groupId&gt;org.springframework&lt;/groupId&gt;</span>
<span class="line">      		&lt;artifactId&gt;spring-core&lt;/artifactId&gt;</span>
<span class="line">      		&lt;version&gt;6.0.10&lt;/version&gt;</span>
<span class="line">    	&lt;/dependency&gt;</span>
<span class="line">    	&lt;dependency&gt;</span>
<span class="line">      		&lt;groupId&gt;org.springframework&lt;/groupId&gt;</span>
<span class="line">      		&lt;artifactId&gt;spring-beans&lt;/artifactId&gt;</span>
<span class="line">      		&lt;version&gt;6.0.10&lt;/version&gt;</span>
<span class="line">    	&lt;/dependency&gt;</span>
<span class="line">  	&lt;/dependencies&gt;</span>
<span class="line">&lt;/dependencyManagement&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li><li><p>子工程</p><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" data-title="text" style="--vp-collapsed-lines:10;"><pre><code><span class="line">&lt;!-- 子工程引用父工程中的依赖信息时，可以把版本号去掉。  --&gt;</span>
<span class="line">&lt;!-- 把版本号去掉就表示子工程中这个依赖的版本由父工程决定。 --&gt;</span>
<span class="line">&lt;!-- 具体来说是由父工程的dependencyManagement来决定。 --&gt;</span>
<span class="line">&lt;dependencies&gt;</span>
<span class="line">  	&lt;dependency&gt;</span>
<span class="line">    	&lt;groupId&gt;org.springframework&lt;/groupId&gt;</span>
<span class="line">    	&lt;artifactId&gt;spring-core&lt;/artifactId&gt;</span>
<span class="line">  	&lt;/dependency&gt;</span>
<span class="line">  	&lt;dependency&gt;</span>
<span class="line">    	&lt;groupId&gt;org.springframework&lt;/groupId&gt;</span>
<span class="line">    	&lt;artifactId&gt;spring-beans&lt;/artifactId&gt;</span>
<span class="line">  	&lt;/dependency&gt;</span>
<span class="line">&lt;/dependencies&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li></ol><p><mark>注意</mark></p><blockquote><ol><li>若父工程不使用<code>&lt;dependencyManagement&gt;</code>，依赖无条件全部传递给子工程</li></ol></blockquote><h3 id="聚合" tabindex="-1"><a class="header-anchor" href="#聚合"><span>聚合</span></a></h3><p>Maven 聚合是指将多个项目组织到一个父级项目中，以便一起构建和管理的机制。聚合可以帮助我们更好地管理一组相关的子项目，同时简化它们的构建和部署过程。</p><h4 id="作用-2" tabindex="-1"><a class="header-anchor" href="#作用-2"><span>作用</span></a></h4><ol><li>可以将多个子项目组织在一起，方便管理和维护。</li><li>可以在一个命令中构建和发布多个相关的项目，简化了部署和维护工作。</li><li>可以对多个项目进行顺序控制，避免出现构建依赖混乱导致构建失败的情况。</li><li>可以在父项目中管理公共依赖项和插件，避免重复定义。</li></ol><h4 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1"><span>语法</span></a></h4><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" data-title="text" style="--vp-collapsed-lines:10;"><pre><code><span class="line">&lt;project&gt;</span>
<span class="line">  &lt;groupId&gt;com.example&lt;/groupId&gt;</span>
<span class="line">  &lt;artifactId&gt;parent-project&lt;/artifactId&gt;</span>
<span class="line">  &lt;packaging&gt;pom&lt;/packaging&gt;</span>
<span class="line">  &lt;version&gt;1.0.0&lt;/version&gt;</span>
<span class="line">  &lt;modules&gt;</span>
<span class="line">    &lt;module&gt;child-project1&lt;/module&gt;</span>
<span class="line">    &lt;module&gt;child-project2&lt;/module&gt;</span>
<span class="line">  &lt;/modules&gt;</span>
<span class="line">&lt;/project&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>通过触发父工程构建命令会<mark>引发所有子模块构建</mark>，产生反应堆</p><h2 id="_8-私服" tabindex="-1"><a class="header-anchor" href="#_8-私服"><span>8. 私服</span></a></h2><p>Maven 私服是一种特殊的Maven远程仓库，它是架设在局域网内的仓库服务，用来代理位于外部的远程仓库（中央仓库、其他远程公共仓库）。</p><blockquote><p>也把私服部署到公网，具体看公司业务的性质是否是保密的等等</p><p>局域网只能在公司用，部署到公网的话员工在家里也可以使用</p></blockquote><figure><img src="https://gitee.com/private_crh/notes/raw/master//typora/202410112019833.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="优势" tabindex="-1"><a class="header-anchor" href="#优势"><span>优势</span></a></h3><ol><li>节省外网带宽</li><li>下载速度更快</li><li>便于部署第三方构件</li><li>提高项目的稳定性，增强对项目的控制</li><li>降低中央仓库得负荷压力</li></ol><h3 id="产品" tabindex="-1"><a class="header-anchor" href="#产品"><span>产品</span></a></h3><blockquote><p>Apache的Archiva JFrog的Artifactory Sonatype的Nexus（[ˈneksəs]）（当前最流行、使用最广泛）</p></blockquote><h3 id="nexus" tabindex="-1"><a class="header-anchor" href="#nexus"><span>Nexus</span></a></h3><h4 id="下载安装" tabindex="-1"><a class="header-anchor" href="#下载安装"><span>下载安装</span></a></h4><p>https://help.sonatype.com/repomanager3/product-information/download</p><p>解压，以管理员身份打开CMD，进入bin目录下，执行./nexus /run命令启动</p><p>首页地址：http://localhost:8081/，8081为默认端口号</p><h4 id="初始设置" tabindex="-1"><a class="header-anchor" href="#初始设置"><span>初始设置</span></a></h4><ol><li><p>Sign in登录</p><blockquote><p>用户名：admin</p><p>密码：查看 <strong>nexus-3.61.0-02-win64\\sonatype-work\\nexus3\\admin.password</strong> 文件</p></blockquote></li><li><p>设置自己密码</p></li><li><p>启用匿名登录后，后续操作比较简单，这里我们演示禁用匿名登录的操作 <img src="https://gitee.com/private_crh/notes/raw/master//typora/202410112027137.png" alt="" loading="lazy"></p></li><li><p>初始化完毕</p></li></ol><h4 id="nexus上的各种仓库" tabindex="-1"><a class="header-anchor" href="#nexus上的各种仓库"><span>Nexus上的各种仓库</span></a></h4><figure><img src="https://gitee.com/private_crh/notes/raw/master//typora/image-20241011204708662.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><table><thead><tr><th>仓库类型</th><th>说明</th></tr></thead><tbody><tr><td>group</td><td>存放：通过 Nexus 获取的第三方 jar 包</td></tr><tr><td>proxy</td><td>某个远程仓库的代理</td></tr><tr><td>hosted</td><td>存放：本团队其他开发人员部署到 Nexus 的 jar 包</td></tr></tbody></table><table><thead><tr><th>仓库名称</th><th>说明</th></tr></thead><tbody><tr><td>maven-central</td><td>Nexus 对 Maven 中央仓库的代理</td></tr><tr><td>maven-public</td><td>Nexus 默认创建，供开发人员下载使用的组仓库</td></tr><tr><td>maven-releases</td><td>Nexus 默认创建，供开发人员部署自己 jar 包的宿主仓库 要求 releases 版本</td></tr><tr><td>maven-snapshots</td><td>Nexus 默认创建，供开发人员部署自己 jar 包的宿主仓库 要求 snapshots 版本</td></tr></tbody></table><blockquote><p>RELEASE(发布版本)：功能趋于稳定、当前更新停止，可以用于发行的版本，存储在私服中 的RELEASE仓库中。</p><p>SNAPSHOT(快照版本)：功能不稳定、尚处于开发中的版本，即快照版本，存储在私服的 SNAPSHOT仓库中。</p></blockquote><h4 id="通过-nexus-下载-jar-包" tabindex="-1"><a class="header-anchor" href="#通过-nexus-下载-jar-包"><span>通过 Nexus 下载 jar 包</span></a></h4><p>新增一个settings.xml 避免影响现存的配置</p><ol><li><p>修改本地maven的核心配置文件settings.xml，设置新的本地仓库地址</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;!-- 配置一个新的 Maven 本地仓库 --&gt;</span>
<span class="line">&lt;localRepository&gt;新的本地仓库地址&lt;/localRepository&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>将原来配置阿里云仓库地址的 mirror 标签更改</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;mirror&gt;</span>
<span class="line">	&lt;id&gt;nexus-mine&lt;/id&gt;</span>
<span class="line">	&lt;mirrorOf&gt;central&lt;/mirrorOf&gt;</span>
<span class="line">	&lt;name&gt;Nexus mine&lt;/name&gt;</span>
<span class="line">	&lt;url&gt;http://localhost:8081/repository/maven-public/&lt;/url&gt;</span>
<span class="line">&lt;/mirror&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>我们禁用了匿名访问，要继续配置 settings.xml</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;server&gt;</span>
<span class="line">    &lt;id&gt;nexus-mine&lt;/id&gt;</span>
<span class="line">    &lt;username&gt;admin&lt;/username&gt;</span>
<span class="line">    &lt;password&gt;密码&lt;/password&gt;</span>
<span class="line">&lt;/server&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><mark>server 标签内的 id 标签值必须和 mirror 标签中的 id 值一样</mark></p></li><li><p>可以设置私服中中央仓库的地址为阿里云仓库地址</p><p><img src="https://gitee.com/private_crh/notes/raw/master//typora/image-20241011204024695.png" alt="" loading="lazy"><img src="https://gitee.com/private_crh/notes/raw/master//typora/image-20241011204041111.png" alt="" loading="lazy"></p><blockquote><p>http://maven.aliyun.com/nexus/content/groups/public/</p></blockquote></li></ol><h4 id="将-jar-包部署到-nexus" tabindex="-1"><a class="header-anchor" href="#将-jar-包部署到-nexus"><span>将 jar 包部署到 Nexus</span></a></h4><p>maven工程中配置：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;distributionManagement&gt;</span>
<span class="line">    &lt;snapshotRepository&gt;</span>
<span class="line">        &lt;id&gt;nexus-mine&lt;/id&gt;</span>
<span class="line">        &lt;name&gt;Nexus Snapshot&lt;/name&gt;</span>
<span class="line">        &lt;url&gt;http://localhost:8081/repository/maven-snapshots/&lt;/url&gt;</span>
<span class="line">    &lt;/snapshotRepository&gt;</span>
<span class="line">&lt;/distributionManagement&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这里 snapshotRepository 的 id 标签必须和 settings.xml 中指定的 mirror 标签的 id 属性一致</p></blockquote><h4 id="引用别人部署的-jar-包" tabindex="-1"><a class="header-anchor" href="#引用别人部署的-jar-包"><span>引用别人部署的 jar 包</span></a></h4><p>maven工程中配置：</p><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" data-title="text" style="--vp-collapsed-lines:10;"><pre><code><span class="line">&lt;repositories&gt;</span>
<span class="line">    &lt;repository&gt;</span>
<span class="line">        &lt;id&gt;nexus-mine&lt;/id&gt;</span>
<span class="line">        &lt;name&gt;nexus-mine&lt;/name&gt;</span>
<span class="line">        &lt;url&gt;http://localhost:8081/repository/maven-snapshots/&lt;/url&gt;</span>
<span class="line">        &lt;snapshots&gt;</span>
<span class="line">            &lt;enabled&gt;true&lt;/enabled&gt;</span>
<span class="line">        &lt;/snapshots&gt;</span>
<span class="line">        &lt;releases&gt;</span>
<span class="line">            &lt;enabled&gt;true&lt;/enabled&gt;</span>
<span class="line">        &lt;/releases&gt;</span>
<span class="line">    &lt;/repository&gt;</span>
<span class="line">&lt;/repositories&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="_9-附录" tabindex="-1"><a class="header-anchor" href="#_9-附录"><span>9. 附录</span></a></h2><p>有时候给idea配置完maven仓库信息后，在idea中依然搜索不到仓库中的jar包。这是因为仓库中的jar包索引尚未更新到idea中。这个时候我们就需要更新idea中maven的索引了，具体做法如下：</p><figure><img src="https://gitee.com/private_crh/notes/raw/master//typora/image-20241011205231980.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,142)]))}const c=e(i,[["render",t],["__file","Maven.html.vue"]]),v=JSON.parse('{"path":"/codenotes/back/devtool/Maven.html","title":"Maven","lang":"zh-CN","frontmatter":{"title":"Maven","icon":"/icon/maven.svg","category":["计算机"],"tag":["工具"],"sticky":false,"star":false,"article":false,"timeline":false,"isOriginal":true,"date":"2024-11-07T00:00:00.000Z","headerDepth":2,"description":"你笑，全世界都跟你笑；你哭，全世界只有你一个人哭。 1. 简介 https://maven.apache.org/what-is-maven.html Maven 是一款为 Java项目管理构建、依赖管理的工具（软件），使用 Maven 可以自动化构建、测试、打包和发布项目，大大提高了开发效率和质量。 **依赖管理：**Maven 可以管理项目的依赖，...","head":[["meta",{"property":"og:url","content":"https://hwchen.top/codenotes/back/devtool/Maven.html"}],["meta",{"property":"og:site_name","content":"Ahzy"}],["meta",{"property":"og:title","content":"Maven"}],["meta",{"property":"og:description","content":"你笑，全世界都跟你笑；你哭，全世界只有你一个人哭。 1. 简介 https://maven.apache.org/what-is-maven.html Maven 是一款为 Java项目管理构建、依赖管理的工具（软件），使用 Maven 可以自动化构建、测试、打包和发布项目，大大提高了开发效率和质量。 **依赖管理：**Maven 可以管理项目的依赖，..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://gitee.com/private_crh/notes/raw/master//typora/image-20241011213525291.png =800x270"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"工具"}],["meta",{"property":"article:published_time","content":"2024-11-07T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Maven\\",\\"description\\":\\"你笑，全世界都跟你笑；你哭，全世界只有你一个人哭。 1. 简介 https://maven.apache.org/what-is-maven.html Maven 是一款为 Java项目管理构建、依赖管理的工具（软件），使用 Maven 可以自动化构建、测试、打包和发布项目，大大提高了开发效率和质量。 **依赖管理：**Maven 可以管理项目的依赖，...\\"}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 安装","slug":"_2-安装","link":"#_2-安装","children":[]},{"level":2,"title":"3. IDEA创建Maven","slug":"_3-idea创建maven","link":"#_3-idea创建maven","children":[{"level":3,"title":"GAVP","slug":"gavp","link":"#gavp","children":[]},{"level":3,"title":"IDEA构建Maven Java SE","slug":"idea构建maven-java-se","link":"#idea构建maven-java-se","children":[]},{"level":3,"title":"IDEA构建Maven Java Web","slug":"idea构建maven-java-web","link":"#idea构建maven-java-web","children":[{"level":4,"title":"手动创建","slug":"手动创建","link":"#手动创建","children":[]},{"level":4,"title":"插件创建","slug":"插件创建","link":"#插件创建","children":[]}]},{"level":3,"title":"Maven工程项目结构","slug":"maven工程项目结构","link":"#maven工程项目结构","children":[]}]},{"level":2,"title":"4. IDEA进行Maven工程构建","slug":"_4-idea进行maven工程构建","link":"#_4-idea进行maven工程构建","children":[{"level":3,"title":"命令方式项目构建","slug":"命令方式项目构建","link":"#命令方式项目构建","children":[]},{"level":3,"title":"可视化方式项目构建","slug":"可视化方式项目构建","link":"#可视化方式项目构建","children":[]},{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}]},{"level":2,"title":"5. IDEA 进行Maven依赖管理","slug":"_5-idea-进行maven依赖管理","link":"#_5-idea-进行maven依赖管理","children":[{"level":3,"title":"核心信息配置","slug":"核心信息配置","link":"#核心信息配置","children":[]},{"level":3,"title":"依赖管理配置","slug":"依赖管理配置","link":"#依赖管理配置","children":[]},{"level":3,"title":"依赖范围","slug":"依赖范围","link":"#依赖范围","children":[]},{"level":3,"title":"依赖下载失败解决","slug":"依赖下载失败解决","link":"#依赖下载失败解决","children":[]},{"level":3,"title":"Build构建配置","slug":"build构建配置","link":"#build构建配置","children":[]}]},{"level":2,"title":"6. 依赖传递和依赖冲突","slug":"_6-依赖传递和依赖冲突","link":"#_6-依赖传递和依赖冲突","children":[{"level":3,"title":"依赖传递","slug":"依赖传递","link":"#依赖传递","children":[{"level":4,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":4,"title":"作用","slug":"作用","link":"#作用","children":[]},{"level":4,"title":"传递原则","slug":"传递原则","link":"#传递原则","children":[]},{"level":4,"title":"传递终止","slug":"传递终止","link":"#传递终止","children":[]}]},{"level":3,"title":"依赖冲突","slug":"依赖冲突","link":"#依赖冲突","children":[{"level":4,"title":"解决依赖冲突","slug":"解决依赖冲突","link":"#解决依赖冲突","children":[]}]}]},{"level":2,"title":"7. 继承和聚合","slug":"_7-继承和聚合","link":"#_7-继承和聚合","children":[{"level":3,"title":"继承","slug":"继承","link":"#继承","children":[{"level":4,"title":"作用","slug":"作用-1","link":"#作用-1","children":[]},{"level":4,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":4,"title":"父工程依赖统一管理","slug":"父工程依赖统一管理","link":"#父工程依赖统一管理","children":[]}]},{"level":3,"title":"聚合","slug":"聚合","link":"#聚合","children":[{"level":4,"title":"作用","slug":"作用-2","link":"#作用-2","children":[]},{"level":4,"title":"语法","slug":"语法-1","link":"#语法-1","children":[]}]}]},{"level":2,"title":"8. 私服","slug":"_8-私服","link":"#_8-私服","children":[{"level":3,"title":"优势","slug":"优势","link":"#优势","children":[]},{"level":3,"title":"产品","slug":"产品","link":"#产品","children":[]},{"level":3,"title":"Nexus","slug":"nexus","link":"#nexus","children":[{"level":4,"title":"下载安装","slug":"下载安装","link":"#下载安装","children":[]},{"level":4,"title":"初始设置","slug":"初始设置","link":"#初始设置","children":[]},{"level":4,"title":"Nexus上的各种仓库","slug":"nexus上的各种仓库","link":"#nexus上的各种仓库","children":[]},{"level":4,"title":"通过 Nexus 下载 jar 包","slug":"通过-nexus-下载-jar-包","link":"#通过-nexus-下载-jar-包","children":[]},{"level":4,"title":"将 jar 包部署到 Nexus","slug":"将-jar-包部署到-nexus","link":"#将-jar-包部署到-nexus","children":[]},{"level":4,"title":"引用别人部署的 jar 包","slug":"引用别人部署的-jar-包","link":"#引用别人部署的-jar-包","children":[]}]}]},{"level":2,"title":"9. 附录","slug":"_9-附录","link":"#_9-附录","children":[]}],"git":{},"readingTime":{"minutes":15.82,"words":4747},"filePathRelative":"codenotes/back/devtool/Maven.md","localizedDate":"2024年11月7日","excerpt":"<div style=\\"text-align:left\\">\\n<p>&nbsp;<img src=\\"https://gitee.com/private_crh/notes/raw/master//typora/image-20241011213525291.png\\" alt=\\"\\" width=\\"800\\" height=\\"270\\" loading=\\"lazy\\"></p>\\n</div>\\n<div style=\\"text-align:right\\">\\n<p><strong>你笑，全世界都跟你笑；你哭，全世界只有你一个人哭。</strong></p>\\n</div>\\n<h2>1. 简介</h2>\\n<p><a href=\\"https://maven.apache.org/what-is-maven.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://maven.apache.org/what-is-maven.html</a></p>","autoDesc":true}');export{c as comp,v as data};
