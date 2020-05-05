import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ name }) => (
  <h3>{name}</h3>
);

Artist.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Artist;
