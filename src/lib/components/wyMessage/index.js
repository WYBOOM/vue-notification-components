import wyMessage from './wyMessage.vue'
import wy from './wyMessage'

const install = (vue,ops={})=>{
    vue.component(wyMessage.name,wyMessage)
    vue.prototype.$wyMessage = wy 
}

export default {install}