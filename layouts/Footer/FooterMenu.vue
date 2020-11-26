<template>
  <div class="wrapper">
    <ul class="flex justify-around menu-footer py-6">
      <li class="menu-footer__item">FAQ</li>
      <li class="menu-footer__item">CONTACT</li>
      <li class="menu-footer__item">ITEMS</li>
      <li class="menu-footer__item">TERMS AND CONDITIONS</li>
      <li class="menu-footer__item">LEADERBOARD</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "FooterMenu"
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/_variables.scss';
  .menu-footer {
    &__item {
      cursor: pointer;
      text-decoration: underline;
      text-decoration-color: $primary-color;
    }
  }
</style>
