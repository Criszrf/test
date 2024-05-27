import httpinstance from "@/utils/http";

export function getBannerAPI(data) {
    return httpinstance({
        url: '/home/banner',
        data: data
    })
}

export function findNewAPI(data){
    return httpinstance({
        url: '/home/new',
        data: data
    })
}
export function findHotAPI(data){
    return httpinstance({
        url: '/home/hot',
        data: data
    })
}
export const getGoodsAPI = () => {
    return httpinstance({
      url: '/home/goods'
    })
  }
