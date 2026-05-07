import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  return (
    <section style={wrapper}>
      <h1 style={title}>OUR SERVICES</h1>
      <p style={subtitle}>
        End-to-end tiling and renovation solutions tailored for modern homes and commercial spaces.
      </p>

      <div style={grid}>

        {/* WHAT WE OFFER */}
        <motion.div style={card} whileHover={{ scale: 1.02 }}>
          <h2>What We Offer</h2>

          <ul style={list}>
            <li>Wall Tiling</li>
            <li>Floor Tiling</li>
            <li>Bathroom Renovation</li>
            <li>Kitchen Tiling</li>
            <li>Outdoor & Balcony</li>
            <li>Waterproofing</li>
          </ul>

          <button type="button" style={btn} onClick={() => navigate("/contact")}>
            Get a Quote
          </button>
        </motion.div>

        {/* WHY CHOOSE US */}
        <motion.div style={cardDark} whileHover={{ scale: 1.02 }}>
          <h2>Why Choose Us</h2>

          <ul style={listWhite}>
            <li>✔ Professional Team</li>
            <li>✔ Clean Workmanship</li>
            <li>✔ Reliable Service</li>
            <li>✔ Quality Materials</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}

/* STYLES */

const wrapper = {
  padding: "80px 20px",
  textAlign: "center",
  background: "#f8fafc"
};

const title = {
  fontSize: "clamp(2.3rem, 5vw, 3.5rem)",
  marginBottom: "12px",
  fontWeight: 800,
  color: "#0f172a",
  textTransform: "uppercase",
  letterSpacing: "0.04em"
};

const subtitle = {
  maxWidth: "760px",
  margin: "0 auto 40px",
  color: "#475569"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
  gap: "30px"
};

const card = {
  background: "#0f172a",
  padding: "30px",
  borderRadius: "12px",
  textAlign: "left",
  boxShadow: "0 10px 25px rgba(15, 23, 42, 0.25)",
  color: "#f8fafc"
};

const cardDark = {
  background: "#0e2027",
  color: "#f8fafc",
  padding: "30px",
  borderRadius: "12px",
  textAlign: "left"
};

const list = {
  marginTop: "20px",
  lineHeight: "2",
  color: "#cbd5e1"
};

const listWhite = {
  ...list,
  color: "#e2e8f0"
};

const btn = {
  marginTop: "20px",
  background: "#0ea5e9",
  padding: "10px 20px",
  border: "none",
  color: "white",
  borderRadius: "6px",
  cursor: "pointer"
};