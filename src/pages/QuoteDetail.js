import React from "react";
import { Route, useParams } from "react-router";
import Comments from "../components/comments/Comments";
const QuoteDetail = () => {
  const params = useParams();
  return (
    <React.Fragment>
      <h1>To view single quote</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default QuoteDetail;
