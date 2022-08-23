<template>
    <li class="list-group-item">
        <span style="color:white">☞</span><button :class="color" @click="$emit('click', done)">{{ btntext }}</button>
          <textarea  spellcheck="false" rows="1" cols="30"  class="edit" type="text" :value="value"
            @input="$emit('textarea', $event.target.value)" >{{value}}</textarea>
            <button class="btn btn-danger" @click="$emit('delete',removeTask)">Удалить</button>
             <slot></slot>

    </li>
</template>

<script>

export default {
    name:'AppTodoList',
    // props:['text','id','color','btntext','done'],
    props: {
        value: String,
        id: Number,
        color: String,
        btntext: String,
        done: Boolean,
        removeTask: Function,
        detailTask: Function
    }
}
</script>

<style>
.list-group-item{
background: transparent
}
.btn-info{
    float:right;

}
.btn-danger{
    float: right;
}

.edit {
    position: absolute;
    top:15px;
    outline: none;
    cursor: pointer;
    border: none;
resize: none;
background: transparent;
color:white;
}
</style>