const { Router } = require("express");
const {
  quoteGet,
  searchQuotes,
  allQuotesGet,
} = require("../controllers/quote");

const router = Router();

router.get("/", quoteGet);

router.get("/search", searchQuotes);

// All quotes
router.get("/all", allQuotesGet);

module.exports = router;
