import ColorDirective from '../directive/Vcolor'
import ScrollEndDirective from '../directive/Vscroll'

export default {
    install: (Vue) => {
        Vue.directive('color', ColorDirective)
        Vue.directive('scroll-end', ScrollEndDirective)
    }
}