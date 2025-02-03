// import the express router
const express = require("express");
const {
  listBooks,
  getBooks,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/books.controller");
const router = express.Router();

router.get("/list", listBooks);
router.get("/:id", getBooks);
router.post("/addbook", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
