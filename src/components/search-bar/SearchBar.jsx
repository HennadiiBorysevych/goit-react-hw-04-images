import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

const Searchbar = ({ onSubmit }) => {

  const handleInput = e => {
    e.preventDefault();
    onSubmit(e.target.elements[1].value);
  };

  return (
    <header className={clsx('Searchbar')}>
      <form onSubmit={handleInput} className={clsx('SearchForm')}>
        <button type="submit" className={clsx('SearchForm-button')}>
          <FaSearch className={clsx('SearchForm-button-label')} />
        </button>

        <input
          className={clsx('SearchForm-input')}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
