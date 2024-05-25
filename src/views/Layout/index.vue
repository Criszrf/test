<script setup>
import LayoutNavFixed from './components/LayoutNavFixed.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()
onMounted(() => {
  categoryStore.getCategory()
})

</script>

<template>
  <LayoutNav />
  <LayoutNavFixed />
  <LayoutHeader />
    <RouterView />
  <LayoutFooter />
</template>