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


//lesson 14 scripts