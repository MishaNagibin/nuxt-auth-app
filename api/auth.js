import api from "@/utils/api"

function login(data) {
    return api.post("login", data)
}

function register(data) {
    return api.post("register", data)
}

export default {
    login,
    register,
}
