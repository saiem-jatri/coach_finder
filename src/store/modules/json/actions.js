// import async from "async";
import axios from "axios";

export default {
  async getAllItems ({ commit }) {
    try {
      const res = await axios.get(`http://localhost:3000/items`);
      commit('setAllItems',res.data)

    } catch (error) {
      console.log(error);
    }
  },
  async addItem({commit},payload) {
    try{
      const res = await axios.post(`http://localhost:3000/items`, {
        name: payload.name,
        complete:payload.complete
      });
      commit('setAddedItems', res.data)
    } catch (error){
      console.log(error);
    }
  },
 async removeItem({commit},id) {
    try{
      await axios.delete(`http://localhost:3000/items/${id}`);
      commit('setAfterDeletedItems', id)
    } catch(error){
        console.log(error)
    }
  },
  async updateItem({commit},payload) {
    console.log("lllll",payload.id)
    try{
      await axios.put(`http://localhost:3000/items/${payload.payload.id}`,payload.payload);
      commit('setUpdatedItems', payload)
    } catch(error){
      console.log(error)
    }
  },
}