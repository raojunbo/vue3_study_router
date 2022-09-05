<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="content">
    <div class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
    <div>
      <RouterView />
    </div>
  </div>
</template>
<style>
.nav {
  display: flex;
  flex-direction: column;
}
.content{
  display: flex;
  flex-direction: row;
}
</style>
