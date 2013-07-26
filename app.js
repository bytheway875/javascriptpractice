alert('Hey there!');

var name = prompt("What's your name, good fella?");
console.log("Okay, so your name is " + name);

// var movie = prompt("What's the name of a movie you want to see?");
// var time = prompt("What time do you get off of work?");

// var answer = confirm(name+ ', would you like to see "' +movie+ '" with me around ' + time +"?");
// console.log(answer);


// var password = prompt("Set a password");
// while (password.length < 10){
//  password = prompt("That password isn't long enough. Try again.");
// }
// console.log("Password has been successfully set.");

// Differences between conditionals in Ruby and JS:
//  - the conditional statements must be in parentheses
//  - else if in JS; elsif in Ruby
// var age = prompt("And how old are you?");
// if (age > 21 && age < 50) {
//   alert("Yay! You are old enough to drink.");
// } else if (age >= 50){
//   alert("Don't be a creep. Go drink somewhere else.");
// } else if (age == 20){
//   alert("We might be able to sneak you in as long as you don't go telling everyone about it.")
// } else {
//   alert("You're too young to drink! Get out of here.")
// }

// Can also do this with a for loop! 
groceryList = ['Diet Coke', 'Hummus', 'Cheddar Cheese', 'Turkey'];
var i = 0;
while(i < groceryList.length){
  console.log(groceryList[i]);
  i++;
}

// Many Different Ways to Create Objects
me = {};
me.firstname = 'Shannon';
me.lastname = 'Byrne';
me.age = 24;
me.hometown = 'Austin';
var bio = "My name is " + me.firstname + " " + me.lastname + ". I am " +me.age + " years old and I am from " +me.hometown+ ".";

// Create new person
//  - var name = new person(attributes)
//  - can then call name.attribute

function person (firstname,lastname,age,hometown){
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.hometown = hometown;
  // return this
}


function create_header(my_name){
  return('<h1>' + my_name + '</h1>');
}

function create_image(image_file){
  return("<img src='" + image_file + "' alt= 'an image'>");
}

function create_paragraph(age,gender,job){
  return("<p> I'm a " + age + " year old " + gender + " and I work as a " + job + ".</p>");

}

function create_profile(name, age, gender, job, image_file){
  document.write(create_header(name));
  document.write(create_paragraph(age, gender, job));
  document.write(create_image(image_file));
}

create_profile('Shannon', 24, 'female', 'marketer', 'http://placedog.com/400/300');




