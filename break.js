const nums = [1,2,3,4,5,6,7,8,9];
for (let i=0;i<nums.length;i++){
	console.log(nums[i]);
}
//-----------------------------------------
const nums = [1,2,3,4,5,6,7,8,9];
for (let i=0;i<nums.length;i++){
	console.log(nums[i]);
	if (nums[i]>6){
		break;
	}
}
//------------------------------------
const nums = [1,2,3,4,5,6,7,8,9];
for (let i=0;i<nums.length;i++){

	if (nums[i]>6){
		break;
	}
	console.log(nums[i]);
}
//-------------------------------------
const nums = [1,-2,3,4,-5,6,7,-8,9];
for (let i=0;i<nums.length;i++){
	if (nums[i]>3){
		break;
	}
}
for (let i=0;i<nums.length;i++){
	if (nums[i]<0){
		continue;
	}
	console.log(nums[i]);
}