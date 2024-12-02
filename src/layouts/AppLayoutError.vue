<script setup lang="ts">
  import { useLifecycleLogger } from "@/common/hooks/lifecycleLogger";
  import TheNavMenu from "@/components/TheNavMenu.vue";

  useLifecycleLogger({ name: "AppLayoutError" });
</script>

<template>
  <div>
    <TheNavMenu />
    <main class="app-layout-error-main bg-red-600">
      <div>AppLayoutError</div>
      <slot />
    </main>
  </div>
</template>
