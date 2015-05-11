var app = require("../i_sumOfRange.js")

describe("sumOfRange function, iterative version", function(){

		it("to return the sum all digits between 0 and a given number", function(){
			expect(app.sumOfRange(5)).toEqual(15);
			expect(app.sumOfRange(8)).toEqual(36);
		});
		
		
}); // close describe