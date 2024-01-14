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
   return (
     <>
     <h1>Amazon Best Selling Books</h1>
       <section className="booklist">
         {books.map((book, index) => {
           // const{image,title,author,key}=book;
           return (
             <Book {...book} key={book.id} getBook={getBook} numbers={index} />
           );
         })}
       </section>
     </>
   );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)

