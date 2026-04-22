import { useState } from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const [activeImage, setActiveImage] = useState(null);

  const images = [
    "/p1.jpeg",
    "/p2.jpeg",
    "/p3.jpeg",
    "/p4.jpeg",
    "/p5.jpeg",
    "/p6.jpeg"
  ];

  return (
    <section style={wrapper}>
      <h1 style={title}>OUR WORK</h1>
      <p style={subtitle}>Click any image to view it in full screen.</p>

      <div style={grid}>
        {images.map((img, i) => (
          <button key={img} type="button" style={imageBtn} onClick={() => setActiveImage(img)}>
            <div style={imageWrap}>
              <img
                src={img}
                alt={`Project ${i + 1}`}
                style={image}
              />
              <Link
                to="/contact"
                style={moreBadge}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                + More Details
              </Link>
            </div>
          </button>
        ))}
      </div>

      <div style={ctaWrap}>
        <p style={ctaText}>Need similar results for your space?</p>
        <Link to="/contact" style={quoteBtn}>
          Get a Quote
        </Link>
      </div>

      {activeImage && (
        <div style={modalBackdrop} role="presentation" onClick={() => setActiveImage(null)}>
          <button type="button" style={closeBtn} onClick={() => setActiveImage(null)}>
            Close
          </button>
          <img
            src={activeImage}
            alt="Project full view"
            style={modalImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

const wrapper = {
  padding: "80px 20px",
  background: "#f8fafc"
};

const title = {
  textAlign: "center",
  marginBottom: "12px",
  fontSize: "clamp(2.3rem, 5vw, 3.5rem)",
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "0.04em"
};

const subtitle = {
  textAlign: "center",
  color: "#475569",
  marginBottom: "24px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
  gap: "16px"
};

const imageBtn = {
  border: "none",
  padding: 0,
  background: "transparent",
  cursor: "zoom-in"
};

const imageWrap = {
  position: "relative"
};

const image = {
  width: "100%",
  height: "250px",
  objectFit: "cover",
  borderRadius: "12px",
  boxShadow: "0 12px 26px rgba(0,0,0,0.12)"
};

const moreBadge = {
  position: "absolute",
  left: "10px",
  bottom: "10px",
  background: "rgba(15,23,42,0.78)",
  color: "white",
  padding: "6px 10px",
  borderRadius: "999px",
  fontSize: "12px",
  fontWeight: 600,
  textDecoration: "none",
  cursor: "pointer"
};

const ctaWrap = {
  marginTop: "26px",
  textAlign: "center"
};

const ctaText = {
  color: "#475569",
  marginBottom: "10px"
};

const quoteBtn = {
  display: "inline-block",
  textDecoration: "none",
  background: "#0ea5e9",
  color: "white",
  borderRadius: "8px",
  padding: "10px 16px",
  fontWeight: 700
};

const modalBackdrop = {
  position: "fixed",
  inset: 0,
  background: "rgba(2,6,23,0.92)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
  padding: "24px"
};

const modalImage = {
  maxWidth: "96vw",
  maxHeight: "90vh",
  borderRadius: "12px",
  objectFit: "contain",
  boxShadow: "0 20px 50px rgba(0,0,0,0.4)"
};

const closeBtn = {
  position: "fixed",
  top: "16px",
  right: "16px",
  border: "1px solid rgba(255,255,255,0.4)",
  color: "white",
  borderRadius: "8px",
  background: "rgba(255,255,255,0.1)",
  padding: "8px 12px",
  cursor: "pointer"
};