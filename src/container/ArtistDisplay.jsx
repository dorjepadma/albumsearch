import React, { useState } from 'react';
import ArtistSearch from '../components/ArtistSearch';
import { fetchArtist } from '../services/ApiFetch';
import ArtistList from '../components/ArtistList';

const ArtistDisplay = () => {
  const [artistSearch, setArtistSearch] = useState('');
  const [artist, setArtist] = useState([]);


  const handleChange = ({ target }) => {
    setArtistSearch(target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(artistSearch);
    fetchArtist(artistSearch)
      .then(artist => setArtist(artist));
  };
  return (
    <>
      <ArtistSearch artistSearch={artistSearch} handleChange={handleChange} onSubmit={handleClick}/>
      <ArtistList artists={artist}/>
    </>
  );
};
export default ArtistDisplay;
