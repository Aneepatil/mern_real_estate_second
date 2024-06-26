import { useState } from "react";
import "./Slider.scss";
const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);
  const changeSlider = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlider("left")}>
            <img src="/arrow.png" alt="arrow_button" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="slider_image" />
          </div>
          <div className="arrow" onClick={() => changeSlider("right")}>
            <img src="/arrow.png" className="right" alt="arrow_button" />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img
          src={images[0]}
          alt="room_banner-image"
          onClick={() => setImageIndex(0)}
        />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt="room_images"
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
