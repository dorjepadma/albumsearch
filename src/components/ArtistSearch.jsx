import React from 'react';
import PropTypes from 'prop-types';

const ArtistSearch = ({ artistName, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type='text' 
      name={artistName} 
      value={artistName} 
      onChange={onChange} />
    <button>Find Groovy Music</button>
  </form>
);

ArtistSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  artistName: PropTypes.string,
};

export default ArtistSearch;
