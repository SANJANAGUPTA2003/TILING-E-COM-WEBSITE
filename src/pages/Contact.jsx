import { motion } from "framer-motion";
import { useState } from "react";

const contactItems = [
  { icon: "📞", label: "Phone", value: "+61 402 888 870" },
  { icon: "📧", label: "Email", value: "info@a1sydneybuild.com.au" },
  { icon: "📍", label: "Location", value: "North Shore" }
];

const perks = ["Fast quotes", "Premium finish", "On-time delivery", "Friendly team"];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "",
    details: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = [
      "Hello A1 Sydney Build Pty Ltd, I would like a quote.",
      "",
      `Name: ${formData.fullName || "-"}`,
      `Email: ${formData.email || "-"}`,
      `Service: ${formData.service || "-"}`,
      `Project Details: ${formData.details || "-"}`
    ].join("\n");

    const whatsappUrl = `https://wa.me/61402888870?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section style={wrapper}>
      <div style={glowOne} />
      <div style={glowTwo} />

      <div style={heroText}>
        <p style={eyebrow}>A1 Sydney Build Pty Ltd</p>
        <h1 style={title}>CONTACT US</h1>
        <p style={subtitle}>
          Tell us about your project and we will get back with the right plan, pricing, and timeline.
        </p>
      </div>

      <div style={layout}>
        <motion.div
          style={leftPanel}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={panelTitle}>Get In Touch</h2>
          <p style={panelText}>We would love to hear from you. Reach out through any channel below.</p>

          <div style={contactList}>
            {contactItems.map((item) => (
              <div key={item.label} style={contactCard}>
                <span style={icon}>{item.icon}</span>
                <div>
                  <p style={contactLabel}>{item.label}</p>
                  <p style={contactValue}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={perksWrap}>
            {perks.map((perk) => (
              <span key={perk} style={perkChip}>
                {perk}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.form
          style={formCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
        >
          <h2 style={panelTitle}>Request A Quote</h2>

          <label style={label}>
            Full Name
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your name"
              style={input}
              required
            />
          </label>

          <label style={label}>
            Email Address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              style={input}
              required
            />
          </label>

          <label style={label}>
            Service Needed
            <input
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
              placeholder="Bathroom renovation, floor tiling..."
              style={input}
              required
            />
          </label>

          <label style={label}>
            Project Details
            <textarea
              rows={5}
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Share project size, location, and timeline..."
              style={textarea}
              required
            />
          </label>

          <button type="submit" style={btn}>
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

const wrapper = {
  position: "relative",
  overflow: "hidden",
  padding: "88px 20px",
  background: "linear-gradient(180deg, #eef6ff 0%, #f8fafc 100%)",
  textAlign: "left"
};

const glowOne = {
  position: "absolute",
  width: "360px",
  height: "360px",
  borderRadius: "999px",
  background: "rgba(56, 189, 248, 0.2)",
  filter: "blur(70px)",
  top: "-120px",
  left: "-70px"
};

const glowTwo = {
  position: "absolute",
  width: "420px",
  height: "420px",
  borderRadius: "999px",
  background: "rgba(14, 165, 233, 0.16)",
  filter: "blur(90px)",
  bottom: "-220px",
  right: "-120px"
};

const heroText = {
  position: "relative",
  zIndex: 1,
  margin: "0 auto 42px",
  maxWidth: "980px",
  textAlign: "center"
};

const eyebrow = {
  marginBottom: "15px",
  color: "#0369a1",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  fontSize: "18px"
};

const title = {
  margin: "0 0 18px",
  fontSize: "clamp(2.4rem, 5vw, 3.7rem)",
  lineHeight: 1.1,
  color: "#0f172a",
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "0.04em"
};

const subtitle = {
  margin: "0 auto",
  maxWidth: "740px",
  color: "#334155"
};

const layout = {
  position: "relative",
  zIndex: 1,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
  gap: "24px",
  maxWidth: "1050px",
  margin: "0 auto"
};

const leftPanel = {
  background: "rgba(255,255,255,0.8)",
  border: "1px solid rgba(148,163,184,0.3)",
  backdropFilter: "blur(4px)",
  borderRadius: "20px",
  padding: "30px",
  boxShadow: "0 20px 50px rgba(15, 23, 42, 0.09)"
};

const formCard = {
  background: "#0f172a",
  borderRadius: "20px",
  padding: "30px",
  color: "#e2e8f0",
  boxShadow: "0 20px 50px rgba(15, 23, 42, 0.24)",
  display: "flex",
  flexDirection: "column",
  gap: "14px"
};

const panelTitle = {
  margin: "0 0 10px",
  color: "inherit"
};

const panelText = {
  marginBottom: "20px",
  color: "#475569"
};

const contactList = {
  display: "grid",
  gap: "12px"
};

const contactCard = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  borderRadius: "12px",
  border: "1px solid #dbeafe",
  background: "#f8fcff",
  padding: "12px 14px"
};

const icon = {
  fontSize: "20px"
};

const contactLabel = {
  fontSize: "13px",
  fontWeight: 600,
  color: "#0369a1",
  marginBottom: "2px"
};

const contactValue = {
  fontWeight: 500,
  color: "#0f172a"
};

const perksWrap = {
  marginTop: "18px",
  display: "flex",
  flexWrap: "wrap",
  gap: "8px"
};

const perkChip = {
  background: "#e0f2fe",
  border: "1px solid #bae6fd",
  color: "#075985",
  borderRadius: "999px",
  padding: "6px 12px",
  fontSize: "13px",
  fontWeight: 600
};

const label = {
  display: "grid",
  gap: "7px",
  fontSize: "14px",
  fontWeight: 500
};

const input = {
  borderRadius: "10px",
  border: "1px solid rgba(148,163,184,0.4)",
  background: "rgba(255,255,255,0.08)",
  color: "#f8fafc",
  padding: "12px 14px",
  outline: "none"
};

const textarea = {
  ...input,
  resize: "vertical",
  minHeight: "110px",
  fontFamily: "inherit"
};

const btn = {
  marginTop: "6px",
  border: "none",
  borderRadius: "10px",
  background: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
  color: "white",
  padding: "12px 18px",
  fontWeight: 700,
  cursor: "pointer",
  boxShadow: "0 10px 20px rgba(56, 189, 248, 0.28)"
};