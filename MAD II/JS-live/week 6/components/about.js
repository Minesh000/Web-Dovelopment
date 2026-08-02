const about = {
  template: `
    <div>
      <h1>About Page</h1>
      <!-- router-links use the received name & password from Home form -->
      <router-link :to="'/about/' + $route.params.username">About User</router-link>
      <router-link :to="'/about/' + $route.params.password + '/' + $route.params.username">About Password</router-link>
      <router-view></router-view>
    </div>
  `
}

export default about