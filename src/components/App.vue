<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-app style="background-color: #181818">
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="items"
      :search="search"
      fixed-header
      class="flex-table elevation-1"
      show-select
      height="80vh"
    >
      <template v-slot:item.actions="{ item }">
       <v-btn
          icon
          @click="removeSelected"
          :title="Clear"
          :itemid="oids"
        >
        <v-icon> mdi-check {{ item.name }}</v-icon>
        </v-btn
        ></template>
        </v-data-table
    >

    <!-- <div  v-on:dragover.prevent
      v-on:drop="handleDrop($event)">
    <v-data-table
      :headers="headers"
      :items="tableData"
      :search="search"
      item-key="id"

      @row-mouseover="handleRowMouseOver"
    ></v-data-table>
  </div> -->
    <!-- <v-data-table :headers="headers" :items="items">
    <template v-slot:item="props">
      <tr :class="getRowColorClass(props.index)">
        <td v-for="(obj,idx) in headers" :key="idx">{{ props.item[obj.value] }}</td> -->
    <!-- <td v-for="(value,idx) in headers" :key="idx">{{ props.item.headers[value] }}</td> -->
    <!-- <td>{{ props.item.name }}</td>
        <td>{{ props.item.age }}</td> -->
    <!-- Add more table cells for other columns if needed -->
    <!-- </tr>
    </template>
  </v-data-table> -->

    <!-- <header-component   @changeCompoFromHeader="changeCompoFromHeader" 
    @toHomePage="toHomePage"
    :selectedTab="selectedTab"/>
    <main-component
      v-if="selectedTab == 'Home'"
      @changeComponent="changeComponent"
      @hideItem="hideItem"
      :items="items"
    />
    <view-component
      v-else-if="selectedTab == 'view'"
      :item="selectedItem"
    ></view-component>
    <profile-component v-else></profile-component>
    <footer-component :count="count" :selectedTab="selectedTab" /> -->

    <!-- <h1
      class="draggable"
      draggable="true"
      v-on:dragstart="handleDragStart"
      @dragend="handleDragEnd"
    >
      Draggable Heading
    </h1> -->
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      headers: [
        { text: "Name", value: "name" },
        { text: "Age", value: "age" },
        { text: 'actions', value: 'actions' },
        // Add more headers for other columns if needed
      ],
      items: [
        { name: "John", age: 30 ,actions : "he"},
        { name: "Jane", age: 25 ,actions : "he"},
        { name: "Mike", age: 40 ,actions : "he"},
        // Add more items for other rows if needed
      ],
    };
  },
  methods: {
    getRowColorClass(index) {
      return index % 2 === 0 ? "even-row" : "odd-row";
    },
  },
};
</script>

<style>
.even-row {
  background-color: lightgray;
}

/* Optional: You can add a different background color for odd rows if needed */
.odd-row {
  background-color: white; /* Set your desired background color for odd rows */
}
</style>


<!-- 
<script>

  export default {
    data() {
    return {
      search: '',
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Name', value: 'name' },
        // Add more headers as needed
      ],
      tableData: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        // Add more data items as needed
      ],
    };
  },
    methods: {
      handleRowMouseOver(item) {
        console.log("handleRowMouseOver",item);
      // Handle the mouseover event on the table rows if needed
    },
    handleDrop(event) {
      //event.preventDefault();
      console.log("Dropped callback");
      const data = event.dataTransfer.getData('text/plain');
      console.log("Data ==== >"+data);
      // You can parse the data to get the object details
      // const obj = JSON.parse(data);
      // console.log('Dropped object details:', obj);
    },
    handleDragStart(event) {
      // Set the data that will be transferred during the drag
      event.dataTransfer.setData('text/plain', event.target.textContent);
      console.log("text when made it draggable",event.target.textContent);
      // You can also add additional data if needed, e.g., for identification
      // event.dataTransfer.setData('custom-id', 'some-unique-id');
    },
    handleDragEnd(event) {
      console.log(event);
      // Clean up or perform any necessary actions after dragging is finished
      // For example, you could reset some variables or update the state
    },
  },
  }
</script> -->

<!-- <script>
import HeaderComponent from "./HeaderComponent.vue";
import MainComponent from "./MainComponent.vue";
import ViewComponent from "./ViewComponent.vue";
import ProfileComponent from "./profileComponent.vue";
import videoList from "../assets/json/data.json";
import FooterComponent from './FooterComponent.vue';
export default {
  name: "App",

  components: {
    HeaderComponent,
    MainComponent,
    ViewComponent,
    ProfileComponent,
    FooterComponent
  },
  data: () => ({
    selectedTab: "Home",
    items: videoList,
    selectedItem: null,
    count: 0,
  }),
  created(){
    this.items.forEach( (ele) =>{
      if(!ele.isHidden){
        this.count++;
      }
    } )
  },
  methods: {
    changeComponent(name, item) {
      this.selectedItem=item;
      this.selectedTab = name;
    },
    toHomePage(){
       this.selectedTab = "Home";
    },
    changeCompoFromHeader(name){
      if(name === 'Profile')
          this.selectedTab = 'Profile';
      else
          this.selectedTab = 'Home';
    },
    hideItem(item){
      const selectedItem=this.items.find((ele)=> ele.id === item.id);
      selectedItem.isHidden=true;
      this.count--;
    }
  },
};
</script>
<style >
.background{
  overflow: hidden !important; 
}
/* scrollbar */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: #181818;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: #717171;  
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(255, 255, 255, 0.3);
}
</style> -->
