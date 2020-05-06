import React, { useState, useEffect } from 'react';
import { fetchAlbums, fetchArtist } from '../services/ApiFetch';
import Albums from '../components/Albums';
import PropTypes from 'prop-types';

const AlbumDisplay = ({ match }) => {
  const [artist, setArtist] = useState('');
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchArtist(match.params.id)
      .then(artist => setArtist(artist));

    fetchAlbums(match.params.id)
      .then(albums => setAlbums(albums));
  }, []);

  return (
    <Albums artist={artist} releases={albums} />
  );
};

export default AlbumDisplay;

AlbumDisplay.propTypes = {
  match: PropTypes.object.isRequired
};
