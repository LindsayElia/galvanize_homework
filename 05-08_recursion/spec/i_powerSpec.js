var app = require ("../i_power.js")

describe("power function, takes two numbers and raises one to the power of the other", function(){
	
	it("to raise the first number to the power of the second number", function(){
		expect(app.power(2,3)).toEqual(8);
		expect(app.power(4,2)).toEqual(16);
		expect(app.power(5,4)).toEqual(625);
	});
	
});