import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  // 代码笔记的侧边栏
  "/codenotes/back/": [
    {
      text: "学习路线",
      icon: "/icon/road.svg",
      collapsible: true,
      prefix: "/codenotes/back/road/",
      children: [
        {
          text: "java",
          icon: "",
          link: "road.md",
        },
      ],
    },

    {
      text: "Java核心",
      icon: "/icon/javab.svg",
      collapsible: true,
      prefix: "/codenotes/back/javacore/",
      children: [
        {
          text: "语言基础",
          icon: "/icon/java.svg",
          collapsible: true,
          prefix: "javabasic/",
          children: [
            {
              text: "基础语法Ⅰ",
              link: "day01-java基础语法.md",
            },
            {
              text: "基础语法  Ⅱ",
              link: "day02-Java基础语法.md",
            },
            {
              text: "运算符和表达式",
              link: "day03-运算符和表达式.md",
            },
            {
              text: "流程控制语句",
              link: "day04-流程控制语句.md",
            },
            {
              text: "循环高级",
              link: "day05-循环高级.md",
            },
            {
              text: "数组",
              link: "day05-数组.md",
            },
            {
              text: "方法",
              link: "day06-方法.md",
            },
            {
              text: "键盘录入",
              link: "day08-扩展：键盘录入笔记.md",
            },
            {
              text: "面向对象",
              link: "day08-面向对象.md",
            },
            {
              text: "面向对象进阶Ⅰ",
              link: "day08-面向对象进阶.md",
            },
            {
              text: "面向对象进阶  Ⅱ",
              link: "day08-面向对象进阶2.md",
            },
            {
              text: "面向对象进阶  Ⅲ",
              link: "day08-面向对象进阶3.md",
            },
            {
              text: "字符串",
              link: "day09-字符串.md",
            },
            {
              text: "APIⅠ",
              link: "day09-api使用.md",
            },
            {
              text: "API    Ⅱ",
              link: "day09-API.md",
            },
            {
              text: "API  Ⅲ",
              link: "day09-API02.md",
            },
            {
              text: "正则表达式",
              link: "day09-正则表达式.md",
            },
            {
              text: "ArrayList",
              link: "day10-ArrayList.md",
            },
            {
              text: "集合Ⅰ",
              link: "day10-集合01.md",
            },
            {
              text: "集合    Ⅱ",
              link: "day10-集合02.md",
            },
            {
              text: "集合  Ⅲ",
              link: "day10-集合03.md",
            },
            {
              text: "集合  Ⅳ",
              link: "day10-集合04.md",
            },
            {
              text: "stream流和方法引用",
              link: "day10-stream流和方法引用.md",
            },
          ],
        },

        {
          text: "语言进阶",
          icon: "/icon/javai.svg",
          collapsible: true,
          prefix: "javaadvance/",
          children: [
            {
              text: "IO流Ⅰ",
              link: "1IO(异常&File&综合案例）.md",
            },
            {
              text: "IO流  Ⅱ",
              link: "2IO流（字节流&字符流）.md",
            },
            {
              text: "IO流  Ⅲ",
              link: "3IO流（其他流）.md",
            },
            {
              text: "多线程Ⅰ",
              link: "多线程01.md",
            },
            {
              text: "多线程  Ⅱ",
              link: "多线程02.md",
            },
            {
              text: "网络编程",
              link: "网络编程.md",
            },
            {
              text: "反射&动态代理",
              link: "反射&动态代理.md",
            },
            {
              text: "类加载器",
              link: "类加载器.md",
            },
            {
              text: "log日志",
              link: "log日志.md",
            },
            {
              text: "单元测试",
              link: "单元测试.md",
            },
            {
              text: "xml",
              link: "xml.md",
            },
            {
              text: "注解",
              link: "注解.md",
            },
          ],
        },
      ],
    },

    {
      text: "JavaWeb",
      icon: "/icon/javaweb.svg",
      collapsible: true,
      prefix: "/codenotes/back/javaweb/",
      children: [
        {
          text: "JDBC",
          link: "JDBC.md",
        },
        {
          text: "XML",
          link: "xml.md",
        },
        {
          text: "Tomcat",
          link: "Tomcat.md",
        },
        {
          text: "Servlet",
          link: "Servlet.md",
        },
        {
          text: "JSP",
          link: "JSP.md",
        },
        {
          text: "Listener",
          link: "Listener.md",
        },
        {
          text: "Cookie",
          link: "cookie.md",
        },
        {
          text: "Filter",
          link: "filter.md",
        },
        {
          text: "Json",
          link: "json.md",
        },
      ],
    },

    {
      text: "Spring生态",
      icon: "/icon/spring.svg",
      collapsible: true,
      prefix: "/codenotes/back/spring/",
      children: [
        {
          text: "Spring",
          icon: "/icon/spring.svg",
          collapsible: true,
          prefix: "spring/",
          children: [
            {
              text: "Spring 5 框架概述",
              link: "1Spring 5 框架概述.md",
            },
            {
              text: "IOC",
              link: "2IOC.md",
            },
            {
              text: "AOP",
              link: "3AOP.md",
            },
            {
              text: "jdbctemplate",
              link: "4jdbctemplate.md",
            },
            {
              text: "事务",
              link: "5事务.md",
            },
            {
              text: "Spring5 框架新功能",
              link: "6Spring5 框架新功能.md",
            },
          ],
        },

        {
          text: "SpringMVC",
          icon: "/icon/springMVC.svg",
          collapsible: true,
          prefix: "springmvc/",
          children: [
            {
              text: "简介",
              link: "1简介.md",
            },
            {
              text: "@RequestMapping注解",
              link: "2@RequestMapping注解.md",
            },
            {
              text: "获取请求参数",
              link: "3获取请求参数.md",
            },
            {
              text: "域对象共享数据",
              link: "4域对象共享数据.md",
            },
            {
              text: "SpringMVC的视图",
              link: "5SpringMVC的视图.md",
            },
            {
              text: "RESTful",
              link: "6RESTful.md",
            },
            {
              text: "HttpMessageConverter",
              link: "7HttpMessageConverter.md",
            },
            {
              text: "文件上传和下载",
              link: "8文件上传和下载.md",
            },
            {
              text: "拦截器",
              link: "9拦截器.md",
            },
            {
              text: "异常处理器",
              link: "10异常处理器.md",
            },
            {
              text: "注解配置SpringMVC",
              link: "11注解配置SpringMVC.md",
            },
            {
              text: "SpringMVC执行流程",
              link: "12SpringMVC执行流程.md",
            },
          ],
        },

        {
          text: "SpringBoot",
          icon: "/icon/springboot.svg",
          collapsible: true,
          prefix: "springboot/",
          children: [
            {
              text: "绪论",
              link: "1spring与springboot.md",
            },
            {
              text: "自动配置原理",
              link: "2自动配置原理.md",
            },
            {
              text: "配置文件",
              link: "3配置文件.md",
            },
            {
              text: "web开发",
              link: "4web开发.md",
            },
            {
              text: "数据访问",
              link: "5数据访问.md",
            },
            {
              text: "单元测试",
              link: "6单元测试.md",
            },
            {
              text: "指标监控",
              link: "7指标监控.md",
            },
            {
              text: "原理解析",
              link: "8原理解析.md",
            },
          ],
        },
      ],
    },

    {
      text: "开发框架",
      icon: "/icon/cengci.svg",
      collapsible: true,
      prefix: "/codenotes/back/frame/",
      children: [
        {
          text: "Mybatis",
          icon: "/icon/mybatis.svg",
          link: "Mybatis.md",
        },
        {
          text: "Mybatis Plus",
          icon: "/icon/mybatisplus.svg",
          link: "MybatisPlus.md",
        },
      ],
    },

    {
      text: "开发必备",
      icon: "/icon/os.svg",
      collapsible: true,
      prefix: "/codenotes/back/devtool/",
      children: [
        {
          text: "Git",
          icon: "/icon/git.svg",
          link: "Git.md",
        },
        {
          text: "Maven",
          icon: "/icon/maven.svg",
          link: "Maven.md",
        },
        {
          text: "Linux",
          icon: "/icon/linux.svg",
          link: "Linux学习笔记-B站韩顺平.md",
        },
      ],
    },

    {
      text: "数据库",
      icon: "/icon/database.svg",
      collapsible: true,
      prefix: "/codenotes/back/database/",
      children: [
        {
          text: "Mysql",
          icon: "/icon/mysql.svg",
          link: "Mysql.md",
        },
      ],
    },

    {
      text: "算法",
      icon: "/icon/algorithm.svg",
      collapsible: true,
      prefix: "/codenotes/back/Algorithms/",
      children: [
        {
          text: "数据结构",
          icon: "/icon/jiegou.svg",
          link: "DataStructure.md",
        },
      ],
    },
  ],

  "/codenotes/ui/": [
    {
      text: "学习路线",
      icon: "/icon/road.svg",
      collapsible: true,
      prefix: "/codenotes/ui/road/",
      children: [
        {
          text: "前端",
          icon: "",
          link: "road.md",
        },
      ],
    },

    {
      text: "HTML",
      icon: "/icon/html.svg",
      collapsible: true,
      prefix: "/codenotes/ui/html/",
      children: [
        {
          text: "HTML基础",
          icon: "",
          link: "html1.md",
        },
        {
          text: "HTML进阶",
          icon: "",
          link: "html2.md",
        },
      ],
    },

    {
      text: "CSS",
      icon: "/icon/css.svg",
      collapsible: true,
      prefix: "/codenotes/ui/css/",
      children: [
        {
          text: "CSS基础",
          icon: "",
          link: "css01.md",
        },
        {
          text: "CSS进阶",
          icon: "",
          link: "css02.md",
        },
        {
          text: "盒子模型",
          icon: "",
          link: "css03.md",
        },
        {
          text: "Flex布局",
          icon: "",
          link: "css04.md",
        },{
          text: "CSS高级",
          icon: "",
          link: "css05.md",
        },

      ],
    },

    {
      text: "JS",
      icon: "/icon/javascript.svg",
      collapsible: true,
      prefix: "/codenotes/ui/js/",
      children: [
        {
          text: "js基础",
          icon: "",
          link: "js01.md",
        },
        {
          text: "类型转换、语句",
          icon: "",
          link: "js02.md",
        },
        {
          text: "循环嵌套、数组",
          icon: "",
          link: "js03.md",
        },{
          text: "函数",
          icon: "",
          link: "js04.md",
        },
        {
          text: "对象",
          icon: "",
          link: "js05.md",
        },

      ],
    },

    {
      text: "Vue",
      icon: "/icon/vue.svg",
      collapsible: true,
      prefix: "/codenotes/ui/vue/",
      children: [
        {
          text: "前端",
          icon: "",
          link: "road.md",
        },
      ],
    },
  ],

  "/codenotes/basic/": [
    {
      text: "数学",
      icon: "/icon/math.svg",
      collapsible: true,
      prefix: "/codenotes/basic/math/",
      children: [
        {
          text: "概率论",
          icon: "/icon/gll.svg",
          link: "概率论.md",
        },
      ],
    },
  ],

  // 浮生杂记的侧边栏
  "/floatinglife/iter": [
    {
      text: "王者-再见",
      icon: "",
      link: "20241224.md",
    },
    {
      text: "组织行为学考试有感",
      icon: "",
      link: "20241220.md",
    },
    {
      text: "结构设计大赛",
      icon: "",
      link: "20241217.md",
    },
  ],

  "/floatinglife/cooker": [
    {
      text: "可乐鸡翅",
      icon: "",
      link: "chicken.md",
    },
  ],

  "/floatinglife/thinker": [
    {
      text: "",
      icon: "",
      link: "",
    },
  ],

  "/floatinglife/feeling": [

  ],

  "/floatinglife/question": [
    {
      text: "hope主题相关报错",
      icon: "",
      link: "hope.md",
    },
    {
      text: "java相关报错",
      icon: "",
      link: "java.md",
    },
  ],

  "/floatinglife/tool": [
    {
      text: "曾仕强亲授",
      icon: "",
      link: "renqing.md",
    },
  ],

  // 关于我
  "/info/": [
    {
      text: "关于本站",
      icon: "/icon/web.svg",
      link: "web.md",
    },
    {
      text: "关于我",
      icon: "/icon/user.svg",
      link: "aboutme.md",
    },
  ],
});
