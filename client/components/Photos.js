import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import GalleryV2 from './ReactGalleryV2';
import GridGallery from './Gallery'

export default class Photos extends Component {

  render() {

    return (
      <div className="scholarship-page-main">
        <Header />
        {/* <div className="photo-title"> Photo Gallery </div> */}
          <GalleryV2 />
        <Footer />
      </div>
    )
  }
}
