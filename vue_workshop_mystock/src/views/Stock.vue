<template>
  <v-container>
    <!-- Summary section -->
    <v-row>
      <v-col lg="3" md="6" sm="12" col="12">
        <StockCard
          title="TOTAL"
          subtitle="1,820"
          avatar_bg="#00a65a"
          avatar_ic="mdi-cart-outline"
        />
      </v-col>
      <v-col lg="3" md="6" sm="12" col="12">
        <StockCard
          title="SOLD-OUT"
          subtitle="1,120"
          avatar_bg="#f39c12"
          avatar_ic="mdi-flask-outline"
        />
      </v-col>
      <v-col lg="3" md="6" sm="12" col="12">
        <StockCard
          title="RETURN"
          subtitle="10"
          avatar_bg="#dd4b39"
          avatar_ic="mdi-keyboard-outline"
        />
      </v-col>
      <v-col lg="3" md="6" sm="12" col="12">
        <StockCard
          title="DISCOUNT"
          subtitle="454"
          avatar_bg="#00c0ef"
          avatar_ic="mdi-cart-outline"
        />
      </v-col>
    </v-row>
    <!-- table section -->

    <v-card>
      <!-- <v-data-table
        :headers="[
          { text: 'FirstName', value: 'firstname' },
          { text: 'LastName', value: 'lastname' },
        ]"
        :items="[
          { firstname: 'sai', lastname: '222' },
          { firstname: 'mmm', lastname: '333' },
        ]"
      >
      </v-data-table>
     -->
      <v-data-table :search="search" :headers="headers" :items="mDataArray">
        <!-- table top section -->
        <template v-slot:top>
          <v-toolbar flat color="white">
             <v-toolbar-title>Stock</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <v-spacer></v-spacer>
            <v-btn
              @click="$router.push('/stock-create')"
              color="primary"
              dark
              class="mb-2"
            >
              <v-icon left>add</v-icon>
              <span>New Product</span>
            </v-btn>
          </v-toolbar>
        </template>
        <!-- tr section -->
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>
              <v-img
                :src="item.image | imageUrl"
                aspect-radio="1"
                max-width="60"
                max-height="60"
                alt=""
              />
            </td>
            <td>{{ item.name }}</td>
            <td>{{ item.price | currency("$") }}</td>
            <td>{{ item.stock | number("0,0") }} pcs.</td>
            <td>
              <v-icon class="mr-2" @click="editItem(item)">edit</v-icon>
              <v-icon class="ma-1" @click="deleteItem(item)">delete</v-icon>
            </td>
          </tr>
        </template>
        
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import StockCard from "@/components/cards/StockCard";
import Axios from "axios";
export default {
  name: "Stock",
  data() {
    return {
      search: "",
      mDataArray: [],
      headers: [
        {
          text: "Id",
          align: "left",
          sortable: false,
          value: "id",
        },
        { text: "Image", value: "image" },
        { text: "Name", value: "name" },
        { text: "Price", value: "price" },
        { text: "Stock", value: "stock" },
        { text: "Action", value: "action" },
      ],
    };
  },
  components: {
    StockCard,
  },
  mounted() {
    console.log("Stock component is run");
    Axios.get("http://localhost:8081/api/v2/product").then((result) => {
      console.log(JSON.stringify(result.data));
      this.mDataArray = result.data;
    });
  },
};
</script>

<style></style>
