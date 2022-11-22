<template>
  <div id="app">
    <h1>Shopping List</h1>
    <input v-model="itemName" type="text" /><br />
    <button @click="addNewItems">Add Item</button>
  </div>
  {{allListData}}
  <ul>
    <li
      v-for="item of allListData"
      :key="item.id"
      @dblclick='DeleteItem(item.id)'
      @click='updateItemsList(items.id,updateData)'
    >
      {{ item.name }}
    </li>
  </ul>
  <div v-if='form'>
    <form action=''>
      <input v-model='updateData' type='text'>
    </form>
  </div>

</template>
<script>
import {mapActions,mapGetters} from 'vuex'
// import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      items: [],
      itemName:"",
      form : false,
      updateData:""
    };
  },
  // async created() {
  //   try {
  //     const res = await axios.get(`http://localhost:3000/items`);
  //     this.items = res.data;
  //     console.log(res.data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  //   methods: {
  //     async boughtItem(id) {
  //       try {
  //         await axios.patch(`${`http://localhost:3000/items`}/${id}`, {
  //           boughtItem: true
  //         });
  //         this.items = this.items.map(item => {
  //           if (item.id === id) {
  //             item.boughtItem = true;
  //           }
  //           return item;
  //         });
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     },
  //     removeItem(id) {
  //       console.log("hitteed")
  //       axios.delete(`http://localhost:3000/items/${id}`);
  //       this.items = this.items.filter((item) => item.id !== id);
  //     },
  //     async addItem() {
  //       const res = await axios.post(`http://localhost:3000/items`, {
  //         name: this.itemName,
  //       });
  //       // this.items = [...this.items, res.data];
  //       this.items.push(res.data)
  //       this.itemName = "";
  //     },
  //
  //   },
  methods:{
    ...mapActions('items',['getAllItems','addItem','removeItem','updateItem']),
    ...mapGetters('items',['allItems']),
    addNewItems(){
      this.addItem(this.itemName)
    },
    DeleteItem(id){
      this.removeItem(id)
    },
    updateItemsList(id,name){
      this.updateItem(id,name)
    }
  },
   created() {
     this.getAllItems();
  },
  computed:{
    allListData(){
      return this.$store.getters['items/allItems']
    }
  }

};
</script>
<style>
#app {
  text-align: center;
  color: #283847;
  margin-top: 60px;
}
li {
  list-style: none;
}
</style>