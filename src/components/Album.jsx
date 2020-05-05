import React from 'react';
import PropTypes from 'prop-types';

const Album = ({ title, date, country }) => (
  <div>
    <h3>{title}</h3>
    <h4>{date}</h4>
    <h4>{country}</h4>
  </div>
);

Album.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};
export default Album;
