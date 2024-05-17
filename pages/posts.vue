<template>
    <a-row
        type="flex"
        justify="center"
        align="middle"
        style="height: 100vh"
    >
        <a-col :span="16">
            <a-card title="Посты">
                <a-button
                    type="primary"
                    @click="logout"
                >
                    Выйти
                </a-button>
                <div v-if="authenticated">
                    <a-list
                        item-layout="vertical"
                        size="large"
                    >
                        <a-list-item
                            v-for="item of posts"
                            :key="item.title"
                        >
                            <a-list-item-meta
                                :title="item.title"
                                :description="item.description"
                            />
                            <div>{{ item.content }}</div>
                        </a-list-item>
                    </a-list>
                </div>
                <div v-else>
                    <p>Вы не авторизованы. Пожалуйста, <nuxt-link :to="{ name: 'login' }">войдите</nuxt-link>.</p>
                </div>
            </a-card>
        </a-col>
    </a-row>
</template>

<script>
import Vue from "vue"
import { message } from "ant-design-vue"

export default Vue.extend({
    name: "Posts",
    data() {
        return {
            authenticated: false,
            posts: [
                {
                    title: "Пост 1",
                    description: "Описание поста 1",
                    content: "Содержимое поста 1",
                },
                {
                    title: "Пост 2",
                    description: "Описание поста 2",
                    content: "Содержимое поста 2",
                },
            ],
        }
    },
    mounted() {
        const token = localStorage.getItem("token")
        if (token) {
            this.authenticated = true
        } else {
            this.$router.push("/login")
        }
    },
    methods: {
        logout() {
            localStorage.removeItem("token")
            this.$router.push("/login")
            message.success("Вы успешно вышли из системы!")
        },
    },
})
</script>

<style scoped>
a-card {
    width: 100%;
}

a-list-item-meta-title {
    font-size: 18px;
    font-weight: bold;
}

a-list-item-meta-description {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
}

a-list-item {
    padding: 16px 0;
}
</style>
