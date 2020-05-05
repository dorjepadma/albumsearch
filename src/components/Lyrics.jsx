import React from 'react';
import PropTypes from 'prop-types';

const Lyrics = ({ lyrics }) => (
  <ul>
    {lyrics}
  </ul>
);

Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired
};

export default Lyrics;
