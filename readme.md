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