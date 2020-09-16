<template>
  <transition name="wyMessage"
              @after-leave='removeNode'>
    <div class="wyMessage-content"
         ref="wyMessage-content"
         v-show="visible">
      <div class="wyMessage"
           @click="onClick">
        <div class="wyMessage-inner">
          <span class="wyMessage-icon"
                :class="getType"></span>
          <div class="wyMessage-message">
            {{message}}
          </div>
          <span class="wyMessage-close"
                v-if="showClose"
                @click.stop="close"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'wyMessage',
  data () {
    return {
      visible: false,
      timer: null,
      typeList: ['info', 'success', 'error'],

      duration: 3000,
      message: '',
      type: 'info',
      showClose: false,

      onClose: () => { },
      onClick: () => { }

    }
  },
  created () {
    this.setTimer()
  },
  computed: {
    getType () {
      return this.typeList.includes(this.type) ? this.type : 'info'
    }
  },
  methods: {
    close () {
      this.visible = false
      this.onClose()
    },
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
      const curId = parseInt(this.$el.id.split('wyMessage-')[1])
      Array.from(document.body.getElementsByClassName("wyMessage-content")).forEach((element, index) => {
        const id = parseInt(element.id.split('wyMessage-')[1])
        if (id > curId) {
          //通过id判断是否为之后产生的组件
          element.moveTop()
        }
      });
      this.$el.parentNode.removeChild(this.$el)
    },
    moveTop () {
      let step = 0, curTop = parseInt(this.$refs['wyMessage-content'].style.top.split('px')[0])
      this.timer = setInterval(() => {
        if (step >= 50) {
          clearInterval(this.timer)
        }
        this.$refs['wyMessage-content'].style.top = curTop - step + 'px'
        step = step + 3
      }, 12)
    },
  }
}
</script>
<style lang="scss" scoped>
.wyMessage-leave-active {
  animation: bounce-in 0.4s reverse;
}
.wyMessage-enter-active {
  animation: bounce-in 0.4s;
}
@keyframes bounce-in {
  0% {
    margin-top: -100px;
    opacity: 0;
  }
  100% {
    margin-top: 12px;
    opacity: 1;
  }
}
.wyMessage-content {
  text-align: center;
  margin: 12px;
  width: 100%;
  position: fixed;
  .wyMessage {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 6px 16px;
    background: #fff;
    display: inline-block;
    .wyMessage-inner {
      line-height: 20px;
      display: flex;
      .wyMessage-icon {
        margin-right: 10px;
        &:before {
          content: "\FF01";
          display: inline-block;
          width: 18px;
          height: 18px;
          line-height: 18px;
          color: #fff;
          border-radius: 50%;
        }
      }
      .info:before {
        background: rgb(6, 155, 255);
      }
      .error:before {
        background: red;
      }
      .success:before {
        background: rgb(110, 199, 110);
      }

      .wyMessage-message {
        color: #2d3036;
        font-size: 14px;
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
          Microsoft YaHei, \\5fae\8f6f\96c5\9ed1, Arial, sans-serif;
      }

      .wyMessage-close {
        cursor: pointer;
        font-size: 15px;
        margin-left: 35px;
        &:before {
          content: "\2716";
          color: #cfb6b8;
        }
      }
    }
  }
}
</style>