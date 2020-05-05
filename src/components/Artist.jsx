import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ name }) => (
  <h3>{name}</h3>
);

Artist.propTypes = {
  name: PropTypes.string.isRequired
};

export default Artist;
