//##################################Logics 1 ####################################//
/* [ 
    { id:1, name: 'Shubham' }, 
    { id:3, name: 'Vikas' }, 
    { id:2, name: 'Akshay' }, 
    { id:4, name: 'Surendra' } ]

Output ===> { Shubham: 1, Vikas:3, Akshay: 2, Surendra:4 } */

const arrL1 = [ 
	{ id:1, name: "John" }, 
	{ id:2, name: "Simon" }, 
	{ id:3, name: "Samson" }, 
	{ id:4, name: "David" } ];
const objL1 = {};
for (let i=0;i<arrL1.length;i++){
	objL1[arrL1[i].name] = arrL1[i].id;
}
//console.log(objL1); //{ John: 1, Simon: 3, Samson: 2, David: 4 }
//##################################Logics 1 ####################################//


//##################################Logics 2 ####################################//
// input -> [ 'Orange', 'Mango', 'Apple', 'Orange', 'Banana', 'Mango', 'Kiwi', 'Orange' ]
// output -> {'Orange':3,'Mango':2}
function findOccurencInAnArray(arr, value){
	let count = 0;
	for (let i=0; i<arr.length;i++){
		if (arr[i] === value){
			count++;
		}
	}
	return count;
}
const arrL2 = ["Orange", "Mango", "Apple", "Orange", "Banana", "Mango", "Kiwi", "Orange" ];
const objL2 = {};
for (let i=0; i<arrL2.length; i++){
	let count = findOccurencInAnArray(arrL2, arrL2[i]); 
	if (!objL2[arrL2[i]])
		objL2[arrL2[i]] = count;

}
//console.log(objL2); //{ Orange: 3, Mango: 2, Apple: 1, Banana: 1, Kiwi: 1 }
//##################################Logics 2 ####################################//
//##################################Logics 3 ####################################//


// Palindrome
// Input - ['abccba','abcba',''aaabaaa','anna','SoloS','RotatoR','RadaR','RotoR','TenT','CiviC','KayaK','Lever','MadaM','RececaR','StatS','Redder','WoW','RefeR','NooN']
const arrL3 = ["abccba", "abcba", "aaabaaa", "anna", "SoloS", "RotatoR", "RadaR", "RotoR", "TenT", "CiviC", "KayaK", "Lever", "MadaM", "RececaR", "StatS", "Redder", "WoW", "RefeR", "NooN"];
let objL3 = {};
function reverseString(str){
	const arrStr = str.split("");
	const reversedArr = [];
	for (let i=arrStr.length-1;i>=0; i--){
		reversedArr.push(arrStr[i]);
	}
	const reversedStr = reversedArr.join("");
	return reversedStr;
}

for (let i=0; i<arrL3.length; i++){
	const reversedStr = reverseString(arrL3[i]);
	if (arrL3[i] === reversedStr)
		objL3[arrL3[i]] = "String is Palindrome";
	else
		objL3[arrL3[i]] = "String is not Palindrome";
	
}
//console.log(objL3);

//##################################Logics 3 ####################################//
//##################################Logics 4 ####################################//
//Sort an array
// Input -> [3,4,1,5,6,7]
const arrL4 = [3, 4, 1, 5, 6, 7];
for (let i=0; i<arrL4.length; i++){
	for (let j=i+1; j<arrL4.length; j++){
		if (arrL4[i]>arrL4[j]){
			let temp = arrL4[i];
			arrL4[i] = arrL4[j];
			arrL4[j] = temp;
		}
	}
}
//console.log(arrL4); //[ 1, 3, 4, 5, 6, 7 ]

//##################################Logics 4 ####################################//
//##################################Logics 5 ####################################//
//Input -> ['dog','stressed','god','desserts','civic','civic','albert','good']
//Output -> {'dog':'god','stressed':'desserts','civic':'civic'}
const arrL5 = ["dog", "stressed", "god", "desserts", "civic", "civic", "albert", "good"];
const objL5 = {};
for (let i=0; i<arrL5.length; i++){
	for (let j=i+1; j<arrL5.length; j++){
		if (arrL5[i] === reverseString(arrL5[j])){
			if (!objL5[arrL5[i]])
				objL5[arrL5[i]] = arrL5[j];
		}
	}
}
//console.log(objL5);

//##################################Logics 5 ####################################//



