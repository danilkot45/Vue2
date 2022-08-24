<template>
    <nav class="navbar">
        <ul class="nav nav-pills">
            <li class="nav-item" v-for="(i, index) in navItem" :key="index">
                <router-link :class="ChangeClass(i.path)" :to='i.path'>{{ i.title }}</router-link>
            </li>
        </ul>
        <ul v-if="state == 'true'">
            <li class="nav-item float-end">
                <button  class="btn btn-danger" @click=clickButton()>Выйти </button>
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
            ],
            state:''
        }
    },
    beforeUpdate(){
         this.state = localStorage.entry
    },
    methods: {
        ChangeClass(route) {
            let res
            if (this.$route.path === route) {
                res = 'nav-link active'
            } else {
                res = 'nav-link'
            }
            return res
        },
        clickButton() {
        localStorage.setItem('entry', false);
            setTimeout(() => {
                this.$router.push("/")
            }, 500);
        }
    }
}
</script>