<template>
  <v-container>
      <v-row>
        <v-col lg="3" md="6" sm="12" col="12">
           <StockCard title="TOTAL" subtitle="1,820" avatar_bg="#00a65a" avatar_ic="mdi-cart-outline" />
        </v-col>
         <v-col lg="3" md="6" sm="12" col="12">
           <StockCard title="SOLD-OUT" subtitle="1,120" avatar_bg="#f39c12" avatar_ic="mdi-flask-outline" />
        </v-col>
        <v-col lg="3" md="6" sm="12" col="12">
           <StockCard title="RETURN" subtitle="10" avatar_bg="#dd4b39" avatar_ic="mdi-keyboard-outline" />
        </v-col>
        <v-col lg="3" md="6" sm="12" col="12">
           <StockCard title="DISCOUNT" subtitle="454" avatar_bg="#00c0ef" avatar_ic="mdi-cart-outline" />
        </v-col>

      </v-row>
  </v-container>
</template>

<script>
import StockCard from "@/components/cards/StockCard";
export default {
name:"Stock",
components:{
StockCard
},



}

</script>

<style>

</style>