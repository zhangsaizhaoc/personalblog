import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import Indexs from '../components/views/index/indexs'
import Confucian from '../components/views/Confucian/confucian'
import Buddha from '../components/views/Buddha/buddha'
import Road from '../components/views/Road/road'
import Medicine from '../components/views/medicine/medicine'
import Martialarts from '../components/views/Martialarts/martialarts'
import Selfintroduction from '../components/views/Selfintroduction/selfintroduction'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path: '/index/indexs',
          name: 'Indexs',
          component: Indexs
        }, {
          path: '/index/confucian',
          name: 'Confucian',
          component: Confucian
        }, {
          path: '/index/buddha',
          name: 'Buddha',
          component: Buddha
        }, {
          path: '/index/road',
          name: 'Road',
          component: Road
        }, {
          path: '/index/medicine',
          name: 'Medicine',
          component: Medicine
        }, {
          path: '/index/martialarts',
          name: 'Martialarts',
          component: Martialarts
        },{
          path: '/index/selfintroduction',
          name: 'Selfintroduction',
          component: Selfintroduction
        }
      ]
    }
  ]
})
