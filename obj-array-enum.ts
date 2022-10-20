// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "chan",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  //union type
  role: [2, "author"],
  auth: Role.ADMIN,
};

person.role.push("admin");
person.role[0] = 10;

let favAct: string[];
favAct = ["Sports"];
console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby);
  //console.log(hobby.map());//!!!ERROR!!!
}

if (person.auth === Role.ADMIN) {
  console.log("It`s true");
}
