// Check if array has at least one even number using some()

// const numbers = [1, 2, 3, 4, 5];
// const hasEvenNumber = numbers.some((num) => num % 2 == 0);
// console.log(hasEvenNumber); // true

// Check if array has at least one even number using some()
const numbers = [1, 3, 5, 7, 111, 21];
const hasEvenNumber = numbers.some((num) => num % 2 == 0);
// console.log(hasEvenNumber); // false

// Example 2: Check if a user has at least one of the featured roles
// const currentUserRole = ["user", "editor"];
// const featuredUserRole = ["admin", "manager"];
// const hasAccess = currentUserRole.some((role) =>
//   featuredUserRole.includes(role)
// );
// console.log(hasAccess);
// output: false

const currentUserRole = ["user", "admin", "editor"];
const featuredUserRole = ["admin", "manager"];
const hasAccess = currentUserRole.some((role) =>
  featuredUserRole.includes(role)
);
console.log(hasAccess);
// true
