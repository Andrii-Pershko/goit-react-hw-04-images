import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

export function ImageGalleryItem({ src, alt, onChange, index }) {
  const [skelet, setScelet] = useState(true);

  const showSkeleton = () => {
    setScelet(false);
  };

  return (
    <li className={css['ImageGalleryItem']}>
      {skelet ? (
        <img
          onLoad={showSkeleton}
          index={index}
          className={css['ImageGalleryItem-scelet']}
          src={src}
          alt={alt}
        />
      ) : (
        <img
          onLoad={showSkeleton}
          index={index}
          onClick={onChange}
          className={css['ImageGalleryItem-image']}
          src={src}
          alt={alt}
        />
      )}
    </li>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onChange: PropTypes.func,
  index: PropTypes.number,
};
