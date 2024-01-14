const Book = function Book(props) {
  const { image, author, title, getBook, id ,numbers} = props;
  const displayButton = () => {
    console.log(title);
  };
  const getSingleBook = () => {
    getBook(id);
  };
  return (
    <article className="book">
      <img src={image}></img>
      <h2>{title}</h2>
      <button onClick={getSingleBook}>Display Button</button>
      <h4>{author}</h4>
      <h2>{numbers+1}</h2>
    </article>
  );
};
export default Book;