<template>
    <div>
        <h1>СПИСОК ЗАДАЧ📝 </h1>
        <div v-if="state" class="news">
            <h3>ИТОГОВЫЕ ВОЗМОЖНОСТИ ПРИЛОЖЕНИЯ📲</h3>
            <ul>
                <li>Создание/удаление/редактирование задач</li>
                <li>Выставление статуса выполнения задач</li>
                <li>Фильтрация задач</li>
                <li>Поиск задач</li>
                <li>Авторизация и выход из приложения</li>
                <li>Список задач доступен только авторизованных пользователей</li>
                <li>Приложение SPA</li>
                <li>Все данные хранятся на сервере</li>
            </ul>
        </div>
        <div v-if="!state">
            <h2>🔐 ВОЙДИТЕ НА СВОЙ АККАУНТ,ЧТОБЫ УЗНАТЬ СВОЙ СПИСОК ДЕЛ</h2>
            <div class="main-agileinfo">
                <div class="agileits-top">
                    <form @submit.prevent method="post">
                        <div class="form__field">
                            <input ref="success1" class="text" type="text" name="login" placeholder="Login"
                                v-model="login" @blur="loginFunc()" required="">
                            <span ref="err1" class="form__error">Это поле должно содержать только латинские буквы и
                                цифры, пример: koshka113</span>
                        </div>
                        <div class="form__field">
                            <input ref="success2" class="text" type="password" name="password" placeholder="Password"
                                v-model="password" @blur="passwordFunc()" required="">
                            <span ref="err2" class="form__error">Это поле должно содержать пароль в формате
                                Example123!</span>
                        </div>
                        <button :class="changeButton() ? 'btn btn-success' : 'btn btn-secondary'"
                            :disabled="!changeButton()" @click="clickButton()"> Войти</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        state: Boolean
    },
    data() {
        return {
            login: '',
            password: '',
            stateLogin: false,
            statePassword: false

        }
    },
    methods: {
        loginFunc() {
            if (/^[a-zA-z]{1}[a-zA-Z1-9]{3,20}$/.test(this.login)) {
                this.$refs.success1.style.border = "1px solid green"
                this.$refs.err1.style.display = "none"
                this.stateLogin = true
            } else {
                this.$refs.err1.style.display = "block"
                this.$refs.success1.style.border = "1px solid red"
                this.stateLogin = false
            }

        },
        passwordFunc() {
            if (/^[a-zA-z]{1}[a-zA-Z1-9]{3,20}$/.test(this.password)) {
                this.$refs.success2.style.border = "1px solid green"
                this.$refs.err2.style.display = "none"
                this.statePassword = true
            } else {
                this.$refs.err2.style.display = "block"
                this.$refs.success2.style.border = "1px solid red"
                this.statePassword = false
            }
        },
        changeButton() {
            return this.stateLogin && this.statePassword
        },
        clickButton() {
            this.$emit("entry");
            setTimeout(() => {
                this.$router.push("/tasklist")
            }, 500);
        }
    }
}
</script>
<style>
li {
    font-size: 20px;
    list-style-type: none;
    color: WHITE;
    font-weight: bold;
}
</style>