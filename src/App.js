import PreLoader from './components/preloader';
import Loader from './components/loader';
import Navbar from './components/navbar';
import Homepage from './Pages/home/home';
import Login from './Pages/login/login';
import Footer from './components/footer';
import ContactPanel from './components/contactPanel';
import Sidebar from './components/sidebar';
import Schedule from './Pages/schedule/schedule';
import Events from './Pages/events/events';
// import SideEvents from './pages/sideEvents/sideEvents';
import EventDetails from './Pages/eventDetails/eventDetails';
import Profile from './Pages/Profile/profile';
import Cart from './Pages/cart/cart';
import ContactUs from './components/contactPanel';
// import AboutUs from './pages/AboutUs/aboutUs';
import Sponsors from './Pages/sponsors/sponsors';
import WebTeam from './Pages/WebTeam/webTeam';
import ErrorPage from './Pages/404/404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <ContactPanel />
        <Routes>
          <Route path="/" element={<Homepage />} loader={<PreLoader />} />
          <Route path="/login" element={<Login loader={<Loader />} />} />
          <Route path="/schedule" element={<Schedule />} loader={<Loader />} />
          <Route path="/events" element={<Events />} loader={<Loader />} />
          {/* <Route path="/side-events" element={<SideEvents />} loader={<Loader />} /> */}
          <Route path="/event-details" element={<EventDetails />} loader={<Loader />} />
          <Route path="/profile" element={<Profile loader={<Loader />} />} />
          <Route path="/cart" element={<Cart loader={<Loader />} />} />
          <Route path="/sponsors" element={<Sponsors loader={<Loader />} />} />
          <Route path="/contact-us" element={<ContactUs loader={<Loader />} />} />
          <Route path="/web-team" element={<WebTeam loader={<Loader />} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;