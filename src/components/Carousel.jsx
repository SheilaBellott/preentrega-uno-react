import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Carousel = () => {
  const [images, setImages] = useState([
    "https://firebasestorage.googleapis.com/v0/b/fgmuebleria-53529.appspot.com/o/carousel-1.jpeg?alt=media&token=74339c6a-1198-407e-892f-d893cb79a5f2",
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  
  const isHomePageOrCategory = location.pathname === '/';


  return isHomePageOrCategory ? (
    <div className="carousel">
      <img src={images[currentImageIndex]} alt="carousel" style={{ width: '100%', height: '' }} />
    </div>
  ) : null;
};

export default Carousel;

