<template>
  <ul>
<li v-for="n in 100" :key="n">
      <NuxtLink :to="getRoute(n)">{{ n }}</NuxtLink>
    </li>
  </ul>
</template>
<script setup lang="ts">
function makeid(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

function getRoute(n: number) {
  return `/${makeid(10)}/${makeid(10)}`;
}
</script>
