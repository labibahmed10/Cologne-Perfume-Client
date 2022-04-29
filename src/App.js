import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import SingleInventory from "./Components/Inventory/SingleInventory";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/inventory/:pid" element={<SingleInventory></SingleInventory>}></Route>
      </Routes>
    </div>
  );
}

export default App;
