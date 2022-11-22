export default{
  setAllItems:(state,payloads)=> {
    state.items = payloads;
  },

  setAddedItems:(state,payloads)=> {
    state.items.push(payloads)
  },
  setAfterDeletedItems:(state, payload)=>{
    state.items = state.items.filter((item) => item.id !== payload);
  },
  setUpdatedItems:(state,payload)=>{
    const id = state.items.findIndex(data => data.id === payload.payload.id)
    console.log("id in mutation",id)
    console.log("==========>",state.items[id].name)
    state.items[id].name = payload.payload.name
    state.item[id].complete = payload.payload.complete
  }
}