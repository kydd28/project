<template>
    <div class="banner">
             <el-carousel  height="500px">
                <el-carousel-item v-for="item in bannerlist" :key="item">
                  <img :src="item.imgUrl" alt="">
                </el-carousel-item>
              </el-carousel>
    </div>
</template>

<script setup>
import { getbannerapi } from '@/api/Layout';
import { ref,onMounted } from 'vue';
const bannerlist=ref([])
const getbannerlist=async()=>{
const res = await getbannerapi()
  bannerlist.value=res.data.result  

}

onMounted(()=>{
  getbannerlist()
})
</script>
<style lang="scss" scoped>
.el-carousel{
  background-color: #fff;
}
.banner {
  width: 1240px;
  height: 500px;
  background-color:rgb(245, 245, 245);
  margin:  0 auto;
}


</style>