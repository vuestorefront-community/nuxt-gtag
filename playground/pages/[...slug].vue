<template>
  <div>
    <h1>This is page {{ route.query.n }}</h1>
    <p>
      <NuxtLink to="/">Back</NuxtLink>
    </p>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
/*const {pageview} = useGtag();

pageview(route.fullPath)*/
</script>
