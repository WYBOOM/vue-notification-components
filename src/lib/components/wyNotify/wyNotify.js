import Vue from "vue";

const wyNotifyConstructor = Vue.extend(require("./wyNotify.vue").default);

let nId = 1;

const wyNotify = options => {
  options = options || {};

  const id = "notice-" + nId++,
    wyNotify = new wyNotifyConstructor();

  wyNotify.id = id;
  wyNotify.vm = wyNotify.$mount("");
  
  wyNotify.dom = wyNotify.vm.$el;
  
  wyNotify.vm.visible = true;
//   wyNotify.dom.style.zIndex = nId + 1000;
  document.body.appendChild(wyNotify.dom);
  
  
  

  return wyNotify.vm;
};
export default wyNotify;
