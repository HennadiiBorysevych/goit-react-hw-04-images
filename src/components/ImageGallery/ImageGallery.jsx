import React from 'react';
import clsx from 'clsx';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends React.Component {
  render() {
    const { data, modalClick } = this.props;

    return (
      <ul className={clsx('ImageGallery')}>
        {data.map(item => (
          <ImageGalleryItem key={item.id} item={item} modalClick={modalClick} />
        ))}
      </ul>
    );
  }
}
export default ImageGallery;
