<template>
  <LayoutHeader></LayoutHeader>
  <LayoutBanner></LayoutBanner>
  <LayoutHeaderFix></LayoutHeaderFix>
  <RouterView></RouterView>
  <LayoutFooter></LayoutFooter>
</template>

<script setup>
import LayoutFooter from './conponents/LayoutFooter.vue';
import LayoutHeader   from './conponents/LayoutHeader.vue';
import LayoutBanner from './conponents/LayoutBanner.vue';
import LayoutHeaderFix from './conponents/LayoutHeaderFix.vue';
import HomeHot from '../Home/HomeHot.vue';


import { getallcategoryapi } from '@/api/home';
import { ref,onMounted } from 'vue';
const a=ref([])
const allcategotylist= async()=>{
  const res = await getallcategoryapi()
  console.log(res);
  a.value=res.data.result 
}
onMounted(()=>{
  allcategotylist()
})
</script>

<style lang="scss" scoped>

</style>