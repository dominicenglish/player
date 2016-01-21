import React, { PropTypes } from 'react';
import Input from './Input.js';
import SearchIcon from 'react-icons/lib/md/search';

const Search = ({ query, onSearch, onChange }) => {
  return (
    <form
      style={styles.form}
      key="input"
      onSubmit={event => {
        event.preventDefault();
        onSearch();
    }}>
      <Input placeholder="Search #tags or artists"
             icon={
              <SearchIcon width={37} height={37}
               style={{ marginRight: 5, color: 'rgba(255, 255, 255,1)' }} />
             }
             inputStyle={styles.input}
             containerStyle={styles.inputContainer}
             value={query}
             onChange={event => onChange(event.target.value)}
             onReturn={() => onSearch() } />
    </form>
  );
}

Search.propTypes = {
  query: PropTypes.string,
  onSearch: PropTypes.func,
  onChange: PropTypes.func,
};

Search.defaultProps = {
  query: '',
  onSearch: () => {},
  onChange: () => {},
};

const styles = {
  form: {
    backgroundColor: '#1EA1FF',
    boxShadow: '0 1px 3px rgba(118, 132, 142, .7)',
    padding: '1em 1.5em',
    boxShadow: '0 1px 3px rgba(0,0,0,.3)',
  },
  input: {
    padding: '.32em 0 .5em 0',
    fontSize: 25,
    fontWeight: 600,
    color: '#fff',
  },
  inputContainer: {
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: '1px solid rgba(255, 255, 255, .3)',
  }
};

export default Search;
