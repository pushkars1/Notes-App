import React from 'react';
import './App.css';
import SignIn from './components/Login';
import Note from './components/notes/Note';
import {Route,Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

function App(props) {
  
  let routes = (
    <Switch>
      <Route path='/' component={SignIn} exact/>
      {props.auth.isAuth && (
        <Route path='/notes' component={Note} exact/>
      )}
    </Switch>
  );
  return (
    <div className="App">
      {routes}
      {props.auth.isAuth && (
        <Redirect to="/notes" />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    auth:state.auth
  }
}

export default connect(mapStateToProps)(App);
