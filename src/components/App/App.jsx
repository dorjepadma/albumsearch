import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';
import ArtistSearch from '../ArtistSearch.jsx';
import Artist from '../Artist.jsx';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={ArtistSearch}/>
          <Route exact path='/' component={Artist}/>  
        </Switch>
      </Router>
    </>
  );
}
  
