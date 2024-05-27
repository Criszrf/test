import { useIntersectionObserver } from '@vueuse/core'


export const lazyPlugin = {
    install(app){
        app.directive('img-lazy', {
            mounted(el, binding) {
                console.log(el, binding.value)
                const {stop} = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                      console.log(isIntersecting)
                        if (isIntersecting) {
                            el.src = binding.value // 图片懒加载
                            stop() // 停止监听
                        }
                    },
                )
            }
        })
    }
}