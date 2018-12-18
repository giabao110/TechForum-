import React from 'react';
import { Router, Route, Switch} from 'react-router';

// Route Components
import  Home from '../../../client/lib/matchs/home';
import  Grounds from '../../../client/lib/grounds/grounds';
import  Grounddetail from '../../../client/lib/grounddetail/grounddetail';
import  DashboardMatchs from '../../../client/lib/dashboard/DashboardMatchs';
import  DashboardGrounds from '../../../client/lib/dashboard/DashboardGrounds';
import  Login from '../../../client/login/Login/Login';
import  Profile from '../../../client/lib/profile/Profile';
import  Forgot from '../../../client/login/Forgot/Forgot.jsx';
import  Notfound from '../../../client/lib/profile/Notfound';
import  Register from '../../../client/login/Register/Register';
import createHistory from 'history/createBrowserHistory';
import  App from './App';

export const history = createHistory();

export const renderRoutes = () => (
  <Router history={history}>
    <Switch >
      <Route exact path='/register' render={() => <Register history={history}/>}/>
      <Route exact path='/forgot' render={() => <Forgot history={history}/>}/>
      <Route exact path='/login' render={() => <Login history={history}/>}/>
      <Route exact path='/matchs' render={() => <App children={<Home/>} history={history}/>}/>
      <Route exact path='/' render={() => <App children={<Grounds/>} history={history}/>}/>
      <Route exact path='/grounddetail/:GroundID' render={() => <App children={<Grounddetail/>} history={history}/>}/>
      <Route exact path='/dashboard/matchs' render={() => <App children={<DashboardMatchs/>} history={history}/>}/>
      <Route exact path='/dashboard' render={() => <App children={<DashboardGrounds/>} history={history}/>}/>
      <Route exact path='/profile' render={() => <App children={<Profile/>} history={history}/>}/>
      <Route exact path='/*' render={() => <App children={<Notfound/>} history={history}/>}/>
    </Switch>
  </Router>
);

