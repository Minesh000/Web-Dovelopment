import home from "./components/home.js";
import about from "./components/about.js";
import aboutUser from "./components/aboutUser.js";
import aboutPassword from "./components/aboutPassword.js";


const routes = [
    {path: "/home", component: home},
    {
        path: "/about", component: about,
        children: [
        {path: "/about/:username", component: aboutUser},
        {path: "/about/:password/:username", component: aboutPassword},
        ]
    },
    // {path:"*", redirect:"/"},

    ]

const router = new VueRouter({
    // routes: routes,
    // mode:"history",
    routes,
    })

const app = new Vue({
    el:'#app',
    data:{
        message:"Hello World"
    },
    components:{
        home,
        about,
        aboutUser,
        aboutPassword,
    },
    router,

    // mounted() {
    //     // this.$router.push("/home"),
    //     this.$router.go(1)
    // }
    })