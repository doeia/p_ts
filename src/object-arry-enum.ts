enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: "Mark",
  age: 20,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};
console.log(person.name);
