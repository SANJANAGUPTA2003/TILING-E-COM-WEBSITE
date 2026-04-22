function WhatsApp() {
  return (
    <a
      href="https://wa.me/61402888870"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#25D366",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 0 rgba(37, 211, 102, 0.7)",
        animation: "pulse 2s infinite",
        transition: "transform 0.3s ease"
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >

      {/* SVG ICON */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="white"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.91 11.91 0 0012.05 0C5.54 0 .26 5.28.26 11.79c0 2.08.54 4.1 1.57 5.88L0 24l6.48-1.7a11.76 11.76 0 005.57 1.42h.01c6.51 0 11.79-5.28 11.79-11.79a11.7 11.7 0 00-3.43-8.45zM12.06 21.3a9.4 9.4 0 01-4.8-1.31l-.34-.2-3.85 1.01 1.03-3.75-.22-.38a9.37 9.37 0 01-1.43-5.02c0-5.19 4.23-9.42 9.43-9.42 2.52 0 4.88.98 6.66 2.75a9.35 9.35 0 012.76 6.67c-.01 5.2-4.24 9.43-9.44 9.43zm5.17-7.07c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.17.19-.33.21-.61.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.37-1.63-1.53-1.91-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.17.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.1-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.28-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3.01.14.19 2.03 3.1 4.92 4.35.69.3 1.22.48 1.63.61.68.22 1.3.19 1.79.12.55-.08 1.66-.68 1.9-1.33.23-.65.23-1.2.16-1.33-.07-.13-.26-.21-.54-.35z"/>
      </svg>

    </a>
  );
}

export default WhatsApp;