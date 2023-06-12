function convertToInteger(str) {
	console.log(parseInt(str));
}
function convertToInteger1(str) {
	console.log(parseInt(str,2));
}
function convertToInteger2(str) {
	console.log(parseInt(str,16));

}
console.log("String to integer:");
convertToInteger("56");
console.log("String of binary to integer:");
convertToInteger1("10011");
console.log("String to Number to base(16): ");
convertToInteger2("1A");