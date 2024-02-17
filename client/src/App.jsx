import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Headshot from "./pages/Headshot";
import Project from "./pages/Project";
import Header  from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
   <Header />
    <Routes>
      <Route path = '/' element ={<Home /> }/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/headshot" element={<Headshot/>}/>
      <Route path="/project" element={<Project/>}/>

    </Routes>
    </BrowserRouter>
  )
}