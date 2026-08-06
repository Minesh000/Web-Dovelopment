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

<style scoped>
h1 {
    color: red;
}
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>  