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
    const id = payload.findIndex(data => data.id = payload.id)
    state.items = state.items.splice(id,1,payload)
  }
}