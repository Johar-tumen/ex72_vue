<template>
  <div class="app-main-layout">
    <DashNavbar />

    <ul class="sidenav app-sidenav open">
      <li>
        <a href="#" class="waves-effect waves-orange pointer">Счет</a>
      </li>
      <li>
        <a href="#" class="waves-effect waves-orange pointer">История</a>
      </li>
      <li>
        <a href="#" class="waves-effect waves-orange pointer">Планирование</a>
      </li>
      <li>
        <a href="#" class="waves-effect waves-orange pointer">Новая запись</a>
      </li>
      <li>
        <a href="#" class="waves-effect waves-orange pointer">Категории</a>
      </li>
    </ul>

    <main class="app-content">
      <div class="app-page">
        <router-view/>
      </div>
    </main>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>
</template>

<script>
import '@/components/dashboard/DashNavbar'
export default {
  components: {
    DashNavbar
  }
}
</script>