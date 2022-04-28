import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
