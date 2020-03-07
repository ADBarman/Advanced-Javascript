const students = [
	{id:21, name:'Omar Sunny'},
	{id:31, name:'manaaaaa'},
	{id:41, name:'moina'},
	{id:71, name:'deejol'}
];

const names = students.map(s=> s.name);
console.log(names);
//-----------------------------------
const students = [
	{id:21, name:'Omar Sunny'},
	{id:31, name:'manaaaaa'},
	{id:41, name:'moina'},
	{id:71, name:'deejol'}
];

const names = students.map(s=> s.name);
const names = students.map(s=> s.id);
console.log(ids);
//-----------------------------------------
const students = [
	{id:21, name:'Omar Sunny'},
	{id:31, name:'manaaaaa'},
	{id:41, name:'moina'},
	{id:71, name:'deejol'}
];

const names = students.map(s=> s.name);
const names = students.map(s=> s.id);
const bigger = students.filter(s => s.id>40);
console.log(bigger);
//---------------------------------------
const students = [
	{id:21, name:'Omar Sunny'},
	{id:31, name:'manaaaaa'},
	{id:41, name:'moina'},
	{id:71, name:'deejol'}
];

const names = students.map(s=> s.name);
const names = students.map(s=> s.id);
const bigger = students.filter(s => s.id>40);
const biggerOne = students.find(s => s.id>40);
console.log(biggerOne);