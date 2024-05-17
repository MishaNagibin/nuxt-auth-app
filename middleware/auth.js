export default function ({ route, redirect }) {
    const token = localStorage.getItem("token")
    if (!token && route.path !== "/login" && route.path !== "/register") {
        return redirect("/login")
    } else if (token && ["/login", "/register"].includes(route.path)) {
        return redirect("/posts")
    }
}
