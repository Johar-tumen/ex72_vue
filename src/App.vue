<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
    
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
