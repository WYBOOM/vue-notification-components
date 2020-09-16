# vue-notification-components

> 基于 vue 开发的浏览器端消息弹框组件（仿 mac 系统弹框）

## 安装

### npm 安装

`npm install vue-notification-components -S`

### script 标签引入

`<srcipt src='/dist/vue-notification-components.js'></srcipt>`

## 引入

### 完整引入

```
import Vue from 'vue'
import App from './App.vue'

import vueNotificationComponents from 'vue-notification-components'

Vue.use(vueNotificationComponents)

new Vue({
  el: '#app',
  render: h => h(App)
})

```

### 按需引入

使用 es6 解构对象，分别使用 vue.use()即可

```
const {wyNotify, ...} = vueNotificationComponents

Vue.use(wyNotify)
...
```

## 组件列表

- wyNotify

---

## 组件使用文档

### wyNotify

> 通知提醒组件

#### 绑定 wyNotify 方法到 Vue 实例原型链上，通过调用`vue.$wyNotify(options)`显示消息。下面是 options 对象的 key。（options 请使用对象类型）

|   键名    |  值类型  | 是否必填 |                   参数作用                    | 默认值 |
| :-------: | :------: | :------: | :-------------------------------------------: | :----: |
|   title   |  String  |   选填   |                     标题                      |   无   |
|  message  |  String  |   选填   |                   消息内容                    |   无   |
| duration  |  Number  |   选填   | 弹框显示时间，值为 0 时不自动关闭。单位为 ms  |  4000  |
| showClose | Boolean  |   选填   |               是否显示关闭按钮                | false  |
|  iconSrc  |  String  |   选填   | 弹框图标（用 require 或 import 引入相对路径） |   无   |
|  onClose  | Function |   选填   |              消息弹框关闭的回调               |   无   |
|  onClick  | Function |   选填   |            点击消息弹框触发的事件             |   无   |

```
this.$wyNotify({
        duration: 3000,
        title: '标题',
        message: '一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字',
        showClose: true,
        iconSrc: require('../src/assets/蛙.png'),//使用require引入相对路径图片,
        onClick: function () {
          console.log('click')
        },
        onClose: function () {
          console.log('leave');
        }
      })
```
![wyNotify](https://github.com/WYBOOM/vue-notification-components/blob/master/src/assets/wyNotify.gif 'wyNotify')

---

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
