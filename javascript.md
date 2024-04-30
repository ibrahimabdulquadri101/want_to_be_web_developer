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
 
- map()
  - The map() method is used to iterate through an array and return a new array. It's helpful when you want to create a new array based on the values of an existing array.
  - Notice that the map() method takes a function as an argument. This is called a callback function, which is a function that is passed to another function as an argument

- sort()
  - If you return a negative number, the first item is sorted before the second item. 
    ```javascript
    const fruits = [
    { name: "Apples", price: 0.99 },
    { name: "Blueberries", price: 1.49 },
    { name: "Grapes", price: 2.99 },
    ];
    fruits.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }

      if (a.name > b.name) {
        return 1;
      }

      return 0;
    });

    ```
- find()
  - The find() method retrieves the first element within an array that fulfills the conditions specified in the provided callback function. If no element satisfies the condition, the method returns undefined.x
 
 
## string
### string methods
- str.replace()
  - Since strings are immutable, the replace method returns a new string with the replaced characters.
- sting.repeat() 
  - This method accepts a number as an argument, specifying the number of times to repeat the target string
- str.match()
  - match the regex ,return the array.
  - the match method return null when nothing matches.
- str.toLowerCase()
  - When you need to lower case a string, you can use the toLowerCase() method
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
- a NodeList, which is array-like but is not an array. However, the Array object has a .from() method that accepts an array-like and returns an array.
  - `const listItemsArray = Array.from(document.querySelectorAll('li'));`
- The difference between innerText and innerHTML is that innerText will not render HTML elements, but will display the tags and content as raw text.
## ternary operator
- The ternary operator is a conditional operator and can be used as a one-line if-else statement. The syntax is: condition ? expressionIfTrue : expressionIfFalse.
- The first is the condition.

## Element: insertAdjacentHTML() method
- insertAdjacentHTML(position, text)
- position is a string
  - "beforebegin"
  - "afterbegin"
  - "beforeend"
  - "afterend"
  
###  localStorage

###  classList
- The toggle method will add the class if it is not present on the element, and remove the class if it is present on the element. `element.classList.toggle("class-to-toggle");`


### HTMLDialogElement: showModal() method
- The showModal() method of the HTMLDialogElement interface displays the dialog as a modal, over the top of any other dialogs that might be present.

## spread
- The spread operator (...) allows you to copy all elements from one array into another. It can also be used to concatenate multiple arrays into one
 
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]
```

## object 
- Optional chaining (?.) helps prevent errors when accessing nested properties that might be null or undefined. 
- 
```javascript 
const user = {
  name: "Quincy",
  address: {
    city: "San Francisco",
    state: "CA",
    country: "USA",
  },
};

// Accessing nested properties without optional chaining
const state = user.address.state; // CA

// Accessing a non-existent nested property with optional chaining
const zipCode = user.address?.zipCode; // Returns undefined instead of throwing an error
```


## Object
-  We are going to use a method called Object.freeze(obj) which will freeze this object and prevent any changes being made to it.
-  
  ```javascript
  The object destructuring syntax allows you to unpack values from arrays and objects:

  const developerObj = {
    name: "Jessica Wilkins",
    isDeveloper: true
  };

  // Object destructuring
  const { name, isDeveloper } = developerObj;
  ```


