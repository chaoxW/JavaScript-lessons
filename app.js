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