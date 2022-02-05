import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Catalog from "./pages/Catalog";
import {Component} from "react";

function App(){
        return(
      <BrowserRouter>
          <Switch>
              <Route path="/dashboard" exact component={Dashboard}/>
              <Route path="/catalog" exact component={Catalog}/>
              <Route component={NotFound}/>
          </Switch>
      </BrowserRouter>
        );
}

export default App;
