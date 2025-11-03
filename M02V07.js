//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];
//TODO initiate empty object
//TODO check if the response already exists or not
//TODO if exists increment the count else set the count to 1
// TODO If not the initialize it with 1
const count = surveyResponses.reduce((table, response) => {
  console.log(table, ":", response);
  // if (table[response]) {
  //   table[response] = table[response] + 1;
  // } else {
  //   table[response] = 1;
  // }
  table[response] = (table[response] || 0) + 1;
  return table;
}, {});
console.log(count);
//output
// {} : A
// { A: 1 } : C
// { A: 1, C: 1 } : B
// { A: 1, C: 1, B: 1 } : A
// { A: 2, C: 1, B: 1 } : B
// { A: 2, C: 1, B: 2 } : B
// { A: 2, C: 1, B: 3 } : C
// { A: 2, C: 2, B: 3 } : A
// { A: 3, C: 2, B: 3 } : B
// { A: 3, C: 2, B: 4 } : D
// { A: 3, C: 2, B: 4, D: 1 } : A
// { A: 4, C: 2, B: 4, D: 1 } : C
// { A: 4, C: 3, B: 4, D: 1 } : B
// { A: 4, C: 3, B: 5, D: 1 } : A
// { A: 5, C: 3, B: 5, D: 1 }
