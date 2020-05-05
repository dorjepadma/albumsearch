import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import ArtistSearch from '../ArtistSearch.jsx';
import Artist from '../Artist.jsx';
import ArtistDisplay from '../../container/ArtistDisplay.jsx';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={ArtistDisplay}/>
          <Route exact path='/' component={Artist}/>  
        </Switch>
      </Router>
    </>
  );
}
  
