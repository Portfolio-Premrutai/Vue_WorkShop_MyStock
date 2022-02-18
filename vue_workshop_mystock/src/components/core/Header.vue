<template>
  <div>
    <v-app-bar app color="#1c2835" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Shop Workshop V {{ version }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <!--  ดันของชิดขวา-->
      <span>{{$store.getters["username"]}}</span>
      <v-btn icon @click="onClickLogOff">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    version() {
      return "1.0";
    },
  },
  methods: {
    onClickLogOff() {
      this.$store.dispatch("doLogout");
    },
  },
};
</script>

<style></style>
