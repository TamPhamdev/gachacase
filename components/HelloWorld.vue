<template>
  <div class="hello">
    <Header />
    <div class="flex flex-wrap">

      <Section
        title="trending cases"
        class="trending"
      >
        <Case
          v-for="(item, index) in 5"
          :key="index"
        />
      </Section>
      <Section title="CSGO: cases">
        <Case
          v-for="(item, index) in 20"
          :key="index"
        />
      </Section>
    </div>
  </div>
</template>

<script>
  import Header from "@/layout/Header/Header"
  import Case from "@/components/Case"
  import Section from "@/containers/SectionWrapper"
  export default {
    name: 'HelloWorld',
    components: {
      Header,
      Case,
      Section
    },
    props: {
      msg: String
    }
  }
</script>

<style lang="scss" scoped>
  .trending {
    background-image: url("~@/assets/images/trending.png");
    background-size: cover;
    background-position: top;
  }
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
