<template>
  <div class="app-main-layout">
    <dash-navbar @dashsidebarevent="isOpen = !isOpen" />

    <dash-sidebar v-model="isOpen" />

    <main class="app-content" :class="{ full: !isOpen }">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import DashNavbar from "../components/dashboard/DashNavbar";
import DashSidebar from "../components/dashboard/DashSidebar";
export default {
  name: "dashboardlayout",
  data: () => ({
    isOpen: true
  }),
  components: {
    DashNavbar,
    DashSidebar
  }
};
</script>
