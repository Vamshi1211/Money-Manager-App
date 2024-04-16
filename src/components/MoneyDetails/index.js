// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {eachTransactionList} = props

  let balance = 0
  let income = 0
  let expenses = 0

  eachTransactionList.map(eachHistory => {
    if (eachHistory.type === 'INCOME') {
      income += parseInt(eachHistory.amount)
      balance += parseInt(eachHistory.amount)
    } else if (eachHistory.type === 'EXPENSES') {
      expenses += parseInt(eachHistory.amount)
      balance -= parseInt(eachHistory.amount)
    }
    return {income, balance, expenses}
  })

  //   console.log(`Income is ${income}`)
  //   console.log(`Balance is ${balance}`)
  //   console.log(`Expenses is ${expenses}`)

  return (
    <ul className="amount-information-container">
      <li className="your-balance-container">
        <img
          alt="balance"
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div className="your-amount-information">
          <p className="amount-heading">Your Balance</p>
          <p
            className="amount"
            data-testid="balanceAmount"
          >{`Rs ${balance}`}</p>
        </div>
      </li>
      <li className="your-income-container">
        <img
          alt="income"
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div className="your-amount-information">
          <p className="amount-heading">Your Income</p>
          <p className="amount" data-testid="incomeAmount">{`Rs ${income}`}</p>
        </div>
      </li>
      <li className="your-expenses-container">
        <img
          alt="expenses"
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div className="your-amount-information">
          <p className="amount-heading">Your Expenses</p>
          <p
            className="amount"
            data-testid="expensesAmount"
          >{`Rs ${expenses}`}</p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
