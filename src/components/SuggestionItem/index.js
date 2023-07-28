// Write your code here

const SuggestionItem = props => {
  const {suggestionsList, updateSearchInput} = props
  const {suggestion} = suggestionsList

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li>
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        width="20px"
        onClick={onClickSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
