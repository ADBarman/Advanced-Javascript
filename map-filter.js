const numbers = [3,4,5,6,7,8];
const output = [];
for(let 1; i<numbers.length;i++){
	const element = numbers[i];
	const result = element*element;
	putpout.push(result);
}
console.log(output);
//----------------------------------------
const numbers = [3,4,5,6,7,8];
function square (element){
	return element*element;
}
const output = numbers.map(square);
console.log(output);
//---------------------------------------
const numbers = [3,4,5,6,7,8];
function square (element){
	return element*element;
}
numbers.map(function(element){
	console.log(element);
})
//-------------------------------
const numbers = [3,4,5,6,7,8];
function square (element){
	return element*element;
}
numbers.map(function(element,index){
	console.log(element,index);
})
//-----------------------------------
const numbers = [3,4,5,6,7,8];
function square (element){
	return element*element;
}
numbers.map(function(element,index,array){
	console.log(element,index, array);
})
//------------------------------------------------
const numbers = [3,4,5,6,7,8];
function square (element){
	return element*element;
}
const result = numbers.map(function(element){
	return element*element;
})
console.log(result);
//-------------------------------------------
const numbers = [3,4,5,6,7,8];
const square = element => element*element;
const square = x => x*x;
const result = numbers.map(square);
console.log(result);
//------------------------------------------
const numbers = [3,4,5,6,7,8];
const square = x => x*x;
const result = numbers.map(x => x*x);
console.log(result);
//-----------------------------------------
//filter>>specific selection, matching element

const numbers = [3,4,5,6,7,8];
const bigger = numbers.filter(x => x>5);
console.log(bigger);
//---------------------------------
const numbers = [3,4,5,6,7,8];
const bigger = numbers.filter(x => x<5);
console.log(bigger);
//---------------------------------
//foreach>>
//reduce>>
//------------------------------
//find>>

const numbers = [3,4,5,6,7,8];
const isThere = numbers.find(x => x>5);
console.log(isThere);