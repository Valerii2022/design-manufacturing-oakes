import { products } from '../../image/products';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: products.shop,
  },
  {
    original: products.bale,
  },
  {
    original: products.post1,
  },
  {
    original: products.cone,
  },
  {
    original: products.bunk2,
  },

  {
    original: products.feed,
  },
  {
    original: products.free4,
  },
];

const Slider = ({ slides }) => {
  return (
    <ImageGallery
      items={images}
      showFullscreenButton={false}
      autoPlay={true}
      showPlayButton={false}
    />
  );
};

export default Slider;
