import Vue from 'vue'
import VueRouter from 'vue-router'

import VirtualList from '../components/vue-virt-list/VirtualList.vue'
import VirtualListList from '../components/vue-virt-list/VirtualListList.vue';

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/', name: 'vir-list', component: VirtualList},
    {path: '/vir-list-fixed', name: 'vir-list-list', component: VirtualListList},
    
  ],
})
