// Write your code here

import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateSearchInput = value => {
    console.log(value)
    this.setState({searchInput: value})
  }

  onChangeInputText = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props

    const {searchInput} = this.state

    const searchDetails = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    // const suggestValue = this.onsuggestionClick

    console.log(searchDetails)

    return (
      <>
        <div className="googleSearchContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            width="100px"
          />

          <div className="googleSuggestion">
            <div className="d-flex">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                width="20px"
              />
              <input
                type="search"
                value={searchInput}
                placeholder="Search Google"
                onChange={this.onChangeInputText}
              />
            </div>

            <ul>
              {searchDetails.map(eachItem => (
                <SuggestionItem
                  suggestionsList={eachItem}
                  key={eachItem.id}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default GoogleSuggestions
