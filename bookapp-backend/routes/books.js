const express = require("express");
const booksController = require("../controllers/books")

const router = express.Router();

router.get("/", booksController.index);

router.post("/create", booksController.create);

router.get("/:id", booksController.show);

module.exports = router;
