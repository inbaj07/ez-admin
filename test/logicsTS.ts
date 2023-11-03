console.log("TS");
const add = (a:number,b:number)=>{
    return a+b;   
}
//console.log(add(1,2))
/* [ 
    { id:1, name: 'Shubham' }, 
    { id:3, name: 'Vikas' }, 
    { id:2, name: 'Akshay' }, 
    { id:4, name: 'Surendra' } ]

Output ===> { Shubham: 1, Vikas:3, Akshay: 2, Surendra:4 } */

const userArr = [ 
    { id:1, name: 'Shubham' }, 
    { id:3, name: 'Vikas' }, 
    { id:2, name: 'Akshay' }, 
    { id:4, name: 'Surendra' } ];
const userObj = {};
for(let i=0;i<userArr.length;i++){
    userObj[userArr[i].name] = userArr[i].id
}
//console.log(userObj);

// input -> [ 'Orange', 'Mango', 'Apple', 'Orange', 'Banana', 'Mango', 'Kiwi', 'Orange' ]
// output -> {'Orange':3,'Mango':2}

const findOccurence = (fruitsArr:string[],fruit:string)=>{
    let count = 0;
    for(let i=0;i<fruitsArr.length;i++){
        if(fruit == fruitsArr[i]) count++;
    }
    return count;
}
const fruitsArr = [ 'Orange', 'Mango', 'Apple', 'Orange', 'Banana', 'Mango', 'Kiwi', 'Orange' ];
let fruitsObj = {}
for(let i=0;i<fruitsArr.length;i++){
    let count = findOccurence(fruitsArr,fruitsArr[i])
    if(count > 1 && !fruitsObj[fruitsArr[i]])
         fruitsObj[fruitsArr[i]] = count
}
//console.log(fruitsObj);


const reverseString = function(str:string){
    return str.split('').reverse().join('')
}

const palindromeArr = ["abccba", "abcba", "aaabaaa", "anna", "SoloS", "RotatoR", "RadaR", "RotoR", "TenT", "CiviC", "KayaK", "Lever", "MadaM", "RececaR", "StatS", "Redder", "WoW", "RefeR", "NooN"];
let palindromeObj = {};

for(let i=0;i<palindromeArr.length;i++){
    if(palindromeArr[i] === reverseString(palindromeArr[i]))
        palindromeObj[palindromeArr[i]] = "Palindrome";
    else
        palindromeObj[palindromeArr[i]] = "Not Palindrome";
}
//console.log(palindromeObj)

const reverseNumber = function(num:number){
    let rev:number;
    rev = 0;
    let r:number;
    while(num > 0){
        r = num % 10;
        num = Math.round(num/10);
        rev = (rev * 10)+r
        console.log(r,num,rev)
    }
    return rev;
}
//console.log(reverseNumber(123))

const arrD = [3, 4, 1, 5, 6, 7];
for(let i=0;i<arrD.length;i++){
    for(let j=i+1;j<arrD.length;j++){
        if(arrD[i]>arrD[j]){
            let temp = arrD[i];
            arrD[i] = arrD[j];
            arrD[j] = temp;
        }
    }
}
//console.log(arrD)

//Input -> ['dog','stressed','god','desserts','civic','civic','albert','good']
//Output -> {'dog':'god','stressed':'desserts','civic':'civic'}

let arrPalindrome = ['dog','stressed','god','desserts','civic','civic','albert','good'];
let objPalindrome = {}

for(let i=0;i<arrPalindrome.length;i++){
    for(let j=i+1;j<arrPalindrome.length;j++){
        if(arrPalindrome[i] == reverseString(arrPalindrome[j]))
            objPalindrome[arrPalindrome[i]] = arrPalindrome[j];
    }
}
console.log(objPalindrome)

