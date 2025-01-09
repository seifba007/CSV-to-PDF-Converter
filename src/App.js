import React, { useState } from "react";
import MyDocument from "./MyDocument";

const App = () => {
  const [showDocument, setShowDocument] = useState(false);

  // Handle button click to toggle document visibility
  const handleShowDocument = () => {
    setShowDocument(true); // Set to true to show the document
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>PDF Generator App</h1>
      <button onClick={handleShowDocument} style={styles.button}>
        Generate Statement PDF
      </button>
      {showDocument && <MyDocument />}
    </div>
  );
};

// Define custom styles
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    maxWidth: "600px",
    margin: "0 auto",
    background: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
  },
  title: {
    color: "#FF9900",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#FF9900",
    color: "#FFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease-in-out",
  },
  buttonHover: {
    backgroundColor: "#CC7A00",
  },
};

export default App;
