import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const pageHighlights = [
  {
    title: "About",
    description: "Learn who we are, our values, and why Sydney clients trust our workmanship.",
    to: "/about"
  },
  {
    title: "Services",
    description: "Explore tiling, renovations, waterproofing, and complete finish packages.",
    to: "/services"
  },
  {
    title: "Projects",
    description: "View real project photos and see the quality you can expect from our team.",
    to: "/projects"
  }
];

const heroImage =
  "/hero-bg.png";

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeLeft = {
  hidden: { opacity: 0, x: 52 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14
    }
  }
};

export default function Home() {
  return (
    <section style={wrapper}>
      <motion.div
        style={heroBanner}
        initial={{ scale: 1.04, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div style={heroOverlay} />
        <motion.div style={heroContent} variants={fadeUp} initial="hidden" animate="show">
          <motion.div style={heroTextCard} whileHover={{ y: -4 }}>
            <h1 style={title}>
              WELCOME TO A1 SYDNEY BUILD
            </h1>
            <p style={subtitle}>
              PREMIUM TILING AND RENOVATION SERVICES ACROSS SYDNEY DELIVERED WITH PRECISION AND CARE
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        style={grid}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >

        {/* WHAT WE OFFER */}
        <motion.div style={card} variants={fadeUp} whileHover={{ scale: 1.02, y: -4 }}>
          <h2 style={sectionHeadingBlue}>What We Offer</h2>

          <ul style={list}>
            <li>Wall Tiling</li>
            <li>Floor Tiling</li>
            <li>Bathroom Renovation</li>
            <li>Kitchen Tiling</li>
            <li>Outdoor & Balcony</li>
            <li>Waterproofing</li>
          </ul>

          <button style={btn} onClick={() => (window.location.href = "/contact")}>
            Get a Quote
          </button>
        </motion.div>

        {/* WHY CHOOSE US */}
        <motion.div style={cardDark} variants={fadeLeft} whileHover={{ scale: 1.02, y: -4 }}>
          <h2>Why Choose Us</h2>

          <ul style={listWhite}>
            <li>✔ Professional Team</li>
            <li>✔ Clean Workmanship</li>
            <li>✔ Reliable Service</li>
            <li>✔ Quality Materials</li>
          </ul>
        </motion.div>

      </motion.div>

      <motion.div
        style={pageSection}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
      >
        <motion.h2 style={sectionTitle} variants={fadeUp}>
          Explore Our Pages
        </motion.h2>
        <motion.div style={pageGrid} variants={staggerContainer}>
          {pageHighlights.map((item) => (
            <motion.div
              key={item.title}
              style={pageCard}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <h3 style={pageCardTitle}>{item.title}</h3>
              <p style={pageCardText}>{item.description}</p>
              <Link to={item.to} style={pageLink}>
                View {item.title}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

/* STYLES */

const wrapper = {
  padding: "80px 20px",
  textAlign: "center",
  background: "linear-gradient(180deg, #f8fafc 0%, #eef6ff 100%)"
};

const heroBanner = {
  position: "relative",
  overflow: "hidden",
  borderRadius: 0,
  minHeight: "520px",
  backgroundImage: `url(${heroImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  margin: "-80px -20px 34px"
};

const heroOverlay = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(135deg, rgba(15,23,42,0.42), rgba(2,132,199,0.24))"
};

const heroContent = {
  position: "relative",
  zIndex: 1,
  minHeight: "620px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "24px"
};

const heroTextCard = {
  maxWidth: "1020px",
  margin: "0 auto",
  padding: "24px 28px",
  borderRadius: "16px",
  background: "rgba(2, 6, 23, 0.52)",
  border: "1px solid rgba(226, 232, 240, 0.25)",
  backdropFilter: "blur(4px)",
  boxShadow: "0 12px 30px rgba(0,0,0,0.35)"
};

const title = {
  fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
  marginBottom: "14px",
  color: "#f8fafc",
  fontWeight: 700,
  letterSpacing: "0.06em",
  lineHeight: 1.2,
  maxWidth: "980px"
};

const subtitle = {
  maxWidth: "980px",
  margin: 0,
  color: "#e2e8f0",
  fontSize: "clamp(1rem, 2vw, 1.5rem)",
  fontWeight: 600,
  letterSpacing: "0.03em",
  lineHeight: 1.45
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
  gap: "30px"
};

const card = {
  background: "white",
  padding: "30px",
  borderRadius: "12px",
  textAlign: "left",
  boxShadow: "0 14px 36px rgba(15, 23, 42, 0.12)"
};

const cardDark = {
  background: "#0f172a",
  color: "white",
  padding: "30px",
  borderRadius: "12px",
  textAlign: "left",
  boxShadow: "0 14px 36px rgba(15, 23, 42, 0.3)"
};

const list = {
  marginTop: "20px",
  lineHeight: "2"
};

const listWhite = {
  ...list,
  color: "#e2e8f0"
};

const btn = {
  marginTop: "20px",
  background: "#0e232d",
  padding: "11px 22px",
  border: "none",
  color: "white",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: 600,
  boxShadow: "0 8px 20px rgba(14, 165, 233, 0.35)"
};

const pageSection = {
  marginTop: "48px"
};

const sectionTitle = {
  marginBottom: "18px",
  fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)",
  color: "#0f172a"
};

const sectionHeadingBlue = {
  color: "#0f172a"
};

const pageGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
  gap: "18px"
};

const pageCard = {
  background: "white",
  border: "1px solid #e2e8f0",
  borderRadius: "12px",
  padding: "20px",
  textAlign: "left",
  boxShadow: "0 10px 24px rgba(15, 23, 42, 0.08)"
};

const pageCardTitle = {
  margin: "0 0 10px",
  color: "#0f172a",
  fontSize: "20px"
};

const pageCardText = {
  margin: "0 0 14px",
  color: "#475569"
};

const pageLink = {
  textDecoration: "none",
  color: "#0e232d",
  fontWeight: 600
};