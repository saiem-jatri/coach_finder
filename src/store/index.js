import { createStore } from "vuex";
import coachesModules from './modules/coaches/index.js';
import requestModules from './modules/requests/index.js';
import itemsModules from './modules/json/index.js';

const store=createStore({
    modules:{
        coaches:coachesModules,
        requests:requestModules,
        items:itemsModules
    },
    state(){
        return{
            userId:'c3'
        };
    },
    getters:{
        userId(state){
           return state.userId
        },
        isCoach(_,getters,_2,rootGetters){
            const coaches = getters.coaches;
            const userId = rootGetters.userId;
            return coaches.some(coach => coach.id === userId)
        }
    }

})

export default store;