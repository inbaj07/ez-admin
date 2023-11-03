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
/* const obj = {};
const testArr = [ 
	{ id:1, name: "Mike" }, 
	{ id:3, name: "Tim" }, 
	{ id:2, name: "Michael" }, 
	{ id:4, name: "Jane" } ];
testArr.map(function(ele){
	return obj[ele.name] = ele.id; 
});
console.log(obj); */

//[1,2,3,3,3,4,4,5,6,7,7,7,7,8,8,9]
/* const testArr01 = [1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 7, 7, 8, 8, 9];
//Highest Number Duplicate
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
console.log(highestNumDup+": "+count+" "+"times"); */
//################################## TEST ####################################//

//3i infotech

//Questions Blocked me
//MongoDB Aggregation
//MongoDB Query
//Axios
//How to write Middleware


/* type of nan
"0"+5 === "05"

0===false
call bind
obsevable
 */
/* 
console.log(typeof(NaN));//number
console.log(typeof(null));//Object
console.log(typeof(undefined));//undefined
console.log("0"+5 === "05");//true
console.log(0===false);//false
console.log(0==false);//true
 */
/* ------------------------------------------------------------------------------------
Crion
----------
------------
const user = require("./controller/User");

app.get("user/list",user.userList);



//Controller

const userList = async()=>{
    sql = "select firstname,lastname,email,dob,status from user ";

}

student
name, id,mark  deptid

1 Inba 100
2 Test2 100
3 test3 90
4 test4 100



create table student(id int(5),name varchar(40),mark int(3))

dept
id deptname studentid
1   CSE     1
2   ECE     2
3   EEE     3


select s.name,d.deptname from student S 
INNER JOIN ON dept D D.studentid = S.id


name    deptname
Inba    CSE
Test2   ECE
test3   EEE
test4   null

-----------------------------------------
db.orders.aggregate([
    {
        $lookup:{
            from:"users",
            localField:"userDetails.uId",
            foreignField:"_id",
            as: "orderDetails"     
            }
    }
    ]);
--------------------------------------------
 */

// 0 1 1 2 3 5 8 13 . . . . 
// 0 1 2 3 4 5 6 7 . . . . .

const fibonacciSeries = (n)=>{
	let i=2;
	let a = 0;
	let b = 1;
	if (n == 0) return 0;
	if (n == 1) return 1;
	while (i<=n){
		let c = BigInt(a)+BigInt(b);
		if (i==n) return BigInt(c);
		a=BigInt(b);
		b=BigInt(c);
		i++;		
	}
};
//console.log(fibonacciSeries(10000));
/* function fibonacci(n) {
	let sequence = [0n, 1n];
  
	for (let i = 2; i <= n; i++) {
		sequence[i] = BigInt(sequence[i - 1])
            + BigInt(sequence[i - 2]);
	}
	return sequence;
}
console.log(fibonacci(1000)); */


/* function towerOfHanoi(n, from_rod,  to_rod,  aux_rod)
{
	if (n == 0) return;	
	towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
	console.log(n + " : " + from_rod + " to " + to_rod);
	towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}  
var N = 1;      
// A, B and C are names of rods
towerOfHanoi(N, "A", "B", "C"); */
/* 
function migrateRings(n, source,  destination,  aux)
{
	if (n == 0) return;	
	migrateRings(n - 1, source, aux, destination);
	console.log(n + " : " + source + " to " + destination);
	migrateRings(n - 1, aux, destination, source);
}  
let N = 3;      
migrateRings(N, "A", "B", "C"); */

/* 
//Output: [["eat","tea","ate"],["tan","nat"],["bat"]]


const similarWord = (arr,word)=>{
  if(arr.length === 0){
    arr = [[word]];
    return arr;
  }
    
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length; j++){
      if(arr[i][j].length === word.length){
        for(let k=0;k<word.length;k++){
          console.log(arr[i][j].split(''))
          if(arr[i][j].split('').find(ele=>ele === word[k])){
            if(k===word.length - 1)
              arr[i].push(word)
          }
        }
      }
    }
  }
  return arr;
}

var givenArr =  ["eat", "tea", "tan", "ate", "nat", "bat"]
let outputArr = [];
for(let i=0;i<givenArr.length;i++){
  outputArr =  similarWord(outputArr,givenArr[i]);
  console.log(outputArr)
} */


/* const permute = function(nums){
	let result = [];
	if (nums.length == 0) return [];
	if (nums.length == 1) return [nums];
	for (let i=0;i<nums.length;i++){
	  const currentNum = nums[i];
	  const remainingNums = nums.slice(0, i).concat(nums.slice(i+1));
	  console.log(remainingNums);
	  const remainingNumsPermuted = permute(remainingNums);
	  console.log(remainingNumsPermuted.length);
	  console.log(remainingNumsPermuted);
	  console.log("\n");
	  for (let j=0;j<remainingNumsPermuted.length;j++){
		  const permutedArr = [currentNum].concat(remainingNumsPermuted[j]);
		  result.push(permutedArr);
	  }
  
	}
};
console.log(permute([1, 2, 3])); */


/////////////////////////////////////////////////////////////////////////////////
/* Given: [1, 2, 3, 4, 5] and [2, 4, 6, 8, 10]
Output: 2 and 4
Question: Find the same numbers in those two arrays?

 */

/* let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 4, 6, 8, 10];
for (let i=0;i<arr1.length;i++){
	const data = arr2.find(ele=>ele == arr1[i]);
	if (data)
		console.log(data);
} */
//////////////////////////////////////////////////////////////////////////////////////////
//least Duplicate

const leastDuplicateInArray = function(arr){
	let leastDuplicate = 0;
	let data = 0;
	for (let i=0;i<arr.length;i++){
		if (leastDuplicate == 0){
			leastDuplicate = (arr.filter(ele=>ele == arr[i])).length;
			data = arr[i];
		}
		else if (leastDuplicate > arr.filter(ele=>ele == arr[i]).length){
			leastDuplicate = arr.filter(ele=>ele == arr[i]).length;
			data = arr[i];
		}
	}
	return { leastDuplicate, data };
};
//const arrLD = [1, 1, 2, 3, 3, 3];
//console.log(leastDuplicateInArray(arrLD));

//////////////////////////////////////////////////////////////////////////////////////////

/* Given: Hello World
Requirement:
- Change all consonants to lowercase
- Change all vowels to uppercase
 
Output: "hEllO wOrld" */

const str = "Hello World";
const vowels = ["a", "e", "i", "o", "u"];
let arrHello = str.split("");
for (let i=0;i<arrHello.length;i++){
	if (vowels.find(ele=>ele===arrHello[i].toLowerCase()))
		arrHello[i] = arrHello[i].toUpperCase();
	else
		arrHello[i] = arrHello[i].toLowerCase();
}
let str2 = arrHello.join("");
//console.log(str2)
/////////////////////////////////////////////////////////////////////


/* const reverseString01 = function(str){
	return str.split("").reverse().join("");
};

const isPalindrome = function(str){
	if (str.length == 1 && str.length == 2) return false;
	if (str === reverseString01(str)) return true;
	return false;
};
let palindromeStr = "aabccssddssftfyjy";
let largestPalindromeStringCount = 0;
let largestPalindromeString = "";
let i=0;
for (let j=1;j<palindromeStr.length;j++){
	const slicedStr = palindromeStr.slice(i, j);
	console.log(slicedStr);
	if (isPalindrome(slicedStr)){
		i=j+1;
		j=i+1;
		if (slicedStr.length > largestPalindromeStringCount){
			largestPalindromeString = slicedStr;
			largestPalindromeStringCount = slicedStr.length;
		}
	}
} */
 
//console.log(largestPalindromeString, largestPalindromeStringCount);