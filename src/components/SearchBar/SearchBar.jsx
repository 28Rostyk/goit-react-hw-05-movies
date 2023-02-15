import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { AiOutlineSearch } from 'react-icons/ai';
import css from './searchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQuerySearch = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast.info('Enter the film title');
    }

    onSearch(searchQuery);
    setSearchQuery('');
  };

  return (
    <>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <div className={css.container}>
          <label>
            <input
              className={css.searchInput}
              type="text"
              name="searchQuery"
              value={searchQuery}
              autoComplete="off"
              autoFocus
              placeholder="Search ..."
              onChange={handleQuerySearch}
            />
          </label>
          <button className={css.searchButton} type="submit">
            <AiOutlineSearch className={css.SearchBtnIcon} />
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
