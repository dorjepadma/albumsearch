import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album.jsx';
import { Link } from 'react-router-dom';

const Albums = ({ albums }) => {
  const albumList = albums.map((album => 
    <Link to={`/Songs/${album.id}`} key={album.id}>
      <li>
        <Album {...album} />
      </li>
    </Link>
  ));

  return (
    <ul>
      {albumList}
    </ul>
  );
};

Albums.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })).isRequired
};
export default Albums;
