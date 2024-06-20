import React from 'react';
import '../index.css';

const InstagramSection = () => {
  const images = [
    { src: '/img/d13d6f36-04ad-44f7-8142-54ff6380c565.JPG', alt: 'Imagen 1' },
    { src: '/img/c51d8571-770a-480c-b91a-86508a75db49.JPG', alt: 'Imagen 2' },
    { src: '/img/cb94591f-102a-454e-aa62-512ce188c514.JPG', alt: 'Imagen 3' },
    { src: '/img/5e4e8c07-047e-4096-9e1b-4dc109e4a89c.JPG', alt: 'Imagen 4' },
    { src: '/img/3ecaa1fd-0a28-4dc4-a774-89e7917d95cf.JPG', alt: 'Imagen 5' },
    { src: '/img/78870995-c35a-4d2d-a162-f13a55a55194.JPG', alt: 'Imagen 6' },
  ];

  return (
    <div className="instagram-section">
      <hr className="lineaVerde2" />
      <h1 className="instatitu">
        <i className="fa-brands fa-instagram"></i> ¡SEGUINOS EN INSTAGRAM!
      </h1>
      <div className="instagram-grid">
        {images.map((image, index) => (
          <div className="instagram-item" key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <div className="seguiinsta">
        <a id="seguinsta" href="https://www.instagram.com/frutasyverduras_elgringo/" target="_blank" rel="noopener noreferrer">
          Visitar
        </a>
      </div>
    </div>
  );
};

export default InstagramSection;
