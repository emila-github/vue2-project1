// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
const User = {
  template: '<div>User {{ $route.params.id }}</div>',
  watch: {
    '$route' (to, from) {
      console.log(to, from)
      // 对路由变化作出响应...
    }
  }
}
const routes = [
  { path: '/helloRouter', component: require('./components/HelloRouter') },
  { path: '/foo', component: Foo },
  { path: '/hello', component: require('./components/Hello') },
  // 动态路径参数 以冒号开头
  { path: '/user/:id', component: User },
  { path: '/userChild/:id',
    component: require('./components/HelloRouter'),
    children: [
      {
        // 当 /userChild/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'userProfile',
        component: require('./components/UserProfile')
      },
      {
        // 当 /userChild/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'posts',
        component: require('./components/UserPosts')
      }
    ]
  }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
/* eslint-disable no-new */
new Vue({
  // el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
