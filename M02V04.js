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

// Example 2: Check if a user has at least one of the featured roles

// const currentUserRole = ["user", "admin", "editor"];
// const featuredUserRole = ["admin", "manager"];
// const hasAccess = currentUserRole.some((role) =>
//   featuredUserRole.includes(role)
// );

// console.log(hasAccess);
// output: // true

// Create an array of specific length and fill it with a value

// const arr = Array.from({ length: 5 }).fill(0);
// console.log(arr); // [ 0, 0, 0, 0, 0 ]
// or
// const arr = Array.from({ length: 5 }).fill("ABC");
// console.log(arr); // [ "ABC", "ABC", "ABC", "ABC", "ABC" ]
// or
// Create an array of specific length and fill it with a value
// const arr = Array.from({ length: 5 }, (_, index) => index);
// console.log(arr); // [ 0, 1, 2, 3, 4 ]
// or
// const arr = Array.from([1, 2, 3, 4], (value, index) => value * value);
// console.log(arr); //[ 1, 4, 9, 16 ]

// Create an array of specific length and fill it with a value
// const range = (start, stop, step) =>
//   Array.from(
//     { length: Math.ceil((stop - start) / step) },
//     (_, i) => start + i * step
//   );
// console.log(range(1, 11, 2));
//[ 1, 3, 5, 7, 9 ]

//or
const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
  );
console.log(range(0, 11, 2));
//[ 0, 2, 4, 6, 8, 10 ]
