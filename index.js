// Write your code here!

// //creates a div element in the body
// const element = document.createElement('div')
// document.body.append(element)

// //creates a ul element
// const ul = document.createElement('ul')

// // creates three list items with text context in each li
// // Each li is appended to ul above
// for (let i = 0; i < 3; i++) {
//     const li = document.createElement('li')
//     li.textContent = (i + 1).toString()
//     ul.append(li)
// }

// // Appends the ul with the three li's to our created div
// element.append(ul)

const main = document.querySelector('main')
main.remove();

const newHeader = document.createElement('h1')
newHeader.id='victory'
newHeader.textContent='William is the champion'
document.body.append(newHeader)