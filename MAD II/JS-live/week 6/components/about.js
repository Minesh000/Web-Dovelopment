const about = {
    template: `
        <div>
            <h1>About Page</h1>           
            
             <router-link to="/about/username">About User</router-link>   
             <router-link to="/about/hello/password">About Password </router-link>
            <p>This is not the about page of our Vue.js application.</p>
            <router-view></router-view>
        </div>
    `
};

export default about