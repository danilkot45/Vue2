import axios from "axios"
const baseUrl = "http://localhost:3001/todos/"
export default {
    actions: {
        async getTasks(ctx) {
            try {
                const res = await axios.get(baseUrl)
                const todoItems = res.data
                ctx.commit('updateTodoItems', todoItems)
            } catch (e) {
                console.log(e)
            }

        },
        async fetchPost(ctx, title) {
            const res = await axios.post(baseUrl, {
                id: new Date(),
                title: title,
                desc: "",
                created: new Date(),
                updated: new Date(),
                done: false,
            })
            ctx.commit('addTask', res.data);
        },
        async delTask(ctx,taskId){
            try {
                await axios.delete(baseUrl + taskId[0]);
                ctx.commit('deleteTask',taskId[1])
            } catch (e) {
                console.log(e);
            }
        },
        async changeTitle(ctx, edit) {
            const res = await axios.patch(baseUrl + edit[0],
              {
                title: edit[1],
                updated: new Date()
              }
            );
          },
        async changeDone(ctx, edit) {
            const res = await axios.patch(baseUrl + edit[0],
              {
                done: edit[1],
                updated: new Date()
              }
            );
          },
         async titleSearch(ctx,text){
            const searchTitle = text
           ctx.commit('titleSearch',searchTitle)
          }
    },
    mutations: {
        updateTodoItems(state, todoItems) {
            state.todoItems = todoItems
        },
        addTask(state, obj) {
            state.todoItems.push(obj);
        },
        deleteTask(state,index){
            return state.todoItems.splice(index, 1)
        },
        titleSearch(state,searchTitle){
            state.searchTitle = searchTitle
        }
    },
    state: {
        todoItems: [],
        searchTitle:""
    },
    getters: {
        showAllTodoItems(state) {
            let sortList = state.todoItems.filter(function (i) {
                return i.title.toLowerCase().indexOf(state.searchTitle.toLowerCase()) !== -1
            })
            return sortList
        },

        completedTasks(state){
            let sortList = state.todoItems.filter(function (i) {
                return i.title.toLowerCase().indexOf(state.searchTitle.toLowerCase()) !== -1
            })
            return sortList.filter(function (i) { return i.done })
        },
        uncompletedTasks(state){
            let sortList = state.todoItems.filter(function (i) {
                return i.title.toLowerCase().indexOf(state.searchTitle.toLowerCase()) !== -1
            })
            return sortList.filter(function (i) { return !i.done })
        }
    }
}