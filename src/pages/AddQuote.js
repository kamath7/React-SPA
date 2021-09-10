import React from "react";
import { useHistory } from "react-router";
import QuoteForm from "../components/quotes/QuoteForm";
const AddQuote = () => {
  const history = useHistory();
  const addQuote = (quoteData) => {
    console.log(quoteData);
    history.push("/quotes");
  };
  return <QuoteForm onAddQuote={addQuote} />;
};

export default AddQuote;
