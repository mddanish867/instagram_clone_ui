import "./App.css";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Layout/Auth/Login";
import { Timeline } from "@mui/icons-material";
import Sidenav from "./Navigation/Sidenav";
import Post from "./Timeline/Posts/Post";
import Suggestion from "./Timeline/Suggestion";
import Authentication from "./Layout/Auth/Authentication";
import SignUp from "./Layout/Auth/SignUp";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentication />}></Route>
          <Route path="/authentication" element={<Authentication />}></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/home" element={<Sidenav />}></Route>
          <Route path="/home" element={<Suggestion />}></Route>
          <Route path="/home" element={<Timeline />}></Route>
          <Route path="/home" element={<Post />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
