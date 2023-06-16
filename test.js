var permArr = [], usedChars = [];
function permute(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};
//console.log(JSON.stringify(permute([5, 3, 7, 1])))

/* let count = 0;
function counter(){
  return count++;
}
console.log("Counter: ",counter());
console.log("Counter: ",counter());
console.log("Counter: ",counter());
console.log("Counter: ",counter());
console.log("Counter: ",counter());
console.log("Counter: ",counter()); */

/*
Output: 
Counter:  0
Counter:  1
Counter:  2
Counter:  3
Counter:  4
Counter:  5 
*/

//Closure
/* function getCounter(){
  let count = 0;
  return function(){
    return count++;
  }
}

const counter = getCounter();
console.log("Counter: ",counter());
console.log("Counter: ",counter());
console.log("Counter: ",counter());
console.log("Counter: ",counter());
console.log("Counter: ",counter());
console.log("Counter: ",counter()); */

/* 
Output:
Counter:  0
Counter:  1
Counter:  2
Counter:  3
Counter:  4
Counter:  5
*/

//factorial

/* let fact = 1
function factorial(n){
  if(n==0)
    return fact;
  return fact = n * factorial(n-1);
}
console.log("Factorial: ",factorial(5));
 */


/* 
var arr = [1,2,3];
function permutation(arr){
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;i++){

    }
  }
} */

//Interview Question

/* 
function testFunction() {
  let a = b = 0; //b treat as global like global.b
  a++;
  return a;
}
testFunction();
console.log("typeof a", typeof a); //typeof a undefined
console.log("typeof b", typeof b); //typeof b number
 */
/* 
typeof a undefined
typeof b number
*/
/* 
//let var diff
let a1 = 1
var b1 = 10
if(true){
  let a1 = 2;
  var b1  = 11;
}
console.log(a1,b1); //1 11
 */

//Convert javascript array to JSON

/* const employee = [
  {
    "name":"John",
    "age": 30
  },
  {
    "name":"Simon",
    "age": 30
  }
];
console.log(JSON.stringify(employees)); */

//Clone an Array


/* let nestedNumbers = [[1], [2]];
let numbersCopy = nestedNumbers;
//with out cloning an array
numbersCopy.push([3]) 
console.log(numbersCopy); //[ [ 1 ], [ 2 ], [ 3 ] ]  //Here Both array affected
console.log(nestedNumbers); //[ [ 1 ], [ 2 ], [ 3 ] ]

//Cloning an array
numbersCopyCloning = JSON.parse(JSON.stringify(nestedNumbers));
numbersCopyCloning.push([4]); 
console.log(numbersCopyCloning); //[ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]
console.log(nestedNumbers); //[ [ 1 ], [ 2 ], [ 3 ] ]
 */
//structuredClone/Cloning an array
/* let arr2 = [1,2,3,4];
const arr1 = [
  {
    name:'inba',
    data:{test:structuredClone(arr2)}
  }
]
arr2.push(1)
console.log(arr1[0].data) */
//flat array

/* const arr = [1,2,3,[[4]],[5]];
console.log(arr.flat()); // [ 1, 2, 3, [ 4 ], 5 ]  one level depth flat
console.log(arr.flat(2)); // [ 1, 2, 3, 4, 5 ]  two level depth flat
 */

//Recursion Factorial

/* const factorial = (fact) => {
  if (fact == 0)
    return 1;
  return fact * factorial(fact - 1);
}
console.log(factorial(999)); //Infinity

const factorialForLoop = (fact)=>{
  if (fact == 0)
    return 1;
  let f=1;
  for(let i=1;i<fact;i++){
    f*=i;
  }
  return f;
}
console.log(factorialForLoop(999)); //Infinity
 */

//Array slice
/* 
const arr = ['a','b','c','d'];
const outputArr = arr.slice(0,2);
console.log(outputArr); //[ 'a', 'b' ]
 */

//Array splice  
/* 
const arr2 = [1,2,3,4,5,6,8,9];
const outputArr2 = arr2.splice(6,1,7);
console.log(arr2); //[ 1, 2, 3, 4, 5, 6, 7, 9 ]
console.log(outputArr2);//[]
 */

//Remove duplicate using set
/* 
const arr = [1,2,3,3,4,5];
const data = [...new Set(arr)];
console.log(data);
 */

//spread operator not working for obj
/* 
const arr = [1,2,3]
const obj = {a:'a',b:'b',c:'c'};
console.log([...arr,...obj]); //TypeError: obj is not iterable  
 */


//Destructuring using object
/* 
const obj = {one:1,two:2,three:3};
const {three,two} = obj;
console.log(three,two);//3 2
 */

//Destructuring using Array
/* 
const arr = [0,1,2,3];
const [x,y,z] = arr;
console.log(x,y,z); // 0 1 2
 */

// for in vs for of
/* 
let arr = ['a','b','c','d','e'];
//for in
for(const key in arr){ // you can access index(key)
    console.log(key);
    console.log(arr[key]);
}
// 0 a 1 b 2 c 3 d 4 e 

//for of
for(const element of arr){ // you can access element(value)
  console.log(element);
}
//a b c d e
 */

//Blocking and Non-Blocking Code
/* const syncFunc = () => {
  console.log("Sync Function Exec");
}

const asyncFunc = async () => {
  console.log("Async Function Exec")
}

const start = performance.now();
syncFunc();
const end = performance.now();
console.log('Execution time sync fn in sec: ', (end - start) / 1000 + 's');

const start1 = performance.now();
asyncFunc().then((resolve,reject)=>{
  resolve;
});
const end1 = performance.now();
console.log('Execution time async fn in sec: ', (end1 - start1) / 1000 + 's'); */

/* 
Sync Function Exec
Execution time sync fn in sec:  0.005647173999808729s
Async Function Exec
Execution time async fn in sec:  0.00017696900013834237s
*/

//Call back to promise to async/await

//Callback to Promise
/* const fs = require('fs');
const { promisify } = require('util');
const readFileP = promisify(fs.readFile);
readFileP("./.eslintrc.js",'utf8').then(data=>{
  console.log(data);
}).catch(err=>console.log(err)) */

//Promise to Async/Await
/* const fetchURL = async ()=>{
  const response = await fetch("https://swapi.dev/api/people/1")
  const data = await response.json(); 
  return data;
}

fetchURL().then(data=>{
  console.log(data);
}) */


// Array Function

//Array Map --> Map each element and returns new array

/* let arr = [
  { id:1, name:'Inba', dept:'CSE', designation:'PHP Developer' },
  { id:2, name:'Karthik', dept:'CSE', designation:'Android Developer' },
  { id:3, name:'Vasu', dept:'CSE', designation:'PHP Developer' },
  { id:4, name:'Ashwin', dept:'CSE', designation:'PHP Developer' },
  { id:5, name:'Naidu', dept:'CSE', designation:'PHP Developer' },
];
const ids = arr.map(ele=>ele.id);
//console.log(ids); // [ 1, 2, 3, 4, 5 ]

let numbers = [1,2,3,-1];
let mappedItems= numbers.map(ele=> ele >= 0)
console.log(mappedItems); //[ true, true, true, false ]
mappedItems= numbers.map(ele=> ele*2);
console.log(mappedItems);//[ 2, 4, 6, -2 ]
mappedItems= numbers.map(function(ele){
  return "<li>"+ele+"</li>";
});
console.log(mappedItems);//[ '<li>1</li>', '<li>2</li>', '<li>3</li>', '<li>-1</li>' ]
let joinedArr = mappedItems.join('');
console.log(joinedArr);//<li>1</li><li>2</li><li>3</li><li>-1</li>

const filteredItems= numbers.filter(ele=> ele >= 0)
console.log(filteredItems); //[ 1, 2, 3 ] */

//Array Filter 
/*
const filteredArr = arr.filter(element=>element.designation === "PHP Developer");
console.log(filteredArr);
 */
/* 
Output
[
  { id: 1, name: 'Inba', dept: 'CSE', designation: 'PHP Developer' },
  { id: 3, name: 'Vasu', dept: 'CSE', designation: 'PHP Developer' },
  { id: 4, name: 'Ashwin', dept: 'CSE', designation: 'PHP Developer' },
  { id: 5, name: 'Naidu', dept: 'CSE', designation: 'PHP Developer' }
]
*/
/* 
const data = arr.find(element=> element.name === "Inba" );
console.log(data); //{ id: 1, name: 'Inba', dept: 'CSE', designation: 'PHP Developer' }
 */

/* //Array Concat
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = arr1.concat(arr2)
console.log(arr3); //[ 1, 2, 3, 4, 5, 6 ]

//Split
let str = "Hello World";
let splitedStr = str.split("");
console.log(splitedStr) ; // [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']

// Array Join
let joinedStr = splitedStr.join('');
console.log(joinedStr); //Hello World

//Array Reduce
const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sum = array1.reduce(
  (acc, curValue) => acc + curValue,
  initialValue
);
console.log(sum); // 10 */

//Check output
//Delete Object

/* let obj = {
  foo:1
}
delete obj.Foo;
console.log(obj.Foo); //undefined
console.log(obj.foo); //1
delete obj.foo;
console.log(obj.foo);//undefined */

