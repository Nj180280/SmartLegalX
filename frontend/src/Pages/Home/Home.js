import { useEffect, useState } from 'react';
import './Home.css';import Services from './services/Services.jsx';
const Home = () => {
  const heroImages = [
    "https://github.com/JAtharva22/html-css-projects/assets/93152317/6d4b7f7c-e287-45bf-bf04-72bab679f269",
    "https://github.com/JAtharva22/html-css-projects/assets/93152317/044c50eb-cbec-4ed7-85f2-e54daf4f992c",
    "https://github.com/JAtharva22/html-css-projects/assets/93152317/1212e7fc-dfb9-404a-a624-b05f7400e703",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    },5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="homepage">
      <div className='hero-overlay'></div>
      <div className="hero-container">

        <div className="Hero-heading">

          <h1>Experience the future of</h1>
          <h1>legal documentation</h1>
          <h1>and Assistant</h1>
          <h4>
            Talk with our advanced AI/ML Legal Assistant about anything related to law and get accurate answers
          </h4>

          <div className="hero-button">
            <button className='btn btn-primary'>
              <a href='https://wwww.amazon.com' style={{color:'white', textDecoration:'none'}}>
              Try It Out!
              </a>
              {/* bot link */}
            </button>
          </div>

        </div>

        <div className="hero-img">
          <img src={heroImages[currentImageIndex]} alt="hero1" />
        </div>

      </div>
      <Services />
    </main>
  );
}

export default Home