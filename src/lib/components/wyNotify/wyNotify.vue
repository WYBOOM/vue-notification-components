<template>
  <transition name="wyNotify-fade">
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
      visible: true
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
  transition: all 0.3s ease;
}
.wyNotify-fade-enter-active{
    transition: all 0.3s ease;
}
.wyNotify-fade-enter, .wyNotify-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.wyNotify {
  position: absolute;
  top: 10px;
  right: 10px;

  width: 400px;
  height: 80px;

  border: 1px solid gray;
}
</style>