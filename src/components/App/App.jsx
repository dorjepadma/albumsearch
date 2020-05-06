import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import ArtistDisplay from '../../container/ArtistDisplay';
import AlbumDisplay from '../../container/AlbumDisplay';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={ArtistDisplay}/>
          <Route exact path='/artist/:id' component={AlbumDisplay} /> 
        </Switch>
      </Router>
    </>
  );
}
  
