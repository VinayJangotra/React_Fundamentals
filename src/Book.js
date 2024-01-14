const Book = function Book(props) {
  const { image, author, title, getBook, id } = props;
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
    </article>
  );
};
export default Book;