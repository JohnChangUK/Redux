export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property
  console.log("You clicked on book: ", book.title);
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}