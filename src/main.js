// Import main css
import "~/assets/style/index.scss";

// Import default layout so we don't need to import it to every page
import DefaultLayout from "~/layouts/Default.vue";
// Plugins
import VueLazyload from "vue-lazyload";
import InfiniteLoading from "vue-infinite-loading";

const SocialSharing = require("vue-social-sharing");

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  Vue.use(SocialSharing);
  Vue.use(VueLazyload);
  Vue.use(InfiniteLoading);
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
