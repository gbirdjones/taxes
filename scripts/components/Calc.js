var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
			return {
				price: 'initial'
			}
	},
	render: function() {
		return (
			<div className="calc-container">
				<h1>Enter the cost below</h1>
				<form>
					<span> Check this box if you are not from wisconsin (then go home)</span><input id="checkBox" type="checkbox"></input>
					<div>
						<input type="text" id="price" placeholder="Price"></input>
					</div>
					<div>
						<button onClick={this.calculate}>Submit</button>
					</div>
					<div id="total">Total will appear here</div>
				</form>
			</div>
		);
	},
	calculate: function() {
		var checked = document.getElementById('checkBox').checked;
		var tax = null
		var total = null
		var price = document.getElementById('price').value;
		var totalDiv = document.getElementById('total');
		if (isNaN(price)) {
			window.alert('Please enter a valid number between 1 and infinity. If you have time stop at the gift shop');
		}else if (!checked) {
			tax = price*.055;
			console.log(price);
			console.log(tax);
			total = (+tax+ +price);
			console.log(total);
			totalDiv.innerHTML = 'Your subtotal is $' + price + ' the tax alone is $' + tax + ' your total cost for this item is $' + total;
		}else {
			tax = price;
			console.log(price);
			console.log(tax);
			total = (+tax+ +price);
			console.log(total);
			totalDiv.innerHTML = 'Your subtotal is $' + price + ' the tax alone is $' + tax + ' your total cost for this item is $' + total;
		}


	}
});