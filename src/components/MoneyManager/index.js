import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// const moneyDetailsList = [
//   {
//     name: 'Your Balance',
//     className: 'your-balance-container',
//     imgUrl:
//       'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
//     altValue: 'balance',
//     amount: 0,
//   },
//   {
//     name: 'Your Income',
//     className: 'your-income-container',
//     imgUrl:
//       'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
//     altValue: 'income',
//     amount: 0,
//   },
//   {
//     name: 'Your Expenses',
//     className: 'your-expenses-container',
//     imgUrl:
//       'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
//     altValue: 'expenses',
//     amount: 0,
//   },
// ]
// Write your code here

class MoneyManager extends Component {
  state = {
    transactionHistoryList: [],
    titleInput: '',
    amountInput: '',
    selectedType: 'INCOME',
  }

  titleInputChanged = event => {
    this.setState({titleInput: event.target.value})
  }

  amountInputChanged = event => {
    this.setState({amountInput: event.target.value})
  }

  selectChanged = event => {
    this.setState({selectedType: event.target.value})
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {titleInput, amountInput, selectedType} = this.state

    const newTransactionItem = {
      id: uuidv4(),
      title: titleInput,
      amount: amountInput,
      type: selectedType,
    }

    this.setState(prevState => ({
      transactionHistoryList: [
        ...prevState.transactionHistoryList,
        newTransactionItem,
      ],
      titleInput: '',
      amountInput: '',
    }))
  }

  deleteHistory = uniqueId => {
    this.setState(prevState => ({
      transactionHistoryList: prevState.transactionHistoryList.filter(
        eachItem => eachItem.id !== uniqueId,
      ),
    }))
  }

  render() {
    const {titleInput, amountInput, transactionHistoryList} = this.state

    // const filteredData = transactionTypeOptions[filteredOptionIndex]

    return (
      <div className="overall-container">
        <div className="app-container">
          <div className="top-section-container">
            <h1 className="account-holder-name">Hi, Richard</h1>
            <p className="greeting">
              Welcome back to your{' '}
              <span className="app-name">Money Manager</span>
            </p>
          </div>

          <MoneyDetails eachTransactionList={transactionHistoryList} />

          <div className="transaction-container">
            <div className="app-form-container">
              <form className="form-container" onSubmit={this.onFormSubmit}>
                <h1 className="form-heading">Add Transaction</h1>
                <label className="label-text" htmlFor="textId">
                  TITLE
                </label>
                <input
                  className="input-text"
                  placeholder="TITLE"
                  id="textId"
                  onChange={this.titleInputChanged}
                  value={titleInput}
                />
                <label className="label-text" htmlFor="amountId">
                  AMOUNT
                </label>
                <input
                  className="input-text"
                  placeholder="AMOUNT"
                  id="amountId"
                  onChange={this.amountInputChanged}
                  value={amountInput}
                />
                <p className="para-text label-text">TYPE</p>
                <select
                  className="input-text select-text"
                  onChange={this.selectChanged}
                >
                  {transactionTypeOptions.map(eachTransaction => (
                    <option
                      key={eachTransaction.optionId}
                      value={eachTransaction.optionId}
                      className="option-text"
                    >
                      {eachTransaction.displayText}
                    </option>
                  ))}
                </select>
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
            </div>

            <div className="list-transaction-container">
              <div className="transaction-list-container">
                <h1 className="transaction-history">History</h1>
                <div className="table-header">
                  <p className="table-header-cell name-column">Title</p>
                  <p className="table-header-cell-2 name-column">Amount</p>
                  <p className="table-header-cell-2 name-column">Type</p>
                </div>

                {transactionHistoryList.map(eachItem => (
                  <TransactionItem
                    key={eachItem.id}
                    eachTransaction={transactionTypeOptions}
                    eachTransactionItem={eachItem}
                    onDeleteHistory={this.deleteHistory}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
