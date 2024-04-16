import {Component} from 'react'
import MoneyDetails from '../MoneyDetails'
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

const moneyDetailsList = [
  {
    name: 'Your Balance',
    className: 'your-balance-container',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
    altValue: 'balance',
    amount: 0,
  },
  {
    name: 'Your Income',
    className: 'your-income-container',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
    altValue: 'income',
    amount: 0,
  },
  {
    name: 'Your Expenses',
    className: 'your-expenses-container',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
    altValue: 'expenses',
    amount: 0,
  },
]
// Write your code here

class MoneyManager extends Component {
  render() {
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
          <ul className="amount-information-container">
            {moneyDetailsList.map(eachItem => (
              <MoneyDetails eachAmount={eachItem} />
            ))}
          </ul>

          <div className="transaction-container">
            <div className="app-form-container">
              <form className="form-container">
                <h1 className="form-heading">Add Transaction</h1>
                <label className="label-text" htmlFor="textId">
                  TITLE
                </label>
                <input className="input-text" placeholder="TITLE" id="textId" />
                <label className="label-text" htmlFor="amountId">
                  AMOUNT
                </label>
                <input
                  className="input-text"
                  placeholder="AMOUNT"
                  id="amountId"
                />
                <p className="para-text label-text">TYPE</p>
                <select className="input-text select-text">
                  {transactionTypeOptions.map(eachTransaction => (
                    <option
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
              <h1 className="transaction-history">History</h1>
              <ul className="transaction-list-container">
                <li className="table-header">
                  <p className="table-header-cell">Title</p>
                  <p className="table-header-cell">Amount</p>
                  <p className="table-header-cell">Type</p>
                </li>

                <li className="table-row">
                  <p className="table-row-cell">Salary</p>
                  <p className="table-row-cell">50000</p>
                  <div type="button" className="type-container">
                    <p className="table-row-cell">10000</p>
                    <button type="button">
                      <img
                        className="delete"
                        alt="delete"
                        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
                      />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
