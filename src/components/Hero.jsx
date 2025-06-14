import React from "react";
import "./Hero.css";

const Hero = () => {
  const col1 = [
    "Rectangle 112.png",
    "Rectangle 3468483.png",
    "Rectangle 3468481.png",
  ];
  const col2 = [
    "Rectangle 3468486.png",
    "Rectangle 112.png",
    "Rectangle 3468483.png",
  ];

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Book an appointment with <span>lifestyle medicine</span> experts
        </h1>
        <p>Optimize your lifestyle and reverse chronic diseases.</p>

        <form className="hero-search">
          {[
            {
              icon: "searchicon",
              ph: "Condition, procedure, speciality…",
            },
            {
              icon: "locicon",
              ph: "City, state, or zipcode",
            },
            {
              icon: "hearticon",
              ph: "Insurance carrier",
            },
          ].map((f) => (
            <div className="input-wrapper" key={f.icon}>
              <img
                src={`/images/${f.icon}.svg`}
                className="input-icon"
                alt=""
              />
              <input type="text" placeholder={f.ph} />
            </div>
          ))}

          <button type="submit">
            <img src="/images/searchwhite.svg" className="btn-icon" alt="" />
            Find now
          </button>
        </form>
      </div>

      <div className="hero-images">
        {/* Desktop columns */}
        <div className="scroll-column scroll-down">
          <div className="scroll-track">
            {col1.concat(col1).map((src, i) => (
              <img key={`c1-${i}`} src={`/images/${src}`} alt="" />
            ))}
          </div>
        </div>
        <div className="scroll-column scroll-up">
          <div className="scroll-track">
            {col2.concat(col2).map((src, i) => (
              <img key={`c2-${i}`} src={`/images/${src}`} alt="" />
            ))}
          </div>
        </div>
        
        {/* Mobile horizontal scroll row */}
        <div className="scroll-row">
          <div className="scroll-track">
            {col1.concat(col1).map((src, i) => (
              <img key={`row-${i}`} src={`/images/${src}`} alt="" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
