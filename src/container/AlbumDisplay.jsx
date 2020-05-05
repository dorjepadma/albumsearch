import React, { useState, useEffect } from 'react';
import Albums from '../components/Album';
import { fetchAlbums, fetchArtist } from '../services/ApiFetch';
import AlbumList from '../components/AlbumList';

const AlbumDisplay = ({ match }) => {
  const [artist, setArtist] = useState({});
  const [releases, setReleases] = useState([]);

  useEffect(() => {
    fetchArtist(match.params.id)
    .then(artist => setArtist(artist));

  })

}
