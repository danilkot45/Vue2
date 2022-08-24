<template>
    <div class="inputForm">
        <h1>СПИСОК ЗАДАЧ📝 </h1>
        <div v-if="state === 'true'" class="news">
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
        <div v-if="state === 'false'">
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
    data() {
        return {
            login: '',
            password: '',
            stateLogin: false,
            statePassword: false,
            state: ''

        }
    },
    create() {
        localStorage.entry = false
    },
    mounted() {
        this.state = localStorage.entry
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
            localStorage.setItem('entry', true);
            setTimeout(() => {
                this.$router.push("/tasklist")
            }, 500);
        }
    }
}
</script>
<style>
.main-agileinfo {
    width: 35%;
    margin: 3em auto;
    background: rgba(0, 0, 0, 0.18);
    background-size: cover;
}

.agileits-top {
    padding: 3em;
}

.text {
    font-size: 0.9em;
    color: #fff;
    font-weight: 100;
    width: 100%;
    display: block;
    border: none;
    padding: 0.8em;
    border: solid 1px rgba(255, 255, 255, 0.37);
    transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #fff 4%);
    background-position: -800px 0;
    background-size: 100%;
    background-repeat: no-repeat;
    color: #fff;
}


.text:focus,
.text:valid {
    box-shadow: none;
    outline: none;
    background-position: 0 0;
}



input::placeholder {
    color: #fff;
    font-weight: 100;
}

.agileits-top p {
    font-size: 1em;
    color: #fff;
    text-align: center;
    letter-spacing: 1px;
    font-weight: 300;
}

.agileits-top p a {
    color: #fff;
    -webkit-transition: .5s all;
    -moz-transition: .5s all;
    transition: .5s all;
    font-weight: 400;
}

.agileits-top p a:hover {
    color: #76b852;
}

@media(max-width:480px) {

    .agileits-top {
        padding: 1.8em;
    }

    .text {
        width: 100%;
    }

    .agileits-top p {
        font-size: 0.9em;
    }
}

@media(max-width:414px) {
    .main-agileinfo {
        width: 85%;
        margin: 1.5em auto;
    }
}

@media(max-width:384px) {
    .main-agileinfo {
        width: 88%;
    }

    .colorlibcopy-agile p {
        padding: 0 1em;
    }
}

@media(max-width:320px) {

    .text {
        width: 100%;
        font-size: 0.85em;
    }
}

.form__field {
    margin-bottom: 10px;
}

.form__error {
    color: red;
    text-align: left;
    font-size: 12px;
    display: block;
    margin-top: 3px;
    display: none;
}

input:invalid:not(:placeholder-shown) {
    border-color: red;
}

input:invalid:not(:placeholder-shown)+.form__error {
    display: block;
}

.inputForm {
    text-align: center;
}

li {
    font-size: 20px;
    list-style-type: none;
    color: WHITE;
    font-weight: bold;
}
</style>