<template>
    <div>
      <base-card>
        <p style='font-weight: bold; color: black; text-align: center'>Request Received</p>
      </base-card>
      <base-card>
        <div v-for="data in allData" :key="data">
          <span style='color: #3a0061; font-size: 12px'>
            {{data.userEmail}} <br>
            {{data.userMessage}}
          </span>
        </div>
      </base-card>
    </div>
</template>

<script>
import BaseCard from '@/components/ui/BaseCard';
export default{
  components: { BaseCard },
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
      console.log(this.allReq())
    this.allReq()
}
}
</script>