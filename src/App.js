import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddNewInventory from "./Components/AddNewInventory/AddNewInventory";
import HomePage from "./Components/HomePage/HomePage";
import SingleInventory from "./Components/Inventory/SingleInventory";
import LogIn from "./Components/LogIn/LogIn";
import ManageInventory from "./Components/ManageInventory/ManageInventory";
import Navbar from "./Components/Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";

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
        <Route path="/login" element={<LogIn></LogIn>}></Route>
      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
