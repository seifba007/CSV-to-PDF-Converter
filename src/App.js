import React, { useState } from "react";
import Papa from "papaparse";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument"; // Import MyDocument component
import { FaCloudUploadAlt } from "react-icons/fa"; // Import the file upload icon

const App = () => {
  const [csvData, setCsvData] = useState([]);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileName, setFileName] = useState(""); // State to store the uploaded file name

  // Handle CSV upload and parsing
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name); // Set the file name
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          setCsvData(results.data); // Save the parsed data
          setFileUploaded(true); // Mark file as uploaded
        },
      });
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#FF9900", textAlign: "center", }}>
        CSV to  PDF Converter
      </h1>

      {/* File Upload Section */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label htmlFor="file-upload" style={styles.uploadLabel}>
          <input
            type="file"
            id="file-upload"
            accept=".csv"
            onChange={handleFileUpload}
            style={styles.uploadInput}
          />
          <div style={styles.uploadButton}>
            <FaCloudUploadAlt size={30} color="#FF9900" />
            <p style={styles.uploadText}>
              {fileUploaded ? `File: ${fileName}` : "Choose CSV File"}
            </p>
          </div>
        </label>
        <p>
          <small >
            Upload your CSV file first to populate the table data in the PDF.
          </small>
        </p>
      </div>

      {/* Download PDF Section */}
      {fileUploaded && (
        <PDFDownloadLink
          document={<MyDocument csvData={csvData} />}
          fileName="statement.pdf"
        >

       
              <button style={styles.downloadButton}>Download PDF</button>
    
        </PDFDownloadLink>
      )}
    </div>
  );
};

// Define custom styles for buttons and upload area
const styles = {
  uploadLabel: {
    display: "inline-block",
    cursor: "pointer",
  },
  uploadInput: {
    display: "none",
  },
  uploadButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px dashed #FF9900",
    borderRadius: "10px",
    padding: "30px",
    maxWidth: "300px",
    margin: "0 auto",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
  },
  uploadText: {
    marginTop: "10px",
    marginLeft: "10px", // Added margin for space between icon and text
    color: "#FF9900",
    fontSize: "16px",
    wordWrap: "break-word", // Allow long file names to wrap
    maxWidth: "250px", // Limit text width
  },
  downloadButton: {
    padding: "10px 20px",
    backgroundColor: "#FF9900",
    color: "#FFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
    width: "200px",
    fontSize: "16px",
    display: "ruby-text", // Ensures the button is centered
    marginLeft: "auto", // Center the button horizontally
    marginRight: "auto", // Center the button horizontally
    textDecoration: "none", // Remove any underline from the download button text
  },
};

export default App;
