// Given a string s, find the length of the longest substring without repeating characters.
//  abcdefg abcdefghi abcdefghijkl

const findLargestSubstring = (str)=>{
	let arr = [];
	let largestSubString = "";
	let count = 0;
	for (let i=0;i<str.length;i++){
		if (!arr.find(ele=>ele == str[i])) {
			arr.push(str[i]);
			if (i==str.length-1 && count < arr.length){
				count = arr.length;
				largestSubString = arr.join("");    
			}
		}
		else if (count < arr.length){
			count = arr.length;
			largestSubString = arr.join("");
			arr = [];
			arr.push(str[i]);
		}
	}
	return { largestSubString, count };
};
//console.log(findLargestSubstring("pwwkew"));

//4.Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
const medianOfTwoSortedArr = ()=>{
	const arr1 = [1, 3];
	const arr2 = [2, 4];
	const sortedArr = [...arr1, ...arr2];
	let n = sortedArr.length;
	let median = 0;
	if (n%2 == 1){
		let m= (n-1)/2;
		median = sortedArr[m];
	}
	else {
		let m = n/2;
		median = (sortedArr[m-1] + sortedArr[m])/2;
	}
	return median; 
};
//console.log(medianOfTwoSortedArr());

// 5. Longest Palindromic Substring
//babad --> bab
//cbbd  --> cbbd

//Civic == Level == Radar == Noon == Taco cat  ==  Aibohphobia == Was it a car or a cat I saw? == Too bad I hid a boot
//civiclevelradarnoontacocataibohphobiawasitacaroracatisawtoobadihidaboot

/* function palindrome(str, i, j){
	console.log(i, j);
	if (i>j) return "Palindrome";
	if (str[i]==str[j])
		palindrome(str, i+1, j-1);
	else return "Not palindrome";
} */
//let str = "civic";
//console.log(palindrome(str, 0, str.length-1));
/* const findLongestPalindromicString = (str)=>{
	let n = str.length;
	let longestPalindromeCount = 0;
	let longestPalindromeStr = "";
	let i=0;
	let j=3;
	while (j<n){
		let slicedStr = str.slice(i, j);
		console.log(slicedStr); */
/* if (palindrome(slicedStr, 0, slicedStr.length-1)){
			if (slicedStr.length >longestPalindromeCount){
				longestPalindromeCount = slicedStr.length;
				longestPalindromeStr = slicedStr;
				i = j+1;
				j=j+2;
			}
		} */
/* j++;
		//else j++;
	}
	return { longestPalindromeCount, longestPalindromeStr };
}; */
//console.log(findLongestPalindromicString("civiclevelradarnoontacocataibohphobiawasitacaroracatisawtoobadihidaboot"));


//Leet code problem
let arr1 = [1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0];
let m=6;
let arr2 = [1, 3, 4, 7, 8, 9];
let n=3;

for (let i=0;i<arr2.length;i++){
	for (let j=0;j<arr1.length;j++){
		if (arr2[i]>arr1[j] && arr1[j] != 0) continue;
		else if (arr2[i]<=arr1[j]){
			//shift
			for (let k=m;k>j;k--){
				arr1[k] = arr1[k-1];
			}
			arr1[j+1] = arr2[i];
		}
		else 
			arr1[j] = arr2[i]; 		
		
		m=m+1;
		break;
	}
}
console.log(arr1);