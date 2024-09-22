<template>
  <div>
    <h1>Add Book</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="isbn">ISBN:</label>
        <input type="text" v-model="isbn" id="isbn" required />
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <button type="submit" @click="handleSubmit('add')">Add Book</button>
      <button type="submit" @click="handleSubmit('update')">Update Book</button>
      <button type="submit" @click="handleSubmit('delete')">Delete Book</button>
    </form>
  </div>
  <p v-if="addBookMessage !== null">{{addBookMessage}}</p>
  <p v-if="errorMessage">{{error}}</p>
  <div>
    <BookList  @update-name="handleUpdateName"/>
  </div>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import db from '../firebase/init.js';
import { collection, addDoc,query, where,updateDoc, getDocs,doc, deleteDoc } from 'firebase/firestore';

import BookList from '../components/BookList.vue';
import axios from 'axios';
export default {
    
  setup() {
    const isbn = ref('');
    const name = ref('');
    //const actionType = ref('');
    const heritageName = ref('');
    const addBookMessage = ref(null);
    const errorMessage = ref(null);



    // Handle form submission
    const handleSubmit = async (actionType) => {
        
      if (actionType === 'add') {
        await addBook();
      } else if (actionType === 'update') {
        await updateBook();
      } else if (actionType === 'delete') {
        await deleteBook();
      }
    };

    const addBook = async () => {
      try {
        const isbnNumber = Number(isbn.value);
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number');
          return;
        }
        const newBook = {
        isbn: isbnNumber,
        name: name.value
      }
      const response = await axios.post("https://addbooks-r4ja4awxoq-uc.a.run.app",newBook)
        addBookMessage.value = response.data
        errorMessage.value = null
      }catch(error){
        addBookMessage.value = null
        errorMessage.value = error
    }
      
    };


    const updateBook = async () =>{
        const q = query(collection(db, 'books'), where('name', '==', heritageName.value));
        const querySnapshot = await getDocs(q);
        const document = querySnapshot.docs[0];
        const docRef = doc(db, "books", document.id); 
        console.log(document.id)
        await updateDoc(docRef, {
            isbn: Number(isbn.value),
            name: name.value
        });
    }

    const deleteBook = async () =>{
        const q = query(collection(db, 'books'), where('name', '==', heritageName.value));
        const querySnapshot = await getDocs(q);
        const document = querySnapshot.docs[0];
        const docRef = doc(db, "books", document.id); 
        console.log(document.id)
        await deleteDoc(docRef);
    }

    const handleUpdateName = (updatename, updateisbn) => {
        heritageName.value = updatename
        name.value = updatename
        isbn.value = updateisbn
        console.log(heritageName.value)
    };

    return {
      isbn,
      name,
      addBook,
      handleUpdateName,
      handleSubmit,
      addBookMessage,
      errorMessage
    };
  },
  components: {
    BookList
  },
};
</script>

console.log("handle")
      try {
        const isbnNumber = Number(isbn.value);
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number');
          return;
        }

        await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: name.value
        });
        isbn.value = '';
        name.value = '';
        alert('Book added successfully!');
      } catch (error) {
        console.error('Error adding book: ', error);
      }