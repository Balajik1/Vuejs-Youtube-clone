<template>
  <v-app class="background  px-16">
    <v-container class="mx-16 mt-16 pb-0" >
      <v-form ref="form"   class="px-16 mt-16 mx-16">
        <v-text-field
          placeholder="First Name"
          v-model="fName"
          solo
          dark
          outlined
        ></v-text-field>
        <v-text-field
          placeholder="Last Name"
          solo
          dark
          v-model="lName"
          outlined
        ></v-text-field>
        <v-text-field
          placeholder="Mobile Number"
          solo
          dark
          class="inputPrice"
          v-model="mNumber"
          outlined
          hide-spin-buttons
          type="number" 
        ></v-text-field>
        <v-text-field
          placeholder="Email"
          solo
          v-model="email"
          dark
          outlined
        ></v-text-field>
        <v-container class="d-flex justify-center">
          <v-btn
            class="ma-2"
            filled
            outlined
            dense
            dark
            single-line
            color="#3EA6FF"
          >
            Update
          </v-btn>
        </v-container>
      </v-form>
    </v-container>
    <v-container class="mx-16 pt-0">
      <v-container class="mx-16 px-16 pt-0">
        <p class="text-subtitle-2 mb-0 dark-mode">Details</p>
        <p class="text-caption mb-0 dark-mode">Name : {{fName}} {{lName}}</p>
        <p class="text-caption mb-0 dark-mode">Mobile no. {{mNumber}}</p>
        <p class="text-caption mb-0 dark-mode">Email : {{email}}</p>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
export default {
    data(){
        return {
            fName : '',
            lName: '',
            mNumber : '',
            email : ''
        }
    }
};
</script>
<style scoped>
.background {
  background: #181818;
  overflow: hidden !important;
}
.dark-mode {
  color: #ffffff;
}
</style>