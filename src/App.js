import logo from './logo.svg';
import './App.css';
import Navigation from "./navigation";
import {Routes, Route, Navigate, HashRouter} from "react-router-dom";
import About from "./about";
import Home from "./home";
import Login from "./login";
import Signup from "./signup";
import Search from "./search";
import Profile from "./profile";


function App() {
  return (
      <HashRouter>
          <div className="d">
              <Navigation />
              <div className="style-bg">
                  <Routes>
                      <Route path="/" element={<Navigate to="home"/>} />
                      <Route path="/FoodPilot/about" element={<About/>} />
                      <Route path="/FoodPilot/home" element={<Home/>} />
                      <Route path="/FoodPilot/login" element={<Login/>} />
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
