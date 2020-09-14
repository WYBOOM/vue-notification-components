<template>
  <transition name="wyNotify-fade" >
    <div ref="wyNotify"
         class="wyNotify"
         v-if="visible">123123</div>
  </transition>
</template>

<script>
export default {
  name: 'wyNotify',
  data () {
    return {
      visible: false
    }
  },
  created () {
  },
  mounted () {
    this.setTimer()
  },
  methods: {
    setTimer () {
      setTimeout(() => {
        this.visible = false
      }, 1000);
    }
  }
}
</script>
<style lang="scss" scoped>

.wyNotify-fade-leave-active {
    animation:bounce-in .5s reverse
}
.wyNotify-fade-enter-active{
  animation:bounce-in .5s  
}
.wyNotify-fade-enter, .wyNotify-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
//   transform: translateX(100px);
//   opacity: 0;
}
@keyframes bounce-in {
  0% {
    right: -400px;
  }
  100% {
    right: 10px;
  }
}
.wyNotify {
  position: fixed;
  top: 10px;
  right: 10px;

  width: 400px;
  height: 80px;

  border: 1px solid gray;
}
</style>