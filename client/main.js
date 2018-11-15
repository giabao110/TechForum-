import  './main.html';
import 'jquery/dist/jquery.min'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import {renderRoutes} from '../imports/startup/client/routes';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('root'))
});
