<script setup>
import { gethotgoodsapi } from '@/api/home';
import { ref,onMounted } from 'vue';
const hotgoodslist=ref([])
const gethotgoods= async()=>{
  const res = await gethotgoodsapi()

  
}
onMounted(()=>{
  gethotgoods()
})
</script>

<template>
  <div>
    你看我是不是热门好物
  </div>
</template>

<style lang="scss" scoped>

</style>