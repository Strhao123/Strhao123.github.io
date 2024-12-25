import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as t,o as e}from"./app-eWV4nnR8.js";const l={};function p(i,n){return e(),a("div",null,n[0]||(n[0]=[t(`<h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介"><span>1. 简介</span></a></h2><ol><li>Filter 过滤器它是 JavaWeb 的三大组件之一。三大组件分别是：Servlet 程序、Listener 监听器、Filter 过滤器</li><li>Filter 过滤器它是 JavaEE 的规范。也就是接口</li><li>Filter 过滤器它的作用是：<span style="color:red;">拦截请求，过滤响应</span></li></ol><h2 id="_2-工作流程" tabindex="-1"><a class="header-anchor" href="#_2-工作流程"><span>2. 工作流程</span></a></h2><figure><img src="https://gitee.com/private_crh/notes/raw/master/typora/image-20241027115633491.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>使用方法</strong></p><ol><li>编写一个类去实现 Filter 接口</li><li>实现过滤方法 doFilter()</li><li>到 web.xml 中去配置 Filter</li></ol><div class="language-java line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="java" data-title="java" style="--vp-collapsed-lines:10;"><pre><code><span class="line"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AdminFilter</span> <span class="token keyword">implements</span> <span class="token class-name">Filter</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * doFilter 方法，专门用于拦截请求。可以做权限检查</span>
<span class="line">    */</span></span>
<span class="line">    <span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> servletRequest<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> servletResponse<span class="token punctuation">,</span><span class="token class-name">FilterChainfilterChain</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">HttpServletRequest</span> httpServletRequest <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span><span class="token punctuation">)</span> servletRequest<span class="token punctuation">;</span><span class="token class-name">HttpSession</span> session <span class="token operator">=</span> httpServletRequest<span class="token punctuation">.</span><span class="token function">getSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token class-name">Object</span> user <span class="token operator">=</span> session<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// 如果等于 null，说明还没有登录</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">       		servletRequest<span class="token punctuation">.</span><span class="token function">getRequestDispatcher</span><span class="token punctuation">(</span><span class="token string">&quot;/login.jsp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forward</span><span class="token punctuation">(</span>servletRequest<span class="token punctuation">,</span>servletResponse<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 让程序继续往下访问用户的目标资源</span></span>
<span class="line">            filterChain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>servletRequest<span class="token punctuation">,</span>servletResponse<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><div class="language-xml line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="xml" data-title="xml" style="--vp-collapsed-lines:10;"><pre><code><span class="line"><span class="token comment">&lt;!--filter 标签用于配置一个 Filter 过滤器--&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token comment">&lt;!--给 filter 起一个别名--&gt;</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>AdminFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token comment">&lt;!--配置 filter 的全类名--&gt;</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-class</span><span class="token punctuation">&gt;</span></span>com.atguigu.filter.AdminFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-class</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!--filter-mapping 配置 Filter 过滤器的拦截路径--&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-mapping</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token comment">&lt;!--filter-name 表示当前的拦截路径给哪个 filter 使用--&gt;</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>AdminFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token comment">&lt;!--url-pattern 配置拦截路径</span>
<span class="line">    / 表示请求地址为：http://ip:port/工程路径/ 映射到 IDEA 的 web 目录/admin/* 表示请求地址为：http://ip:port/工程路径/admin/*</span>
<span class="line">    --&gt;</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">&gt;</span></span>/admin/*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-mapping</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="_3-生命周期" tabindex="-1"><a class="header-anchor" href="#_3-生命周期"><span>3. 生命周期</span></a></h2><table><thead><tr><th>方法</th><th>功能</th></tr></thead><tbody><tr><td>构造器方法</td><td>web 工程启动的时候执行</td></tr><tr><td>init 初始化方法</td><td>web 工程启动的时候执行</td></tr><tr><td>doFilter 过滤方法</td><td>每次拦截到请求，就会执行</td></tr><tr><td>destroy 销毁</td><td>停止 web 工程的时候，就会执行</td></tr></tbody></table><h2 id="_4-filterconfig" tabindex="-1"><a class="header-anchor" href="#_4-filterconfig"><span>4. FilterConfig</span></a></h2><p><strong>简介</strong></p><p>是 Filter 过滤器的配置文件类，Tomcat 每次创建 Filter 的时候，也会同时创建一个 FilterConfig 类，这里包含了 Filter 配置文件的配置信息。</p><p><strong>作用</strong></p><ol><li>获取 Filter 的名称 filter-name 的内容</li><li>获取在 Filter 中配置的 init-param 初始化参数</li><li>获取 ServletContext 对象</li></ol><div class="language-java line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="java" data-title="java" style="--vp-collapsed-lines:10;"><pre><code><span class="line"><span class="token annotation punctuation">@Override</span></span>
<span class="line"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token class-name">FilterConfig</span> filterConfig<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;2.Filter 的 init(FilterConfig filterConfig)初始化&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 1、获取 Filter 的名称 filter-name 的内容</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;filter-name 的值是：&quot;</span> <span class="token operator">+</span> filterConfig<span class="token punctuation">.</span><span class="token function">getFilterName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 2、获取在 web.xml 中配置的 init-param 初始化参数</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;初始化参数 username 的值是：&quot;</span> <span class="token operator">+</span> filterConfig<span class="token punctuation">.</span><span class="token function">getInitParameter</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;初始化参数 url 的值是：&quot;</span> <span class="token operator">+</span> filterConfig<span class="token punctuation">.</span><span class="token function">getInitParameter</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 3、获取 ServletContext 对象</span></span>
<span class="line">    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>filterConfig<span class="token punctuation">.</span><span class="token function">getServletContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><div class="language-xml line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="xml" data-title="xml" style="--vp-collapsed-lines:10;"><pre><code><span class="line"><span class="token comment">&lt;!--filter 标签用于配置一个 Filter 过滤器--&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token comment">&lt;!--给 filter 起一个别名--&gt;</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>AdminFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token comment">&lt;!--配置 filter 的全类名--&gt;</span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-class</span><span class="token punctuation">&gt;</span></span>com.atguigu.filter.AdminFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-class</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>init-param</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">&gt;</span></span>username<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">&gt;</span></span>root<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>init-param</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    </span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>init-param</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">&gt;</span></span>url<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">&gt;</span></span>jdbc:mysql://localhost3306/test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>init-param</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="_5-filterchain" tabindex="-1"><a class="header-anchor" href="#_5-filterchain"><span>5. FilterChain</span></a></h2><p><strong>简介</strong></p><p>过滤器链（多个过滤器如何一起工作）</p><figure><img src="https://gitee.com/private_crh/notes/raw/master/typora/image-20241027121039454.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_6-filter拦截路径" tabindex="-1"><a class="header-anchor" href="#_6-filter拦截路径"><span>6. Filter拦截路径</span></a></h2><ul><li><p>精准匹配</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;url-pattern&gt;/target.jsp&lt;/url-pattern&gt;</span>
<span class="line">以上配置的路径，表示请求地址必须为：http://ip:port/工程路径/target.jsp</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>目录匹配</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;url-pattern&gt;/admin/*&lt;/url-pattern&gt;</span>
<span class="line">以上配置的路径，表示请求地址必须为：http://ip:port/工程路径/admin/*</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>后缀名匹配</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;url-pattern&gt;*.html&lt;/url-pattern&gt;</span>
<span class="line">以上配置的路径，表示请求地址必须以.html 结尾才会拦截到</span>
<span class="line">&lt;url-pattern&gt;*.do&lt;/url-pattern&gt;</span>
<span class="line">以上配置的路径，表示请求地址必须以.do 结尾才会拦截到</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong>注意</strong>：<span style="color:red;">Filter 过滤器它只关心请求的地址是否匹配，不关心请求的资源是否存在</span></p>`,24)]))}const r=s(l,[["render",p],["__file","filter.html.vue"]]),u=JSON.parse('{"path":"/codenotes/back/javaweb/filter.html","title":"Filter","lang":"zh-CN","frontmatter":{"title":"Filter","author":[{"name":"尚硅谷"},{"name":"Ahzy"}],"category":["计算机"],"tag":["javaweb"],"sticky":false,"star":false,"article":false,"timeline":false,"isOriginal":true,"headerDepth":2,"description":"1. 简介 Filter 过滤器它是 JavaWeb 的三大组件之一。三大组件分别是：Servlet 程序、Listener 监听器、Filter 过滤器 Filter 过滤器它是 JavaEE 的规范。也就是接口 Filter 过滤器它的作用是：拦截请求，过滤响应 2. 工作流程 使用方法 编写一个类去实现 Filter 接口 实现过滤方法 doFi...","head":[["meta",{"property":"og:url","content":"https://hwchen.top/codenotes/back/javaweb/filter.html"}],["meta",{"property":"og:site_name","content":"Ahzy"}],["meta",{"property":"og:title","content":"Filter"}],["meta",{"property":"og:description","content":"1. 简介 Filter 过滤器它是 JavaWeb 的三大组件之一。三大组件分别是：Servlet 程序、Listener 监听器、Filter 过滤器 Filter 过滤器它是 JavaEE 的规范。也就是接口 Filter 过滤器它的作用是：拦截请求，过滤响应 2. 工作流程 使用方法 编写一个类去实现 Filter 接口 实现过滤方法 doFi..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://gitee.com/private_crh/notes/raw/master/typora/image-20241027115633491.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"尚硅谷"}],["meta",{"property":"article:tag","content":"javaweb"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Filter\\",\\"description\\":\\"1. 简介 Filter 过滤器它是 JavaWeb 的三大组件之一。三大组件分别是：Servlet 程序、Listener 监听器、Filter 过滤器 Filter 过滤器它是 JavaEE 的规范。也就是接口 Filter 过滤器它的作用是：拦截请求，过滤响应 2. 工作流程 使用方法 编写一个类去实现 Filter 接口 实现过滤方法 doFi...\\"}"]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 工作流程","slug":"_2-工作流程","link":"#_2-工作流程","children":[]},{"level":2,"title":"3. 生命周期","slug":"_3-生命周期","link":"#_3-生命周期","children":[]},{"level":2,"title":"4. FilterConfig","slug":"_4-filterconfig","link":"#_4-filterconfig","children":[]},{"level":2,"title":"5. FilterChain","slug":"_5-filterchain","link":"#_5-filterchain","children":[]},{"level":2,"title":"6. Filter拦截路径","slug":"_6-filter拦截路径","link":"#_6-filter拦截路径","children":[]}],"git":{},"readingTime":{"minutes":3.15,"words":946},"filePathRelative":"codenotes/back/javaweb/filter.md","excerpt":"<h2>1. 简介</h2>\\n<ol>\\n<li>Filter 过滤器它是 JavaWeb 的三大组件之一。三大组件分别是：Servlet 程序、Listener 监听器、Filter 过滤器</li>\\n<li>Filter 过滤器它是 JavaEE 的规范。也就是接口</li>\\n<li>Filter 过滤器它的作用是：<span style=\\"color: red;\\">拦截请求，过滤响应</span></li>\\n</ol>\\n<h2>2. 工作流程</h2>\\n<figure><img src=\\"https://gitee.com/private_crh/notes/raw/master/typora/image-20241027115633491.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{r as comp,u as data};
