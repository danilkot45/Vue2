<template>
    <div>
        <h1>Задача №{{ id }}</h1>
        <h2>Описание задачи: {{$route.query.title}}</h2>
        <h2>Статус задачи: {{$route.query.statusTask}}</h2>
        <button class="btn btn-warning" @click="goBackTaskList">Вернуться в список задач</button>
        <div class="d-flex flex-column flex-shrink-0 vh-100" style="width: 200px;">
    <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">

        <li v-for="(i,index) in todoItems" :key="index"  class="nav-item"> <router-link :to="{path:'/tasklist/'+(index+1),query:{title:i.text, statusTask:i.done ? 'Выполнено😍😃' : 'Не выполнено😫'}}" class="nav-link py-3 border-bottom"> <i class="fa fa-home"></i>{{i.text}}</router-link> </li>
    </ul>
</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            todoItems:[]
        }
    },
    mounted(){
        this.todoItems = JSON.parse(localStorage.getItem('todoItems'));
        console.log(this.todoItems)
    },
    methods:{
        goBackTaskList(){
            this.$router.push('/tasklist')
        }
    },
    watch:{
        $route(toRoute,fromRoute){
            this.id = toRoute.params.id
        }
    }
}
</script>
