import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
  state = { images: [] }

  onSearchSubmit = async (search) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: search }
    })
    this.setState({ images: response.data.results })
  }

  render() {
    const { images } = this.state

    return (
      <div className="ui container" style={{marginTop: "20px"}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={images} />
      </div>
    );
  }
}


export default App