var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="nav-container">
				<a href=""><div className="home">Home</div></a>
				<a href="#calc"><div className="button">Calculate</div></a>
			</div>
		);
	}
});