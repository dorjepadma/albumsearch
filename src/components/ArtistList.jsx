import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArtistList = ({ artists }) => {
  const artistList = artists.map((artist) => (
    <li key={ artist.id }>
      <Link to={`artist/${artist.id}`}>
        <h3>{artist.name}</h3>
      </Link>
    </li>
  )); 
  return (
    <ul>
      { artistList }
    </ul>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired
};

export default ArtistList;
