import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeInputValue = event => {
    const inputValue = event.target.value
    this.setState({searchInput: inputValue})
  }

  render() {
    const {destinationsList} = this.props

    let {searchInput} = this.state
    searchInput = searchInput.toLowerCase()

    const filteredDestinationsList = destinationsList.filter(
      eachDestination => {
        const destinationName = eachDestination.name.toLowerCase()
        return destinationName.includes(searchInput)
      },
    )

    return (
      <div className="bg-container">
        <h1 className="main-heading">Destination Search</h1>
        <div className="input-container">
          <input
            type="search"
            className="input-search"
            placeholder="Search"
            onChange={this.onChangeInputValue}
          />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="destination-items-container">
          {filteredDestinationsList.map(eachDestination => (
            <DestinationItem
              key={eachDestination.id}
              name={eachDestination.name}
              imgUrl={eachDestination.imgUrl}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
