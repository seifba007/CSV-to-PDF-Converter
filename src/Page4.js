import React from 'react';
import styles from './index3.module.css';  // Import CSS module
import { reformatDate } from './Page1';

const Page4 = ({csvDataa,total}) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.frameDiv}>
        <div className={styles.clipPathGroupDiv}>
          <div className={styles.groupDiv}>
            <div className={styles.groupDiv1}>
              <div className={styles.vectorDiv} />
            </div>
          </div>
        </div>
        <div className={styles.clipPathGroupDiv2} />
        <span className={styles.pageSpan}>(Page {total} of {total})</span>
        <span className={styles.statementSpan}>Statement 28</span>
        <div className={styles.groupDiv3}>
          <div className={styles.vectorDiv4} />
          <div className={styles.vectorDiv5} />
          <div className={styles.vectorDiv6} />
          <div className={styles.vectorDiv7} />
          <div className={styles.vectorDiv8} />
          <div className={styles.vectorDiv9} />
          <div className={styles.vectorDivA} />
          <div className={styles.vectorDivB} />
          <div className={styles.vectorDivC} />
          <div className={styles.vectorDivD} />
          <div className={styles.vectorDivE} />
          <div className={styles.vectorDivF} />
          <div className={styles.vectorDiv10} />
          <div className={styles.vectorDiv11} />
          <div className={styles.vectorDiv12} />
          <div className={styles.vectorDiv13} />
          <div className={styles.vectorDiv14} />
          <div className={styles.vectorDiv15} />
          <div className={styles.vectorDiv16} />
          <div className={styles.vectorDiv17} />
          <div className={styles.vectorDiv18} />
          <div className={styles.vectorDiv19} />
          <div className={styles.vectorDiv1a} />
          <div className={styles.vectorDiv1b} />
          <div className={styles.vectorDiv1c} />
          <div className={styles.vectorDiv1d} />
          <div className={styles.vectorDiv1e} />
        </div>
        <span className={styles.accountNumberSpan}>Account Number</span>
        <div className={styles.clipPathGroupDiv1f} />
        <div className={styles.clipPathGroupDiv20}>
          <div className={styles.groupDiv21}>
            <div className={styles.groupDiv22}>
              <div className={styles.vectorDiv23} />
            </div>
          </div>
        </div>
        <button className={styles.buttonDiv}>
          <div className={styles.groupDiv24}>
            <div className={styles.groupDiv25}>
              <div className={styles.vectorDiv26} />
            </div>
          </div>
        </button>
        <span className={styles.dateTransactionSpan}>Date Transaction</span>
        <span className={styles.balanceSpan}>Balance</span>
        <span className={styles.creditSpan}>Credit</span>
        <span className={styles.debitSpan}>Debit</span>
        <span className={styles.transactionType01}>Transaction Summary during 1st March 2024 to 31st May 2024
        </span>

  <div
  style={{
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '135.18px',
    left: '53px',
    zIndex: 56,       // Ensure it's above other elements
    width: '77%',   // Adjust this depending on your container size
    color: '#000000', // Color for text (can be adjusted)
    fontFamily: 'Inter, var(--default-font-family)',
    fontSize: '10px',
    fontWeight: 700,
    lineHeight: '10px',
    textAlign: 'left',
    whiteSpace: 'nowrap', // Prevents wrapping of text in header
  }}
>
{csvDataa?.map((row, index) => {
  // Check if Date or Description are missing, and if so, skip rendering the row
  if (!row.Date || !row.Description) {
    return null; // Skip rendering this row if either Date or Description is missing
  }

  return (
    <div
      key={index}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '4px',
        width: '106%',
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
  );
})}

         </div>

        <div className={styles.clipPathGroup85}>
          <div className={styles.group86}>
            <div className={styles.group87}>
              <div className={styles.vector88} />
            </div>
          </div>
        </div>
        <button className={styles.transactionSummary} />
        <span className={styles.may}>01 May</span>
        <span className={styles.mar}>01 Mar</span>
        <span className={styles.apr}>01 Apr</span>
        <span className={styles.unit}>Unit</span>
        <span className={styles.fee}>Fee</span>
        <span className={styles.freeChargeable}>Free Chargeable</span>
        <span className={styles.transactionType}>Transaction Type</span>
        <span className={styles.to}>to</span>
        <span className={styles.to89}>to</span>
        <span className={styles.to8a}>to</span>
        <span className={styles.charged}>Charged</span>
        <span className={styles.price}>Price</span>
        <span className={styles.may8b}>31 May</span>
        <span className={styles.mar8c}>31 Mar</span>
        <span className={styles.apr8d}>30 Apr</span>
        <div className={styles.clipPathGroup8e}>
          <div className={styles.group8f}>
            <div className={styles.group90}>
              <div className={styles.vector91} />
            </div>
          </div>
        </div>
        <span className={styles.staffAssistedWithdrawals}>
          Staff assisted withdrawals
        </span>
        <span className={styles.dollar}>$5.00</span>
        <span className={styles.zero}>0</span>
        <span className={styles.zero92}>0</span>
        <span className={styles.zero93}>0</span>
        <span className={styles.zero94}>0</span>
        <span className={styles.zero95}>0</span>
        <span className={styles.dollar96}>$0.00</span>
        <div className={styles.clipPathGroup97}>
          <div className={styles.group98}>
            <div className={styles.group99}>
              <div className={styles.vector9a} />
            </div>
          </div>
        </div>
        <span className={styles.chequesWritten}>Cheques written</span>
        <span className={styles.dollar9b}>$5.00</span>
        <span className={styles.zero9c}>0</span>
        <span className={styles.zero9d}>0</span>
        <span className={styles.zero9e}>0</span>
        <span className={styles.zero9f}>0</span>
        <span className={styles.zeroA0}>0</span>
        <span className={styles.dollarA1}>$0.00</span>
        <div className={styles.clipPathGroupA2}>
          <div className={styles.groupA3}>
            <div className={styles.groupA4}>
              <div className={styles.vectorA5} />
            </div>
          </div>
        </div>
        <span className={styles.chequeDeposit}>Cheque deposit</span>
        <span className={styles.dollarA6}>$5.00</span>
        <span className={styles.zeroA7}>0</span>
        <span className={styles.one}>1</span>
        <span className={styles.zeroA8}>0</span>
        <span className={styles.zeroA9}>0</span>
        <span className={styles.oneAa}>1</span>
        <span className={styles.dollarAb}>$0.00</span>
        <div className={styles.clipPathGroupAc}>
          <div className={styles.groupAd}>
            <div className={styles.groupAe}>
              <div className={styles.vectorAf} />
            </div>
          </div>
        </div>
        <span className={styles.overTheCounterDeposit}>
          Over the counter deposit
        </span>
        <span className={styles.dollarB0}>$5.00</span>
        <span className={styles.zeroB1}>0</span>
        <span className={styles.two}>2</span>
        <span className={styles.span}>1</span>
        <span className={styles.spanB2}>0</span>
        <span className={styles.spanB3}>1</span>
        <span className={styles.spanB4}>$0.00</span>
        <div className={styles.div}>
          <div className={styles.divB5}>
            <div className={styles.divB6}>
              <div className={styles.divB7} />
            </div>
          </div>
        </div>
        <span className={styles.spanB8}>Quick deposits</span>
        <span className={styles.spanB9}>$10.00</span>
        <span className={styles.spanBa}>0</span>
        <span className={styles.spanBb}>0</span>
        <span className={styles.spanBc}>0</span>
        <span className={styles.spanBd}>0</span>
        <span className={styles.spanBe}>0</span>
        <span className={styles.spanBf}>$0.00</span>
        <div className={styles.divC0}>
          <div className={styles.divC1}>
            <div className={styles.divC2}>
              <div className={styles.divC3} />
            </div>
          </div>
        </div>
        <span className={styles.spanC4}>Cheq deposit in quick deposit box</span>
        <span className={styles.spanC5}>$5.00</span>
        <span className={styles.spanC6}>0</span>
        <span className={styles.spanC7}>0</span>
        <span className={styles.spanC8}>0</span>
        <span className={styles.spanC9}>0</span>
        <span className={styles.spanCa}>0</span>
        <span className={styles.spanCb}>$0.00</span>
        <div className={styles.divCc}>
          <div className={styles.divCd}>
            <div className={styles.divCe}>
              <div className={styles.divCf} />
            </div>
          </div>
        </div>
        <span className={styles.spanD0}>Total</span>
        <span className={styles.spanD1}>0</span>
        <span className={styles.spanD2}>3</span>
        <span className={styles.spanD3}>1</span>
        <span className={styles.spanD4}>0</span>
        <span className={styles.spanD5}>2</span>
        <span className={styles.spanD6}>$0.00</span>
        <div className={styles.divD7}>
          <div className={styles.divD8}>
            <div className={styles.divD9}>
              <div className={styles.divDa} />
            </div>
          </div>
        </div>
        <span className={styles.spanDb}>Account Fee</span>
        <span className={styles.spanDc}>$30.00</span>
        <span className={styles.spanDd}>$10.00</span>
        <div className={styles.divDe}>
          <div className={styles.divDf}>
            <div className={styles.divE0}>
              <div className={styles.divE1} />
            </div>
          </div>
        </div>
        <span className={styles.spanE2}>Paper Statement Fee</span>
        <span className={styles.spanE3}>$0.00</span>
        <span className={styles.spanE4}>$2.50</span>
  

      </div>
    </div>
  );
}

export default Page4;
