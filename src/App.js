import PreLoader from "./components/preloader";
import Loader from "./components/loader";
import Navbar from "./components/navbar";
import Homepage from "./pages/home/home";
import Auth from "./pages/auth/auth";
import Footer from "./components/footer";
import ContactPanel from "./components/contactPanel";
import Sidebar from "./components/sidebar";
import Schedule from "./pages/schedule/schedule";
import Events from "./pages/events/events";
// import SideEvents from './pages/sideEvents/sideEvents';
import EventDetails from "./pages/eventDetails/eventDetails";
// import Profile from './pages/profile/profile';
// import Cart from './pages/cart/cart';
// import ContactUs from './components/contactPanel';
// import AboutUs from './pages/aboutUs/aboutUs';
import Sponsors from "./pages/sponsors/sponsors";
// import WebTeam from './pages/webTeam/webTeam';
import ErrorPage from './pages/404/Error';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <ContactPanel />
        <Routes>
          <Route path="/" element={<Homepage />} loader={<PreLoader />} />
          <Route path="/auth" element={<Auth loader={<Loader />} />} />
          <Route path="/schedule" element={<Schedule />} loader={<Loader />} />
          <Route path="/events" element={<Events />} loader={<Loader />} />
          {/* <Route path="/side-events" element={<SideEvents />} loader={<Loader />} /> */}
          <Route
            path="/event-details"
            element={<EventDetails />}
            loader={<Loader />}
          />
          {/* <Route path="/profile" element={<Profile loader={<Loader />} />} /> */}
          {/* <Route path="/cart" element={<Cart loader={<Loader />} />} /> */}
          <Route path="/sponsors" element={<Sponsors loader={<Loader />} />} />
          {/* <Route path="/contact-us" element={<ContactUs loader={<Loader />} />} /> */}
          {/* <Route path="/web-team" element={<WebTeam loader={<Loader />} />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
