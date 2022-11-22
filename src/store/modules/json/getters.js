export default{
  allItems:(state)=> {
    console.log("state items",typeof(state.items));
    return state.items;
  },
  allItemsNumber:(state)=>{
    console.log("state items no",state.items.length)
    return Object.keys(state.items).length
  },
  remaining(state) {
    return state.items.filter(todo => !todo.completed).length
  },
  anyRemaining(state, getters) {
    return getters.remaining != 0
  },
}