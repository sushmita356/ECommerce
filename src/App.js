import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Items from "./components/Items";
import ViewCart from "./components/Viewcart";
// import Shop from './components/Shop';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" exact>
          <Items />
        </Route>
        <Route path="/Viewcart" exact component={ViewCart} />
      </Router>
      {/* <Switch>
        <Route path="/">
          <Items />
        </Route>
        <Route path="/Viewcart">
          <ViewCart />
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
