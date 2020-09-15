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

## 组件使用文档

### wyNotify


For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
