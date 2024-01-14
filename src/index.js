import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {books} from "./books"
import Book from "./Book"

const names=['Vinay','Sharma','Manik'];

const BookList = ()=>{
  const getBook=(id)=>{
    const book= books.find((book)=>book.id === id);
     console.log(book);
  }
   return(
      <section className="booklist">
        <EventExamples/>
        {

         books.map((book,index)=>{
            // const{image,title,author,key}=book;
          return <Book {...book} key={book.id} getBook={getBook} numbers={index}/>
         })
      }
      </section>
   );
};
const EventExamples=()=>{
 const handleFormInput=(e)=>{
  console.log(`Input Name : ${e.target.name}`);
  console.log(`Input Value : ${e.target.value}`);
  console.log('Handle form input');
 }
 const handleButtonClick=()=>{
  alert("You clicked the button!");
 }
 const handleFormSubmission=(e)=>{
  e.prevantDeafult();
  console.log('Form Submitted');
 }
 return(
  <section>
     <form onSubmit={handleFormSubmission}>
      <h2>Typical Form</h2>
      <input type="text" name='example' onChange={handleFormInput} style={{margin : '1rem 0'}} />

     </form>
     <button onClick={handleButtonClick}>Click me</button>
  </section>
 )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)

