# 🚀 Vue CLI & Vite – Complete Setup Guide

This guide will help you:

* Install Node.js
* Understand basic Node execution
* Set up Vue using Vue CLI
* Set up Vue using Vite
* Create and use components

---

# 🧩 1. Install Node.js

### 👉 Download:

https://nodejs.org

* Install the **LTS version**
* Follow default installation steps

---

## ✅ Verify Installation

```bash
node -v
npm -v
```

---

## 🧠 Quick Node.js Demo (Run this live)

Create a file:

📄 `test.js`

```js
const name = "Students";
const time = new Date().toLocaleTimeString();

console.log(`Hello ${name}, current time is ${time}`);
```

### 👉 Run:

```bash
node test.js
```

💡 This shows:

* JavaScript can run outside browser
* Node.js is a runtime

---

# ⚙️ 2. Install Vue CLI

```bash
npm install -g @vue/cli
```

### 👉 Verify:

```bash
vue --version
```

---

# 🚀 3. Create Vue Project (Vue CLI)

```bash
vue create my-first-app
```

### 👉 Select:

* Default (Vue 3)

---

## 📂 Navigate to project

```bash
cd my-first-app
```

---

## ▶️ Run project

```bash
npm run serve
```

Open in browser:

```
http://localhost:8080/
```

---

# 🧠 Project Structure (Important)

```
src/
 ├── main.js
 ├── App.vue
 └── components/
```

---

# 🧱 4. Create a Component (Vue CLI)

📄 `src/components/StudentCard.vue`

```vue
<template>
  <div class="card">
    <h2>{{ name }}</h2>
    <p>Course: {{ course }}</p>
  </div>
</template>

<script>
export default {
  name: "StudentCard",
  data() {
    return {
      name: "Adarsh",
      course: "App Dev Lab"
    };
  }
};
</script>

<style>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>
```

---

## 📥 Use Component in `App.vue`

```vue
<template>
  <div>
    <h1>My First Vue CLI App</h1>
    <StudentCard />
  </div>
</template>

<script>
import StudentCard from "./components/StudentCard.vue";

export default {
  components: {
    StudentCard
  }
};
</script>
```

---

# ⚡ 5. Introduction to Vite

Vite is a modern frontend tool used with Vue.js.

👉 Key benefits:

* Faster startup
* Instant hot reload
* Simpler configuration

---

# 🚀 6. Create Project Using Vite

```bash
npm create vite@latest
```

### 👉 Prompts:

* Project name → `vite-vue-app`
* Framework → Vue
* Variant → JavaScript

---

## 📂 Navigate

```bash
cd vite-vue-app
```

---

## 📦 Install dependencies

```bash
npm install
```

---

## ▶️ Run project

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173/
```

---

# 🧠 Folder Structure (Vite)

```
src/
 ├── main.js
 ├── App.vue
 └── components/
```

---

# 🧱 7. Create Component (Vite)

📄 `src/components/StudentCard.vue`

```vue
<template>
  <div>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Vite Student"
    };
  }
};
</script>
```

---

## 📥 Use in `App.vue`

```vue
<template>
  <div>
    <h1>Vite App</h1>
    <StudentCard />
  </div>
</template>

<script>
import StudentCard from "./components/StudentCard.vue";

export default {
  components: { StudentCard }
};
</script>
```

---

# ⚡ 8. `<script setup>` (Modern Approach)

```vue
<template>
  <h1>{{ message }}</h1>
</template>

<script setup>
import { ref } from "vue";

const message = ref("Hello Students");
</script>
```

👉 Benefits:

* No `export default`
* No `setup()` function
* Less boilerplate
* Cleaner syntax

---

# 🎯 Summary

### Vue CLI Workflow:

```
Install → Create → Run → Build Components
```

### Vite Workflow:

```
Create → Install → Run → Build Faster Apps
```

---

# 💥 Key Takeaways

* Node.js runs JavaScript outside browser
* Vue CLI helps create structured apps
* Vite is faster and modern
* Components are reusable building blocks
* `<script setup>` simplifies Vue code

---

# 🧑‍🏫 Suggested Practice

* Create a new component
* Display dynamic data
* Add input using `v-model`
* Modify and observe instant updates (Vite)

---

Happy Coding 🚀
