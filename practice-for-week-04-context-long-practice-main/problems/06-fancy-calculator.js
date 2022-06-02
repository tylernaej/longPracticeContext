const Calculator = require('./02-calculator');

class FancyCalculator extends Calculator {
	constructor(total=0){
		super(total);
	}
	setTotal(newTotal){
		return this.total = newTotal
	}
	squared(){
		return this.total * this.total
	}
	modulo(num){
		return this.total %= num
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}