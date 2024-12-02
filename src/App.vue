<script setup lang="ts">
  import { RouterView } from "vue-router";
  import AppLayout from "@/layouts/AppLayout.vue";
</script>

<template>
  <AppLayout>
    <RouterView />
  </AppLayout>
</template>

<style lang="scss">
  @import "assets/main.scss";
</style>
