import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "📑 学习笔记",
    prefix: "/codenotes/",
    children: [
      {
        text: "前端",
        icon: "/icon/juanzhou2.svg",
        link: "ui/",
      },
      {
        text: "后端",
        icon: "/icon/baodian.svg",
        link: "back/",
      },
      {
        text: "学科基础",
        icon: "/icon/book2.svg",
        link: "basic/",
      },
    ],
  },

  {
    text: "⭐ 个人博客",
    prefix: "/floatinglife/",
    children: [
      {
        text: "随笔",
        children: [
          {
            text: "拾 · 记",
            icon: "/icon/huiyi.svg",
            link: "iter/",
          },
          {
            text: "憩 · 蕾",
            icon: "/icon/food.svg",
            link: "cooker/",
          },
          {
            text: "禅 · 思",
            icon: "/icon/dazuo.svg",
            link: "thinker/",
          },
          {
            text: "醉 · 缘",
            icon: "/icon/yezi.svg",
            link: "feeling/",
          },
        ],
      },

      {
        text: "碰壁",
        children: [
          {
            text: "惑 · 解",
            icon: "/icon/question.svg",
            link: "question/",
          },
          {
            text: "筑 · 累",
            icon: "/icon/shalou.svg",
            link: "tool/",
          },
        ],
      },
    ],
  },

  {
    text: "文档",
    icon: "book",
    prefix: "/resources/",
    children: [
      {
        text: "前端文档",
        children: [
          {
            text: "Vite",
            icon: "/icon/vite.svg",
            link: "https://cn.vite.dev/",
          },
          {
            text: "Vue3",
            icon: "/icon/vue.svg",
            link: "https://cn.vuejs.org/",
          },
          {
            text: "Vue Router",
            icon: "/icon/vuerouter.svg",
            link: "https://router.vuejs.org/zh/",
          },
          {
            text: "VueUse",
            icon: "/icon/vueuse.svg",
            link: "https://vueuse.org/",
          },
          {
            text: "Windi CSS",
            icon: "/icon/windicss.svg",
            link: "https://cn.windicss.org/",
          },
          {
            text: "Element-Plus",
            icon: "/icon/elementplus.svg",
            link: "https://element-plus.org/zh-CN/component/overview.html",
          },
          {
            text: "Axios",
            icon: "/icon/axios.svg",
            link: "https://www.axios-http.cn/",
          },
        ],
      },
      {
        text: "后端文档",
        children: [
          {
            text: "Java 8",
            icon: "/icon/java.svg",
            link: "https://docs.oracle.com/javase/8/docs/api/index.html",
          },
          {
            text: "Servlet",
            icon: "/icon/java.svg",
            link: "https://tomcat.apache.org/tomcat-8.0-doc/servletapi/index.html",
          },
          {
            text: "Spring",
            icon: "/icon/spring.svg",
            link: "https://spring.io/",
          },
          {
            text: "SpringBoot",
            icon: "/icon/springboot.svg",
            link: "https://docs.spring.io/spring-boot/index.html",
          },
          {
            text: "SpringCloud",
            icon: "/icon/springcloud.svg",
            link: "https://spring.io/projects/spring-cloud",
          },
          {
            text: "Git",
            icon: "/icon/git.svg",
            link: "https://git-scm.com/book/zh/v2",
          },
          {
            text: "Mybatis",
            icon: "/icon/mybatis.svg",
            link: "https://mybatis.p2hp.com/index.html",
          },
          {
            text: "Mybatis-Plus",
            icon: "/icon/mybatisplus.svg",
            link: "https://baomidou.com/plugins/",
          },
          {
            text: "Maven",
            icon: "/icon/maven.svg",
            link: "https://maven.org.cn/guides/index.html",
          },
          {
            text: "Tomcat",
            icon: "/icon/tomcat.svg",
            link: "https://tomcat.apache.org/tomcat-10.0-doc/index.html",
          },
        ],
      },
    ],
  },

  { text: "关于", icon: "/icon/info.svg", link: "/info/web.md" },
]);
