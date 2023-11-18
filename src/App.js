import logo from './logo.svg';
import './App.css';
import Navigation from "./navigation";
import {Routes, Route, Navigate, HashRouter} from "react-router-dom";
import Home from "./home";
import Signin from "./signin";
import Signup from "./signup";
import Search from "./search";
import Profile from "./profile";

function App() {
  return (
      <HashRouter>
          <div className="d-flex">
              <Navigation />
              <div className="flex-grow-1">
                  <Routes>
                      <Route path="/" element={<Navigate to="home"/>} />
                      <Route path="/FoodPilot/home" element={<Home/>} />
                      <Route path="/FoodPilot/signin" element={<Signin/>} />
                      <Route path="/FoodPilot/signup" element={<Signup/>} />
                      <Route path="/FoodPilot/search" element={<Search/>} />
                      <Route path="/FoodPilot/profile" element={<Profile/>} />
                  </Routes>
              </div>
          </div>
      </HashRouter>
  );
}

export default App;
