<template>
  <div id="app">
    <div class="test"
         @click="testWyNotify">测试 wyNotify 弹框</div>
    <div class="test"
         @click="testwyMessage">测试 wyMessage 消息</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods: {

    testWyNotify () {
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
    },

    testwyMessage () {
      this.$wyMessage({
        type: 'info',
        duration: 3000,
        message: '一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字',
        showClose: true,
        onClick: function () {
          console.log('click')
        },
        onClose: function () {
          console.log('leave');
        }
      })
    }

  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.test {
  margin-bottom: 100px;
}
</style>
