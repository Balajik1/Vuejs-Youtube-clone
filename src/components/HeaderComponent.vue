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
    <div v-html="icon"></div>
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
          icon : `
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M12,8A4,4 0 1,1 8,12A4,4 0 0,1 12,8M21.88,13.46C21.95,13.15 22,12.83 22,12.5C22,12.17 21.95,11.85 21.88,11.54L23.64,10.03C23.86,9.85 23.91,9.5 23.76,9.23L21.8,5.53C21.65,5.26 21.34,5.16 21.07,5.27L18.5,6.27C18.04,5.93 17.54,5.65 17,5.45L16.5,2.65C16.46,2.39 16.23,2.2 15.96,2.2H8.04C7.77,2.2 7.54,2.39 7.5,2.65L7,5.45C6.46,5.65 5.96,5.93 5.5,6.27L2.93,5.27C2.66,5.16 2.35,5.26 2.2,5.53L0.24,9.23C0.09,9.5 0.14,9.85 0.36,10.03L2.12,11.54C2.05,11.85 2,12.17 2,12.5C2,12.83 2.05,13.15 2.12,13.46L0.36,14.97C0.14,15.15 0.09,15.5 0.24,15.77L2.2,19.47C2.35,19.74 2.66,19.84 2.93,19.73L5.5,18.73C5.96,19.07 6.46,19.35 7,19.55L7.5,22.35C7.54,22.61 7.77,22.8 8.04,22.8H15.96C16.23,22.8 16.46,22.61 16.5,22.35L17,19.55C17.54,19.35 18.04,19.07 18.5,18.73L21.07,19.73C21.34,19.84 21.65,19.74 21.8,19.47L23.76,15.77C23.91,15.5 23.86,15.15 23.64,14.97L21.88,13.46M12,15.5A3.5,3.5 0 1,0 8.5,12A3.5,3.5 0 0,0 12,15.5Z" />
  </svg>
`
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
