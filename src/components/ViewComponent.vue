<template>
  <v-app class="background px-16">
    <v-container class="px-0 mt-16">
    <v-card color="#181818" dark class="mt-10  mx-16 d-flex background">
      <v-row>
        <v-col cols="12" class="pb-0 pt-0">
          <v-avatar class="mr-1" width="100%" :height="imageHeight" tile>
            <v-img aspect-ratio="1" :src="item.imgSrc"></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="12">
          <v-card-text class="pa-0">
            <p class="text-h6 mb-0">{{ item.title }}</p>
            <p class="text-h8" style="display:inline-block">{{ item.views }} views</p>
            <p class="text-h8 ml-1 " :style="styleObj">{{ likeCt>10 ? likeCt>15 ? 'Trending' : 'Popular' : '' }} </p>
            <v-row class="px-3 mb-1">
              {{ item.creator.firstname }} {{ item.creator.lastname }}
              <v-spacer> </v-spacer>
              <v-btn color="red"> SUBSCRIBE </v-btn>
            </v-row>
          </v-card-text>
          <v-spacer></v-spacer>

          <v-card-actions class="align-self-start ml-0 pa-0 mt-2">
            <v-btn
              class="ml-0 mb-2"
              outlined
              color="#FFFFFF"
              small
              @click="increaseLikeCt"
            >
              {{like}}
            </v-btn>
            <v-btn
              class="ml-2 mb-2"
              outlined
              color="#FFFFFF"
              small
              @click="decreaseDislikeCT"
            >
              DISLIKE
            </v-btn>
            <v-btn class="ml-2 mb-2" outlined color="#FFFFFF" small>
              SHARE
            </v-btn>
          </v-card-actions>
        </v-col>
        <v-col cols="12" class="pt-0">
            <v-text-field
              hide-details 
                placeholder="Add a comment..." 
                filled 
                outlined
                dense 
                dark
                single-line 
            ></v-text-field>
        </v-col>
      </v-row>
    </v-card>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      likeCt: 0,
      disLikeCT: 0,
    };
  },
  props:{
        item : {
            type : Array,
        }
  },
  computed: {
    like() {
      const show = this.likeCt == 0 ? "" : this.likeCt;
      return "LIKE" + " " + show;
    },
    imageHeight () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '350px'
          case 'sm': return '350px'
          case 'md': return '350px'
          case 'lg': return '350px'
          case 'xl': return '650px'
        }
        return '';
      },
      styleObj(){
        const style={};
        style.display="inline-block";
        style.color=this.likeCt > 15 ? 'green' : this.likeCt >=10 ? 'red' : ''

        return style;
      }
  },
  methods: {
    increaseLikeCt() {
      this.likeCt++;
    },
    decreaseDislikeCT() {
      if(this.likeCt !=0)
        this.likeCt--;
    },
  },
};
</script>
<style scoped>
.background {
  background: #181818;
  overflow: hidden !important;
}
</style>