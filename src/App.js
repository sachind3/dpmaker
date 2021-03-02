import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Intro from "./pages/Intro";
import FormPage from "./pages/FormPage";
import Template from "./pages/Template";
import { LoadingContext } from "./context/Service";
import Loading from "./components/Loading";

const App = () => {
  const [isLoading] = useContext(LoadingContext);
  return (
    <>
      {isLoading && <Loading />}
      <Router>
        <Switch>
          <Route path="/template">
            <Template />
          </Route>
          <Route path="/form">
            <FormPage />
          </Route>
          <Route path="/">
            <Intro />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
