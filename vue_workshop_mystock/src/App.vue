<template>
<v-app>
  <Header v-if="$store.state.isLogged"/>
  <Menu v-if="$store.state.isLogged " />
  <Content />
  <!-- <div>
   <h1>Hi</h1>
   <v-btn  color="info" class="black--text">text</v-btn>
   <v-icon large>email</v-icon>
   <hr>
   <router-view></router-view>
</div> -->
</v-app>

 
</template>

<script>
// @ || "../src"
import Header from "@/components/core/Header.vue"
import Menu from "@/components/core/Menu.vue"
import Content from "@/components/core/Content.vue"
export default {
name:"App",
components:{
  Header,
  Menu,
  Content
},
mounted() {
  this.$store.dispatch({ type: "restoreLogin" });
},
}
</script>

<style>

</style>