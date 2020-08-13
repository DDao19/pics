import React from 'react'
import Imagecard from './ImageCard'
import './ImageList.css'

const ImageList = ({ images }) => {
  const searchedImage = images.map(image => {

    return <Imagecard key={image.id} image={image} />
  })
  return(
    <div className="image-list">
      {searchedImage}
    </div>
  )
}


export default ImageList