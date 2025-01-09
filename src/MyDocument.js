import React, { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Papa from "papaparse";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

const MyDocument = () => {
  const [csvData, setCsvData] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  // Function to handle CSV upload
  const handleCsvUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          console.log(result); // Logs parsed CSV data
          setCsvData(result.data); // Set the CSV data into state
        },
        header: true, // Treat the first row as headers
      });
    }
  };

  // Handle file drop
  const handleFileDrop = (files) => {
    if (files.length > 0) {
      const file = files[0];
      handleCsvUpload({ target: { files: [file] } });
    }
  };

  // Function to generate PDF with page numbers
  const generatePDF = async () => {
    try {
      const container = document.getElementById("pdf-container");

      if (container) {
        const pdf = new jsPDF("portrait", "mm", "a4");
        const pdfWidth = 210; // A4 width in mm

        const children = Array.from(container.children);

        for (let i = 0; i < children.length; i++) {
          const element = children[i];

          // Render each child as a canvas
          const canvas = await html2canvas(element, {
            scale: 3, // Higher scale for better resolution
            useCORS: true,
            backgroundColor: null,
          });

          const imgData = canvas.toDataURL("image/png", 1.0); // Full quality
          const aspectRatio = canvas.width / canvas.height;
          const imageHeight = pdfWidth / aspectRatio;

          // Add the image to the PDF
          if (i > 0) pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imageHeight);
        }

        // Save the generated PDF
        pdf.save("myfile.pdf");
      } else {
        console.error("PDF container not found!");
      }
    } catch (error) {
      console.error("An error occurred while generating the PDF:", error);
    }
  };

  // Split data for specific pages
  const getPageData = () => {
    const page1Data = csvData.slice(0, 10); // First 10 rows
    const page2Data = csvData.slice(10, 32); // Rows 11 to 32
    const page3Data = csvData.slice(32); // Remaining rows starting from index 32

    return { page1Data, page2Data, page3Data };
  };

  const { page1Data, page2Data, page3Data } = getPageData();

  // Calculate total number of pages based on rows per page (for Page 3)
  const rowsPerPage = 25;
  const totalPagestot = Math.ceil(csvData.length / rowsPerPage);

  // Split the page3Data into chunks of rowsPerPage size
  const page3Chunks = [];
  for (let i = 0; i < page3Data.length; i += rowsPerPage) {
    page3Chunks.push(page3Data.slice(i, i + rowsPerPage));
  }
console.log(csvData)
  return (
    <div style={styles.container}>
      {/* Drag-and-Drop Zone */}
      <div
        style={{
          ...styles.dragAndDropZone,
          ...(isDragging ? styles.dragOver : {}),
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          handleFileDrop(e.dataTransfer.files);
        }}
      >
        <label htmlFor="file-upload" style={styles.uploadLabel}>
          <p style={styles.uploadText}>
            {isDragging ? "Drop your file here" : "Drag and drop CSV here or click to upload"}
          </p>
          <input
            id="file-upload"
            type="file"
            accept=".csv"
            onChange={handleCsvUpload}
            style={styles.fileInput}
          />
        </label>
      </div>

      {/* Download PDF Button */}
      <button onClick={generatePDF} disabled={csvData.length==0}  style={styles.downloadButton}>
        Download PDF
      </button>

      {/* Container for PDF content */}
      <div id="pdf-container" style={styles.pdfContainer}>
        {csvData.length > 0 && (
          <>
            {/* Page 1 */}
            {page1Data.length > 0 && (
              <Page1 csvDataa={page1Data} total={totalPagestot} />
            )}

            {/* Page 2 */}
            {page2Data.length > 0 && (
              <Page2 csvDataa={page2Data} total={totalPagestot} />
            )}

            {/* Page 3 */}
            {page3Chunks.length > 0 &&
              page3Chunks.map((chunk, index) => (
                <Page3
                  key={`page3-${index}`}
                  csvDataa={chunk}
                  currentPage={index + 3}
                  totalPages={totalPagestot}
                />
              ))}
          </>
        )}
      </div>
    </div>
  );
};

// Styles for the component
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "800px",
    margin: "20px auto",
  },
  dragAndDropZone: {
    textAlign: "center",
    padding: "30px",
    border: "2px dashed #007bff",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    transition: "background-color 0.3s ease-in-out",
    cursor: "pointer",
    marginBottom: "20px",
  },
  dragOver: {
    backgroundColor: "#e6f7ff", // Highlighted background color when dragging
  },
  uploadLabel: {
    display: "inline-block",
    cursor: "pointer",
  },
  uploadText: {
    color: "#007bff",
    fontSize: "16px",
    margin: "0",
  },
  fileInput: {
    display: "none", // Hidden file input
  },
  downloadButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    textAlign: "center",
  },
  pdfContainer: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default MyDocument;
