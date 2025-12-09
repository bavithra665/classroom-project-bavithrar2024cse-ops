var a=5; //var
var a=10;
a=15;
console.log(a);

// let
let a = 5;
// let a = 10; ❌ not allowed
a = 10;     // ✔ allowed
console.log(a);

// const can be redeclared or update
const pi=3.14;
console.log(pi);

//funct declare
function greet(){
    console.log("Hello");
}
greet();

//function parameter
function add(a,b){
    console.log(a+b);
}
add(2,4);
function mul(a,b){
    console.log(a*b);
}
mul(4,5);
function div(a,b){
    console.log(a/b);
}
div(10,5);

//function return value
function mul(a,b){
    return a*b;
}
let result=mul(2,4);
console.log(result);
 //function expression
 let greet = function() {
    console.log("Hi!");
}
greet();


//sir taught

/*let a = 10;
let b = 20;
console.log(a + b);

console.log(a1);
var a1=20;
console.log(a1);*/

//functions
//1.Named Functions
//2.function declarations

function namedFunc(){
    console.log("Function called");
    console.log("Function called");
    console.log("Function called");
}
//function called or invoked
namedFunc();
 //funcExp();
//2.Function Expression
let funcExp=function(){
    console.log("Function Expression Called");
}
funcExp();

//3.Arrow Functions(ES6)
let arrow =() =>{
    console.log("Arrow Function called");
};
arrow();

//4.callback function and 5.IIFE(immediately invoked function expression)

(()=>{
    console.log("callback and iife called");
})();

const addTwonumbers =() =>{
    let num1=10;
    let num2=4;
    let num3=9;
    let sum=num1+num2+num3;
    console.log("the sum is ",sum);
}
addTwonumbers();
//parameters are indide bracket like (parameter1,parameter2,parameter3)
//argments are like let num1 = parameter1;

const addNumbers=(parameter1,parameter2) =>{
    console.log(parameter1,parameter2);
    let num1 = parameter1 || 100 ;//to avoid that undefined we are giving values here itself
    let num2 = parameter2 || 200;
    let sum1=num1+num2;
    console.log("the sum is",sum1);
}
addNumbers(20,60);
addNumbers(1,2);
addNumbers();

//other operations
const subNumbers=(para1,para2) =>{
    console.log(para1,para2);
    let num1=para1 || 4;
    let num2=para2 || 3;
    let sub=num1-num2
    console.log("the sub is",sub);
}
subNumbers(3,2);
subNumbers();

const addTwoNumbers = (a, b) => { 
    console.log(a, b);

    let n1 = a || 10;
    let n2 = b || 20;
    let sum = n1 + n2;

    console.log("the sum of two numbers is:", sum);
    //console.log(the sum of two numbers is:${sum}, sum);
    //the sum of a value is value n b value is value
};
addTwoNumbers(20, 50);
addTwoNumbers(40, 50);
addTwoNumbers();

// array and loop concepts
let a = 10;
let b = "2";
console.log(2 === "2");

let c = [1, 2, 3, "aaa"];
let d = [1, 2, 3, "aaa"];
console.log(c[0]===d[0]);

let arr4=[1, 2, 3, 4, 5];
//for loop
for (let i = 0;i<arr4.length;i++){
    arr4[i] = arr4[i] + 1;
}
console.log(arr4);

let arr3 = [1, 2, 3, 4, 5];
//for each
arr1.foreach((element, index) => {
    console.log(element, index);
});

let arr2 = [1, 2, 3, 4, 5];
    //let aa=arr.map(el,ind)=>{
        //return el+ind;
//});
let a = arr.map((el, ind) => +ind);
console.log(arr2);
console.log(aa);

//filter
let h = [1,2,3,4,5,6,7,8,9];

let g = h.filter((el,ind)=>{
    return el%2==0;
});
console.log(g);

//assignment1
//1
function createarr(arg1,arg2,arg3){
    return [arg1,arg2,arg3];
}
let output = createarr(1,2,3);
console.log(output);

//2
function stringonly(a, b, c) {
    let result = [];
    if (typeof a === "string") result.push(a);
    if (typeof b === "string") result.push(b);
    if (typeof c === "string") result.push(c);

    return result;
}
console.log(stringonly(1, "bavi", "somi"));

//3
function square(a,b,c){
    return[a*a,b*b,c*c];
}
console.log(square(2,3,4));

//4
let arr5=[2,4,5];
for(let i=0;i<arr5.length;i++){
    if(arr5[i]%2==0){
        console.log(arr5[i]);
    }
}
//5
function collectnames(a, b) {
    let result = [];
    result.push(a.toUpperCase());
    result.push(b.toUpperCase());

    return result;
}
console.log(collectnames("sid", "raj"));

//6
function user(name,city,age){
    return[
        {
            age: age,
        }
    ];
}
console.log(user("Sid","Delhi",22));

//7
