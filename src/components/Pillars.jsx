import React, { useRef, useState, useEffect } from "react";
import "./Pillars.css";

const pillars = [
  {
    title: "Nutrition",
    description:
      "Evidence supports the use of a whole food, plant‑predominant diet to prevent, treat and reverse chronic illness.",
    image: "/images/Rectangle 152.png",
    badge: {
      icon: (
        <img
          src="/images/pillarheart.svg"
          alt="Blood Pressure"
          width="20"
          height="20"
        />
      ),
      text: "121/80 mmHg",
    },
  },
  {
    title: "Physical activity",
    description:
      "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
    image: "/images/Rectangle 154.png",
    badge: {
      icon: (
        <img
          src="/images/pillarredheart.svg"
          alt="Walking"
          width="20"
          height="20"
        />
      ),
      text: "32 minutes",
    },
  },
  {
    title: "Restorative sleep",
    description:
      "Consistent, quality sleep is essential for cognitive function and physical health.",
    image: "/images/Rectangle 156.png",
    badge: {
      icon: (
        <img
          src="/images/pillarnight.svg"
          alt="Sleep"
          width="20"
          height="20"
        />
      ),
      text: "8 hours",
    },
  },
  {
    title: "Stress management",
    description:
      "Effective stress management improves well‑being and reduces disease risk.",
    image: "/images/Rectangle 158.png",
    badge: {
      icon: (
        <img
          src="/images/pillarbluheart.svg"
          alt="Heart rate"
          width="20"
          height="20"
        />
      ),
      text: "60 bpm",
    },
  },
  {
    title: "Social connection",
    description:
      "Strong social ties support emotional health and resilience.",
    image: "/images/Rectangle 160.png",
    badge: {
      icon: (
        <img
          src="/images/pillarredheart.svg"
          alt="Happiness"
          width="20"
          height="20"
        />
      ),
      text: "Feeling happy",
    },
  },
  {
    title: "Substance abuse",
    description:
      "Avoiding tobacco, excess alcohol, and drugs supports long‑term health.",
    image: "/images/Rectangle 144.png",
    badge: {
      icon: (
        <img
          src="/images/pillarclock.svg"
          alt="No alcohol"
          width="20"
          height="20"
        />
      ),
      text: "Sober",
    },
  },
];

const Pillars = () => {
  const [active, setActive] = useState(0);
  const carouselRef = useRef(null);

  // Helper to get only element children
  const getCards = () =>
    Array.from(carouselRef.current?.children || []).filter(
      (el) => el.nodeType === 1
    );

  const scrollToCard = (i) => {
    const card = getCards()[i];
    if (card) {
      setActive(i);
      card.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  };

  const slide = (dir) => {
    const card = getCards()[0];
    if (!card) return;
    const gap = 32; // match your CSS gap
    const step = card.offsetWidth + gap;
    carouselRef.current.scrollBy({
      left: dir === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  // Sync active tab while user drags
  useEffect(() => {
    const track = carouselRef.current;
    if (!track) return;

    const onScroll = () => {
      const cards = getCards();
      const left = track.scrollLeft;
      const closest = cards.reduce(
        (best, card, i) =>
          Math.abs(card.offsetLeft - left) <
          Math.abs(cards[best].offsetLeft - left)
            ? i
            : best,
        0
      );
      setActive(closest);
    };

    track.addEventListener("scroll", onScroll);
    return () => track.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line
  }, []);

  return (
    <section className="pillars-section">
      <div className="hero-gradient-line"></div>
      <div className="pillars-header">
        <div className="pillars-title-block">
          <div className="pillars-kicker">HOW IT WORKS</div>
          <h2 className="pillars-heading">
            <span className="pillars-highlight">Lifestyle as medicine:</span>{" "}
            The six pillars
          </h2>
        </div>
      </div>
      {/* Tabs and arrows in one row */}
      <div className="pillars-tabs-row" style={{ display: "flex", alignItems: "center", width: "100%", marginBottom: 22, padding: "0 16px" }}>
        <div className="pillars-tabs" style={{ flex: 1, display: "flex", gap: 12 }}>
          {pillars.map((p, i) => (
            <button
              key={`${p.title}-${i}`}
              className={`pillars-tab${active === i ? " active" : ""}`}
              onClick={() => scrollToCard(i)}
              type="button"
            >
              {p.title}
            </button>
          ))}
        </div>
        <div className="pillars-arrows" style={{ marginLeft: 12 }}>
          <button onClick={() => slide("left")} aria-label="Previous">
            &#8592;
          </button>
          <button onClick={() => slide("right")} aria-label="Next">
            &#8594;
          </button>
        </div>
      </div>
      <div
        className="pillars-carousel"
        ref={carouselRef}
        tabIndex={0}
        style={{ minWidth: 0, width: "100%", maxWidth: "100%", margin: 0, boxSizing: "border-box" }}
      >
        {pillars.map((p, i) => (
          <div
            className={`pillar-card${active === i ? " active" : ""}`}
            key={`${p.title}-${i}`}
          >
            <div className="pillar-image">
              <img
                src={p.image}
                alt={p.title}
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                draggable={false}
              />
              <div className="badge">
                <span className="badge-icon">{p.badge.icon}</span>
                <span>{p.badge.text}</span>
              </div>
            </div>
            <div className="pillar-content">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pillars;
