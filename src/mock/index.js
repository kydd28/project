import Mock from "mockjs";
//hotgoods接口的引入
import "@/mock/hot"
//首页全部分类的引入
import "@/mock/allcategory"
// 新鲜好物的引入
import "@/mock/newgoods"
//二级分类列表的导入
import "@/mock/twocategory"
const bannerData = {
  "code": "1",
  "msg": "操作成功",
  "result": [
    {
      "id": "16",
      "imgUrl": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/dfc11bb0-4af5-4e9b-9458-99f615cc685a.jpg",
      "hrefUrl": "/category/1005000",
      "type": "1"
    },
    {
      "id": "18",
      "imgUrl": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/1ba86bcc-ae71-42a3-bc3e-37b662f7f07e.jpg",
      "hrefUrl": "/category/1013001",
      "type": "1"
    },
    {
      "id": "19",
      "imgUrl": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/6d202d8e-bb47-4f92-9523-f32ab65754f4.jpg",
      "hrefUrl": "/category/1013001",
      "type": "1"
    },
    {
      "id": "20",
      "imgUrl": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/e83efb1b-309c-46f7-98a3-f1fefa694338.jpg",
      "hrefUrl": "/category/1005000",
      "type": "1"
    },
    {
      "id": "17",
      "imgUrl": "http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-15/4a79180a-1a5a-4042-8a77-4db0b9c800a8.jpg",
      "hrefUrl": "/category/1019000",
      "type": "1"
    }
  ]
}

// 拦截 GET 请求，返回你给的数据
// 接口地址：/api/banner/list （你可以自己改成你需要的）
Mock.mock('/api/banner/list', 'get', () => {
  // 直接返回你给的完整结构
  return bannerData
})


