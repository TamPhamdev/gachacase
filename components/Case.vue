<template>
  <div
    class="case text-center flex flex-col items-center"
    @mouseover="text = `Open`"
    @mouseleave="text = 'Price'"
  >
    <div class="case__main-thumb">
      <img
        class="case__main-thumb--image"
        :src="lists[random].url"
        alt=""
      >
    </div>
    <p class="overflow-ellipsis overflow-hidden font-bold">{{random}}</p>
    <div class="case__price flex items-center justify-center">
      <span class="uppercase  pr-1.5">{{text}}</span> <span class="uppercase font-bold">$1.99 usd</span>
    </div>
    <div class="case__info-sold">Already sold: 999</div>
  </div>
</template>

<script>
  import mock from "@/api/mock.json"
  export default {
    name: "Case",
    data () {
      return {
        text: 'Price',
        lists: mock
      }
    },
    computed: {
      random () {
        return Math.floor((Math.random() * 39) + 1)
      }
    },

  }
</script>

<style lang="scss" scoped>
  @keyframes mymove {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(5px);
    }
    50% {
      transform: translateY(10px);
    }
    75% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  @import "~@/assets/styles/_variables.scss";
  .case {
    margin-top: 20px;
    position: relative;
    padding: 0 15px;
    cursor: pointer;
    &:hover:before {
      opacity: 1;
      transition: opacity 0.2s;
    }
    &:hover > .case__info-sold {
      opacity: 1;
      transform: translateY(0px);
      transition: opacity 0.3s, transform 0.2s;
    }
    &:hover > .case__main-thumb {
      img {
        animation-play-state: running;
      }
    }
    &:hover > .case__price {
      background-color: $primary-color;
      color: $text-black;
    }
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 10px;
      transition: opacity 0.2s;
      opacity: 0;
      background-color: rgba(0, 0, 0, 0.1);
    }
    &__price {
      padding: 0 14px;
      height: 34px;
      margin-top: 12px;
      border: 2px solid $primary-color;
      border-radius: 40px;
      width: fit-content;
    }
    &__info-sold {
      margin-top: 12px;
      margin-bottom: 12px;
      transform: translateY(5px);
      transition: all 0.2s;
      font-size: 0.8em;
      opacity: 0;
    }
    &__main-thumb--image {
      max-width: 241px;
      width: 100%;
      animation: mymove 1.3s linear infinite;
      animation-play-state: paused;
    }
  }
</style>