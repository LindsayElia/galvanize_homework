var http = require("http");
var arr = [];

http.get("http://omdbapi.com/?i=tt0241527", function(res){
    res.setEncoding("utf8");
    res.on("data", function(data){
       	//console.log(data);
		arr.push("First item: " + data);
		// console.log(arr);
    })
	res.on("end", function(){
		http.get("http://omdbapi.com/?i=tt0295297", function(res2){
			res2.setEncoding("utf8");
			res2.on("data", function(data2){
				arr.push("Second item: " + data2);
			})
			res2.on("end", function(){
				console.log(arr);	// wait until 2nd request is done to console.log the array
			})
		})
	})
});

