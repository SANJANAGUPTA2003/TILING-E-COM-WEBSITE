import { motion } from "framer-motion";

const values = [
  "Licensed and insured professionals",
  "Clean, detail-focused workmanship",
  "Clear communication from start to finish",
  "On-time delivery and reliable scheduling"
];

export default function About() {
  return (
    <section style={wrapper}>
      <div style={hero}>
        <p style={eyebrow}>About</p>
        <h1 style={title}>ABOUT US</h1>
        <p style={subtitle}>
          A1 Sydney Build delivers premium tiling and renovation results that are made to last.
          We combine precision workmanship with reliable service for every home and commercial project.
        </p>
      </div>

      <div style={grid}>
        <motion.div style={card} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <h2>Who We Are</h2>
          <p>
            A1 Sydney Build is a Sydney-based team focused on high-end tiling and renovation work.
            From planning to final handover, we deliver smooth, durable finishes with care and precision.
          </p>
        </motion.div>

        <motion.div style={cardBlue} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <h2>What We Offer</h2>
          <p>
            We handle wall and floor tiling, waterproofing, bathroom upgrades, kitchen finishes,
            and complete tiling packages for both residential and commercial spaces.
          </p>
        </motion.div>

        <motion.div style={card} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <h2>Why Choose Us</h2>
          <ul style={valueList}>
            {values.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

/* STYLES */

const wrapper = {
  padding: "80px 20px",
  background: "#f8fafc",
  textAlign: "center"
};

const hero = {
  maxWidth: "860px",
  margin: "0 auto 38px"
};

const eyebrow = {
  margin: "0 0 8px",
  color: "#0d2b37",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  fontWeight: 700,
  fontSize: "13px"
};

const title = {
  fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
  marginBottom: "12px",
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "0.04em"
};

const subtitle = {
  margin: 0,
  color: "#475569"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
  gap: "25px"
};

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "12px",
  textAlign: "left",
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
};

const cardBlue = {
  ...card,
  background: "#0e2027",
  color: "white"
};

const valueList = {
  margin: "10px 0 0",
  lineHeight: 1.9,
  paddingLeft: "20px"
};