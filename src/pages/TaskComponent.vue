<template>
    <div>
        <h1>Задача №{{ message }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: this.$route.params.id
        }
    }
}
</script>
