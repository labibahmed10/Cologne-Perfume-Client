import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddNewInventory from "./Components/AddNewInventory/AddNewInventory";
import SingleInventory from "./Components/Inventory/SingleInventory";
import ManageInventory from "./Components/ManageInventory/ManageInventory";
import Navbar from "./Components/Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
import RequiredAuth from "./Components/USER_REGISTER/RequiredAuth/RequiredAuth";
import SIgnUp from "./Components/USER_REGISTER/SignUp/SIgnUp";
import HomePage from "./Components/HOME_PAGE/HomePage/HomePage";
import LogIn from "./Components/USER_REGISTER/LogIn/LogIn";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";
import MyItemsPage from "./Components/MyItemsPage/MyItemsPage";

//AOS animation
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>

        <Route
          path="/inventory/:pid"
          element={
            <RequiredAuth>
              <SingleInventory></SingleInventory>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/inventory"
          element={
            <RequiredAuth>
              <ManageInventory></ManageInventory>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/addinventory"
          element={
            <RequiredAuth>
              <AddNewInventory></AddNewInventory>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/myitems"
          element={
            <RequiredAuth>
              <MyItemsPage></MyItemsPage>
            </RequiredAuth>
          }
        ></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/signup" element={<SIgnUp></SIgnUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer theme="dark"></ToastContainer>
    </div>
  );
}

export default App;
