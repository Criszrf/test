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

