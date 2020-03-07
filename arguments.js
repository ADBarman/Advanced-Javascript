function add(num1, num2){
	return num1+num3;
}
const result = add(2,3);
console.log(result);
//----------------------------
function add(num1, num2){
	return num1+num3;
}
const result = add(2,3,5);
console.log(result);
//-----------------------
function add(num1, num2){
	console.log(arguments);
	return num1+num3;
}
const result = add(2,3,5);
console.log(result);
//-----------------------------------
function add(num1, num2){
	console.log(arguments);
	return num1+num3+arguments[2];
}
const result = add(2,3,5);
console.log(result);
//--------------------------------------
function add(num1, num2){
	console.log(arguments);
	return num1+num3+arguments[2];
}
const result = add(2,3,5,7);
console.log(result);
//-------------------------------------------
function add(num1, num2){
	console.log(...arguments);
	return num1+num3+arguments[2];
}
const result = add(2,3,5,7);
console.log(result);
//----------------------------------
function add(num1, num2){
	console.log([...arguments]);
	return num1+num3+arguments[2];
}
const result = add(2,3,5,7);
console.log(result);