import { defineClientConfig } from "vuepress/client";
import { onMounted } from "vue";
import { defineAsyncComponent } from "vue";
import "vuepress-theme-hope/presets/bounce-icon.scss"; // 为页面图标添加鼠标悬停的跳动效果。

const TopNavBeautify = defineAsyncComponent(
  () => import("./components/TopNavBeautify.vue")
);
const HeroBG = defineAsyncComponent(() => import("./components/HeroBG.vue"));
const HeroHitokoto = defineAsyncComponent(
  () => import("./components/HeroHitokoto.vue")
);
const NavMusic = defineAsyncComponent(
  () => import("./components/NavMusic.vue")
);
const PrintVersion = defineAsyncComponent(
  () => import("./components/PrintVersion.vue")
);
const MyIcon = defineAsyncComponent(() => import("./components/MyIcon.vue"));
const BlogBg = defineAsyncComponent(() => import("./components/BlogBg.vue"));

const BlogBeautify = defineAsyncComponent(
  () => import("./components/BlogBeautify.vue")
);
const PreviewImage = defineAsyncComponent(
  () => import("./components/PreviewImage.vue")
);

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("MyIcon", MyIcon);
  },
  setup() {
    onMounted(() => {});
  },
  rootComponents: [
    // 顶栏
    TopNavBeautify,

    // api
    HeroBG,

    // 打印机
    HeroHitokoto,

    // 音乐
    // NavMusic,

    // 主题的细节美化，包括文章分割线小汽车等
    BlogBeautify,

    // 最重要!!! 背景
    BlogBg,

    PreviewImage,
    PrintVersion,

    // ...
  ],
});
