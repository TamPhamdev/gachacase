<template>
  <header class="header-sticky">
    <div class="header-sticky__container">
      <div class="header-sticky-logo">
        <a
          href=""
          class="header-sticky-logo__link"
        >
          <img
            src="@/assets/images/logo.svg"
            alt=""
          >
        </a>
      </div>
      <div class="cursor-pointer header-signin w-56 h-20 text-center">
        <a class="flex items-center justify-center flex-col">
          <svg-icon
            icon-class="steam"
            style="width:1.5rem; height:1.5rem;"
          />
          <p> Sign in with </p>
          <p class="tracking-widest uppercase font-semibold ">steam</p>
        </a>
      </div>

      <div class="main-nav">
        <Hamburger />
      </div>
    </div>
  </header>
</template>

<script>
  import Hamburger from "./Hamburger";
  export default {
    name: "StickyMenu",
    components: { Hamburger }
  }
</script>

<style lang="scss" scoped>
  .header-sticky {
    height: 80px;
    z-index: 1;
    position: fixed;
    width: 100%;
    &__container {
      padding: 0 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      width: 100%;
      z-index: 1;
      min-height: initial;
      transform: translateY(0px);
      top: 0px;
      transition: all 0.2s linear;
      background-color: #1c1e26;
    }
    &-logo {
      width: 100%;
      max-width: 100px;
      img {
        // transform: translateY(50%);
        transition: transform 1s linear;
      }
    }
  }
</style>