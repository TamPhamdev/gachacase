<template>
  <div class="dw-container">
    <StickyMenu :class="stickyMenu" />
    <header class="header">
      <div class="header__container">
        <div class="header-logo pt-6">
          <a
            href=""
            class="header-logo__link"
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
              name="steam"
              style="width:1.5rem; height:1.5rem;color: #fff;"
            />
            <p> Sign in with </p>
            <p class="tracking-widest uppercase font-semibold ">steam</p>
          </a>
        </div>

        <div class="main-nav pt-6">
          <Hamburger />
        </div>
      </div>
    </header>
    <div style="padding: 0 5%;">
      <div class="wrapper-main">
        <Stat />
        <Recent />
      </div>
    </div>
  </div>
</template>

<script>
  import StickyMenu from "./StickyMenu";
  import Hamburger from "./Hamburger";
  import Stat from "./Stat";
  import Recent from "./Recent";
  import Steam from "@/assets/icons/svg/steam.svg";
  export default {
    name: "Header",
    data () {
      return {
        isVisibleStickyMenu: false,
      }
    },
    components: {
      Steam,
      Hamburger,
      Stat,
      Recent,
      StickyMenu
    },
    computed: {
      stickyMenu () {
        return this.isVisibleStickyMenu ? 'sticky-menu-active' : 'sticky-menu'
      },
      currentScrollY () {
        return this.$store.getters["page/getVisibleStickyMenu"];
      }
    },

    watch: {
      currentScrollY (val) {
        if (val > 100) {
          this.isVisibleStickyMenu = true;
        } else {
          this.isVisibleStickyMenu = false;
        }
      }
    },
    methods: {
      handleSelect () { }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/styles/variables.scss';
  .dw-container {
    margin: auto;
  }
  .header {
    background-image: url('~@/assets/images/bg-header.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    background-color: #2c2828;
    &__container {
      top: 10px;
      position: relative;
      transform: translateY(-10px);
      padding: 0 5%;
      min-height: 200px;
      display: flex;
      justify-content: space-between;
    }
    &-logo {
      width: 100%;
      max-width: 100px;
    }
    &-signin {
      clip-path: polygon(0 0, 100% 0, 87% 100%, 13% 100%);
      background-color: #171a21;
      color: #c5c3c0;
      position: relative;
    }
  }
  .wrapper-main {
    position: relative;
    border-top: 1px solid rgba(236, 194, 20, 0.5);
    border-radius: 10px;
    overflow: hidden;
    background: rgba(26, 28, 36, 0.8);
  }
  .sticky-menu {
    // opacity: 0;
    transform: translateY(-200px);
    transition: transform 0.3s linear;
    &-active {
      // opacity: 1;
      transform: translateY(0px);
      transition: transform 0.3s linear;
    }
  }
</style>
