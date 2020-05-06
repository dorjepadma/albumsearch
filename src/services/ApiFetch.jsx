export const fetchArtist = artistSearch => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artistSearch}&fmt=json`)
    .then(res => res.json())
    .then(json => json.artists.map(artist => ({
      id: artist.id,
      name: artist.name
    })));
   
};
export const fetchAlbums = artistId => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res => res.json())
    .then(json => json.releases.map(release => ({
      id: release.id,
      title: release.title,
      date: release.date
    })));
};
export const fetchSongs = releaseId => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`)
    .then(res => res.json())
    .then(json => json.recordings.map(song => ({
      id: song.id,
      title: song.title
    })));
};
export const fetchLyrics = (artistName, songTitle) => {
  return fetch(`https://api.lyrics.ovh/v1/${artistName}/${songTitle}`)
    .then(res => res.lyrics);
};
