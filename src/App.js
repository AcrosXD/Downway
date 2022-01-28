import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
