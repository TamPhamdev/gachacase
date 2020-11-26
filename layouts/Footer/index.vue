<template>
  <div>

    <FooterMenu />
    <div class="wrapper flex footer justify-between w-100 py-8">

      <div class="footer__term-conditions flex-none">
        <p>© 2016—2020 DWCASE.COM</p>
        <p>WiseAvant OÜ as an administrator of the Website adopts these Terms of Use that specifies User’s rights and obligations and constitute a legally binding agreement for both parties. These Terms of Use affect User’s rights and impose certain obligations while using the Website, so the User must read them carefully.</p>
      </div>
      <div class="footer__payment flex-grow">
        <img
          src="@/assets/images/payments.png"
          alt=""
        >
      </div>
      <div class="flex-none"></div>
    </div>
  </div>
</template>

<script>
  import FooterMenu from "./FooterMenu"
  export default {
    name: "Footer",
    components: { FooterMenu }

  }
</script>

<style lang="scss" scoped>
  .footer {
    color: rgb(173, 165, 155);
    background-image: initial;
    background-color: rgb(22, 24, 30);
    &__term-conditions {
      font-size: 0.8rem;
      flex-basis: 25%;
    }
    &__payment {
      flex-basis: 50%;
    }
  }
</style>

