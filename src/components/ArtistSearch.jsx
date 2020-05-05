import React from 'react';
import PropTypes from 'prop-types';

const ArtistSearch = ({ text, onChange, onSubmit, inputName = 'text', buttonText = 'Submit' }) => (
  <form onSubmit={onSubmit}>
    <input type='text' name={inputName} value={text} onChange={onChange} />
    <button variant='primary'>{buttonText}</button>
  </form>
);

ArtistSearch.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  inputName: PropTypes.string,
  buttonText: PropTypes.string
};

export default ArtistSearch;
