import React from "react";
import styles from "./index2.module.css";
import { reformatDate } from "./Page1";

export default function Page3({ csvDataa, currentPage, totalPages }) {

  return (
    <div className={styles.mainContainer}>
      <div className={styles.frame}>
        {/* Display current page number and total pages */}
        <span className={styles.pageNumber}>
          (Page {currentPage} of {totalPages})
        </span>
        <span className={styles.statement}>Statement 28</span>
        <div className={styles.flexRowAf}></div>
        <div className={styles.accountNumber} />
        <span className={styles.accountNumber2}> Account Number</span>
        <div className={styles.group4} />
        <div className={styles.rectangle}>
          <div className={styles.flexRowEd} />
        </div>
        <div className={styles.group5}>
          <div className={styles.transaction} />
          <span className={styles.debit}>Transaction</span>
          <span className={styles.credit}>Debit</span>
          <span className={styles.balance}>Credit</span>
          <span className={styles.date}>Balance</span>
          <span className={styles.transactionDetails}>Date</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            width: '82.2%',
            top: "135.18px",
            left: "53px",
            zIndex: 56, // Ensure it's above other elements
            color: "#000000", // Color for text (can be adjusted)
            fontFamily: "Inter, var(--default-font-family)",
            fontSize: "10px",
            fontWeight: 700,
            lineHeight: "10px",
            textAlign: "left",
            whiteSpace: "nowrap", // Prevents wrapping of text in header
          }}
        >
        {Array.isArray(csvDataa) &&
  csvDataa.map((row, index) => {
    // Skip the row if 'Date' is empty
    if (!row.Date) return null;

    return (
      <div
        key={index}
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "4px",
          width: "99.5%",
        }}
      >
        {/* Date column without border */}
        <span
          style={{
            textAlign: "center",
            flex: 0.8,
            overflow: "hidden",
            textOverflow: "ellipsis",
            marginBottom: "8px", // Add spacing to align with other elements
          }}
          className="txttable"
        >
          {reformatDate(row.Date)}
        </span>

        {/* Description column with text wrapping */}
        <span
          style={{
            flex: 2, // Allow more space for the description column
            wordWrap: "break-word", // Allow wrapping of long text
            whiteSpace: "normal", // Ensure it wraps normally within the column
            overflow: "hidden",
            textOverflow: "ellipsis",
            borderBottom: "1.5px solid #ffc13d", // Border for this element
          }}
          className="txttable"
        >
          {row.Description}
        </span>

        {/* Debit column */}
        <span
          className="txttable"
          style={{
            textAlign: "right",
            fontWeight: "bold",
            flex: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            borderBottom: "1.5px solid #ffc13d", // Border for this element
          }}
        >
          {row.Debit ? row.Debit : "---"}
        </span>

        {/* Credit column */}
        <span
          style={{
            textAlign: "right",
            fontWeight: "bold",
            flex: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            borderBottom: "1.5px solid #ffc13d", // Border for this element
          }}
          className="txttable"
        >
          {row.Credit ? row.Credit : "---"}
        </span>

        {/* Balance column */}
        <span
          className="txttable"
          style={{
            textAlign: "right",
            flex: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            borderBottom: "1.5px solid #ffc13d", // Border for this element
          }}
        >
          ${row.Balance} CR
        </span>
      </div>
    );
  })}

        </div>
      </div>
    </div>
  );
}

