import HomePage from "./pages/HomePage"
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from "react-router-dom"
import AboutPage from "./pages/AboutPage"
import EventPage from "./pages/EventPage"
import ContactPage from "./pages/ContactPage"
import MainHeader from "./components/MainHeader"
import NoPage from "./pages/NoPage"
import RegistrationPage from "./pages/RegistrationPage"

function App() {
  const location = useLocation();

  // hide Navbar on /registration route
  const hideNavbar = location.pathname === "/registration";

  return (
    <div>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<MainHeader/>}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
