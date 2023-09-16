import './App.css';
import Login from './Pages/Login/Login.js'
import Chatbot from './Pages/ChatBox/Chatbox.js'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer.js'
import Resources from './Pages/Resources/Resources.js'
import Textsummarizer from './Pages/TextSummarizer/Textsummarizer.js'
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  // const location = useLocation();
  // const currentRoute = location.pathname;

  // Conditionally render the Navbar based on the route
  // const renderNavbar = currentRoute !== '/login';

  return (
    <>
      <BrowserRouter>
        <Navbar />{/* Conditional rendering of Navbar */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/textsum" element={<Textsummarizer />} />
          <Route path="/resource" element={<Resources />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
