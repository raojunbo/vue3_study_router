<template>
  <div class="about">
    <h1>这是About</h1>
    <RouterLink class='link' to="/about/message">这是消息</RouterLink>
    <RouterLink class='link'  to="/about/news">这是新闻</RouterLink>
  </div>
  <RouterView></RouterView>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .link {
    margin: 10px;
  }
}

</style>
