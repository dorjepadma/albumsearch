import React, { useState } from 'react';
import ArtistSearch from '../components/ArtistSearch';
import { useParams } from 'react-router-dom';
import { fetchArtist } from '../services/ApiFetch';

const ArtistList = () => {
  const [artistSearch, setArtistSearch] = useState([]);
  const [artist, setArtist] = useState([]);


  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleClick = () => {
    fetchArtist(search)
      .then(artist => setArtist(artist));
  };

  return (
    <>
      <SearchDisplay onChange={handleChange} onClick={handleClick} />
      <ArtistSearch artist={artist} />
    </>
  );
};
export default ArtistList;
