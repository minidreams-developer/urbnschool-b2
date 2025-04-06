// Data types
// it will differs for each languages
// Two Categories
/*
    1. Primitive Data Types
        i) Number
        ii) BigInt 
        iii) String
        iv) Boolean
        v) null
        vi) undefined
        vii) symbol

    2. Non-primitive Data Types
        i) Object
        ii) Array
        iii) function


    declaration case
    1. camelCase
    2. PascalCase

    camelCase => sivaSudhan
    pascalCase => SivaSudhan

*/
// Primitive Data Types
// i) Number
// whole number, decimal number, infinity, -infinity, NaN

// ----------------------------Number---------------------------
let wholeNumber = 50;
let decimalNumber = 14.026;
let unlimited = Infinity;
let negativeUnlimited = -Infinity;

// typeof variableName
console.log("wholeNumber===>",typeof wholeNumber)
console.log("decimalNumber====>", decimalNumber)
console.log("unlimited====>", unlimited)
console.log("negativeUnlimited====>", negativeUnlimited)
console.log("Nan=====>", 10 * "hello")

console.log("===================== STRING =======================")


// ------------------------Strings------------------------------
// Syntax
// Represent three ways
// 1) single quote ' '
// 2) double quote " "
// 3) backticks   ` `

// double quotes
let name = "siva sudhan";
let userName = "siva09646";
console.log("userName===>", userName)
console.log("type===>", typeof userName)

// Single quote
name = 'Prince'
console.log("name====>", name)


// Backticks
userName = `prince2345`;
console.log("userName====>", userName)

// template literal
// ` ${variable}String`

let user = `${name}-${userName}`
console.log("TemplateLiteral======>", user)
console.log("======================Boolean====================")

// ----------------------Boolean------------------------------
// syntax
// true or false : used for conditional rendering
let isAdmin = false;
console.log("isAdmin------>", isAdmin)
console.log(" Type------>",typeof isAdmin)

isAdmin = true;
console.log("isAdmin------>", isAdmin)

// ----------------------BigInteger----------------------------
// Syntax
// Append n at last eg: 458458445522145884455214566448854554455214551455n

let bigInt = 458458445522145884455214566448854554455214551455n;
console.log("bitInt===>", bigInt)
console.log("Type=====>", typeof bigInt)


// ------------------------Null-----------------------------------
// intentinal absense of values

let noValue = null;

console.log("noValue===>", noValue)
console.log("type=====>", typeof noValue)
console.log("userName====>", userName)
userName = null;
console.log("userName====>", userName)

// -----------------------undefined------------------------------
// datatypes unclear or not yet defined
let age;

console.log("age==>", age)
console.log("Type==>",typeof age)

age = 25;

console.log("age after defined==>", age)
console.log("Type after defined==>",typeof age)


