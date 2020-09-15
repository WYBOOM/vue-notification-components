import Vue from "vue";

const wyNotifyConstructor = Vue.extend(require("./wyNotify.vue").default);

let nId = 1;

const wyNotify = options => {
  options = options || {};

  if(typeof options !=='object'||Array.isArray(options)){
      throw Error('options must be a Object')
      return
  }

  const id = "notice-" + nId++,
    wyNotify = new wyNotifyConstructor({
        data:options    
    });

  wyNotify.id = id;
  wyNotify.vm = wyNotify.$mount("");


  wyNotify.vm.visible = true;

  wyNotify.dom = wyNotify.vm.$el;
  //   dom上绑定vue实例的方法，以便调用
  wyNotify.dom.moveTop = wyNotify.vm.moveTop;

  const AllDomLength = document.body.getElementsByClassName("wyNotify").length;
  //根据已存在的组件来初始化一个top高度
  const top = AllDomLength * 83 + 10 + "px";

  wyNotify.dom.style = {};
  wyNotify.dom.style.zIndex = nId + 1000;
  wyNotify.dom.style.top = top;
  wyNotify.dom.id = id;

  document.body.appendChild(wyNotify.dom);
  //   debugger
  return wyNotify.vm;
};
export default wyNotify;
