import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Items from './components/Items';
import ViewCart from './components/Viewcart';
// import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <Header/>
     <Items/>
    </div>
  );
}

export default App;
