import React from "react";
import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";

// Create styles for the document
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    backgroundColor: "#FFF",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    width: "100%",
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
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#FFC300",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#FFC300",
    color: "#222",
    fontFamily: "Helvetica-Bold",
  },
  tableCell: {
    padding: 5,
    fontSize: 9,
    width: "20%",
    textAlign: "center",
  },
  footer: {
    marginTop: 20,
    fontSize: 8,
    fontFamily: "Helvetica", // Regular font
    color: "#000",
    textAlign: "center",
  },
});

const MyDocument = ({ csvData }) => (
  <Document>
    <Page style={styles.page}>
      {/* Header Section */}
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

      {/* Business Transaction Section */}
      <Text style={styles.sectionTitle}>Business Transaction Account</Text>
      <Text style={styles.sectionText}>
        If this account has an attached overdraft limit or facility which is secured over your primary place of residence
        or over a residential Investment property you should ensure that the property is insured in accordance with the
        terms and conditions of the mortgage. If you have any queries about your insurance cover you should contact
        your insurer. Information on property insurance can also be found on www.moneysmart.gov.au. Note, if this
        account has an attached overdraft limit or facility and we send you a statement every 4 or 6 months, we will
        update your statement preference to every 3 months as part of changes made to the new Banking Code of
        Practice from 1 July 2019.
      </Text>
      <Text style={styles.sectionText}>Name:</Text>
      <View style={styles.sectionRow2}>
        <Text style={styles.sectionText}> Note:</Text>
        <Text style={styles.sectionText2}>
          Have you checked your statement today? It's easy to find out more information about each of your
          transactions by logging on to the CommBank App or NetBank. Should you have any questions on
          fees or see an error please contact us on the details above. Cheque proceeds are available when
          cleared.
        </Text>
      </View>
      <View style={styles.underline} />

      <Text style={styles.sectionText}>
        The date of transactions shown here may be different on your other transaction lists (for example, the transaction list that
        appears on the CommBank app).
      </Text>

      {/* Table Section */}
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableCell}>Date</Text>
          <Text style={styles.tableCell}>Transaction</Text>
          <Text style={styles.tableCell}>Debit</Text>
          <Text style={styles.tableCell}>Credit</Text>
          <Text style={styles.tableCell}>Balance</Text>
        </View>
        {csvData.map((row, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{row.Date || "-"}</Text>
            <Text style={styles.tableCell}>{row.Transaction || "-"}</Text>
            <Text style={styles.tableCell}>{row.Debit || "-"}</Text>
            <Text style={styles.tableCell}>{row.Credit || "-"}</Text>
            <Text style={styles.tableCell}>{row.Balance ? `$${row.Balance}` : "-"}</Text>
          </View>
        ))}
      </View>

      {/* Footer Section */}
      <Text style={styles.footer}>
        The date of transactions shown here may be different on your other transaction lists (for example, the transaction list that appears on the CommBank app).
      </Text>
    </Page>
  </Document>
);

export default MyDocument;
