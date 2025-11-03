// Sort

const numbers = [40, 100, 1, 5, 25, 10];

// const sortedNumber = numbers.sort((a, b) => a - b);
// console.log(numbers); // [ 1, 5, 10, 25, 40, 100 ]
// console.log(sortedNumber); // [ 1, 5, 10, 25, 40, 100 ]

// Sort strings alphabetically
// const fruits = ["Banana", "apple", "Cherry", "date"];
// const sortedFruits = fruits.sort((a, b) => a.localeCompare(b));
// console.log(fruits); // [ 'apple', 'Banana', 'Cherry', 'date' ]
// console.log(sortedFruits); // [ 'apple', 'Banana', 'Cherry', 'date' ]

// Array of arrays to a single array using flat()
// const arr = [1, 2, 3, [4, 5], [6, 7, 8], 9];
// const flatArr = arr.flat();
// console.log(flatArr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// Flattening nested arrays of tags from posts
// const arr = [1, 2, 3, [4, 5, [6, 7, 8]], 9];
// const flatArr = arr.flat(2);
// console.log(flatArr);
// output: [  1, 2, 3, 4, 5,  6, 7, 8, 9]

// Flattening nested arrays of tags from posts
const arr = [1, 2, 3, [4, 5, [6, 7, 8, [9, 10]]]];
const flatArr = arr.flat(Infinity);
// console.log(flatArr);
// output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const tagsFromPosts = [
//   ["javascript", "react", "css"],
//   ["node", "express"],
//   ["css", "html", "react"],
// ];
// const filteredTags = new Set(tagsFromPosts.flat());
// console.log(filteredTags);
// output: Set(6) { 'javascript', 'react', 'css', 'node', 'express', 'html' }

const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];
const filteredTags = [...new Set(tagsFromPosts.flat())];
console.log(filteredTags);
// output: [ 'javascript', 'react', 'css', 'node', 'express', 'html' ]
