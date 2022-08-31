<template>
    <div>
        <div v-for="data in allData" :key="data">
            {{data.email}}
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            allData:[]
        }
    },
methods:{
allReq(){
 this.allData = this.$store.getters['requests/allRequests']
    
}
},
created(){
    this.allReq()
}
}
</script>