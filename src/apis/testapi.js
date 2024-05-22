import httpinstance from "@/utils/http";

export function getData(){
    return httpinstance({
        url:'home/category/head',
    })
}





