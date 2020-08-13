import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import './App.css';
import NewPost from './Containers/NewPost/NewPost';
import Search from './Containers/Search/Search';
import Posts from './Containers/Posts/Posts';
import SearchedData from './Containers/SearchedData/SearchedData';
import {Switch,Route } from 'react-router-dom';


function App() {
  return (
      <div className="App">
          
          
          
          <Route path='/' component={Search} />
          <Route path='/' component={Navigation} />
          <Switch>
              <Route path='/New-Post' component={NewPost} exact />
              <Route path='/Posts' component={Posts} exact />
              <Route path='/Search-Data/:data' component={SearchedData} exact />

          </Switch>
          
          
    </div>
  );
}

export default App;
