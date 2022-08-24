
<template>
    <div id="lessonTwo">
        <h1 v-color:color.font.height="'70px'" style="text-align: center;">{{ message }} 🎉</h1>
        <form>
            <Form :add="addTask" :value="newTitle" @input="newTitle = $event"> </Form>
        </form>
        <Statistics :compl="completedTasks" :id="allTasks" :comptask="completeTasklist"></Statistics>
        <br>
        <span v-for="i in radioTask" :key="i.id">
            <input type="radio" class="btn-check" name="options" :id="i.id" :checked="i.check"
                @change="radioState = i.change">
            <label :for="i.id" :class="i.classes" style="margin-right: 5px;"> {{ i.title }}</label>
        </span>
        <br><br>
        <input v-model="searchTitle" placeholder="🔎"> <span style="margin:0 10px; color: white">📍Если хотите отредактировать задачу, то нажмите на текст и редактируйте!</span>
        <br>
        <br>
        <h2 v-show="this.todoItems.length == 0">{{ titleAdd }}</h2>
        <ul class="list-group">
            <TodoList v-for="(i, index) in filterTodoItems" :key="index" :id="index" @click="i.done = !i.done" :value="i.title"
                @textarea="i.title = $event" :btntext="btnText(index)"
                :color="i.done ? 'btn btn-success' : 'btn btn-secondary'" @delete="removeTask(i.id, index)">
                <router-link tag="button" class="btn btn-info"
                    :to="{ path: '/tasklist/' + (index + 1), query: { title: i.title, statusTask: i.done ? 'Выполнено😍😃' : 'Не выполнено😫' } }">⌽</router-link>
            </TodoList>
            <span v-scroll-end class="knopka"><a>Наверх</a></span>
        </ul>

    </div>
</template>
<script>
import Form from '../components/Form.vue'
import TodoList from '../components/TodoList.vue'
import Statistics from '../components/Statistics.vue'
import axios from "axios"

const baseUrl = "http://localhost:3001/todos/"
export default {
    name: 'AppLessonTwo',
    data() {
        return {
            message: 'Hello from Vue App',
            todoItems: [],
            todos: [],
            radioTask: [
                { id: "option1", change: "", classes: "btn btn-outline-warning", check: true, title: "Все задачи 🤯" },
                { id: "option2", change: "completed", classes: "btn btn-outline-success", check: false, title: "Выполненные задачи 😍" },
                { id: "option3", change: "uncompleted", classes: "btn btn-outline-secondary", check: false, title: "Невыполненные задачи ☠️" }],
            newTitle: '',
            searchTitle: '',
            count: 0,
            radioState: "",
            titleAdd: 'Please add new task'
        }
    },
    computed: {
        allTasks() {
            return this.todoItems.length;
        },
        completedTasks() {
            this.count = 0
            for (let i in this.todoItems) {
                if (this.todoItems[i].done === true) {
                    this.count++
                }
            }
            return this.count
        },
        completeTasklist() {
            return this.allTasks === 0 ? '0 %' : (this.count / (this.allTasks) * 100).toFixed(2) + '%'
        },
        filterTodoItems() {
            var vm = this
            let sortList = this.todoItems.filter(function (i) {
                return i.title.toLowerCase().indexOf(vm.searchTitle.toLowerCase()) !== -1
            })
            if (this.radioState === "completed") {
                return sortList.filter(function (i) { return i.done })
            } else if (this.radioState === "uncompleted") {
                return sortList.filter(function (i) { return !i.done })
            } else {
                return sortList
            }
        }
    },
    methods: {
        async putTask(editTask, done, title) {
            await axios.put(baseUrl + editTask.id, {
                ...editTask, done: done, title: title
            });
        },
        btnText(id) {
            let txt;
            if (this.todoItems[id].done) {
                txt = 'completed'
                this.putTask(this.todoItems[id], this.todoItems[id].done, this.todoItems[id].title)
            } else {
                txt = 'in order'
                this.putTask(this.todoItems[id], this.todoItems[id].done, this.todoItems[id].title)
            }
            return txt
        },
        async postTasks() {
            const res = await axios.post(baseUrl, {
                id: new Date(),
                title: this.newTitle,
                desc: "",
                created: new Date(),
                updated: "",
                done: false,
            })
            this.getTasks()
        },
        async getTasks() {
            try {
                const res = await axios.get(baseUrl)
                this.todoItems = res.data
            } catch (e) {
                console.log(e)
            }
        },
        addTask() {
            this.postTasks()
            this.newTitle = ''
        },
        async delTask(id) {
            try {
                await axios.delete(baseUrl + id);
            } catch (e) {
                console.log(e);
            }
        },
        removeTask(id, index) {
            this.delTask(id)
            this.todoItems.splice(index, 1)

        }
    },
    components: {
        Form,
        TodoList,
        Statistics
    },
    mounted() {
        this.getTasks()
        // let data = JSON.parse(localStorage.getItem('todoItems'));
        // if (data) {
        //     this.todoItems = data;
        // }

    }
}
</script>

<style>
.knopka {
    opacity: 0;
    background-color: yellowgreen;
    color: #fff;
    padding: 15px 15px;
    border-radius: 5px;
    position: fixed;
    right: 20px;
    bottom: 20px;
    cursor: pointer;
    transition: all .5s ease-in-out;
}
</style>