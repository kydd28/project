import request from "@/utils/request";
// 获取layout  bannner接口
export const getbannerapi=()=>{
  return request({
    url:"/banner/list",
    method:'GET'
  })
}