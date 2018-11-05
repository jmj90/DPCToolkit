import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
  { src: '/assets/photos/gallery/BraceletsPoolPhoto.jpeg', width: 2, height: 1.3 },
  { src: '/assets/photos/gallery/SWF_GirlsOuting_3.jpeg', width: 1.5, height: 1 },
  { src: '/assets/photos/family.jpg', width: 3.4, height: 4, caption: 'Family' },

  { src: '/assets/photos/gallery/SWFouting3.jpeg', width: 3, height: 2},
  { src: '/assets/photos/gallery/SWFouting3UsJakeAuntGina.jpeg', width: 3, height: 2 },
  { src: '/assets/photos/gallery/CousinsWeekend.jpeg', width: 3, height: 2.4 },

  { src: '/assets/photos/gallery/FamilyPicnic.jpeg', width: 4, height: 2.6 },
  { src: '/assets/photos/gallery/IMG_7986.jpg', width: 2, height: 1.7 },
  { src: '/assets/photos/gallery/Biltmore2010.jpeg', width: 4, height: 3 },

  { src: '/assets/photos/gallery/Sidelines.jpeg', width: 3.9, height: 4 },
  { src: '/assets/photos/gallery/SWF_first_outing.jpeg', width: 4, height: 2.7 },
  { src: '/assets/photos/gallery/IMG_7984.jpg', width: 4, height: 2.8 },

  { src: '/assets/photos/gallery/IMG_7985.jpg', width: 4, height: 2.8 },
  { src: '/assets/photos/gallery/CousinsWeekendeveryone.jpeg', width: 4, height: 3 },
  { src: '/assets/photos/gallery/Mom_Dad_Dancing.jpeg', width: 4, height: 6 },
  { src: '/assets/photos/gallery/Niagra_Falls.jpeg', width: 4, height: 3 },

];

export default class GalleryV2 extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  componentDidMount() {
    // if making gallery width smaller than vh, activate below

    // setTimeout(function(){
    //    document.getElementById('gallery').style.display='flex';
    //  }, 0);

  }


  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div id="gallery">
        <Gallery photos={photos}  onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}
