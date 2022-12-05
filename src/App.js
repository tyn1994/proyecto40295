import "./App.css";
import "./components/ItemListContainer/itemList.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/pokemon/:id" element={<ItemDetailContainer/>} />
        <Route path="/types/:id" element={<ItemListContainer/>} />
        <Route path="*" element={<h1>404: Not Found! :(</h1>} />
      </Routes>
      <div className="App">
        
      </div>
    </BrowserRouter>
  );
}

export default App;
