<template>
  <v-container>
      <v-row class="justify-center">
        <v-card style="width:400px;">
          <v-img class="white--text align-end" src="@/assets/login_header.jpg" height="200px" />
        <v-card-title primary-title>
          title
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submit">
            <!-- Username -->
            <v-text-field
              name="username"
              label="Username"
              id="username"
              v-model="account.username"
              :rules="usernameRules"
            ></v-text-field>
            <!-- Password -->
            <v-text-field
              name="password"
              label="Password"
              id="password"
              v-model="account.password" 
              :rules="passwordRules"
              :append-icon="isShowPassword?'visibility':'visibility_off'"
              @click:append="isShowPassword = !isShowPassword"
              :type="isShowPassword?'text':'password'"
              counter

            ></v-text-field>
                        <!--Confirm Password -->
            <v-text-field
              name="confirm-password"
              label="ConfirmPassword"
              id="confirm-password"
              v-model="account.confirmpassword"  
              :rules="confirmpassRules"
              :append-icon="isShowPassword?'visibility':'visibility_off'"
              @click:append="isShowPassword = !isShowPassword"
              :type="isShowPassword?'text':'password'"
              counter
            ></v-text-field>
            <span>{{account}}</span>
         <!-- button login -->
         <v-row class="justify-space-between px-3 pt-10" >
           <v-btn text @click.prevent="$router.back()">Cancel</v-btn>
            <v-btn type="submit" color="success">Confirm</v-btn>
         </v-row>
          </v-form>
        </v-card-text>
        
        
        </v-card>
      </v-row>
  </v-container>
</template>

<script>
import api from "@/services/api"
export default {
data() {
  return {
    isShowPassword:true,
    account:{
    username:"",
    password:"",
    confirmpassword:""
    },
    usernameRules:[v1=>!!v1 || "Username is required",],
    passwordRules:[v1=>!!v1 || "Password is required",v2=>!!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v2)||"Minimum eight character,at last one letter and one number"],
   confirmpassRules:[v1=>!!v1 || "ConfirmPassword is required",]
  }
},
  methods: {
   async submit(){
      // alert(JSON.stringify(this.account))
    await  api.register(this.account)
    }
  },
}
</script>

<style>

</style>