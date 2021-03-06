import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Navbar> </Navbar>
      <Routes>
        <Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/reviews" element={<Reviews></Reviews>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
