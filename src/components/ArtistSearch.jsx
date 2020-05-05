import React from 'react';
import PropTypes from 'prop-types';

const ArtistSearch = ({ artistSearch, handleChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type='text' 
      value={artistSearch} 
      onChange={handleChange} />
    <button>Find Groovy Music</button>
  </form>
);

ArtistSearch.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  artistSearch: PropTypes.string,
};

export default ArtistSearch;
