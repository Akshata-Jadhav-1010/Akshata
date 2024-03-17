import { BrowserRouter, Routes, Route } from "react-router-dom"
import Blogs from "./components/Home/Blogs"
import Footer from "./components/ui/Footer"
import Navbar from "./components/ui/Navbar"
import Home from "./components/Home/Home"
import Contact from "./components/contact/Contact"
import NavbarSm from "./components/ui/NavbarSm"
import NotFound from "./components/Add Blogs/NotFound"
import SignIn from "./components/Auth/SignIn"
import SignUp from "./components/Auth/SignUp"
import  Add  from "./components/Add Blogs/Add"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/*" element={<Add />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App