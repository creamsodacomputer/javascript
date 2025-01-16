// w h a t    i s    j a v a s c r i p t ?
//- high level: we don't have to worry about complex stuff like memory management
//- object-oriented: based on objects for storing most kinds of data
//- multi-paradigm: flexible and versatile, can use imparative and declarative styles
//- programming language: instructs computers to do something

// t h e   r o l e   o f   j s   i n    w e b d e v
// core web tech : html, css, js
// html (noun): content of the page
// css (adjective - describing the noun): presentation of that content
// js (verb - doing something): progg lang of the internet
//     - add dynamic interactive effects
//     - manipulate content or css
//     - load data from remote servers
//     - build entire apps called web apps

// f r a m e w o r k s
// - react
// - vue
// - angular
// they are all purely js

// js can also run outside of web browsers.
// eg on web server (not browser): node.js - backend apps
// js on browser: frontend apps

// also used to create native mobile and web apps
// there's nothing that you can't build after getting good at js

// js versions
// es: ecma script
// - es5
// - es6/es2015: huge update
// - other updates: modern js

// V A L U E S   &   V A R I A B L E S
// value: piece of data, the most fundamental unit of info
// variable: label attached to a value (box to store value)
// CONVENTIONS TO NAME VARIABLES
// camel case: firstName, lastName, first, firstNamePerson
// underscore(popular in ruby): first_name, first_name_person
// variable names can only contain numbers, letters, _ or $
// DONOT
// -> 3years = 3 (illegal, starts with a number)
// -> jonas&matilda = 'JM' (& illegal)
// -> new = 27 (illegal, new is a reserved keyword in js)
// name = 27 (reserved keyword, but allowed to use)
// Person = 'soda'; (captial case only for objects)
// PI = 3.1415 (uppper case for constants that will never change)
//use DESCRIPTIVE variable names, VERY IMPORTANT

// D A T A   T Y P E S
// value in js is of 2 types:
// 1. object value
//    eg: let me = {
//          name: 'soda';
//        }
// 2. primitive value
//    eg: let firstName = 'soda';
//        let age = 26;
// There are 7 PRIMITIVE DATA TYPES
// 1*. number: floating point numbers (decimals & integers)
// 2*. string:sequence of characters, always put in '' & ""
// 3*. boolean: logival type, true or false, for decisions
// 4. undefined: value of a variable not yet defined 'empty value'
// 5. null: also 'empty value', used in diff circumstances
// 6. symbol: introduced in ES6, unique and can't be changed?
// 7. bigint: integers that are too large to be represented by the number type
// DYNAMIC TYPING
// you don't have to manually define the type the variable contains.
// js automatically detects the type. you don't have to manually define it.
// the value has a type, NOT THE VARIABLE.

// C O D E    C O M M E N T I N G
// - used to mention what a section of code does
// - a section of code that you don't want to use
// - multiline /* insert code here */



let js = 'amazing';
// different valuses used to create one value
console.log(40 + 8 + 23 - 10);

// different valuse
console.log("soda");
console.log("26");

// storing values in variables
let firstName = "sodae";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let cream_soda = 'cs';
let $function = 27;
let _function = 27;

let person = 'soda';

// more descriptive variable names
let myFirstJob = "coder";
let mySecondJob = "designer";

// less descriptive variable names
let job1 = "coder";
let job2 = "designer";

console.log(myFirstJob);

true; //automatically a boolean value
console.log(true); // not a string
let javascriptIsFun = true;
console.log(javascriptIsFun);
// value holds the data type and not the variable

// T Y P E    O P E R A T O R
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 26);
console.log(typeof 'soda');
// always need quaotes to create a string "" or ''

// D Y N A M I C    T Y P I N G
javascriptIsFun = 'YES!' // don't write 'let' again
// just assign a new value
console.log(typeof javascriptIsFun);

let year; //declaration of an empty variable
console.log(year); // undefined = empty value
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

// TYPEOF ERROR
console.log(typeof null); // it says it is an object
// doesn't make any sense at all, considered as a bug
// never corrected for legacy reasons
// null is not an object though