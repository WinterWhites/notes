/* 输入：nums = [2,7,11,15], target = 9 输出：[0,1] 
   解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]
*/

function toSum(nums, target) {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		const currentNum = nums[i];
		if (map.has(target - currentNum)) {
			return [map.get(target - currentNum), i];
		} else {
			map.set(currentNum, i);
		}
		console.log();
		if (i === nums.length - 1) {
			return false;
		}
	}
}
let nums = [2, 7, 11, 15];
let target = 9;
// debugger;
console.log(toSum(nums, target));
