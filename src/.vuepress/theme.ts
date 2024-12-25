import { hopeTheme, linksCheck } from "vuepress-theme-hope";
//中文导航栏
import { zhNavbar } from "./navbar/index.js";
//中文侧边栏
import { zhSidebar } from "./sidebar/index.js";
import manifest_json from "./public/pwa/manifest.json";

const manifestJson: any = manifest_json;

export default hopeTheme({
  // 当前网站部署到的域名
  hostname: "hwchen.top",

  // 文章显示的默认作者
  author: {
    name: "Ahzy",
    url: "https://gitee.com/private_crh",
  },

  // 使用官方提供的图标库-也可以构建自己的图标库
  iconAssets: "//at.alicdn.com/t/c/font_4703759_s6m1j3d0559.css",

  // 网站图标
  // logo: "/site_logo.png",

  // 导航栏上的个人仓库地址
  // repo: "https://gitee.com/private_crh",

  // 自定义仓库链接文字-默认从repo中自动推断为"GitHub" / "GitLab" / "Gitee" / "Bitbucket" 其中之一，或是 "Source"。
  //repoLabel: "Gitee",

  // 是否在导航栏内显示仓库链接-默认为true
  //repoDisplay: true,

  // 导航栏布局
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: [ "Outlook", "Search"],
  },

  //页脚
  displayFooter: true,

  // 页面显示信息
  pageInfo: ["Author", "Date", "ReadingTime"],

  // 路径导航
  breadcrumb: true,

  // 路径导航的图标显示
  breadcrumbIcon: false,

  // 暗黑模式切换-在深色模式和浅色模式中切换
  darkmode: "toggle",
  // 全屏按钮
  //fullscreen: true,
  // 返回顶部按钮-下滑300px后显示
  // backToTop: true,
  // 纯净模式-禁用
  pure: false,

  // 控制是否在外部链接上显示图标
  externalLinkIcon: false,

  headerDepth: 6,

  // 文章的最后更新时间
  //lastUpdated: true,

  // 显示页面的贡献者
  contributors: false,

  // 编辑此页
  editLink: false,

  // 文章所在仓库
  docsRepo: "https://gitee.com/private_crh/hw_chen_-web",

  // 文章所在分支
  docsBranch: "master",

  // 文章所在目录
  docsDir: "src",

  // 多语言设置
  locales: {
    "/": {
      // 导航栏
      navbar: zhNavbar,

      // 侧边栏
      sidebar: zhSidebar,

      // 全局设置页脚信息
      footer: "Ahzyの学习笔记",

      // 显示页脚
      displayFooter: true,

      // 页面配置信息
      metaLocales: {
        editLink: "在【Gitee】上编辑此页",
      },
    },
  },
  // 博客配置
  blog: {
    // 头像
    avatar: "/favicon.svg",
    // 名称
    name: "Ahzy",
    // 是否是圆形头像
    // roundAvatar: false,
    // 个人描述
    description: "泪眼问花花不语，乱红飞过秋千去",
    // 社交媒体
    medias: {
      GitHub: "https://github.com/Strhao123",
      Gitee: "https://gitee.com/private_crh",
      Wechat:
        "https://gitee.com/private_crh/notes/raw/master/typora/202411160052423.jpg",
      QQ: "https://gitee.com/private_crh/notes/raw/master/typora/202411160052837.jpg",
      Bilibili: "https://space.bilibili.com/506956406?spm_id_from=333.1007.0.0",
    },
    // 博客的侧边栏设置
    sidebarDisplay: "mobile",
    // 每页展示的文章数量
    articlePerPage: 7,
    timeline: "hw_chenの时光轴🍃",
  },

  // 文章加密
  encrypt: {
    config: {
      // 这会加密整个 guide 目录，并且两个密码都是可用的
      // "/guide/": ["1234", "5678"],
      // 这只会加密 /config/page.html
      "/floatinglife/feeling/wei.html": "hao102300",
      "/floatinglife/feeling/yu.html": "hao102300",
    },
  },

  // 在这里配置主题提供的插件
  plugins: {
    searchPro: {
      // 索引全部内容
      indexContent: true,
      autoSuggestions: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter(page: any) {
            return page.frontmatter.category;
          },
          formatter: {
            "/": "分类：$content",
            "/en/": "Category: $content",
          },
        },
        {
          getter(page: any) {
            return page.frontmatter.tag;
          },
          formatter: {
            "/": "标签：$content",
            "/en/": "Tag: $content",
          },
        },
      ],
    },

    // 取消自动生成目录
    catalog: false,

    // search: {
    //   //多语言支持
    //   locales: {
    //     "/": {
    //       placeholder: "搜索本站",
    //     },
    //   },
    //   // 热键支持
    //   hotKeys: ["command", "k"],
    //   // 最大推荐个数
    //   maxSuggestions: 7,
    //   // 排除首页
    //   isSearchable: (page) => page.path !== "/",
    // },

    feed: {
      atom: true,
      json: true,
      rss: true,
      image: "/pwa/72.png",
      icon: "/pwa/512.png",
    },

    photoSwipe: false, // 这个插件难用的 一 B
    linksCheck: true,

    copyright: false,

    components: {
      components: ["Badge", "VPCard", "BiliBili", "PDF"],
    },

    // 代码复制功能-vuepress-plugin-copy-code2
    copyCode: {
      // 在移动端也可以实现复制代码
      showInMobile: true,
      // 代码复制成功提示消息的时间-ms
      duration: 3000,
      // 纯净模式
      // pure: false,
    },

    // 此功能被开启用于演示，你应仅当使用时保留。
    markdownTab: true,

    markdownImage: {
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      lazyload: true,
      // 启用图片标记
      mark: true,
      // 启用图片大小
      size: true,
    },

    prismjs: {
      theme: "nord",
      collapsedLines: 10,
    },

    // shiki: {
    //   // 你想要使用的主题
    //   theme: "nord",
    // },

    markdownMath: {
      type: "katex",
    },

    // MarkDown文件增强
    mdEnhance: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      footnote: true,
      include: true,
      mark: true,
      mermaid: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tasklist: true,
      vPre: true,
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    pwa: {
      favicon: "/favicon.ico",
      themeColor: "#af7ac5",
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      manifest: manifestJson,
    },

    // 打开博客功能
    blog: {
      // 在文章列表页面自动提取文章的摘要进行显示
      // autoExcerpt: true,
    },

    // 开启git实现编辑此页面-最后更新时间-贡献者功能
    git: true,
    // 关闭sitemap插件
    sitemap: false,
  },
});
