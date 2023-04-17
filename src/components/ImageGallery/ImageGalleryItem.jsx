import clsx from 'clsx';
import React from 'react';

class ImageGalleryItem extends React.Component {
  render() {
    const { item, modalClick } = this.props;
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
  }
}

export default ImageGalleryItem;
