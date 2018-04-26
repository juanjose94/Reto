var angular = require('angular');
require('todomvc-app-css/index.css');

require('angular-ui-router');
require('angular-resource');

var routesConfig = require('./routes');
var pantallaInicio = require('./app/components/pantallaInicio/pantallaInicio');
var Api = require('./app/components/servicios/api');
import './index.css';

angular
  .module('app', ['ui.router', 'ngResource'])
  .config(routesConfig)
  .factory('Api', Api)
  .component('pantallaInicio', pantallaInicio);
