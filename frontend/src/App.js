import './App.css';
import Login from './Pages/Login/Login.js'
import Chatbot from './Pages/ChatBox/Chatbox.js'
import Navbar from './Components/Navbar/Navbar.js'
import Footer from './Components/Footer/Footer.js'
import Resources from './Pages/Resources/Resources.js'
import Textsummarizer from './Pages/TextSummarizer/Textsummarizer.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/resource" element={<Resources />} />
          <Route path="/textsum" element={<Textsummarizer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;