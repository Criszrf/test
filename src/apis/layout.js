import httpinstance from "@/utils/http";

export function getCategoryAPI(data) {
    return httpinstance({
        url: '/home/category/head',
        data: data
    })
}



