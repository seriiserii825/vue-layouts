<script setup lang="ts">
  import TheHeader from "@/components/TheHeader.vue";
  import TheFooter from "@/components/TheFooter.vue";
  import { useLifecycleLogger } from "@/common/hooks/lifecycleLogger";
  import TheNavMenu from "@/components/TheNavMenu.vue";

  useLifecycleLogger({ name: "AppLayoutDefault" });
</script>

<template>
  <TheHeader />
  <main class="app-layout-default-main p-2 bg-amber-50">
    <TheNavMenu />
    <div>AppLayoutDefault</div>
    <slot />
  </main>
  <TheFooter />
</template>

<style lang="scss">
  .app-layout-default-main {
    margin-top: calc($header-height);
    min-height: calc(100vh - $header-height - $footer-height);
  }
</style>
