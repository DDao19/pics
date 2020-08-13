import React from 'react'

class SearchBar extends React.Component {
  state = { search: '' }


  onFormSubmit = (e) => {
    e.preventDefault()

    this.props.onSubmit(this.state.search)
  }


  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input 
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })} 
              type="text" 
              placeholder="search..." 
            />
          </div>
        </form>
      </div>
    )
  }
}


export default SearchBar