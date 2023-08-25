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

/* 
{
    "categoryId": "6491a28190f0d8ef5b8f8010",
    "subCategory": [
        {
            "name": "Javascript"
        },
        {
            "name": "Python"
        },
        {
            "name": "ReactJS"
        },
        {
            "name": "NodeJS"
        }
    ]
}

{
    "status": true,
    "data": [
        {
            "_id": "6491a28190f0d8ef5b8f8010",
            "name": "IT",
            "subCategory": [
                {
                    "name": "Javascript",
                    "isActive": true,
                    "isDeleted": false,
                    "_id": "6492c354b1392a806496dc7d"
                },
                {
                    "name": "Python",
                    "isActive": true,
                    "isDeleted": false,
                    "_id": "6492c354b1392a806496dc7e"
                },
                {
                    "name": "ReactJS",
                    "isActive": true,
                    "isDeleted": false,
                    "_id": "6492c354b1392a806496dc7f"
                },
                {
                    "name": "NodeJS",
                    "isActive": true,
                    "isDeleted": false,
                    "_id": "6492c354b1392a806496dc80"
                }
            ]
        }
    ]
}


*/
///////////////////////////////////////////////////
// Reverse String

/* const str = "abc";
console.log(str.split("").reverse().join("")); //cba

const arr = ["a", "b", "c"];
console.log(arr.reverse()); //[ 'c', 'b', 'a' ] */

////////////////////////////////////////
///DUPLICATE
/* let arr = [1, 2, 3, 4, 5, 5, 6, 2, 3];
let dupArr = [];
for (let i=0;i<arr.length;i++){
	if ((arr.filter(ele=>ele == arr[i])).length > 1)
		if (!dupArr.find(ele=>ele === arr[i]))
			dupArr.push(arr[i]);
}  
console.log(dupArr); */
///////////////////////////////////////////
//Palindrome
//aabbaa aaabaaa

/* let str = "aabaafbaa";
const palindromeCheck = (i, j, str)=>{
	console.log(i, j);

	if (i>j){
		console.log("String is Palindrome");
		return;
	}
	
	if (str[i] == str[j])
		palindromeCheck(i+1, j-1, str); 
	else {
		console.log("String is not Palindrome");
		return;
	}
}; 
palindromeCheck(0, str.length-1, str); */
/////////////////////////////////////////////////////////////////////////
//["dog", "hello", "desserts", "test", "god", "stressed"];

//[["dog","god"], ["desserts","stressed"]]
/* 
let arr = ["dog", "hello", "desserts", "test", "god", "stressed"];
const reverseString01 = (str)=>{
	return str.split("").reverse().join("");
};
const palArr = [];
for (let i=0;i<arr.length;i++){
	let pal = [];
	for (let j=i+1;j<arr.length;j++){
		if (arr[i] === reverseString01(arr[j])){
			pal.push(arr[i], arr[j]);
		}
	}
	if (pal.length>0) palArr.push(pal);
}
console.log(palArr); */

////////////////////////////////////////////////////////

/* const ids = [1, 2];
const userArr = [
	{
		id:1,
		name:"Mike"
	},
	{
		id:2,
		name:"Simon"
	},
	{
		id:3,
		name:"Tim"
	},
	{
		id:4,
		name:"Tom"
	},
	{
		id:5,
		name:"Michel"
	},
];
const matchedArr = ids.map(ele => userArr.find(eleUser=>eleUser.id === ele));
console.log(matchedArr); */
///////////////////////////////////////////
/* 
let input = "abcdefghabcdba";
// output = {a:3, b:2}

let obj = {};
for (let i=0;i<input.length;i++){
	if (!obj[input[i]]){
		obj[input[i]] = 1;
	}
	else
		obj[input[i]]++;

}
console.log(obj);  //{ a: 3, b: 3, c: 2, d: 2, e: 1, f: 1, g: 1, h: 1 }

let input2 = "hello world";
// output = "olleh dlrow";
let sentenceArr = input2.split(" ");

let output = "";
for (let i=0; i<sentenceArr.length; i++){
	output += sentenceArr[i].split("").reverse().join("") + " ";
}
console.log(output); //olleh dlrow 
 */

// * Problem
/* let n = 5
for(let i=0;i<n;i++){
    let star = "";
    for(let j=0;j<=i;j++){
        star += "*";
    }
    console.log(star)
    //console.log("\n")
} */

//Prime Numbers Triangle
/* let n=105;
let prime = [];
for (let i=2;i<n;i++){
	let flag = 0;
	for (let j=2;j<i;j++){
		if (i%j == 0) flag = 1;
	}
	if (flag == 0) prime.push(i);
}
console.log(prime);
let k=0;
for (let i=0;i<prime.length;i++){
	let pNumber = "";
	for (let j=0; j<=i; j++){
		if (k == prime.length) break;
		pNumber += prime[k] + " ";
		k++;
	}
	console.log(pNumber);
	if (k == prime.length) break;
} */
//Output
/* 
2 
3 5 
7 11 13 
17 19 23 29 
31 37 41 43 47 
53 59 61 67 71 73 
79 83 89 97 101 103  
*/
//##################################Logics 6 ####################################//
//Print Number Highest Duplicates
//Input: [1,2,3,3,3,4,4,5,6,7,7,7,7,8,8,9]
//Output: 7: 4 //duplicates

/* const arrLogics6 = [1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 7, 7, 8, 8, 9];
const data = [...new Set(arrLogics6)];
console.log(data);
let highestNum = 0;
let count = 0;
let Logics6 = [];
for (let i=0; i<data.length; i++){
	Logics6 = arrLogics6.filter(ele=>ele == data[i]);
	if (count < Logics6.length){
		count = Logics6.length;
		highestNum = data[i];
	}        
} */
//console.log(highestNum+": "+count+" duplicates"); //7: 4 duplicates
//##################################Logics 6 ####################################//
//################################## Test ####################################//
/* [ 
    { id:1, name: 'Shubham' }, 
    { id:3, name: 'Vikas' }, 
    { id:2, name: 'Akshay' }, 
    { id:4, name: 'Surendra' } ]

Output ===> { Shubham: 1, Vikas:3, Akshay: 2, Surendra:4 } */
const obj = {};
const testArr = [ 
	{ id:1, name: "Mike" }, 
	{ id:3, name: "Tim" }, 
	{ id:2, name: "Michael" }, 
	{ id:4, name: "Jane" } ];
testArr.map(function(ele){
	return obj[ele.name] = ele.id; 
});
console.log(obj);

//[1,2,3,3,3,4,4,5,6,7,7,7,7,8,8,9]
const testArr01 = [1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 7, 7, 8, 8, 9];
const newArrTest01 = [...new Set(testArr01)];
let count = 0;
let highestNumDup = 0; 
for (let i=0;i<newArrTest01.length;i++){
	let c = (testArr01.filter(ele=>ele===newArrTest01[i])).length;
	if (count < c){
		count = c;
		highestNumDup = newArrTest01[i];
	}
}
console.log(highestNumDup+": "+count+" "+"times");
//################################## TEST ####################################//