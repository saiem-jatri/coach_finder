<template>
  <div id="app">
    <h1>Shopping List</h1>
    <input type="checkbox" v-model="completed">
    <input v-model="itemName" type="text" /><br />
    <button @click="addNewItems">Add Item</button>
  </div>
  <div>
    {{allCheck}}
    <input type="checkbox" v-model="allCheck">
  </div>
  <ul>
    <li
      v-for="item of allListData"
      :key="item"
      @dblclick='DeleteItem(item.id)'
      @click='updateItemsList()'

    >
      <div v-if="form">
      <input  v-model='item.name' type='text'>
      <input type="checkbox" v-model="item.complete">
    <button @click="updateItemsList({
      id:item.id,
      name:item.name,
      complete:item.complete
    })">Update</button>
      </div>
      {{ item.name }}
      {{item.complete}}
      <div @click="form = !form">
        edit
      </div>
    </li>
  </ul>

</template>
<script>
import {mapActions,mapGetters} from 'vuex'
// import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      items: [],
      completed:"",
      itemName:"",
      form : false,
      updateData:"",
      allCheck: this.checkAllData
    };
  },

  watch: {
    // whenever question changes, this function will run
    allCheck(data) {
      if (data === true) {
        this.$store.state.items.complete === true
      }
    }
  },
  methods:{
    ...mapActions('items',['getAllItems','addItem','removeItem','updateItem']),
    ...mapGetters('items',['allItems','allItemsNumber']),
    addNewItems(){
      this.addItem({name:this.itemName,complete:this.completed})
    },
    DeleteItem(id){
      this.removeItem(id)
    },
    updateItemsList(payload){
      this.$store.dispatch('items/updateItem',{
        payload
      })
    }
  },
   created() {
     this.getAllItems();
     this.allItemsNumber;
  },
  computed:{
    allListData(){
      return this.$store.getters['items/allItems']
    },
    checkAllData(){
      return this.$store.getters('items/remaining')
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