import React, { useState } from 'react';
import './indexc.css';
export function reformatDate(inputDate) {
  const [day, month, year] = inputDate.split('/');
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const newDate = `01 ${monthNames[parseInt(month, 10) - 1]} ${year}`;
  return newDate;
}
const Page1 = ({csvDataa,total}) => {

  
  return (
    <>
      {/* Upload CSV Button */}
      <div className="main-container" >
        <div className="frame-div" id="statement-container">
          <span className="your-statement-span">Your Statement</span>
          <span className="span-29">29</span>
          <span className="page-span">(Page 1 of{total})</span>
          <span className="statement-span"style={{fontWeight:'600'}}>Statement</span>
          <div className="flex-row-ea-div">
            <div className="group-div"></div>
            <span className="account-number-span">Account Number</span>
            <span className="span-053">053</span>
            <div className="group-div-1">
              <div className="mask-group-div"></div>
            </div>
            <span className="statement-span-2">Statement</span>
            <span className="span-jul">01 Jul </span>
            <span className="span-sep">31 Sep </span>
            <span className="period-span">Period</span>
            <span className="span-2024">2024 - </span>
            <span className="span-2024-3">2024</span>
            <span className="span-10127847">101,278.47 </span>
            <span className="span-dollar">$</span>
            <span className="cr">CR</span>
            <span className="closing-balance">Closing Balance</span>
            <span className="empty">13 1998</span>
            <span className="enquiries">Enquiries</span>
            <span className="business-transaction-account">
              (24 hours a day, 7 days a week)
            </span>
            <span className="attached-overdraft-limit">
              Business Transaction Account
            </span>
            <span className="property-insurance">
              If this account has an attached overdraft limit or facility which
              is secured over your primary place of residence
            </span>
            <span className="terms-and-conditions">
              or over a residential Investment property you should ensure that
              the property is insured in accordance with the
            </span>
            <span className="insurance-cover">
              terms and conditions of the mortgage. If you have any queries about
              your insurance cover you should contact
            </span>
            <span className="property-insurance-info">
              your insurer. Information on property insurance can also be found
              on www.moneysmart.gov.au. Note, if this
            </span>
            <span className="statement-preference">
              account has an attached overdraft limit or facility and we send you
              a statement every 4 or 6 months, we will
            </span>
            <span className="banking-code">
              update your statement preference to every 3 months as part of
              changes made to the new Banking Code of
            </span>
            <span className="banking-code-update">Practice from 1 July 2019.</span>
            <span className="name">Name:</span>
            <span className="note">Note:</span>
            <span className="statement-check">
              Have you checked your statement today? It's easy to find out more
              information about each of your
            </span>
            <span className="online-banking">
              transactions by logging on to the CommBank App or NetBank. Should
              you have any questions on
            </span>
            <span className="fees-errors">
              fees or see an error please contact us on the details above. Cheque
              proceeds are available when
            </span>
            <span className="cheque-proceeds">cleared.</span>
            <span className="transaction-list">
              The date of transactions shown here may be different on your other
              transaction lists (for example, the transaction list that
            </span>
            <span className="transaction-list-4">appears on the CommBank app).</span>
            <span className="transaction">Transaction</span>
            <span className="debit">Debit</span>
            <span className="credit">Credit</span>
            <span className="balance">Balance</span>
            <span className="date">Date</span> and the table have 5 culun     <span className="transaction">Transaction</span>
            <span className="debit">Debit</span>
            <span className="credit">Credit</span>
            <span className="balance">Balance</span>
            <span className="date">Date</span>.
            {/* Table for CSV Data */}
            <div
  style={{
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '448.18px',  // Position from the top
    left: '37.5px', // Position from the left
    zIndex: 56,       // Ensure it's above other elements
    width: 'auto',    // Adjust this depending on your container size
    color: '#000000', // Color for text (can be adjusted)
    fontFamily: 'Inter, var(--default-font-family)',
    fontSize: '10px',
    fontWeight: 700,
    lineHeight: '10px',
    textAlign: 'left',
    whiteSpace: 'nowrap', // Prevents wrapping of text in header
  }}
>
{csvDataa?.map((row, index) => (
  <div
    key={index}
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '4px',
      width: '101%',
    }}
  >
    {/* Date column without border */}
    <span
      style={{
        textAlign: 'center',
        flex: 0.8,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        marginBottom: '8px', // Add spacing to align with other elements
      }}
      className="txttable"
    >
      {reformatDate(row.Date)}
    </span>

    {/* Description column with text wrapping */}
    <span
      style={{
        flex: 2, // Allow more space for the description column
        wordWrap: 'break-word', // Allow wrapping of long text
        whiteSpace: 'normal', // Ensure it wraps normally within the column
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        borderBottom: '1.5px solid #ffc13d', // Border for this element
      }}
      className="txttable"
    >
      {row.Description}
    </span>

    {/* Debit column */}
    <span
      className="txttable"
      style={{
        textAlign: 'right',
        fontWeight: 'bold',
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        borderBottom: '1.5px solid #ffc13d', // Border for this element
      }}
    >
      {row.Debit ? row.Debit : '---'}
    </span>

    {/* Credit column */}
    <span
      style={{
        textAlign: 'right',
        fontWeight: 'bold',
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        borderBottom: '1.5px solid #ffc13d', // Border for this element
      }}
      className="txttable"
    >
      {row.Credit ? row.Credit : '---'}
    </span>

    {/* Balance column */}
    <span
      className="txttable"
      style={{
        textAlign: 'right',
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        borderBottom: '1.5px solid #ffc13d', // Border for this element
      }}
    >
      ${row.Balance} CR
    </span>
  </div>
))}

         </div>

          </div>
          <div className="group"></div>
   
        </div>
      </div>
    </>
  );
};

export default Page1;
