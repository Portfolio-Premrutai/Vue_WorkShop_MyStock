<template lang="html">
  <v-container>
    <v-row class="justify-center">
      <v-col col="8">
        <v-card class="mx-auto pa-5" outlined>
          <v-form @submit.prevent="submit">
            <v-text-field
              v-model="product.name"
              :counter="10"
              label="Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="product.price"
              suffix="THB"
              type="number"
              label="Price"
              required
            ></v-text-field>
            <v-text-field
              v-model="product.stock"
              suffix="PCS"
              type="number"
              label="Stock"
              required
            ></v-text-field>
            <input type="file" @change="onFileSelected" name="" id="" />
            <br />
            <v-img
              v-if="imageURL"
              :src="imageURL"
              height="200"
              width="200"
              class="mt-3"
            >
            </v-img>
            <br />
            <v-row>
              <v-spacer></v-spacer>
              <v-btn class="mr-4" @click="cancel">cancel</v-btn>

              <v-btn color="success" type="submit">Confirm</v-btn>
            </v-row>
          </v-form>
          <!-- <span>{{product}}</span> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "stock-create",
  data: () => ({
    product: {
      name: "",
      price: "",
      stock: "",
      image: null,
    },
    imageURL: null,
  }),
  methods: {
    onFileSelected(event) {
      const render = new FileReader();
      render.onload = (event) => {
        //for preview
        this.imageURL = event.target.result;
      };
      render.readAsDataURL(event.target.files[0]);
      //for upload
      this.product.image = event.target.files[0];
    },
    submit() {
      alert(JSON.stringify(this.product));
    },
    cancel() {
      this.$router.back();
    },
  },
};
</script>

<style></style>
