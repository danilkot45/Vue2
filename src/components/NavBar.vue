<template>
    <nav class="navbar">
        <ul class="nav nav-pills">
            <li class="nav-item" v-for="(i, index) in navItem" :key="index">
                <router-link :class="ChangeClass(i.path)" :to='i.path' >{{ i.title }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            navItem: [
                { path: '/', title: "Home" },
                { path: '/about', title: "About" },
                { path: '/tasklist', title: "Tasklist" }
            ]
        }
    },
    methods: {
        ChangeClass(route) {
            console.log(this.$route.path)
            let res
            if (this.$route.path === route) {
                res = 'nav-link active'
            } else {
                res = 'nav-link'
            }
            return res
        }
    }
}
</script>