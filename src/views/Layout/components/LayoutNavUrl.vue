<script setup>
  import { useCategoryStore } from '@/stores/category'
  const categoryStore = useCategoryStore()
</script>

<template>
  <ul class="app-header-nav">
    <li class="home" v-for="item in categoryStore.categoryList" :key="item.id">
      <RouterLink to="/">{{ item.name }}</RouterLink>
    </li>
  </ul>
</template>


<style lang="scss">
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;

      &:hover {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }

    .active {
      color: $xtxColor;
      border-bottom: 1px solid $xtxColor;
    }
  }
}
</style>