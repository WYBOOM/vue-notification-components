<template>
  <transition name="wyNotify-fade"
              @after-leave='removeNode'
              ref="wyNotify">
    <div ref="wyNotify"
         class="wyNotify"
         @click="onClick"
         v-show="visible">
      <!-- <span @click.stop="close">关闭</span> -->
      <img :src='iconSrc'
           v-if="iconSrc!==''"
           class="wyNotify-icon"
           alt="">
      <div class="wyNotify-font-group">
        <div class="wyNotify-title">{{title||''}}</div>
        <div class="wyNotify-message">{{message||''}}</div>
      </div>
      <div class="wyNotify-close"
           v-if="showClose"
           @click.stop="close">

      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'wyNotify',
  data () {
    return {
      visible: false,
      timer: null,

      title: '',
      message: '',
      duration: 4000,
      showClose: false,
      iconSrc: '',
      onClose: ()=>{},
      onClick: ()=>{}
    }
  },
  mounted () {
    this.setTimer()
  },
  methods: {
    //向上移动一个单位距离
    moveTop () {
      let step = 0, curTop = parseInt(this.$refs.wyNotify.style.top.split('px')[0])
      this.timer = setInterval(() => {
        if (step >= 83) {
          clearInterval(this.timer)
        }
        this.$refs.wyNotify.style.top = curTop - step + 'px'
        step = step + 3
      }, 6)
    },

    close () {
      this.visible = false
      this.onClose()
    },

    //定时关闭
    setTimer () {
      if (this.duration === 0) {
        //设为0不会自动关闭
        return
      }
      setTimeout(() => {
        this.close()
      }, this.duration);
    },


    // 从dom中移除该元素，触发下级所有的wyNotify moveTop方法 向上移动一个单位
    removeNode () {
      const curId = parseInt(this.$el.id.split('notice-')[1])
      Array.from(document.body.getElementsByClassName("wyNotify")).forEach((element, index) => {
        const id = parseInt(element.id.split('notice-')[1])
        if (id > curId) {
          //通过id判断是否为之后产生的组件
          element.moveTop()
        }
      });
      this.$el.parentNode.removeChild(this.$el)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../common.scss";

.wyNotify-fade-leave-active {
  animation: bounce-in 0.4s reverse;
}
.wyNotify-fade-enter-active {
  animation: bounce-in 0.4s;
}
@keyframes bounce-in {
  0% {
    right: -400px;
  }
  100% {
    right: 15px;
  }
}
.wyNotify {
  position: fixed;
  right: 15px;

  width: 350px;
  height: 70px;

  border: 1px solid #faf8f8;
  border-radius: 8px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0,.2);

  background-color: #faf8f8;
  opacity: 0.95;

  display: flex;

  .wyNotify-icon {
    width: 35px;
    height: 35px;
    top: calc(50% - 17.5px);
    left: 8px;
    position: relative;
    display: block;
  }
  .wyNotify-font-group {
    margin-left: 20px;

    width: 250px;
    .wyNotify-title {
      margin: 15px 0px 5px 0px;
      font-weight: bold;
      font-size: 13px;
      @include oneRowTestEllipsis;
    }
    .wyNotify-message {
      font-size: 14px;
      @include oneRowTestEllipsis;
    }
  }
  .wyNotify-close {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 14px;
    font-size: 15px;
    &:before {
      content: "\2716";
      color: #cfb6b8;
    }
  }
}
</style>