<template>
    <a-row
        type="flex"
        justify="center"
        align="middle"
        style="height: 100vh"
    >
        <a-col :span="8">
            <a-card title="Регистрация">
                <a-form
                    @submit.prevent="register"
                    class="register-form"
                >
                    <a-form-item>
                        <a-input
                            v-model="email"
                            placeholder="Email"
                            type="email"
                            prefix-icon="mail"
                        />
                    </a-form-item>
                    <a-form-item>
                        <a-input
                            v-model="password"
                            placeholder="Пароль"
                            type="password"
                            prefix-icon="lock"
                        />
                    </a-form-item>
                    <a-form-item>
                        <a-button
                            type="primary"
                            html-type="submit"
                            class="register-form-button"
                            block
                        >
                            Зарегистрироваться
                        </a-button>
                    </a-form-item>
                    <a-form-item>
                        <span>Уже есть аккаунт? </span>
                        <nuxt-link :to="{ name: 'login' }">Войти здесь!</nuxt-link>
                    </a-form-item>
                </a-form>
            </a-card>
        </a-col>
    </a-row>
</template>

<script>
import Vue from "vue"
import { message } from "ant-design-vue"
import auth from "~/api/auth"

export default Vue.extend({
    name: "Register",
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        register() {
            const { email, password } = this
            auth.register({ email, password })
                .then(() => {
                    this.$router.push("/login")
                    message.success("Регистрация успешна! Пожалуйста, войдите.")
                })
                .catch((error) => {
                    console.error("Ошибка регистрации:", error)
                    message.error("Ошибка регистрации. Пожалуйста, попробуйте еще раз.")
                })
        },
    },
})
</script>

<style scoped>
.login-form {
    max-width: 300px;
    margin: 0 auto;
}

.login-form-button {
    width: 100%;
}
</style>
