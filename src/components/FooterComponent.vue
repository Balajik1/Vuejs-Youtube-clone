<template>
    <v-footer color="#202020" style="height:30px" class=" white--text" app>
      <span v-if="selectedTab === 'Home'" class="">About Result {{count===0 ? '' : count}}</span>
      <span style="position : absolute; left: 50%; transform: translate(-50%,0)">&copy; 2022</span>
    </v-footer>
</template>
<script>
export default {
    props:{
        count:{
            type: Number,
            default : 0
        },
        selectedTab:{
            type: String
        }
    }
}
</script>