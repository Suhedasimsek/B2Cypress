//creating array
var scores=new Array(); //empty
var numbers=new Array(10);//array with initial size 10  1.yol
var athletes= Array(3)//array with initial size 10      2.yol
var myNumber=new Array(9,5,10,3); //aray with initial elements
var sing=Array('Red'); //Array with 1 element

//array examples
let tools=["Jest","Selenium","Cypress","TestCafe","PhantomJS","Protractor"]

//accesing array element
console.log(tools)
console.log(tools.toString())
console.log(tools[0])

const string= tools.toString();
console.log(string)

const join=tools.join("*")
console.log(join)

const pop=tools.pop()  //removes an element from the end of the array
console.log(tools)
console.log(pop)

const push=tools.push("SlimerJS") //add element to end of the array
console.log(tools)
console.log(push)  

const shift=tools.shift() //removes an element from the beginning of the array 
console.log(tools)
console.log(shift) 

const unshift=tools.unshift("Selenoid") //removes an element from the beginning of the array 
console.log(tools)
console.log(unshift) 

const sort=tools.sort() //sort array A-Z
console.log(tools)
console.log(sort) 

const reverse=tools.reverse() //reverse elements
console.log(tools)
console.log(reverse) 

tools.forEach((value)=>{
    if(value=="Cypress"){
        console.log("Cypress is trending now")
    }else{
        console.log("Element not found")

    }
})