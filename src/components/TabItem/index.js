// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, selectedCategory, isActive} = props
  const {displayText, tabId} = tabDetails
  const updateCategory = () => {
    selectedCategory(tabId)
  }

  const isAct = isActive ? 'highlight-button' : 'normal'

  return (
    <li className="list-container">
      <button type="button" className={isAct} onClick={updateCategory}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
