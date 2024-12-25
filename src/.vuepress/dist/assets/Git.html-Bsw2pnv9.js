import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,b as s,o as t}from"./app-eWV4nnR8.js";const i={};function l(r,e){return t(),n("div",null,e[0]||(e[0]=[s(`<div style="text-align:left;"><p> <img src="https://gitee.com/private_crh/notes/raw/master//typora/small100617dMmKJ1694916377.jpg" alt="" width="800" height="270" loading="lazy"></p></div><div style="text-align:right;"><p><strong>世界上最远的距离，不是生与死，而是我站在你面前，你却不知道我爱你。</strong></p></div><p><strong>分类：</strong></p><p>集中式<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>：CVS、SVN、VSS</p><p>分布式：Git、Bazaar、Darcs</p><h2 id="一-安装" tabindex="-1"><a class="header-anchor" href="#一-安装"><span>一. 安装</span></a></h2><p><a href="https://gitee.com/private_crh/notes/raw/master/typora/202410111417305.pdf" target="_blank" rel="noopener noreferrer">Git的安装.pdf</a></p><h3 id="配置忽略文件" tabindex="-1"><a class="header-anchor" href="#配置忽略文件"><span>配置忽略文件</span></a></h3><p>在家目录下创建git.ignore</p><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" data-title="text" style="--vp-collapsed-lines:10;"><pre><code><span class="line"># Log file</span>
<span class="line">*.log</span>
<span class="line"></span>
<span class="line"># BlueJ files</span>
<span class="line">*.ctxt</span>
<span class="line"></span>
<span class="line"># Mobile Tools for Java (J2ME)</span>
<span class="line">.mtj.tmp/</span>
<span class="line"></span>
<span class="line"># Package Files #</span>
<span class="line">*.jar</span>
<span class="line">*.war</span>
<span class="line">*.nar</span>
<span class="line">*.ear</span>
<span class="line">*.zip</span>
<span class="line">*.tar.gz</span>
<span class="line">*.rar</span>
<span class="line"></span>
<span class="line"># virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml</span>
<span class="line">hs_err_pid*</span>
<span class="line"></span>
<span class="line">.classpath</span>
<span class="line">.project</span>
<span class="line">.settings</span>
<span class="line">target</span>
<span class="line">.idea</span>
<span class="line">*.iml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="二-基本使用" tabindex="-1"><a class="header-anchor" href="#二-基本使用"><span>二. 基本使用</span></a></h2><h3 id="初始设置" tabindex="-1"><a class="header-anchor" href="#初始设置"><span>初始设置</span></a></h3><div class="language-git line-numbers-mode" data-highlighter="prismjs" data-ext="git" data-title="git"><pre><code><span class="line">git confit --global user.name 用户名</span>
<span class="line">git confit --global email.name 邮箱</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>设置好在C盘家目录下 <mark>.gitconfig</mark> 中查看</p><h3 id="基础操作" tabindex="-1"><a class="header-anchor" href="#基础操作"><span>基础操作</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">git init							初始化本地仓库</span>
<span class="line">git status							查看本地库状态</span>
<span class="line">git add 文件名						  添加暂存区</span>
<span class="line">git commit -m&quot;日志&quot; 文件名			 提交到本地库</span>
<span class="line">git reflog							历史记录</span>
<span class="line">git log								历史记录（详细）</span>
<span class="line">git reset --hard 版本号			  版本穿梭</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分支" tabindex="-1"><a class="header-anchor" href="#分支"><span>分支</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">git branch 分支名					   创建分支</span>
<span class="line">git branch -v						 查看分支</span>
<span class="line">git checkout 分支名				   切换分支</span>
<span class="line">git merge 分支名					   合并分支</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并冲突" tabindex="-1"><a class="header-anchor" href="#合并冲突"><span>合并冲突</span></a></h3><p><strong>原因</strong>：合并分支时，两个分支在同一个文件的同一个位置有两套完全不同的修改。Git 无法替 我们决定使用哪一个。必须人为决定新代码内容。</p><p><strong>在master下合并其他分支</strong></p><blockquote><p><strong>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</strong></p><p><strong>【当前分支的代码】</strong></p><p><strong>===============</strong></p><p><strong>合并过来的代码</strong></p><p><strong>&gt;&gt;&gt;&gt;&gt;&gt; hot-fix</strong></p></blockquote><ol><li>删除多余符号只留下代码</li><li>添加到暂存区</li><li>git commit <mark>不带文件名</mark> 且 <mark>master被修改分支不变</mark></li></ol><h3 id="远程仓库" tabindex="-1"><a class="header-anchor" href="#远程仓库"><span>远程仓库</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">git remote -v							查看所有远程地址别名</span>
<span class="line">git remote add 别名 远程地址				创建远程仓库</span>
<span class="line">git push 别名 分支						  推送到远程仓库</span>
<span class="line">git clone 远程地址						  克隆到本地（原本没有）</span>
<span class="line">git pull 远程库地址别名 远程分支名			 拉取到本地（更新）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-团队协作" tabindex="-1"><a class="header-anchor" href="#三-团队协作"><span>三. 团队协作</span></a></h2><h3 id="团队内" tabindex="-1"><a class="header-anchor" href="#团队内"><span>团队内</span></a></h3><figure><img src="https://gitee.com/private_crh/notes/raw/dec2dca849cec4229089351bc4259b2b84e4ebc0/typora/202410111420695.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="跨团队" tabindex="-1"><a class="header-anchor" href="#跨团队"><span>跨团队</span></a></h3><figure><img src="https://gitee.com/private_crh/notes/raw/b906ccdb17cd250c1a8a2fb2274ce2b4090480cc/typora/202410111420323.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="四-gitlab" tabindex="-1"><a class="header-anchor" href="#四-gitlab"><span>四. GitLab</span></a></h2><p><a href="https://gitee.com/private_crh/notes/raw/master/typora/GitLab.pdf" target="_blank" rel="noopener noreferrer">GitLab使用.pdf</a></p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>服务器宕机时无法操作 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>`,34)]))}const d=a(i,[["render",l],["__file","Git.html.vue"]]),o=JSON.parse('{"path":"/codenotes/back/devtool/Git.html","title":"Git","lang":"zh-CN","frontmatter":{"title":"Git","icon":"/icon/git.svg","category":["计算机"],"tag":["工具"],"sticky":false,"star":false,"article":false,"timeline":false,"isOriginal":true,"date":"2024-11-07T00:00:00.000Z","description":"世界上最远的距离，不是生与死，而是我站在你面前，你却不知道我爱你。 分类： 集中式[1]：CVS、SVN、VSS 分布式：Git、Bazaar、Darcs 一. 安装 Git的安装.pdf 配置忽略文件 在家目录下创建git.ignore 二. 基本使用 初始设置 设置好在C盘家目录下 .gitconfig 中查看 基础操作 分支 合并冲突 原因：合并...","head":[["meta",{"property":"og:url","content":"https://hwchen.top/codenotes/back/devtool/Git.html"}],["meta",{"property":"og:site_name","content":"Ahzy"}],["meta",{"property":"og:title","content":"Git"}],["meta",{"property":"og:description","content":"世界上最远的距离，不是生与死，而是我站在你面前，你却不知道我爱你。 分类： 集中式[1]：CVS、SVN、VSS 分布式：Git、Bazaar、Darcs 一. 安装 Git的安装.pdf 配置忽略文件 在家目录下创建git.ignore 二. 基本使用 初始设置 设置好在C盘家目录下 .gitconfig 中查看 基础操作 分支 合并冲突 原因：合并..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://gitee.com/private_crh/notes/raw/master//typora/small100617dMmKJ1694916377.jpg =800x270"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"工具"}],["meta",{"property":"article:published_time","content":"2024-11-07T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Git\\",\\"description\\":\\"世界上最远的距离，不是生与死，而是我站在你面前，你却不知道我爱你。 分类： 集中式[1]：CVS、SVN、VSS 分布式：Git、Bazaar、Darcs 一. 安装 Git的安装.pdf 配置忽略文件 在家目录下创建git.ignore 二. 基本使用 初始设置 设置好在C盘家目录下 .gitconfig 中查看 基础操作 分支 合并冲突 原因：合并...\\"}"]]},"headers":[{"level":2,"title":"一. 安装","slug":"一-安装","link":"#一-安装","children":[{"level":3,"title":"配置忽略文件","slug":"配置忽略文件","link":"#配置忽略文件","children":[]}]},{"level":2,"title":"二. 基本使用","slug":"二-基本使用","link":"#二-基本使用","children":[{"level":3,"title":"初始设置","slug":"初始设置","link":"#初始设置","children":[]},{"level":3,"title":"基础操作","slug":"基础操作","link":"#基础操作","children":[]},{"level":3,"title":"分支","slug":"分支","link":"#分支","children":[]},{"level":3,"title":"合并冲突","slug":"合并冲突","link":"#合并冲突","children":[]},{"level":3,"title":"远程仓库","slug":"远程仓库","link":"#远程仓库","children":[]}]},{"level":2,"title":"三. 团队协作","slug":"三-团队协作","link":"#三-团队协作","children":[{"level":3,"title":"团队内","slug":"团队内","link":"#团队内","children":[]},{"level":3,"title":"跨团队","slug":"跨团队","link":"#跨团队","children":[]}]},{"level":2,"title":"四. GitLab","slug":"四-gitlab","link":"#四-gitlab","children":[]}],"git":{},"readingTime":{"minutes":2,"words":600},"filePathRelative":"codenotes/back/devtool/Git.md","localizedDate":"2024年11月7日","excerpt":"<div style=\\"text-align:left\\">\\n<p>&nbsp;<img src=\\"https://gitee.com/private_crh/notes/raw/master//typora/small100617dMmKJ1694916377.jpg\\" alt=\\"\\" width=\\"800\\" height=\\"270\\" loading=\\"lazy\\"></p>\\n</div>\\n<div style=\\"text-align:right\\">\\n<p><strong>世界上最远的距离，不是生与死，而是我站在你面前，你却不知道我爱你。</strong></p>\\n</div>\\n<p><strong>分类：</strong></p>","autoDesc":true}');export{d as comp,o as data};
