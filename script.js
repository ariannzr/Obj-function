const personobj = {
  firstName: "Amirarian",
  lastName: "nazari",
  age: 34,
  phone: "+989126127115",
  email: "amirariyan01@gmail.com",
  location: "tehran",
};
const secoundObj = {
  firstName: "Amirarian",
  age: 34,
  phone: "+989126127115",
  email: "amirariyan01@gmail.com",
  location: "tehran",
};

function getName(person) {
  if (person.firstName && person.lastName) {
    const fullName = person.firstName + " " + person.lastName;

    console.log(fullName);
  } else {
    console.log("i cnat find");
  }
}

getName(personobj);
getName(secoundObj);
