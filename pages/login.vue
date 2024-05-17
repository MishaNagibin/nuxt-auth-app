<template>
    <a-row
        type="flex"
        justify="center"
        align="middle"
        style="height: 100vh"
    >
        <a-col :span="8">
            <a-card title="Вход">
                <a-form
                    @submit.prevent="login"
                    class="login-form"
                >
                    <a-form-item>
                        <a-input
                            v-model="email"
                            placeholder="Email"
                            type="email"
                            prefix-icon="user"
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
                            class="login-form-button"
                            block
                        >
                            Войти
                        </a-button>
                    </a-form-item>
                    <a-form-item>
                        <span>Нет аккаунта? </span>
                        <nuxt-link :to="{ name: 'register' }">Зарегистрироваться!</nuxt-link>
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
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        login() {
            const { email, password } = this
            auth.login({ email, password })
                .then((response) => {
                    localStorage.setItem("token", response.token)
                    this.$router.push("/posts")
                    message.success("Вход выполнен успешно!")
                })
                .catch((error) => {
                    console.error("Ошибка входа:", error)
                    message.error("Ошибка входа. Пожалуйста, проверьте свои учетные данные.")
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
