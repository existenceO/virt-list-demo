import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import vjsn from 'vue-js-spatial-navigation'
// import throttle from 'lodash/throttle';

// import platform from './platform';

// vue-virtual-scroller
// import VirtualScroller from 'vue-virtual-scroller'
// import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

// vue virtual-scroll-list

async function load () {

  Vue.config.productionTip = false
  const config = {
    straightOnly: false,
    straightOverlapThreshold: 0.5,
    rememberSource: false,
    disabled: false,
    defaultElement: "",
    enterTo: "",
    leaveFor: null,
    restrict: "self-first",
    tabIndexIgnoreList: "a, input, select, textarea, button, iframe, [contentEditable=true]",
    navigableFilter: null,
    // scrollOptions: { behavior: "smooth", block: "center" }
  }
  Vue.use(vjsn, config)
  // await platform.initPlatflom();
  // window.addEventListener('keydown', throttle(() => {console.log('throttle 500ms')}, 500))
  
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
}

load()
