import { Outlet, Link, NavLink } from "react-router-dom";
import WhatsApp from "../components/WhatsApp";

export default function MainLayout() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* TOP BRAND BAR */}
      <div style={topBar} className="top-bar">
        <p style={tag}>Sydney's Premium Tiling & Renovation Team</p>
        <p style={topBarContact}>info@a1sydneybuild.com.au</p>
      </div>

      {/* NAVBAR */}
      <nav style={nav} className="site-nav">
        <div style={navInner} className="site-nav-inner">
          <div style={logoWrap} className="site-logo-wrap">
            <div style={logoBadge}>
              <img src="/logo.png" alt="A1 Sydney Build logo" style={logo} />
            </div>
            <div style={brandTextWrap} className="site-brand-text">
              <p style={brandName}>A1SydneyBuild Pty Ltd</p>
              <p style={brandSub}>Premium Tiling & Renovations</p>
            </div>
          </div>

          <div style={navLinks} className="main-nav-links">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "main-nav-link active" : "main-nav-link")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "main-nav-link active" : "main-nav-link")}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "main-nav-link active" : "main-nav-link")}
            >
              Services
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "main-nav-link active" : "main-nav-link")}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "main-nav-link active nav-cta-link" : "main-nav-link nav-cta-link")}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer style={footer}>
        <div style={footerGrid}>
          <div style={footerCol}>
            <h3 style={footerHeading}>A1 Sydney Build Pty Ltd</h3>
            <p style={muted}>Licensed & Insured</p>
            <p style={muted}>ABN: 33 672 885 657</p>
            <p style={muted}>Lic No: 460403C</p>
          </div>

          <div style={footerCol}>
            <h3 style={footerHeading}>Quick Links</h3>
            <div style={quickLinks}>
              <Link to="/about" style={footerLink}>About</Link>
              <Link to="/services" style={footerLink}>Services</Link>
              <Link to="/projects" style={footerLink}>Projects</Link>
              <Link to="/contact" style={footerLink}>Contact</Link>
            </div>
          </div>

          <div style={footerCol}>
            <h3 style={footerHeading}>Contact</h3>
            <p style={muted}>📞 +61 402 888 870</p>
            <p style={muted}>📧 info@a1sydneybuild.com.au</p>
            <p style={muted}>📍 North Shore, Sydney </p>
            <div style={footerButtons}>
              <Link to="/contact" style={btn}>Get Quote</Link>
              <a href="https://wa.me/61402888870" style={btnAlt}>Feedback</a>
            </div>
          </div>
        </div>
        <p style={copyright}>© {year} A1 Sydney Build Pty Ltd . All rights reserved.</p>
      </footer>

      <WhatsApp />
    </>
  );
}

/* STYLES */

const topBar = {
  background: "#0f172a",
  color: "white",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "14px",
  textAlign: "center",
  flexWrap: "wrap",
  padding: "10px 18px"
};

const tag = { margin: 0, fontSize: "12px", opacity: 0.92, letterSpacing: "0.09em", textTransform: "uppercase", fontWeight: 600 };
const topBarContact = {
  margin: 0,
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.06em",
  color: "rgba(255, 255, 255, 0.92)"
};

const nav = {
  minHeight: "66px",
  background: "linear-gradient(130deg, #0f172a 0%, #1e293b 52%, #0f172a 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "4px 0",
  borderBottom: "none",
  boxShadow: "0 10px 28px rgba(15, 23, 42, 0.3)",
  position: "sticky",
  top: 0,
  zIndex: 20,
  width: "100%"
};

const navInner = {
  width: "100%",
  maxWidth: "none",
  borderRadius: 0,
  border: "none",
  background: "transparent",
  backdropFilter: "none",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "8px",
  flexWrap: "wrap",
  padding: "0 clamp(10px, 2vw, 24px)"
};

const logoWrap = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  minHeight: "52px"
};

const logoBadge = {
  borderRadius: "10px",
  background: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  padding: "4px 7px",
  boxShadow: "0 8px 18px rgba(15, 23, 42, 0.35)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const logo = {
  height: "clamp(34px, 4.5vw, 46px)",
  width: "auto",
  maxWidth: "min(34vw, 160px)",
  objectFit: "contain",
  display: "block"
};

const brandTextWrap = {
  display: "grid",
  textAlign: "left",
  gap: "1px"
};

const brandName = {
  margin: 0,
  color: "#f8fafc",
  fontWeight: 800,
  letterSpacing: "0.03em",
  fontSize: "clamp(12px, 1.2vw, 16px)"
};
const brandSub = {
  margin: 0,
  color: "rgba(255, 255, 255, 0.82)",
  fontSize: "clamp(9px, 0.95vw, 11px)",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  fontWeight: 600
};

const navLinks = {
  marginLeft: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "18px",
  rowGap: "6px",
  flexWrap: "wrap",
  width: "100%"
};

const footer = {
  background: "#0f172a",
  color: "white",
  padding: "56px 20px 26px"
};

const footerGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "30px",
  textAlign: "left",
  maxWidth: "1050px",
  margin: "0 auto"
};

const footerCol = {
  display: "flex",
  flexDirection: "column",
  gap: "10px"
};

const footerHeading = {
  margin: 0,
  color: "white"
};

const muted = {
  color: "#cbd5e1"
};

const quickLinks = {
  display: "grid",
  gap: "8px"
};

const footerLink = {
  textDecoration: "none",
  color: "#cbd5e1"
};

const footerButtons = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "6px"
};

const btn = {
  background: "#0ea5e9",
  padding: "10px 14px",
  color: "white",
  borderRadius: "8px",
  textDecoration: "none"
};

const btnAlt = {
  ...btn,
  background: "transparent",
  border: "1px solid rgb(17, 37, 46)"
};

const copyright = {
  margin: "26px auto 0",
  maxWidth: "1050px",
  paddingTop: "16px",
  borderTop: "1px solid rgba(148,163,184,0.25)",
  color: "#94a3b8",
  fontSize: "14px",
  textAlign: "center"
};