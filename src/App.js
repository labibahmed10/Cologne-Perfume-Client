import { Route, Routes } from "react-router-dom";
import AddNewInventory from "./Components/AddNewInventory/AddNewInventory";
import HomePage from "./Components/HomePage/HomePage";
import SingleInventory from "./Components/Inventory/SingleInventory";
import ManageInventory from "./Components/ManageInventory/ManageInventory";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
        <Route path="/inventory/:pid" element={<SingleInventory></SingleInventory>}></Route>
        <Route path="/inventory" element={<ManageInventory></ManageInventory>}></Route>
        <Route path="/addinventory" element={<AddNewInventory></AddNewInventory>}></Route>
      </Routes>
    </div>
  );
}

export default App;
