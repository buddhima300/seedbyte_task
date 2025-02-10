// lets create simple controller to list all the books
const { books } = require("../data/books");

// lets create simple controller to list all the books
exports.listBooks = (req, res) => {
  res.status(200).json(books); // send the books array as json response
  // console.log(books);
};

// lets try to get the book details by id
exports.getBooks = (req, res) => {
  const id = req.params.id; //get the books with requested parameter id
  //   console.log(id);
  const book = books.find((book) => book.ID === parseInt(id));
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).send("Requested Book is not found");
  }
};

// now lets create the book adding controller to array
exports.addBook = (req, res) => {
  const { name, author, publishedYear } = req.body;
  if (!name || !author || !publishedYear) {
    res.status(400).send("All input is required");
  }
  const newbook = {
    ID: books.length + 1,
    Name: name,
    Author: author,
    PublishedYear: publishedYear,
  };
  books.push(newbook);
  res.status(201).json(newbook);
};

// lets create the book updating controller
exports.updateBook = (req, res) => {
  const id = req.params.id;
  const book = books.find((book) => book.ID === parseInt(id));

  const { name, author, publishedYear } = req.body;

  if (name || author || publishedYear) {
    book.Name = name;
    book.Author = author;
    book.PublishedYear = publishedYear;
    // console.log("book is updated successfully", book);
    res.status(200).json({ book, message: "Book is updated successfully" });
  } else {
    res.status(400).send("All the input are required");
  }
};

// lets create the book deleting controller
exports.deleteBook = (req, res) => {
  const id = req.params.id;
  //   console.log(id);
  const bookIndex = books.findIndex((book) => book.ID === parseInt(id));
  const book = books.find((book) => book.ID === parseInt(id));
  //   validate whether book is there or not
  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    res
      .status(200)
      .json({ deletedBook: book, message: "Book deleted successfully" });
  } else {
    res.status(404).json({ message: "Book is not found" });
  }
};
