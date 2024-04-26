# The notes about javascript

## data structure
- string immutable
- array mutable
- Non primitive data types are mutable data types that are not undefined, null, boolean, number, string, or symbol. Mutable means that the data can be changed after it is created.
## variable names use camel case
- let define the variable but variabe can change anytime
- const define the variable but the variable cant change anytime
- - const define a variable must have the value not the undefined
## array
- push() 
  - push() returns the new length of the array, after adding the value you give it.
- pop() 
  - delete the last element and return the value;
  - return the popped value
 - unshift()
  -The unshift() method of an array allows you to add a value to the beginning of the array,and return the length of the array.
- shift()
 - Arrays also have a .shift() method. This will remove the first element of the array  
 ## string
 ### string methods
- str.replace()
  - Since strings are immutable, the replace method returns a new string with the replaced characters.
- sting.repeat() 
  - This method accepts a number as an argument, specifying the number of times to repeat the target string
- str.match()
  - match the regex ,return the array.
  - the match method return null when nothing matches.
## scope 
- Variables in JavaScript are available in a specific scope. In other words, where a variable is declared determines where in your code it can be used.
- The first scope is the global scope. Variables that are declared outside of any "block" like a function or for loop are in the global scope
- A variable declared inside a function can only be used inside that function
- An important thing to know about the return keyword is that it does not just define a value to be returned from your function, it also stops the execution of your function code.
- Returning a value from a function brings that value into the scope where the function was called.
## Use the space " "  to occupy the space 
## Boolean
- JavaScript has a defined list of falsy values. Some of them include false, 0, "", null, undefined, and NaN.
## "=="
- "0" == 0 is true because the data structure can change automatic
## "==="
- The strict equality operator === is used to check if two values are equal and share the same type. 
- this is the equality operator you should always use
## "!=="
- The strict inequality operator !== allows you to check if two values are not equal, or do not have the same type. 
## The logical OR operator
- The logical OR operator will use the first value if it is truthy – that is, anything apart from NaN, null, undefined, 0, -0, 0n, "", and false. Otherwise, it will use the second value.


## DOM
- queryselector()
  - The querySelector() method takes a CSS selector as an argument and returns the first element that matches that selector. 

## ternary operator
- The ternary operator is a conditional operator and can be used as a one-line if-else statement. The syntax is: condition ? expressionIfTrue : expressionIfFalse.
- The first is the condition.

