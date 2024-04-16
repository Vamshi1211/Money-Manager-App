// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {eachAmount} = props
  const {imgUrl, name, altValue, className, amount} = eachAmount
  return (
    <li className={className}>
      <img alt={altValue} className="image" src={imgUrl} />
      <div className="your-amount-information">
        <p className="amount-heading">{name}</p>
        <p className="amount">{amount}</p>
      </div>
    </li>
  )
}

export default MoneyDetails
