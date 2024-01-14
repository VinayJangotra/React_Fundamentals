import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {books} from "./books"
import Book from "./Book"
// const firstBook = {
//   author: "Robert Greene",
//   title: "Mastery",
//   image: "https://m.media-amazon.com/images/I/61kZgW7wemL._SY425_.jpg",
// };
// const secondBook={
//  author:"Robert Greene",
//  title:"48 laws of power",
//  image:"https://m.media-amazon.com/images/I/31RW8HQ31WL._SY445_SX342_.jpg"
// };
// const thirdBook = {
//   author: "Robert Greene",
//   title: "THE CONCISE ART OF SEDUCTION",
//   image: "https://m.media-amazon.com/images/I/61+C5NBJCFL._SY425_.jpg",
// };
const names=['Vinay','Sharma','Manik'];
// const newNames= names.map((name)=>{
//    return <h1>{names}</h1>
// })
const BookList = ()=>{
  const getBook=(id)=>{
    const book= books.find((book)=>book.id === id);
     console.log(book);
  }
   return(
      <section className="booklist">
        <EventExamples/>
        {

         books.map((book)=>{
            // const{image,title,author,key}=book;
          return <Book {...book} key={book.id} getBook={getBook}/>
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
// function BookList(){
//  return (
  
//    <section className="booklist">
//      <Book author={firstBook.author} image={firstBook.image} title={firstBook.title} />
//      <Book author={secondBook.author} image={secondBook.image} title={secondBook.title} />
//      <Book author={thirdBook.author} image={thirdBook.image} title={thirdBook.title} />
//    </section>
//  );
// }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)

