// 热门好物接口
import request from "@/utils/request";  
export const gethotgoodsapi=()=>{
  return request({
    url:"/hot/recommend",
    method:"GET"
  })
}
//全部商品分类的接口
export const getallcategoryapi=()=>{
  return request({
    url:"/home/category/head"
  })
}