import { useEffect, useState } from 'react';
import './Home.css';import Services from './services/Services.jsx';
const Home = () => {
  const heroImages = [
    "../../assets/hero2.png",
    "../../assets/hero3.png",
    "../../assets/hero4.png",
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            repudiandae corrupti fugit explicabo totam iste tempore facere
            pariatur ullam iusto! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. A, atque!
          </h4>

          <div className="hero-button">
            <button className='yellow-glow'>
              button1
            </button>
            <button className='teal-glow'>
              button2
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