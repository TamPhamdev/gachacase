<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
  import Header from "./Header"
  import Footer from "./Footer"
  import { mapActions } from 'vuex'
  export default {
    components: {
      Header,
      Footer
    },
    methods: {
      ...mapActions('page', ['setVisibleStickyMenu']),
      handleScroll () {
        this.setVisibleStickyMenu(window.scrollY)
      }
    },
    created () {
      if (process.client) {
        window.addEventListener('scroll', this.handleScroll)
      }
    },
    beforeDestroy () {
      if (process.client) {
        window.removeEventListener('scroll', this.handleScroll)
      }
    }
  }
</script>
<style>
</style>
