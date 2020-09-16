import wyMessage from "./wyMessage.vue";
import Vue from "vue";
const wyMessageConstructor = Vue.extend(wyMessage);

let nId = 0;

export default function(options) {
  options = options || {};
  if (typeof options !== "object" || Array.isArray(options)) {
    throw Error("options must be a Object");
    return;
  }
  const wyMessage = new wyMessageConstructor({
    data: options
  });

  wyMessage.id = "wyMessage-" + nId++;

  wyMessage.vm = wyMessage.$mount("");
  wyMessage.vm.visible = true;

  const initTop = 10;

  const AllDomLength = document.body.getElementsByClassName("wyMessage-content").length
  //根据已存在的组件来初始化一个top高度
  const top = AllDomLength * 50 + initTop + "px";

  wyMessage.dom = wyMessage.vm.$el;
  wyMessage.dom.moveTop = wyMessage.vm.moveTop;
  wyMessage.dom.id = wyMessage.id
  wyMessage.dom.style.zIndex = 1000 + nId;
  wyMessage.dom.style.top = top;
  document.body.appendChild(wyMessage.dom);

  return wyMessage.vm;
}
