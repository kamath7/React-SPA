import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
// import AddQuote from "./pages/AddQuote"; -> Lazy Loading added below
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

const AddQuote = React.lazy(()=> import("./pages/AddQuote")) //Lazy loading for adding new quote

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/addQuote">
          <AddQuote />
        </Route>
        {/* implementation for if route is not found */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
