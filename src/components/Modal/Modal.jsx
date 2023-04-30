import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={clsx('Overlay')} onClick={handleBackdropClick}>
      <div className={clsx('Modal')}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};
export default Modal;

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
