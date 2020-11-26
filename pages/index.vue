<template>
  <div class="flex flex-wrap">
    <Section
      title="trending cases"
      class="trending"
    >
      <!-- <NuxtLink to="/case"> -->
      <Case
        v-for="(item, index) in 5"
        :key="index"
      />
      <!-- </NuxtLink> -->
    </Section>
    <Section title="CSGO: cases">
      <Case
        v-for="(item, index) in 20"
        :key="index"
      />
    </Section>
    <Section
      title="BATTLE CASES"
      class="battle"
    >
      <Case
        v-for="(item, index) in 10"
        :key="index"
        hasBoxBackground
      />
    </Section>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .trending {
    background-image: url('~@/assets/images/trending.png');
    background-size: cover;
    background-position: top;
  }
  .battle {
    background-image: url('~@/assets/images/battle_cases.png');
    background-size: cover;
    background-position: top;
  }
</style>
