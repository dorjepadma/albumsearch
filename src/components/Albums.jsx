import React from 'react';
import PropTypes from 'prop-types';

const AlbumList = ({  name, albums }) => (

  <figure style={{ margin: '1em' }}>
    <section>
      <img alt={username} style={{ width: '25%' }} src={image} />
      <div style={{ fontWeight: 'bold' }}>
        <h3>Name: {name} </h3>
        <ul>
          {albums}
        </ul>
        <a href={profileUrl} target="_blank" rel="noopener noreferrer">Profile</a>
      </div>
    </section>
  </figure>
   
);

AlbumList.propTypes = {
  artist: PropTypes.string.isRequired,
  albums: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  profileUrl: PropTypes.string.isRequired
};
export default AlbumList;