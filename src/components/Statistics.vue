<template>
    <div>
        <button class="btn btn-primary"> Сompleted tasks {{ compl }}</button>
        <button class="btn btn-primary"> All tasks {{ id }}</button>
        <button class="btn btn-primary"> Precent complete tasklist {{ comptask }}</button>

    </div>
</template>

<script>
export default {
    name: 'AppStatistics',
    props: {
        compl: Number,
        id: Number,
        comptask: String
    },
    methods: {},

}
</script>
<style>
button {
    margin-right: 5px;
}
</style>