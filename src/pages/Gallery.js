import React, { useEffect, useState, useRef } from 'react';
import Loader from '../components/Loader';
import Container from 'react-bootstrap/Container';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import photos from "./Photo.js";

const slides = photos.map(({ src, width, height, images }) => ({
  src,
  width,
  height,
  srcSet: images.map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height,
  })),
}));

function Gallery() {
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800)
  }, [])
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(-1);
  return (
    <>
    {loading ?

      <Loader
        // color={'#294a65'}
        loading={loading}
        // cssOverride={override}
        size={300}
      // aria-label="Loading Spinner"
      // data-testid="loader"
      // speedMultiplier={1.5}
      /> :
    <div className="">
      <div>

        <div className="mt-3" style={{ color: "#fa4c02", fontWeight: "bold", }}>
          <h2 id='Spice' className="py-3 col-md-9 pb-3 m-auto fw-bolder d-flex align-items-center justify-content-center"> <u>पूजा फोटो गैलरी</u> </h2>
        </div>
        <Container className='p-3'>
          <PhotoAlbum
            photos={photos}
            layout="rows"
            targetRowHeight={150}
            onClick={(event, photo, index) => setIndex(index)}
          /></Container>
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />

      </div>


    </div>
       }
       </>
  )
}

export default Gallery