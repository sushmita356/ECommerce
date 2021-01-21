import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Items from "./components/Items";
import ViewCart from "./components/Viewcart";
// import Shop from './components/Shop';
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Items />
      {/* <Switch>
        <Route path="/" component={Items} />
        <Route path="/dashboard" component={ViewCart} />
      </Switch> */}
      <Router>
        <Route path="/" exact>
          <Items />
        </Route>
        <Route path="/Viewcart"  exact>
          <ViewCart />
        </Route>
      </Router>
    </div>
  );
}

export default App;
