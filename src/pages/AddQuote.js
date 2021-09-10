import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";
const AddQuote = () => {
  const addQuote = (quoteData) => {
    console.log(quoteData);
  };
  return <QuoteForm onAddQuote={addQuote} />;
};

export default AddQuote;
