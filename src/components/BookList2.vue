<template>
  <div >
    <h1>Books with ISBN > 1000</h1>
    <ul class="list-group booklist">
      <li class="list-group-item" v-for="book in books" :key="book.id">
        {{ book.name }} - ISBN: {{ book.isbn }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import db from '../firebase/init.js';
import { collection, query, where, getDocs } from 'firebase/firestore';
  
const books = ref([]);


onMounted(() => {
  const q = query(collection(db, 'books'), where('isbn', '>', 1000));
  getDocs(q)
    .then((querySnapshot) => {
      const booksArray = [];
      querySnapshot.forEach((doc) => {
        booksArray.push({ id: doc.id, ...doc.data() });
      });
      books.value = booksArray;
    })
    .catch((error) => {
      console.error('Error fetching books: ', error);
    });
});
</script>
  
<style scoped>
.booklist{
    width:20%
}

</style>