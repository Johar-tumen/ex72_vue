<template>
  <div id="app">
    <div id="nav">
      <router-link to='/login'>Login</router-link>
      <router-link to='Categories'>Categories</router-link>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <component :is="layout">
      <router-view />
    </component>
    <router-view />
  </div>
</template>

<script>
import EmptyLayout from './layouts/EmptyLayout'
import DashboardLayout from './layouts/DashboardLayout'
export default {
  components:{
    EmptyLayout,
    DashboardLayout
  },
  computed:{
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  }
}
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import 'assets/css/index.css';
</style>
