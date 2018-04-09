//lesson 13 object literal scripts

const person = {
  firstName: 'shuai',
  lastName: 'wang',
  age: 30,
  hobbies: ['music', 'sport'],
  address: {
    city: 'Milan',
    state: 'Lombardia'
  },
  getBirthYear: function(){
    return 2018 - this.age;
  }

};

let val;
val = person.age;

val = person.getBirthYear();

val = person.address.city;

val = person.address.state;

console.log(val);

const people = [
  {name: 'Mike', age: 30},
  {name: 'Yan', age: 20},
  {name: 'Shuai', age: 29}

];

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
  console.log(people[i].age);
}


//lesson 14 Dates&Times

let val;

const today = new Date();
let birthday = new Date('05-10-1988 07:07:07');
birthday = new Date('october 10 1988');
birthday = new Date('05/10/1988');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getTime();

birthday.setMonth(10);
birthday.setDate(2);
birthday.setFullYear(2019);

console.log(birthday);

//lesson 15 If statements & Comparison operators

const id = 100;

// // equal to
// if(id == 101){
//   console.log('correct');
// } else {
//   console.log('error');
// }

// // not eqaul to
// if(id != 10){
//   console.log('correct');
// } else {
//   console.log('error');
// }

// // equal to value and type

// if(id === 100){
//   console.log('correct');
// } else {
//   console.log('error');
// }

// // not equal to value and type

// if(id !== 100){
//   console.log('correct');
// } else {
//   console.log('error');
// }


// test if undefined
// if (typeof id !== 'undefined') {
//   console.log(`the id is ${id}`);
// } else {
//   console.log('no id')
// }

//greater oe less than

//if else

// const color = 'yellow';

// if (color === 'red'){
//   console.log('color is red');
// } else if (color === 'blue'){
//   console.log('color is blue')
// } else {
//   console.log('color is not red or blue')
// }

// logical operators

// and &&
const name = 'Steve';
const age ='16';
 if (age >0 && age < 12){
  console.log(`${name} is a child`);
 } else if (age >= 13 && age <= 19){
   console.log(`${name} is a teenager`)
 } else {
   console .log(`${name} is a adult`)
 }


 // or  ||

 if (age < 16 || age > 65){
   console.log(`${name} can not race`);
 } else {
   console.log(`${name} is regitered for the race`)
 }

 // ternary operator
 console.log(id === 100 ? 'correct' : 'incorrect');

 // without braces

//  if (id === 100)
//  console.log('correct');
//  else
//  console.log('incorrect');

// lesson 16 Switches

const color = 'yellow';


switch(color){
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is not red or blue');
    break;
}

switch(new Date().getDay()){
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`)

// lesson 17 Function Declarations & Expressions

function greet(firstName = 'John', lastName = 'Doe'){
  return 'Hello ' + firstName + ' ' + lastName;
};

console.log(greet('shuai', 'wang'))

//function expressions

const square = function(x = 3){
  return x*x;
};

console.log(square(7));

//immidaitley invokable function expressions - IIFEs

(function(name){
  console.log('Hello ' + name)
})('Shuai');

// property methods

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(){
  console.log('Delete todo...')
}

todo.add();
todo.edit(22);
todo.delete();

//general loops lesson 18

// for loop

// for (let i = 0; i <= 10; i++){
//   // console.log('Numner is ' + i);
//   if(i === 2){
//     console.log('2 is my favorite number');
//     continue;
//   }
//   if(i === 5){
//     console.log('Stop the loop')
//     break;
//   }

//   console.log('Number is ' + i)
// }

//while loop

// let i = 0;

// while(i < 10){
//   console.log('number is '+i);
//   i++;
// }

// do while

// let i = 0;

// do{
//   console.log('Number is '+i);
//   i++;
// }
// while(i < 10);

// loop through array

const cars = ['Ferrari', 'BMW', 'Benz', 'Audi'];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

//forEach

cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array)
})

//MAP 

// const users = [
//   {id: 1, name: 'Shuai'},
//   {id: 2, name: 'Yan'},
//   {id: 3, name: 'hahaha'}
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids[0]);

//for in loop

const user = {
  firstName: 'Shuai',
  lastName: 'Wang',
  age: 30
};

for(let x in user){
  console.log(`${x} : ${user[x]}`);
};

// a look at the window object lesson 19

//window methods / onjects / properties

// console.log(123);

// Alert
// window.alert('hello world')

// Prompt

// const input = prompt(23333);
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('NO');
// };

let val;

//Outter height and width
val = window.outerHeight;
val = window.outerWidth;

val = window.innerHeight;

// scroll points


//location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.search;

// redirect
// window.location.href = 'http://google.com';

// reload page
// window.location.reload();

//history object

// window.history.go(-1);
val = window.history.length;

//Navigator Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);

//Global Scope lesson 20

// lesson 21 DOM
// what is DOM
// DOCUMENT OBJECT MODEL
// tree of nodes /elements created by the browser
// JavaScript can be used to read/write/manipulate to the DOM
// Object Oriented Representation

//EXAMING THE DOCUMENT OBJECT lesson 22

let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val =  document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

//array from scripts
let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
  console.log(script.getAttribute('src'));
});

// array from links

let links = document.links;
let linksArr = Array.from(links);

linksArr.forEach(function(link){
  console.log(link.getAttribute('class'));
});

console.log(val);

//DOM Selectors For Single Elements lesson 23

//document.getElementById()

// console.log(document.getElementById('task-title'));

// //Get things from the element

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// //change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // document.getElementById('task-title').style.display = 'none';

// //change the content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';  
// taskTitle.innerHTML = '<span style = "color: red"> Task List</span>';  


//document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'green';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

//DOM SELECTOR FOR MULTIPLE ELEMENTS lesson 24

//document.getElementByClassName
// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

//document.getElementByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// //convert HTML collections into ARRAY 
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

//document.querySelectAll
let items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
  item.textContent = `${index}: i love u`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)')
const liEven = document.querySelectorAll('li:nth-child(even)')

liOdd.forEach(function(li, index){
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
};

console.log(liEven.length);

// Traversing the DOM lesson 25

let val; 

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

//Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeName;
val = list.childNodes[1].nodeType;

//1 - Element
//2 - Attribute (deprecated)
//3 - Text node
//8 - Comment
//9 - Document itself
//10 - Doctype 


//Get children element nodes
val = list.children;
val = list.children[0];
val = list.children[1].textContent = 'Hello';

// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children;

val = list.firstChild;
val = list.firstElementChild;


val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = list.parentElement.parentElement;


//Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

//Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);

// Create elements lesson 26

const li = document.createElement('li');

// Add class
li.className = 'collection-item';

//Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
// Add class
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'

// Append link into li
li.appendChild(link);

// Apppend li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);