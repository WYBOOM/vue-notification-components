import test from "./test.vue";

test.install = function(Vue) {
  Vue.component(test.name, test);
  Vue.prototype.$noti = function(){
      console.log(123123);
  }
};
export default test;
