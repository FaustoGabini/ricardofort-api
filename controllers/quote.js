const { response } = require("express");
const quotes = require("../quotes.json");

const quoteGet = (req, res = response) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  res.json(randomQuote);
};

const searchQuotes = (req, res = response) => {
  const query = req.query.query?.toLowerCase() || "";
  const filteredQuotes = quotes.filter((quote) =>
    quote.value.toLowerCase().includes(query)
  );

  if (filteredQuotes.length === 0) {
    return res.status(404).json({
      msg: "No quotes found matching the query.",
    });
  }

  res.json({
    total: filteredQuotes.length,
    result: filteredQuotes,
  });
};

const allQuotesGet = (req, res = "response") => {
  res.json({
    total: quotes.length,
    result: quotes,
  });
};

module.exports = {
  quoteGet,
  searchQuotes,
  allQuotesGet,
};
