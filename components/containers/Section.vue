<template>
  <div class="section">
    <div class="flex items-center justify-center">
      <span
        style=""
        class=" stroke stroke-left"
      />
      <img
        src="@/assets/images/arrow-left.svg"
        alt=""
      >
      <h2 class="section-title mx-4">{{title}}</h2>
      <img
        style="transform: scale(-1);"
        src="@/assets/images/arrow-left.svg"
        alt=""
      >
      <span class="stroke stroke-right" />
    </div>
    <div class="section-container grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 m-auto gap-4 py-4 md:px-0">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: "Section",
    props: { title: String }
  }
</script>

<style lang="scss" scoped>
  .section {
    padding: 0 5%;
    width: 100%;
    &-container {
      max-width: 1712px;
    }
    &-title {
      text-transform: uppercase;
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
    }
    .stroke {
      height: 1px;
      display: flex;
      flex-grow: 1;
    }
    .stroke-left {
      margin-right: 15px;
      background: linear-gradient(
        to right,
        transparent 0%,
        #ecc214 100%,
        #ecc214 90%,
        transparent 98%,
        transparent 100%
      );
    }
    .stroke-right {
      margin-left: 15px;
      background: linear-gradient(
        to left,
        transparent 0%,
        #ecc214 100%,
        #ecc214 90%,
        transparent 98%,
        transparent 100%
      );
    }
  }
</style>
