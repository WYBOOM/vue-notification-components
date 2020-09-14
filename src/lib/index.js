import test from "./components/test/index";
import wyNotify from "./components/wyNotify/index";

const components = [test, wyNotify];

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    component.install(Vue);
  });
};

//支持使用标签方式引入
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  //全局引入
  install,

  //按需引入
  test,
  wyNotify
};
