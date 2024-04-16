// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachTransactionItem, eachTransaction, onDeleteHistory} = props
  const {id, title, amount, type} = eachTransactionItem
  //   const {displayText} = optionsList

  const filteredData = eachTransaction.find(
    eachItem => eachItem.optionId === type,
  )

  const {displayText} = filteredData

  const onHistoryDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <ul className="transaction-history-list-container">
      <li className="table-row">
        <p className="table-row-cell name-column">{title}</p>
        <p className="table-row-cell-2 name-column">Rs {amount}</p>
        <div type="button" className="type-container type-name">
          <p className="table-row-cell-2 type-value">{displayText}</p>
          <button
            type="button"
            className="delete-icon-container"
            onClick={onHistoryDelete}
            data-testid="delete"
          >
            <img
              className="delete-icon"
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            />
          </button>
        </div>
      </li>
    </ul>
  )
}

export default TransactionItem
