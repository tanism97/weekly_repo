
<template>
    <div >
      <h1>Books with ISBN > 1000</h1>
      <ul class="list-group booklist">
        <li type="button" @click="bookIsClicked(book)" class="list-group-item" v-for="book in books" :key="book.id">
          {{ book.name }} - ISBN: {{ book.isbn }}
        </li>
      </ul>
    </div>
  </template>
  <script>
  import { ref, onMounted } from 'vue';
  import db from '../firebase/init.js';
  import { collection, query, where, getDocs, onSnapshot, orderBy, limit } from 'firebase/firestore';

  const bookIsClicked = () =>{
        console.log(book.name)
    }

  export default {
    setup(_, { emit }) {
      const books = ref([]);

      const fetchBooks = () => {
      const q = query(collection(db, 'books'), where('isbn', '>', 1000),orderBy('isbn', 'asc'), limit(5));

      // Real-time listener with onSnapshot
      onSnapshot(q, (querySnapshot) => {
        const booksArray = [];
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data() });
        });
        books.value = booksArray; // Update the list of books in real-time
      }, (error) => {
        console.error('Error fetching books in real-time: ', error);
      });
    };


    const bookIsClicked = (book) => {
        console.log(`Book Name: ${book.name}, ISBN: ${book.isbn}`);
        emit('update-name', book.name, book.isbn);
      
    };

    

    onMounted(() => {
    fetchBooks();
    });
  
    return {
    books,
    bookIsClicked,
    };
    }
  };
  </script>
  
<style scoped>
.booklist{
    width:20%
}

.list-group-item:hover{
    color: blue;
}
</style>