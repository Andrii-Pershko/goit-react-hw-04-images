import css from './Modal.module.css';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ largeImageURL, toglleModal }) {
  const [skeleton, setSkeleton] = useState(true);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDoun);
    return function cleanup() {
      window.removeEventListener('keydown', handleKeyDoun);
    };
  });

  const handleKeyDoun = e => {
    if (e.code === 'Escape') {
      toglleModal();
    }
  };

  const showSkeleton = () => {
    setSkeleton(false);
  };

  const overlayClick = e => {
    if (e.currentTarget === e.target) {
      toglleModal();
    }
  };

  return createPortal(
    <div className={css.Overlay} onClick={overlayClick}>
      <div className={css.Modal}>
        <button
          className={css.Button}
          type="button"
          onClick={toglleModal}
        ></button>
        {skeleton && <div className="Scelet"></div>}
        <img
          onLoad={showSkeleton}
          width={900}
          height={600}
          src={largeImageURL.largeImageURL}
          alt={largeImageURL.tags}
        />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  toglleModal: PropTypes.func,
  largeImageURL: PropTypes.object,
};
