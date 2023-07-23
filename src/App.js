import "./App.css";
import Header from "./components/Header";
import ItemImg from "./components/Items/ItemImg";
import ItemDescription from "./components/Items/ItemDescription";
import ItemOption from "./components/Items/ItemOption";

function App() {
  return (
    <div className="App">
      <Header />
      <ItemImg />
      <div className="item">
        <ItemDescription />
        <ItemOption />
      </div>
    </div>
  );
}

export default App;
