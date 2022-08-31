import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default{
    namespaced : true,

    state(){
        return{
            requests:[{email:"aiem@gmail.com",
            message:"hello"
            }]
        }
    },
    mutations,
    actions,
    getters
}

