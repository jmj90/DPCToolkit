import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gallery from './reactGallery/Gallery';



export default class GridGallery extends Component {

  constructor(props){
      super(props);

      this.state = {
          images: this.props.images,
          currentImage: 0
      };
  }

  render () {
      return (
          <div id='gallery'>
            <Gallery
              images={this.state.images}
              enableLightbox={true}
              enableImageSelection={false}
            />
          </div>
      );
  }
}

GridGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            srcset: PropTypes.array,
            caption: PropTypes.string,
            thumbnailHeight: PropTypes.number,
            thumbnailWidth: PropTypes.number
        })
    ).isRequired
};

GridGallery.defaultProps = {
    images: [
        {
          src: "/assets/photos/gallery/BraceletsPoolPhoto.jpeg",
          thumbnail: "/assets/photos/gallery/BraceletsPoolPhoto.jpeg",
          caption: "Solly's Way Foundation"
        },
        {
          src: "/assets/photos/gallery/SWF_GirlsOuting_3.jpeg",
          thumbnail: "/assets/photos/gallery/SWF_GirlsOuting_3.jpeg",
        },
        {
          src: "/assets/photos/family.jpg",
          thumbnail: "/assets/photos/family.jpg",
          caption: "Niagra Falls"
        },
        {
          src: "/assets/photos/gallery/SWFouting3.jpeg",
          thumbnail: "/assets/photos/gallery/SWFouting3.jpeg",
        },
        {
          src: "/assets/photos/gallery/SWFouting3UsJakeAuntGina.jpeg",
          thumbnail: "/assets/photos/gallery/SWFouting3UsJakeAuntGina.jpeg",
        },
        {
          src: "/assets/photos/gallery/Biltmore2010.jpeg",
          thumbnail: "/assets/photos/gallery/Biltmore2010.jpeg",
          caption: "Family Photo - Biltmore 2010"
        },
        {
        src: "/assets/photos/gallery/CousinsWeekend.jpeg",
        thumbnail: "/assets/photos/gallery/CousinsWeekend.jpeg",
        caption: "Family Photo - Biltmore 2010"
      },
      {
        src: "/assets/photos/gallery/FamilyPicnic.jpeg",
        thumbnail: "/assets/photos/gallery/FamilyPicnic.jpeg",
        caption: "Family Photo - Biltmore 2010"
      },
      {
        src: "/assets/photos/gallery/IMG_7986.jpg",
        thumbnail: "/assets/photos/gallery/IMG_7986.jpg",
        caption: "Family Photo - Biltmore 2010"
      },
      {
        src: "/assets/photos/gallery/Sidelines.jpeg",
        thumbnail: "/assets/photos/gallery/Sidelines.jpeg",
        caption: "Family Photo - Biltmore 2010"
      },
      {
        src: "/assets/photos/gallery/SWF_first_outing.jpeg",
        thumbnail: "/assets/photos/gallery/SWF_first_outing.jpeg",
        caption: "Family Photo - Biltmore 2010"
      },
      {
        src: "/assets/photos/gallery/IMG_7984.jpg",
        thumbnail: "/assets/photos/gallery/IMG_7984.jpg",
        caption: "Family Photo - Biltmore 2010"
      },
      {
        src: "/assets/photos/gallery/IMG_7985.jpg",
        thumbnail: "/assets/photos/gallery/IMG_7985.jpg",
        caption: "1997 Sideouts Softball Championship Team"
      },
      {
        src: "/assets/photos/gallery/CousinsWeekendeveryone.jpeg",
        thumbnail: "/assets/photos/gallery/CousinsWeekendeveryone.jpeg",
        caption: "Cousin's Weekend 2010"
      },
      {
        src: "/assets/photos/gallery/Mom_Dad_Dancing.jpeg",
        thumbnail: "/assets/photos/gallery/Mom_Dad_Dancing.jpeg",
      },
      {
        src: "/assets/photos/gallery/Niagra_Falls.jpeg",
        thumbnail: "/assets/photos/gallery/Niagra_Falls.jpeg",
        caption: "Niagra Falls"
      },

    ]
};
