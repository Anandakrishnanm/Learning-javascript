function checkEqual(a, b) {
	console.log("Check ",a," equql to ",b," :");    
	console.log(a===b ? "Equal" : "Not Equal");
}

function checkSign(num) {
	console.log("Check for zero,positive or negative : ",num," :"); 
	console.log(num<0 ? "negative" 
        	  : num===0 ? "zero"
         	  : "positive");

}
checkEqual(1, 2);
checkSign(-10);