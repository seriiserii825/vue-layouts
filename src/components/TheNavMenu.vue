<script setup lang="ts">
  import { RouteNamesEnum } from "@/router/router.types";
</script>
<template>
  <div class="">
    <RouterLink
      v-for="routeName in RouteNamesEnum"
      :key="routeName"
      class="m-2 underline text-amber-600"
      :to="{ name: routeName }"
    >
      {{ routeName }}
    </RouterLink>
  </div>
</template>
