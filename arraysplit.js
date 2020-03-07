const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2,5);
console.log(part);
console.log(nums);
//----------------------------------
const nums = [1,2,3,4,5,6,7,8];
const removed = nums.splice(2,5);
console.log(removed);
console.log(nums);
//----------------------------------
const nums = [1,2,3,4,5,6,7,8];
const removed2 = nums.splice(2,3);
console.log(removed2);
console.log(nums);
//-----------------------------------------
const nums = [1,2,3,4,5,6,7,8];
const removed3 = nums.splice(2,3,77,88,99);
console.log(removed3);
console.log(nums);
//----------------------------------------
const nums = [1,2,3,4,5,6,7,8];
const removed4 = nums.splice(2,3,77);
console.log(removed4);
console.log(nums);
//-----------------------------------------
const nums = [1,2,3,4,5,6,7,8];
const removed3 = nums.splice(2,3,77);
const together = nums.join("");
console.log(together);
//-------------------------------------------
const nums = [1,2,3,4,5,6,7,8];
const removed3 = nums.splice(2,3,77);
const together = nums.join(" ");
console.log(together);
//----------------------------------
const nums = [1,2,3,4,5,6,7,8];
const removed3 = nums.splice(2,3,77);
const together = nums.join(",");
console.log(together);
//---------------------------------------
const nums = [1,2,3,4,5,6,7,8];
const removed3 = nums.splice(2,3,77);
const together = nums.join("ami");
console.log(together);