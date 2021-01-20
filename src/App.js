import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Items from './components/Items';
import viewCart from './components/Viewcart';

function App() {
  return (
    <div className="App">
      <Header/>
      <Items/>
      <viewCart/>
      {/* <Home /> */}
      {/* <Shop/> */}
    </div>
  );
}

export default App;
