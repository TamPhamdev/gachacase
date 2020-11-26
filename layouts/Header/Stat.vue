<template>
  <div class="stat wrapper-main__content grid gap-4 grid-cols-2  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-6  py-5">
    <div
      class="column-stat md:p-0"
      :class="`column-stat--${item.value}`"
      v-for="item in list"
      :key="item.id"
    >
      <p
        class="stat__label uppercase font-bold tracking-widest"
        :style="{color: item.color}"
      >{{item.name}}</p>
      <p class="uppercase font-bold text-lg">{{item.count}}</p>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Stat",
    data () {
      return {
        list: [
          {
            id: 1,
            name: 'TOTAL OPENED',
            value: 'total',
            count: 312231,
            color: '#bbb'
          },
          {
            id: 2,
            name: 'KNIVES',
            count: 312231,
            color: '#e4ae39',
            value: 'knives',
          },
          {
            id: 3,
            name: 'COVERT',
            count: 312231,
            color: '#eb4b4b',
            value: 'covert',
          },
          {
            id: 4,
            name: 'CLASSIFIED',
            count: 312231,
            color: '#d32ce6',
            value: 'classified',
          },
          {
            id: 5,
            name: 'RESTRICTED',
            count: 312231,
            color: '#8847ff',
            value: 'restricted',
          },
          {
            id: 6,
            name: 'MIL-SPEC',
            count: 312231,
            color: '#4b69ff',
            value: 'milspec',
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .stat {
    .column-stat {
      position: relative;
      background: radial-gradient(rgba(75, 105, 255, 0.2), transparent 50%);
      padding-left: 30%;
      &:before {
        content: "";
        position: absolute;
        top: 16%;
        left: 14%;
        width: 30px;
        height: 30px;
        background: no-repeat 50%;
        background-size: contain;
        opacity: 0.7;
      }
    }
    .column-stat--total {
      &:before {
        background-image: url("~@/assets/images/stat-grey.png");
      }
    }
    .column-stat--knives {
      &:before {
        background-image: url("~@/assets/images/stat-yellow.png");
      }
    }
    .column-stat--covert {
      &:before {
        background-image: url("~@/assets/images/stat-red.png");
      }
    }
    .column-stat--classified {
      &:before {
        background-image: url("~@/assets/images/stat-pink.png");
      }
    }
    .column-stat--restricted {
      &:before {
        background-image: url("~@/assets/images/stat-purple.png");
      }
    }
    .column-stat--milspec {
      &:before {
        background-image: url("~@/assets/images/stat-blue.png");
      }
    }
  }
</style>