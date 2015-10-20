'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery = $;
var Home = require('./components/Home.js');
var Calc = require('./components/Calc.js');
var Nav = require('./components/Nav.js')

var content = document.getElementById('content');
var nav = document.getElementById('navBar');

var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'calc':'calc'
	},
	home: function () {
		ReactDOM.render(<Home />, content);
	},
	calc: function () {
		ReactDOM.render(<Calc />, content);
	}
});
var r = new Router();
Backbone.history.start();
ReactDOM.render (<Nav />, nav);
