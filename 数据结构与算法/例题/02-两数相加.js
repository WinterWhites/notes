/*
  给定: arr1=[1,5,3], arr2=[2,3,7]
  输出: resultArr=[3,8,0,1]
*/

function addTwoNumbers(arr1, arr2) {
	let resultArr = [];
	let flag = 0;
	let minLength = arr1.length < arr2.length ? arr1.length : arr2.length;
	let maxLengthArr = arr1.length > arr2.length ? arr1 : arr2;
	for (let i = 0; i < minLength; i++) {
		let arr1Value = arr1[i];
		let arr2Value = arr2[i];
		let remainder = (arr1Value + arr2Value) % 10;
		flag = (arr1Value + arr2Value) / 10;
		flag = flag < 1 ? 0 : Math.floor(flag);
		resultArr[i] = resultArr[i] ? resultArr[i] + remainder : remainder;
		if (flag >= 1) {
			if (resultArr[i + 1] === undefined) {
				resultArr[i + 1] = 0;
			}
			resultArr[i + 1] += flag;
		}
	}
	// console.log(maxLengthArr);
	let remainArr = maxLengthArr.splice(minLength);
	let newRemainArr = remainArr.splice(1);
	if (resultArr[minLength - 1]) {
		resultArr[minLength - 1] + remainArr[0];
		resultArr.push(...newRemainArr);
	} else {
		resultArr.push(...newRemainArr);
	}
	return resultArr;
}

let arr1 = [10, 5, 3, 15, 6]; // 2,9,2,6,6
let arr2 = [2, 3, 8];
// 2,9,1,6,6
// debugger;
console.log(addTwoNumbers(arr1, arr2));
