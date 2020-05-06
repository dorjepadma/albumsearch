import React from 'react';
import PropTypes from 'prop-types';

const Album = ({ title, date, }) => (
  <div>
    <h3>{title}</h3>
    <h4>{date}</h4>
  </div>
);

Album.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  
};
export default Album;
