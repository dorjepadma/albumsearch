import React from 'react';
import PropTypes from 'prop-types';

const Songs = ({ title }) => (
  <ul>
    {title}
  </ul>
);

Songs.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Songs;
