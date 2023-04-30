import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ item, modalClick }) => {
  return (
    <li
      className={clsx('ImageGalleryItem')}
      onClick={() => modalClick(item.largeImageURL)}
    >
      <img
        src={item.webformatURL}
        alt={item.tags}
        className={clsx('ImageGalleryItem-image')}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes={
  item: PropTypes.object.isRequired,
  modalClick: PropTypes.func.isRequired,
}
