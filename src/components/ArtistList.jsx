import React from 'react';
import PropTypes from 'prop-types';
import Artist from '../components/Artist';
import { Link } from 'react-router-dom';

const ArtistList = ({ artists }) => {
  const artistList = artists.map((artistsObject) => (
    <Link key={ artistsObject.id } to='/'>
      <Artist name={artistsObject.name}/>
    </Link>
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
