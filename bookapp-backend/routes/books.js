const express = require("express");
const booksController = require("../controllers/books");

const router = express.Router();

router.get("/", booksController.index);

router.post("/create", booksController.create);

router.get("/:id", booksController.show);

router.patch("/edit/':id", booksController.edit);

router.delete("/':id", booksController.delete);

module.exports = router;
