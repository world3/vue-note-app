<template>
  <v-app>
    <v-app-bar app>
      <v-icon>arrow_back</v-icon>
      <v-toolbar-title>
        <span>VueNoteApp</span>
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <img alt="Vue logo" src="./assets/logo.png" />
      <HelloWorld msg="Welcom to Your Vue.js App" />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
