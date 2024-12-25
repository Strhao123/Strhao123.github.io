import { defineUserConfig } from "vuepress";

import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { getDirname, path } from "@vuepress/utils";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

const SrcPath = path.resolve(__dirname, "../");

//自定义用户配置
// @ts-ignore
// @ts-ignore
export default defineUserConfig({
  alias: {
    "@components": path.resolve(__dirname, "components"),
    "@src": SrcPath,
  },

  base: "/",

  // 多语言设置
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Ahzy",
      description: "Ahzyの小站",
      // 设置favicon
      head: [
        ["link", { rel: "icon", href: "/favicon.svg" }],
        ["meta", { name: "referrer", content: "no-referrer" }],
      ],
    },
  },

  markdown: {
    headers: {
      // 用到哪一级就提取哪一级
      level: [1, 2, 3, 4, 5, 6],
    },
  },

  // 主题设置
  theme,
  plugins: [
    /* 图片浏览
    photoSwipePlugin({
      // 选项
    }),*/

    // 注册全局组件的插件
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    // 搜索插件
    // searchPlugin({
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
    //   // isSearchable: (page) => page.path !== "/",
    // }),
  ],

  shouldPrefetch: false,
});
