<template>
  <div class="background">
    <v-card
      v-for="item in filteredArray"
      :key="item.id"
      color="#181818"
      dark
      class="mb-6"
      @click="changeComponent(item)"
    >
      <v-row>
        <v-col cols="12" sm="12" lg="4" md="4">
          <v-avatar class="mr-1" width="100%" :height="imageHeight" tile>
            <v-img aspect-ratio="1" :src="item.imgSrc"></v-img>
          </v-avatar>
        </v-col>
        <v-col class="d-flex flex-column" cols="12" sm="12" lg="8" md="8">
          <v-card-text class="pb-0">
            <p class="text-h6 mb-0">{{ item.title }}</p>
            <p class="text-h8">{{ item.views }} views</p>
            <p class="text-h8 mb-0">
              {{ item.creator.firstname }} {{ item.creator.lastname }}
            </p>
            <p class="text-caption mb-0">{{ item.desc }}</p>
          </v-card-text>
          <!-- <v-card-title class="text-h5" v-text="item.title"></v-card-title> 
               <v-card-subtitle >{{item.creator.firstname + " "+ item.creator.lastname}}</v-card-subtitle> -->
          <v-spacer></v-spacer>

          <v-card-actions class="align-self-start pb-0 mt-auto">
            <v-btn
              class="ml-2 mt-auto mb-2"
              outlined
              color="#FFFFFF"
              small
              @click.stop="hideItem(item)"
            >
              REMOVE
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>



<script>
export default {
  data() {
    return {
      name : "tom"
    };
  },
  props: {
    items: {
      type: Array,
    },
  },
  mounted() {
    //////////console.log("hello : ", this.items);
    this.items.forEach((ele) => {
      ele.views = ele.views.toString().split("_").join(",");
    });
  },
  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "260px";
        case "sm":
          return "260px";
        case "md":
          return "260px";
        case "lg":
          return "260px";
        case "xl":
          return "400px";
      }
      return "";
    },
    filteredArray() {
      const arr = this.items.filter((ele) => !ele.isHidden);
      return arr;
    },
  },
  methods: {
    changeComponent(item) {
      this.$emit("changeComponent", "view", item);
    },
    hideItem(item) {
      this.$emit("hideItem", item);
    },
  },
};
</script>
<style scoped>
.background {
  background: #181818;
  margin-top: 100px;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
}
.padding {
  padding-bottom: 0px !important;
}
</style>