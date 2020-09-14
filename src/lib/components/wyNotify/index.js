import wyNotify from "./wyNotify.vue";
import WY from './wyNotify'

wyNotify.install = vue => {
  vue.component(wyNotify.name, wyNotify);
  vue.prototype.$wyNotify = WY
};

export default wyNotify;
