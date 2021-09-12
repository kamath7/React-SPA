import React, { useEffect } from "react";

import { useHistory } from "react-router";
import useHttp from "../hooks/use-http";
import { addMyQuote } from "../lib/api";
import QuoteForm from "../components/quotes/QuoteForm";
const AddQuote = () => {
  const { sendRequest, status } = useHttp(addMyQuote);
  const history = useHistory();
  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);
  const addQuote = (quoteData) => {
    sendRequest(quoteData);
  };
  return <QuoteForm isLoading={status === "pending"} onAddQuote={addQuote} />;
};

export default AddQuote;
