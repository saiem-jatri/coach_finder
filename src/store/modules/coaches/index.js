import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced:true,
    state(){
        return{
            coaches:[
                {
                    id:'c1',
                    firstName: 'Maximilion',
                    lastName: 'Schwarzmolleter',
                    areas: ['frontend','backend','career'],
                    description:
                    "I'm Maximilion and i've worked as a freelance web developer for years",
                    hourlyRate:30,
                },
                {
                    id:'c2',
                    firstName: 'julie',
                    lastName: 'jones',
                    areas: ['frontend','career'],
                    description:
                    "I'm julie and i've worked as a senior Software engineer in a big company",
                    hourlyRate:40,
                },
            ]
        }
    },
    mutations,
    actions,
    getters
};