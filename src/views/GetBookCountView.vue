<script>
import axios from 'axios';

export default{
    data (){
        return{  
            bookNumber:null,
            error:null
        }
    },
    methods: {
        async getBookNumber() {
            try{
                const response = await axios.get('https://countbooks-r4ja4awxoq-uc.a.run.app')
                this.bookNumber = response.data.count
                this.error = null
      
    } catch(error){
        this.error = error
        this.bookNumber = null
    }
        }
    }
}
</script>
<template>
    <h1>Book Counter</h1>
    <button @click="getBookNumber">Get book number</button>
    <p v-if="bookNumber !== null">
        Total number of books: {{ bookNumber }}
    </p>
    <p v-if="error">
        {{ error }}
    </p>
   

</template>
<style scoped>
</style>