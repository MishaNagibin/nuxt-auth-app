export default {
    head: {
        title: "nuxt-auth-app",
        htmlAttrs: {
            lang: "ru",
        },
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    css: ["ant-design-vue/dist/antd.css"],
    plugins: ["@/plugins/antd-ui"],
    modules: ["@nuxtjs/axios"],
    server: {
        host: "0.0.0.0",
        port: 8000,
    },
    axios: {
        baseURL: "/",
    },
    router: {
        middleware: "auth",
    },
    ssr: false,
    telemetry: false,
}
