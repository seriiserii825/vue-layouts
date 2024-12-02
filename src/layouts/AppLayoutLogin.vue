<script setup lang="ts">
  import { useLifecycleLogger } from "@/common/hooks/lifecycleLogger";
  import TheNavMenu from "@/components/TheNavMenu.vue";

  useLifecycleLogger({ name: "AppLayoutLogin" });
</script>

<template>
  <div>
    <TheNavMenu />
    <main class="app-layout-login-main">
      <div>AppLayoutLogin</div>
      <div class="wrapper w-full h-screen flex justify-center items-center bg-sky-300">
        <slot/>
      </div>
    </main>
  </div>
</template>
