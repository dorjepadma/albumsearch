import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album.jsx';
import { Link } from 'react-router-dom';

const Albums = ({ artist, releases }) => {
  const releaseList = releases.map(release => (
    <li key={artist.id}>
      <Link to={`/release/${release.id}`}>
        <Album {...release} />
      </Link>
    </li>
  ));
  

  return (
    <>
      <h3>{artist.name} Discography</h3>
      <ul>
        {releaseList}
      </ul>
    </>
  );
};
Albums.propTypes = {
  artist: PropTypes.object.isRequired,
  releases: PropTypes.array.isRequired,
};
export default Albums;
