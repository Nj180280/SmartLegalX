import './App.css';
import Login from './Pages/Login/Login.js'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer.js'
import Resources from './Pages/Resources/Resources.js'
import Textsummarizer from './Pages/TextSummarizer/Textsummarizer.js'
import Lawyerform from './Pages/Lawyerform/Lawyerform.js'
import Home from './Pages/Home/Home';
import Docum from './Pages/Docum/Docum.js';
import Advocate from './Pages/Advocate/Advocate.js';
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
          <Route path="/docum" element={<Docum />} />
          <Route path="/textsum" element={<Textsummarizer />} />
          <Route path="/resource" element={<Resources />} />
          <Route path="/lawyer" element={<Lawyerform />} />
          <Route path="/lawyers" element={<Advocate />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;