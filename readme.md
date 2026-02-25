## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


`ans:` **getElementByID**
   * it select single element by it's id
   * returns only one element and null if there is no element

**getElementsByClassName**
* it select elements using class name
* it can select multiple element all at once
* it returns HTMLCollection where forEach() doesn't work

**querySelector**
* it select the first element that matches a css selector
* we can use any valid css selector 

**querySelectorAll**
* it selects all the element matching the css selector we use in it
* it returns NodeList
* we can use forEach() method 


## 2. How do you create and insert a new element into the DOM?


* i use `document.createElement()` method to create a new element first. for example: <br>
   `document.createElement("div")` <br> this wil create a `div`. now i will keep it in some variable. `const newDiv = document.createElement("div")` <br> after that we would have to add content on it. we can add text, classes or atributes on the element we just created. like this <br> `newDiv.innerText = "Hello World!";
   newDiv.className = "my-class";
   newDiv.id = "greeting";`

* the next step is to insert the element into the dom. we can append that element using .append(), appendChild() method. for example: <br>
`document.body.appendChild(newDiv);`.



