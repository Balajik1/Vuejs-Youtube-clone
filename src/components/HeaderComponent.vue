<template>
<div >
    <v-app-bar
      color="#202020"
      fixed
      height="100"
    >
       <v-btn
      class="mr-16 btn"
      color="red"
      @click="$emit('toHomePage')"
    >
       DsTube 
    </v-btn>
      <!-- <v-toolbar-title
        class="mr-16"><v-btn color="red" class="btn" @click="$emit('toHomePage')"> DsTube </v-btn></v-toolbar-title
      >  -->
      <v-text-field
              hide-details 
                placeholder="Search" 
                filled 
                outlined
                dense 
                dark
                single-line 
              prepend-inner-icon="mdi-magnify"
              class="mr-16 ml-6   px-16"
            ></v-text-field>

      <v-btn
      class="ma-2 ml-16"
      outlined
      color="#3EA6FF"
      @click="$emit('toHomePage')"
      v-if="selectedTab === 'view' "
    >
       Home 
    </v-btn>
    <v-btn
      class="ma-2 "
      outlined
      color="#3EA6FF"
      @click="changeCompo"
    >
     {{selectedTab === 'Profile' ? 'Home': 'Profile'}}
    </v-btn>
    <!-- <v-row
    align="center"
    justify="space-around"
  >
    <v-btn depressed>
      Normal
    </v-btn>
    <v-btn
      depressed
      color="primary"
    >
      Primary
    </v-btn>
    </v-row> -->
    </v-app-bar>
</div>
</template>
<script>
export default {
    data(){
        return {
        };
    },
    computed:{
        btnName(){
            return this.isHomePage ? 'PROFILE' : 'Home';
        },
    },
    props:{
        selectedTab:{
        type : String
      }
    },
    watch:{
        // selectedTab(){
        //     this.isHomePage = !this.isHomePage;
        // }
    },
    methods:{
        
        changeCompo(){
          if(this.selectedTab === 'Profile'){
            this.$emit('changeCompoFromHeader','Home');
          }
          else{
            this.$emit('changeCompoFromHeader','Profile');
          }
          
        }
    }
};
</script>
<style scoped>
.backgrund-white {
  color: "white";
}
.backgrund-black {
  color: "white";
}
.white {
  color: "white";
}
.black {
  color: "white";
}
.title {
  background: #ff0000;
  color: #ffffff;
}
.btn {
  text-transform: none !important;
  color: #ffffff;
}
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #909;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #909;
   opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #909;
   opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    #909;
}
::-ms-input-placeholder { /* Microsoft Edge */
   color:    #909;
}

::placeholder { /* Most modern browsers support this now. */
   color:    #909;
}
</style>
