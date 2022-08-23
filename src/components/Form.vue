<template>
    <div class="input-group mb-3">
        <input  type="text" class="form-control" placeholder="Add new Task😃" :value="value"
            @input="$emit('input', $event.target.value)">
        <div class="input-group-append">
            <button :disabled="value.length === 0 || !value.trim()" class="btn btn-outline-secondary"
                @click="add()">➕</button>
        </div>
    </div>
</template>
<script>


export default {
    name: 'AppForm',
    props: {
        value: String,
        add: Function
    },
    methods: {}

}

</script>