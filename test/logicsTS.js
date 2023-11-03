console.log("TS");
var add = function (a, b) {
    return a + b;
};
//console.log(add(1,2))
/* [
    { id:1, name: 'Shubham' },
    { id:3, name: 'Vikas' },
    { id:2, name: 'Akshay' },
    { id:4, name: 'Surendra' } ]

Output ===> { Shubham: 1, Vikas:3, Akshay: 2, Surendra:4 } */
var userArr = [
    { id: 1, name: 'Shubham' },
    { id: 3, name: 'Vikas' },
    { id: 2, name: 'Akshay' },
    { id: 4, name: 'Surendra' }
];
var userObj = {};
for (var i = 0; i < userArr.length; i++) {
    userObj[userArr[i].name] = userArr[i].id;
}
//console.log(userObj);
// input -> [ 'Orange', 'Mango', 'Apple', 'Orange', 'Banana', 'Mango', 'Kiwi', 'Orange' ]
// output -> {'Orange':3,'Mango':2}
var findOccurence = function (fruitsArr, fruit) {
    var count = 0;
    for (var i = 0; i < fruitsArr.length; i++) {
        if (fruit == fruitsArr[i])
            count++;
    }
    return count;
};
var fruitsArr = ['Orange', 'Mango', 'Apple', 'Orange', 'Banana', 'Mango', 'Kiwi', 'Orange'];
var fruitsObj = {};
for (var i = 0; i < fruitsArr.length; i++) {
    var count = findOccurence(fruitsArr, fruitsArr[i]);
    if (count > 1 && !fruitsObj[fruitsArr[i]])
        fruitsObj[fruitsArr[i]] = count;
}
//console.log(fruitsObj);
var reverseString = function (str) {
    return str.split('').reverse().join('');
};
var palindromeArr = ["abccba", "abcba", "aaabaaa", "anna", "SoloS", "RotatoR", "RadaR", "RotoR", "TenT", "CiviC", "KayaK", "Lever", "MadaM", "RececaR", "StatS", "Redder", "WoW", "RefeR", "NooN"];
var palindromeObj = {};
for (var i = 0; i < palindromeArr.length; i++) {
    if (palindromeArr[i] === reverseString(palindromeArr[i]))
        palindromeObj[palindromeArr[i]] = "Palindrome";
    else
        palindromeObj[palindromeArr[i]] = "Not Palindrome";
}
//console.log(palindromeObj)
var reverseNumber = function (num) {
    var rev;
    rev = 0;
    var r;
    while (num > 0) {
        r = num % 10;
        num = Math.round(num / 10);
        rev = (rev * 10) + r;
        console.log(r, num, rev);
    }
    return rev;
};
//console.log(reverseNumber(123))
var arrD = [3, 4, 1, 5, 6, 7];
for (var i = 0; i < arrD.length; i++) {
    for (var j = i + 1; j < arrD.length; j++) {
        if (arrD[i] > arrD[j]) {
            var temp = arrD[i];
            arrD[i] = arrD[j];
            arrD[j] = temp;
        }
    }
}
//console.log(arrD)
//Input -> ['dog','stressed','god','desserts','civic','civic','albert','good']
//Output -> {'dog':'god','stressed':'desserts','civic':'civic'}
var arrPalindrome = ['dog', 'stressed', 'god', 'desserts', 'civic', 'civic', 'albert', 'good'];
var objPalindrome = {};
for (var i = 0; i < arrPalindrome.length; i++) {
    for (var j = i + 1; j < arrPalindrome.length; j++) {
        if (arrPalindrome[i] == reverseString(arrPalindrome[j]))
            objPalindrome[arrPalindrome[i]] = arrPalindrome[j];
    }
}
console.log(objPalindrome);
