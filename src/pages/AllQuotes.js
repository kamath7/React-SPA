import React from "react";
import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "Kams", text: "Rhea stupid" },
  { id: "q2", author: "Somebody", text: "Pujit PS" },
  { id: "q3", author: "God", text: "Dhoni is the GOAT" },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
