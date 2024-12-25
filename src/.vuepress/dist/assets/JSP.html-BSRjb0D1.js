import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as e,o as t}from"./app-eWV4nnR8.js";const l={};function i(p,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h3><blockquote><p>jsp的主要作用是代替 servlet 程序回传 html 页面的数据 因为 servlet 程序回传 html 页面数据是一件非常繁锁的事情。开发成本和维护成本都极高。</p></blockquote><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h3><p>jsp的全称是 java server pages。Java 的服务器页面</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><figure><img src="https://gitee.com/private_crh/notes/raw/master/typora/image-20241019145639488.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="访问方法" tabindex="-1"><a class="header-anchor" href="#访问方法"><span>访问方法</span></a></h3><p>web 目录</p><table><thead><tr><th>页面</th><th>访问</th></tr></thead><tbody><tr><td>b.jsp 页面</td><td><code>http://ip:port/工程路径/b.jsp</code></td></tr><tr><td>a.html 页面</td><td><code>http://ip:port/工程路径/a.html</code></td></tr></tbody></table><h3 id="本质" tabindex="-1"><a class="header-anchor" href="#本质"><span>本质</span></a></h3><blockquote><p>jsp 页面本质上是一个<mark>Servlet 程序</mark></p></blockquote><ul><li>当我们第一次访问 jsp 页面的时候。Tomcat 服务器会帮我们把 jsp 页面翻译成为一个java 源文件。并且对它进行编译成为.class 字节码程序</li><li>jsp 翻译出来的java类，间接了继承了 HttpServlet 类。底层实现，也是通过输出流把html 页面数据回传给客户端</li></ul><h2 id="_2-jsp的三种语法" tabindex="-1"><a class="header-anchor" href="#_2-jsp的三种语法"><span>2. JSP的三种语法</span></a></h2><h3 id="jsp头部的page指令" tabindex="-1"><a class="header-anchor" href="#jsp头部的page指令"><span>jsp头部的page指令</span></a></h3><div class="language-jsp line-numbers-mode" data-highlighter="prismjs" data-ext="jsp" data-title="jsp"><pre><code><span class="line">&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><table><thead><tr><th>常用属性</th><th>功能</th></tr></thead><tbody><tr><td>language</td><td>表示 jsp 翻译后是什么语言文件。暂时只支持java</td></tr><tr><td>contentType</td><td>表示 jsp 返回的数据类型是什么。也是源码中response.setContentType()参数值</td></tr><tr><td>pageEncoding</td><td>表示当前 jsp 页面文件本身的字符集</td></tr><tr><td>import</td><td>跟 java 源代码中一样，用于导包，导类</td></tr><tr><td>autoFlush</td><td>设置当 out 输出流缓冲区满了之后，是否自动刷新冲级区。默认值是true</td></tr><tr><td>buffer</td><td>设置 out 缓冲区的大小，默认是 8kb</td></tr><tr><td>errorPage</td><td>设置当 jsp 页面运行时出错，自动跳转去的错误页面路径</td></tr><tr><td>isErrorPage</td><td>设置当前 jsp 页面是否是错误信息页面，默认是false。如果是true可以获取异常信息</td></tr><tr><td>session</td><td>设置访问当前 jsp 页面，是否会创建HttpSession 对象，默认是true</td></tr><tr><td>extends</td><td>设置 jsp 翻译出来的 java 类默认继承谁</td></tr></tbody></table><blockquote><p>缓冲区满了后不能自动刷新就会报错</p></blockquote><h3 id="jsp三种常用脚本" tabindex="-1"><a class="header-anchor" href="#jsp三种常用脚本"><span>jsp三种常用脚本</span></a></h3><h4 id="声明脚本" tabindex="-1"><a class="header-anchor" href="#声明脚本"><span>声明脚本</span></a></h4><blockquote><p>作用：可以给 jsp 翻译出来的 java 类定义属性和方法甚至是静态代码块。内部类等</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;%! 声明 java 代码 %&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>示例</p><div class="language-jsp line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="jsp" data-title="jsp" style="--vp-collapsed-lines:10;"><pre><code><span class="line">&lt;%--1、声明类属性--%&gt;</span>
<span class="line">	&lt;%!</span>
<span class="line">        private Integer id;</span>
<span class="line">        private String name;</span>
<span class="line">        private static Map&lt;String,Object&gt; map;</span>
<span class="line">	%&gt;</span>
<span class="line">	</span>
<span class="line">&lt;%--2、声明 static 静态代码块--%&gt;</span>
<span class="line">    &lt;%!</span>
<span class="line">        static {</span>
<span class="line">            map = new HashMap&lt;String,Object&gt;();</span>
<span class="line">            map.put(&quot;key1&quot;, &quot;value1&quot;);</span>
<span class="line">            map.put(&quot;key2&quot;, &quot;value2&quot;);</span>
<span class="line">            map.put(&quot;key3&quot;, &quot;value3&quot;);</span>
<span class="line">        }</span>
<span class="line">    %&gt;</span>
<span class="line">    </span>
<span class="line">&lt;%--3、声明类方法--%&gt;</span>
<span class="line">    &lt;%!</span>
<span class="line">        public int abc(){</span>
<span class="line">        	return 12;</span>
<span class="line">        }</span>
<span class="line">    %&gt;</span>
<span class="line"></span>
<span class="line">&lt;%--4、声明内部类--%&gt;</span>
<span class="line">    &lt;%!</span>
<span class="line">        public static class A {</span>
<span class="line">            private Integer id = 12;</span>
<span class="line">            private String abc = &quot;abc&quot;;</span>
<span class="line">        }</span>
<span class="line">    %&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><figure><img src="https://gitee.com/private_crh/notes/raw/master/typora/image-20241019155543817.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="表达式脚本" tabindex="-1"><a class="header-anchor" href="#表达式脚本"><span>表达式脚本</span></a></h4><blockquote><p>作用：jsp 页面上输出数据</p></blockquote><p>特点</p><ul><li>所有的表达式脚本都会被翻译到_jspService() 方法中</li><li>表达式脚本都会被翻译成为 out.print()输出到页面上</li><li>_jspService()方法中的对象都可以直接使用</li><li>表达式不能以分号结束</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;%=表达式%&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>示例</p><div class="language-jsp line-numbers-mode" data-highlighter="prismjs" data-ext="jsp" data-title="jsp"><pre><code><span class="line">&lt;%=12 %&gt; &lt;br&gt;</span>
<span class="line">&lt;%=12.12 %&gt; &lt;br&gt;</span>
<span class="line">&lt;%=&quot;我是字符串&quot; %&gt; &lt;br&gt;</span>
<span class="line">&lt;%=map%&gt; &lt;br&gt;</span>
<span class="line">&lt;%=request.getParameter(&quot;username&quot;)%&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://gitee.com/private_crh/notes/raw/master/typora/image-20241019155835106.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="代码脚本" tabindex="-1"><a class="header-anchor" href="#代码脚本"><span>代码脚本</span></a></h4><blockquote><p>作用：可以在 jsp 页面中，编写我们自己需要的功能（写的是java 语句）</p></blockquote><p>特点</p><ul><li>代码脚本翻译之后都在_jspService 方法中</li><li>_jspService()方法中的现有对象都可以直接使用</li><li>可以由多个代码脚本块组合完成一个完整的 java 语句</li><li>代码脚本还可以和表达式脚本一起组合使用，在 jsp 页面上输出数据</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;%</span>
<span class="line">	java 语句</span>
<span class="line">%&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例</p><div class="language-jsp line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="jsp" data-title="jsp" style="--vp-collapsed-lines:10;"><pre><code><span class="line">&lt;%--练习：--%&gt;</span>
<span class="line">&lt;%--1.代码脚本----if 语句--%&gt;</span>
<span class="line">    &lt;%</span>
<span class="line">        int i = 13 ;</span>
<span class="line">        if (i == 12) {</span>
<span class="line">    %&gt;</span>
<span class="line">        &lt;h1&gt;国哥好帅&lt;/h1&gt;</span>
<span class="line">    &lt;%</span>
<span class="line">        } else {</span>
<span class="line">    %&gt;</span>
<span class="line">        &lt;h1&gt;国哥又骗人了！&lt;/h1&gt;</span>
<span class="line">    &lt;%</span>
<span class="line">    	}</span>
<span class="line">    %&gt;</span>
<span class="line">&lt;br&gt;</span>
<span class="line"></span>
<span class="line">&lt;%--2.代码脚本----for 循环语句--%&gt;</span>
<span class="line">    &lt;table border=&quot;1&quot; cellspacing=&quot;0&quot;&gt;</span>
<span class="line">    &lt;%</span>
<span class="line">    	for (int j = 0; j &lt; 10; j++) {</span>
<span class="line">    %&gt;</span>
<span class="line">        &lt;tr&gt;</span>
<span class="line">        	&lt;td&gt;第 &lt;%=j + 1%&gt;行&lt;/td&gt;</span>
<span class="line">        &lt;/tr&gt;</span>
<span class="line">    &lt;%</span>
<span class="line">    	}</span>
<span class="line">    %&gt;</span>
<span class="line">    &lt;/table&gt;</span>
<span class="line"></span>
<span class="line">&lt;%--3.翻译后 java 文件中_jspService 方法内的代码都可以写--%&gt;</span>
<span class="line">    &lt;%</span>
<span class="line">        String username = request.getParameter(&quot;username&quot;);</span>
<span class="line">        System.out.println(&quot;用户名的请求参数值是：&quot; + username);</span>
<span class="line">    %&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><figure><img src="https://gitee.com/private_crh/notes/raw/master/typora/image-20241019160348751.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="jsp的三种注释" tabindex="-1"><a class="header-anchor" href="#jsp的三种注释"><span>jsp的三种注释</span></a></h3><h4 id="html-注释" tabindex="-1"><a class="header-anchor" href="#html-注释"><span>html 注释</span></a></h4><blockquote><p>html 注释会被翻译到 java 源代码中。在_jspService 方法里，以 out.writer 输出到客户端。</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;!-- 这是 html 注释 --&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="java-注释" tabindex="-1"><a class="header-anchor" href="#java-注释"><span>java 注释</span></a></h4><blockquote><p>java 注释会被翻译到 java 源代码中。</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;%</span>
<span class="line">    // 单行 java 注释</span>
<span class="line">    /* 多行 java 注释 */</span>
<span class="line">%&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="jsp-注释" tabindex="-1"><a class="header-anchor" href="#jsp-注释"><span>jsp 注释</span></a></h4><blockquote><p>jsp 注释可以注掉，jsp 页面中所有代码。</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;%-- 这是 jsp 注释 --%&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3-jsp九大内置对象" tabindex="-1"><a class="header-anchor" href="#_3-jsp九大内置对象"><span>3. JSP九大内置对象</span></a></h2><h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h3><p>jsp 中的内置对象，是指 Tomcat 在翻译 jsp 页面成为 Servlet 源代码后，内部提供的九大对象，叫内置对象</p><table><thead><tr><th>变量名</th><th>对象</th></tr></thead><tbody><tr><td>request</td><td>请求对象</td></tr><tr><td>response</td><td>响应对象</td></tr><tr><td>pageContext</td><td>jsp上下文对象</td></tr><tr><td>session</td><td>会话对象</td></tr><tr><td>application</td><td>ServletContext对象</td></tr><tr><td>config</td><td>ServletConfig对象</td></tr><tr><td>out</td><td>jsp输出流对象</td></tr><tr><td>page</td><td>指向当前jsp对象</td></tr><tr><td>exception</td><td>异常对象</td></tr></tbody></table><h3 id="四大域对象" tabindex="-1"><a class="header-anchor" href="#四大域对象"><span>四大域对象</span></a></h3><table><thead><tr><th>变量名</th><th>作用范围</th></tr></thead><tbody><tr><td>pageContext</td><td>当前 jsp 页面范围内有效</td></tr><tr><td>request</td><td>一次请求内有效</td></tr><tr><td>session</td><td>一个会话范围内有效（打开浏览器访问服务器，直到关闭浏览器）</td></tr><tr><td>application</td><td>整个 web 工程范围内都有效（只要web 工程不停止，数据都在）</td></tr></tbody></table><blockquote><p>域对象是可以像 Map 一样存取数据的对象。四个域对象功能一样。数据的存取范围不一样</p></blockquote><p><strong>优先顺序</strong><code>pageContext ----&gt;&gt;&gt; request ----&gt;&gt;&gt; session ----&gt;&gt;&gt; application</code></p><p><strong>示例</strong></p><div class="language-jsp line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="jsp" data-title="jsp" style="--vp-collapsed-lines:10;"><pre><code><span class="line">&lt;body&gt;</span>
<span class="line">    &lt;h1&gt;scope.jsp 页面&lt;/h1&gt;</span>
<span class="line">    &lt;%</span>
<span class="line">        // 往四个域中都分别保存了数据</span>
<span class="line">        pageContext.setAttribute(&quot;key&quot;, &quot;pageContext&quot;);</span>
<span class="line">        request.setAttribute(&quot;key&quot;, &quot;request&quot;);</span>
<span class="line">        session.setAttribute(&quot;key&quot;, &quot;session&quot;);</span>
<span class="line">        application.setAttribute(&quot;key&quot;, &quot;application&quot;);</span>
<span class="line">    %&gt;</span>
<span class="line">    pageContext 域是否有值：&lt;%=pageContext.getAttribute(&quot;key&quot;)%&gt; &lt;br&gt;</span>
<span class="line">    request 域是否有值：&lt;%=request.getAttribute(&quot;key&quot;)%&gt; &lt;br&gt;</span>
<span class="line">    session 域是否有值：&lt;%=session.getAttribute(&quot;key&quot;)%&gt; &lt;br&gt;</span>
<span class="line">    application 域是否有值：&lt;%=application.getAttribute(&quot;key&quot;)%&gt; &lt;br&gt;</span>
<span class="line">    &lt;%</span>
<span class="line">    	request.getRequestDispatcher(&quot;/scope2.jsp&quot;).forward(request,response);</span>
<span class="line">    %&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><div class="language-jsp line-numbers-mode" data-highlighter="prismjs" data-ext="jsp" data-title="jsp"><pre><code><span class="line">&lt;body&gt;</span>
<span class="line">    &lt;h1&gt;scope2.jsp 页面&lt;/h1&gt;</span>
<span class="line">    pageContext 域是否有值：&lt;%=pageContext.getAttribute(&quot;key&quot;)%&gt; &lt;br&gt;</span>
<span class="line">    request 域是否有值：&lt;%=request.getAttribute(&quot;key&quot;)%&gt; &lt;br&gt;</span>
<span class="line">    session 域是否有值：&lt;%=session.getAttribute(&quot;key&quot;)%&gt; &lt;br&gt;</span>
<span class="line">    application 域是否有值：&lt;%=application.getAttribute(&quot;key&quot;)%&gt; &lt;br&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-jsp两种输出的区别" tabindex="-1"><a class="header-anchor" href="#_4-jsp两种输出的区别"><span>4. JSP两种输出的区别</span></a></h2><ol><li>response.getWriter().write(&quot;&quot;);</li><li>out.write(&quot;&quot;);</li></ol><figure><img src="https://gitee.com/private_crh/notes/raw/master/typora/image-20241019225946532.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>由于 jsp 翻译之后，底层源代码都是使用 out 来进行输出，所以一般情况下。我们在jsp 页面中统一使用out 来进行输出。避免打乱页面输出内容的顺序</p><blockquote><ul><li>out.write() 输出字符串没有问题</li><li>out.print() 输出任意数据都没有问题（都转换成为字符串后调用的 write 输出）</li></ul></blockquote><p><strong>结论：统一使用 out.print()来进行输出</strong></p><h2 id="_5-jsp常用标签" tabindex="-1"><a class="header-anchor" href="#_5-jsp常用标签"><span>5. JSP常用标签</span></a></h2><h3 id="静态包含" tabindex="-1"><a class="header-anchor" href="#静态包含"><span>静态包含</span></a></h3><div class="language-jsp line-numbers-mode" data-highlighter="prismjs" data-ext="jsp" data-title="jsp"><pre><code><span class="line">&lt;%--</span>
<span class="line">    &lt;%@ include file=&quot;&quot;%&gt; 这是静态包含</span>
<span class="line">        file 属性指定你要包含的 jsp 页面的路径</span>
<span class="line">        地址中第一个斜杠 / 表示为 http://ip:port/工程路径/ 映射到代码的web目录 </span>
<span class="line">--%&gt;</span>
<span class="line">&lt;%@ include file=&quot;/include/footer.jsp&quot;%&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特点</p><ul><li>静态包含不会翻译被包含的 jsp 页面</li><li>静态包含其实是把被包含的 jsp 页面的代码拷贝到包含的位置执行输出</li></ul><h3 id="动态包含" tabindex="-1"><a class="header-anchor" href="#动态包含"><span>动态包含</span></a></h3><div class="language-jsp line-numbers-mode" data-highlighter="prismjs" data-ext="jsp" data-title="jsp"><pre><code><span class="line">&lt;%--</span>
<span class="line">    &lt;jsp:include page=&quot;&quot;&gt;&lt;/jsp:include&gt; 这是动态包含</span>
<span class="line">    page 属性是指定你要包含的 jsp 页面的路径</span>
<span class="line">    动态包含也可以像静态包含一样。把被包含的内容执行输出到包含位置</span>
<span class="line">--%&gt;</span>
<span class="line">&lt;jsp:include page=&quot;/include/footer.jsp&quot;&gt;</span>
<span class="line">    &lt;jsp:param name=&quot;username&quot; value=&quot;bbj&quot;/&gt;</span>
<span class="line">    &lt;jsp:param name=&quot;password&quot; value=&quot;root&quot;/&gt;</span>
<span class="line">&lt;/jsp:include&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>特点</p><ul><li>动态包含会把包含的 jsp 页面也翻译成为 java 代码</li><li>动态包含底层代码使用如下代码去调用被包含的 jsp 页面执行输出。 JspRuntimeLibrary.include(request, response, &quot;/include/footer.jsp&quot;, out,false);</li><li>可以传递参数</li></ul><p>底层</p><figure><img src="https://gitee.com/private_crh/notes/raw/master/typora/image-20241019231313189.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="转发" tabindex="-1"><a class="header-anchor" href="#转发"><span>转发</span></a></h3><div class="language-jsp line-numbers-mode" data-highlighter="prismjs" data-ext="jsp" data-title="jsp"><pre><code><span class="line">示例说明：</span>
<span class="line">&lt;%--</span>
<span class="line">	&lt;jsp:forward page=&quot;&quot;&gt;&lt;/jsp:forward&gt; 是请求转发标签，它的功能就是请求转发page 属性设置请求转发的路径</span>
<span class="line">--%&gt;</span>
<span class="line">&lt;jsp:forward page=&quot;/scope2.jsp&quot;&gt;&lt;/jsp:forward&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>业务示例</p><figure><img src="https://gitee.com/private_crh/notes/raw/master/typora/image-20241019231649839.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>创建Student类</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">private</span> <span class="token class-name">String</span> phone<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SearchStudentServlet 程序</p><div class="language-java line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="java" data-title="java" style="--vp-collapsed-lines:10;"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SearchStudentServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token annotation punctuation">@Override</span></span>
<span class="line">	<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span><span class="token class-name">IOException</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token comment">// 获取请求的参数</span></span>
<span class="line">		<span class="token comment">// 发 sql 语句查询学生的信息</span></span>
<span class="line">		<span class="token comment">// 使用 for 循环生成查询到的数据做模拟</span></span>
<span class="line">		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span> studentList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">			<span class="token keyword">int</span> t <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">			studentList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span><span class="token string">&quot;name&quot;</span><span class="token operator">+</span>t<span class="token punctuation">,</span> <span class="token number">18</span><span class="token operator">+</span>t<span class="token punctuation">,</span><span class="token string">&quot;phone&quot;</span><span class="token operator">+</span>t<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token punctuation">}</span></span>
<span class="line">		<span class="token comment">// 保存查询到的结果（学生信息）到 request 域中</span></span>
<span class="line">		req<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;stuList&quot;</span><span class="token punctuation">,</span> studentList<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">		<span class="token comment">// 请求转发到 showStudent.jsp 页面</span></span>
<span class="line">    	req<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;/test/showStudent.jsp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>showStudent.jsp 页面</p><div class="language-jsp line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="jsp" data-title="jsp" style="--vp-collapsed-lines:10;"><pre><code><span class="line">&lt;%@ page import=&quot;java.util.List&quot; %&gt;</span>
<span class="line">&lt;%@ page import=&quot;com.atguigu.pojo.Student&quot; %&gt;</span>
<span class="line">&lt;%@ page import=&quot;java.util.ArrayList&quot; %&gt;</span>
<span class="line">&lt;%@ page contentType=&quot;text/html;charset=UTF-8&quot; language=&quot;java&quot; %&gt;</span>
<span class="line">&lt;html&gt;</span>
<span class="line">&lt;head&gt;</span>
<span class="line">&lt;title&gt;Title&lt;/title&gt;</span>
<span class="line">    &lt;style&gt;</span>
<span class="line">        table{</span>
<span class="line">            border: 1px blue solid;</span>
<span class="line">            width: 600px;</span>
<span class="line">            border-collapse: collapse;</span>
<span class="line">        }</span>
<span class="line">        td,th{</span>
<span class="line">        	border: 1px blue solid;</span>
<span class="line">   	 	}</span>
<span class="line">    &lt;/style&gt;</span>
<span class="line">&lt;/head&gt;</span>
<span class="line">    </span>
<span class="line">&lt;body&gt;</span>
<span class="line">&lt;%--练习二：jsp 输出一个表格，里面有 10 个学生信息。--%&gt;</span>
<span class="line">    &lt;%</span>
<span class="line">    List&lt;Student&gt; studentList = (List&lt;Student&gt;) request.getAttribute(&quot;stuList&quot;);</span>
<span class="line">    %&gt;</span>
<span class="line">    &lt;table&gt;</span>
<span class="line">        &lt;tr&gt;</span>
<span class="line">            &lt;td&gt;编号&lt;/td&gt;</span>
<span class="line">            &lt;td&gt;姓名&lt;/td&gt;</span>
<span class="line">            &lt;td&gt;年龄&lt;/td&gt;</span>
<span class="line">            &lt;td&gt;电话&lt;/td&gt;</span>
<span class="line">            &lt;td&gt;操作&lt;/td&gt;</span>
<span class="line">        &lt;/tr&gt;</span>
<span class="line">    &lt;% for (Student student : studentList) { %&gt;</span>
<span class="line">        &lt;tr&gt;</span>
<span class="line">            &lt;td&gt;&lt;%=student.getId()%&gt;&lt;/td&gt;</span>
<span class="line">            &lt;td&gt;&lt;%=student.getName()%&gt;&lt;/td&gt;</span>
<span class="line">            &lt;td&gt;&lt;%=student.getAge()%&gt;&lt;/td&gt;</span>
<span class="line">            &lt;td&gt;&lt;%=student.getPhone()%&gt;&lt;/td&gt;</span>
<span class="line">            &lt;td&gt;删除、修改&lt;/td&gt;</span>
<span class="line">        &lt;/tr&gt;</span>
<span class="line">    &lt;% } %&gt;</span>
<span class="line">    &lt;/table&gt;</span>
<span class="line">&lt;/body&gt;</span>
<span class="line">&lt;/html&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><mark>注意</mark>：访问程序的顺序一定是 <code>客户端 ---&gt;&gt;&gt; Servlet ---&gt;&gt;&gt; jsp</code>，否则报错</p>`,90)]))}const r=n(l,[["render",i],["__file","JSP.html.vue"]]),o=JSON.parse('{"path":"/codenotes/back/javaweb/JSP.html","title":"JSP","lang":"zh-CN","frontmatter":{"title":"JSP","author":[{"name":"尚硅谷"},{"name":"Ahzy"}],"category":["计算机"],"tag":["javaweb"],"sticky":false,"star":false,"article":false,"timeline":false,"isOriginal":true,"headerDepth":2,"description":"1. 简介 背景 jsp的主要作用是代替 servlet 程序回传 html 页面的数据 因为 servlet 程序回传 html 页面数据是一件非常繁锁的事情。开发成本和维护成本都极高。 概念 jsp的全称是 java server pages。Java 的服务器页面 使用 访问方法 web 目录 本质 jsp 页面本质上是一个Servlet 程序 ...","head":[["meta",{"property":"og:url","content":"https://hwchen.top/codenotes/back/javaweb/JSP.html"}],["meta",{"property":"og:site_name","content":"Ahzy"}],["meta",{"property":"og:title","content":"JSP"}],["meta",{"property":"og:description","content":"1. 简介 背景 jsp的主要作用是代替 servlet 程序回传 html 页面的数据 因为 servlet 程序回传 html 页面数据是一件非常繁锁的事情。开发成本和维护成本都极高。 概念 jsp的全称是 java server pages。Java 的服务器页面 使用 访问方法 web 目录 本质 jsp 页面本质上是一个Servlet 程序 ..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://gitee.com/private_crh/notes/raw/master/typora/image-20241019145639488.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"尚硅谷"}],["meta",{"property":"article:tag","content":"javaweb"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"JSP\\",\\"description\\":\\"1. 简介 背景 jsp的主要作用是代替 servlet 程序回传 html 页面的数据 因为 servlet 程序回传 html 页面数据是一件非常繁锁的事情。开发成本和维护成本都极高。 概念 jsp的全称是 java server pages。Java 的服务器页面 使用 访问方法 web 目录 本质 jsp 页面本质上是一个Servlet 程序 ...\\"}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":3,"title":"访问方法","slug":"访问方法","link":"#访问方法","children":[]},{"level":3,"title":"本质","slug":"本质","link":"#本质","children":[]}]},{"level":2,"title":"2. JSP的三种语法","slug":"_2-jsp的三种语法","link":"#_2-jsp的三种语法","children":[{"level":3,"title":"jsp头部的page指令","slug":"jsp头部的page指令","link":"#jsp头部的page指令","children":[]},{"level":3,"title":"jsp三种常用脚本","slug":"jsp三种常用脚本","link":"#jsp三种常用脚本","children":[{"level":4,"title":"声明脚本","slug":"声明脚本","link":"#声明脚本","children":[]},{"level":4,"title":"表达式脚本","slug":"表达式脚本","link":"#表达式脚本","children":[]},{"level":4,"title":"代码脚本","slug":"代码脚本","link":"#代码脚本","children":[]}]},{"level":3,"title":"jsp的三种注释","slug":"jsp的三种注释","link":"#jsp的三种注释","children":[{"level":4,"title":"html 注释","slug":"html-注释","link":"#html-注释","children":[]},{"level":4,"title":"java 注释","slug":"java-注释","link":"#java-注释","children":[]},{"level":4,"title":"jsp 注释","slug":"jsp-注释","link":"#jsp-注释","children":[]}]}]},{"level":2,"title":"3. JSP九大内置对象","slug":"_3-jsp九大内置对象","link":"#_3-jsp九大内置对象","children":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":3,"title":"四大域对象","slug":"四大域对象","link":"#四大域对象","children":[]}]},{"level":2,"title":"4. JSP两种输出的区别","slug":"_4-jsp两种输出的区别","link":"#_4-jsp两种输出的区别","children":[]},{"level":2,"title":"5. JSP常用标签","slug":"_5-jsp常用标签","link":"#_5-jsp常用标签","children":[{"level":3,"title":"静态包含","slug":"静态包含","link":"#静态包含","children":[]},{"level":3,"title":"动态包含","slug":"动态包含","link":"#动态包含","children":[]},{"level":3,"title":"转发","slug":"转发","link":"#转发","children":[]}]}],"git":{},"readingTime":{"minutes":7.31,"words":2193},"filePathRelative":"codenotes/back/javaweb/JSP.md","excerpt":"<h2>1. 简介</h2>\\n<h3>背景</h3>\\n<blockquote>\\n<p>jsp的主要作用是代替 servlet 程序回传 html 页面的数据\\n因为 servlet 程序回传 html 页面数据是一件非常繁锁的事情。开发成本和维护成本都极高。</p>\\n</blockquote>\\n<h3>概念</h3>\\n<p>jsp的全称是 java server pages。Java 的服务器页面</p>\\n<h3>使用</h3>\\n<figure><img src=\\"https://gitee.com/private_crh/notes/raw/master/typora/image-20241019145639488.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{r as comp,o as data};
