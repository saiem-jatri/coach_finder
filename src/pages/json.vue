<template>
  <div id="app">
    <h1>Shopping List</h1>
    <input v-model="itemName" type="text" /><br />
    <button @click="addItem()">Add Item</button>
  </div>
  <ul>
    <li
      v-for="item of items"
      :class="{ bought: item.bought }"
      :key="item.id"
      @click="boughtItem(item.id)"
      @dblclick="removeItem(item.id)"
    >
      {{ item.name }}
    </li>
  </ul>

</template>
<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      items: [],
      itemName:"",
      form : false
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/items`);
      this.items = res.data;
      console.log(res.data)
    } catch (error) {
      console.log(error);
    }
  },
    methods: {
      async boughtItem(id) {
        try {
          await axios.patch(`${`http://localhost:3000/items`}/${id}`, {
            boughtItem: true
          });
          this.items = this.items.map(item => {
            if (item.id === id) {
              item.boughtItem = true;
            }
            return item;
          });
        } catch (error) {
          console.error(error);
        }
      },
      removeItem(id) {
        console.log("hitteed")
        axios.delete(`http://localhost:3000/items/${id}`);
        this.items = this.items.filter((item) => item.id !== id);
      },
      async addItem() {
        const res = await axios.post(`http://localhost:3000/items`, {
          name: this.itemName,
        });
        // this.items = [...this.items, res.data];
        this.items.push(res.data)
        this.itemName = "";
      },

    },

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