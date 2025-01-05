import React from "react";
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 0,
  },
  sidebar: {
    width: 35,
    backgroundColor: '#FFFFFF',
    // Ensures barcode occupies only a narrow column on the left
  },
  barcodeContainer: {
    // Simplify to fill the sidebar
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  barcodeWrapper: {
    // Make wrapper a positioned, fixed-height container
    position: 'relative',
    width: 80,      // narrower width
    height: 300,    // taller wrapper
    margin: '0 auto',
    transform: 'rotate(90deg)',     // rotate for vertical lines
    transformOrigin: 'top left',
  },
  barcodeLine: {
    // Stretch lines vertically across the wrapper
    position: 'absolute',
    backgroundColor: '#000000',
    height: 1,    // thin lines
    // width will vary per line
  },
  barcodeText: {
    // Place label under rotated lines
    position: 'absolute',
    top: 310,    // push below wrapper
    left: -10,
    transform: 'rotate(-90deg)',
    transformOrigin: 'top left',
    fontSize: 6,
    color: '#000',
  },
  mainContent: {
    flex: 1,
    padding: '30px 40px',
  },
  mainContainer: {
    flexDirection: "row",
    width: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 25,
  },
  headerContent: {
    width: "30%",
    textAlign: "left",
  },
  statementTitle: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold", // Use Helvetica-Bold for bold text
    color: "#FFC300", // Orange color
    marginBottom: 10,
  },
  sectionRow2: {
    flexDirection: "row",
    gap: 20,
  },
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 5,
  },
  sectioncoll: {
    flexDirection: "column",
  },
  sectionLabel: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold", // Use Helvetica-Bold for bold text
    color: "#000",
    textAlign: "left",
  },
  sectionValue: {
    fontSize: 8,
    fontFamily: "Helvetica", // Regular font for value
    color: "#000",
    textAlign: "right",
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: "#FFC300", // Orange underline
    marginVertical: 5,
  },
  closingBalance: {
    fontSize: 8,
    color: "#000",
    textAlign: "right",
  },
  enquiries: {
    fontSize: 8,
    fontFamily: "Helvetica", // Regular font
    color: "#000",
    textAlign: "right",
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold", // Use Helvetica-Bold for bold text
    color: "#000",
    borderBottomWidth: 1,
    borderBottomColor: "#FFC300",
    marginTop: 20,
    paddingBottom: 5,
  },
  sectionText2: {
    fontSize: 9,
    fontFamily: "Helvetica", // Regular font
    color: "#000",
    width: 450,
    marginTop: 11,
  },
  sectionText: {
    fontSize: 9,
    fontFamily: "Helvetica", // Regular font
    color: "#000",
    marginTop: 10,
    lineHeight: 1.4,
  },
  table: {
    marginTop: 20,
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#FFC300",
    borderRadius: 4,
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#FFC300",
    minHeight: 30,
    alignItems: 'center',
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#FFC300",
    minHeight: 35,
    alignItems: 'center',
  },
  tableCell: {
    padding: '8px 5px',
    fontSize: 9,
    textAlign: "left",
  },
  tableCellDate: {
    width: "15%",
    borderRightWidth: 1,
    borderColor: "#FFC300",
  },
  tableCellTransaction: {
    width: "45%",
    borderRightWidth: 1,
    borderColor: "#FFC300",
  },
  tableCellAmount: {
    width: "15%",
    borderRightWidth: 1,
    borderColor: "#FFC300",
    textAlign: "right",
  },
  tableCellBalance: {
    width: "25%",
    textAlign: "right",
  },
  footer: {
    marginTop: 20,
    fontSize: 8,
    fontFamily: "Helvetica", // Regular font
    color: "#000",
    textAlign: "center",
  },
});

// Define barcode lines generator here:
const generateBarcodeLines = () => {
  const lines = [];
  let position = 2;
  for (let i = 0; i < 30; i++) {
    const width = i % 3 === 0 ? 1.2 : 0.7;
    lines.push({ width, left: position });
    position += width + 0.6;
  }
  return lines;
};

const MyDocument = ({ csvData }) => (
  <Document>
    {/* Split data into chunks of 20 items per page */}
    {chunk(csvData, 20).map((pageData, pageIndex) => (
      <Page key={pageIndex} style={styles.page}>
        <View style={styles.sidebar}>
          <View style={styles.barcodeContainer}>
            <View style={styles.barcodeWrapper}>
              {generateBarcodeLines().map((line, lineIndex) => (
                <View
                  key={lineIndex}
                  style={[
                    styles.barcodeLine,
                    {
                      width: line.width * 2,  // slightly wider
                      top: `${line.left * 2}%`, // reposition lines vertically
                    },
                  ]}
                />
              ))}
            </View>
            <Text style={styles.barcodeText}>
              *2123456789* 053 01234567
            </Text>
          </View>
        </View>
        <View style={styles.mainContent}>
          {pageIndex === 0 && (
            // Show header only on first page
            <View style={styles.headerContainer}>
              <View style={styles.headerContent}>
                {/* Title */}
                <Text style={styles.statementTitle}>Your Statement</Text>

                {/* Statement 29 and Page info */}
                <View style={styles.sectionRow}>
                  <Text style={styles.sectionLabel}>Statement 29</Text>
                  {/* Dynamic Page Number */}
                  <Text style={styles.sectionValue}>
                    (Page <Text render={({ pageNumber }) => pageNumber} /> of <Text render={({ totalPages }) => totalPages} />)
                  </Text>
                </View>
                <View style={styles.underline} />

                {/* Account Number */}
                <View style={styles.sectionRow}>
                  <Text style={styles.sectionLabel}>Account Number</Text>
                  <Text style={styles.sectionValue}>1234567890</Text>
                </View>
                <View style={styles.underline} />

                {/* Statement Period */}
                <View style={styles.sectionRow}>
                  <View style={styles.sectioncoll}>
                    <Text style={styles.sectionLabel}>Statement</Text>
                    <Text style={styles.sectionLabel}>Period</Text>
                  </View>
                  <Text style={styles.sectionValue}>01 Jul 2024 - 31 Sep 2024</Text>
                </View>
                <View style={styles.underline} />

                {/* Closing Balance */}
                <View style={styles.sectionRow}>
                  <Text style={styles.sectionLabel}>Closing Balance</Text>
                  <Text style={styles.closingBalance}>$101,278.47 CR</Text>
                </View>
                <View style={styles.underline} />

                {/* Enquiries */}
                <View style={styles.sectionRow}>
                  <Text style={styles.sectionLabel}>Enquiries</Text>
                  <Text style={styles.sectionValue}>13 1998</Text>
                </View>
                <Text style={styles.enquiries}>(24 hours a day, 7 days a week)</Text>
                <View style={styles.underline} />
              </View>
            </View>
          )}
          
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableCell, styles.tableCellDate]}>Date</Text>
              <Text style={[styles.tableCell, styles.tableCellTransaction]}>Transaction</Text>
              <Text style={[styles.tableCell, styles.tableCellAmount]}>Debit</Text>
              <Text style={[styles.tableCell, styles.tableCellAmount]}>Credit</Text>
              <Text style={[styles.tableCell, styles.tableCellBalance]}>Balance</Text>
            </View>
            {pageData.map((row, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.tableCellDate]}>{row.Date || "-"}</Text>
                <Text style={[styles.tableCell, styles.tableCellTransaction]}>{row.Transaction || "-"}</Text>
                <Text style={[styles.tableCell, styles.tableCellAmount]}>{row.Debit || "-"}</Text>
                <Text style={[styles.tableCell, styles.tableCellAmount]}>{row.Credit || "-"}</Text>
                <Text style={[styles.tableCell, styles.tableCellBalance]}>{row.Balance ? `$${row.Balance}` : "-"}</Text>
              </View>
            ))}
          </View>
          
          {/* Footer on every page */}
          <Text style={styles.footer}>
            Page {pageIndex + 1} of {Math.ceil(csvData.length / 20)}
          </Text>
        </View>
      </Page>
    ))}
  </Document>
);

// Helper function to split array into chunks
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

export default MyDocument;
