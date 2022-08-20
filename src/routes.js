import VueRouter from "vue-router";
import Home from "./pages/HomeComponent"
import About from "./pages/AboutComponent"
import Tasklist from "./pages/TaskListComponent"
import Task from "./pages/TaskComponent.vue"
import Error from "./pages/Error404Component"

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/tasklist',
            component: Tasklist
        },
        {
            path: '/tasklist/:id',
            component: Task
        },
        {
            path: '*',
            component: Error
        }
    ]
})