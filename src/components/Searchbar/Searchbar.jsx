import { useState } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default function Searchbar({ liftData }) {
  const [valueInput, setValueInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (valueInput.trim() === '') {
      alert('Ваш запит не повинен бути порожній');
      return;
    }

    liftData(valueInput);
    e.target.reset();
  };

  const hundleChange = e => {
    setValueInput(e.target.value);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button
          name="button"
          type="submit"
          className={css['SearchForm-button']}
        >
          <span className={css['SearchForm-button-label']}>Search</span>
        </button>

        <input
          onChange={hundleChange}
          value={valueInput}
          name="input"
          className={css['SearchForm-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  liftData: PropTypes.func,
};
