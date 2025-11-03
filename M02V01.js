//1. object keys are strings
// const obj = {
//   nextLevel: { courseId: "level2" },
//   "programing Hero": { courseId: "level1" },
// };
// console.log(obj["programing Hero"]);

//2. object keys are stringified
// const course1 = { name: "programing Hero" };
// const course2 = { name: "Next Level Web Development" };
// const obj = {};
// obj.nextLevel = { courseId: "level2" };
// obj[course1] = { courseId: "level1" };
// console.log(obj);
// output:
// {
//   nextLevel: { courseId: 'level2' },
//   '[object Object]': { courseId: 'level1' }
// }

//3. object keys are always string or symbol
// const course1 = { name: "programing Hero" };
// const course2 = { name: "Next Level Web Development" };
// const obj = {};
// obj[course2] = { courseId: "level2" };
// obj[course1] = { courseId: "level1" };
// console.log(obj);
// output:
// { '[object Object]': { courseId: 'level1' } }

//4. map with primitive keys
// const course1 = { name: "programing Hero" };
// const course2 = { name: "Next Level Web Development" };
// const map = new Map();
// map.set(1, "Programing Hero");
// map.set(2, "Next Level Web Development");
// console.log(map);
//output:
// Map(2) { 1 => 'Programing Hero',
//      2 => 'Next Level Web Development' }

//5. map with object keys
// const course1 = { name: "programing Hero" };
// const course2 = { name: "Next Level Web Development" };
// const map = new Map();
// map.set(course1, { courseId: "level1" });
// map.set(course2, { courseId: "level2" });
// console.log(map);
//output:
// Map(2) {
//   { name: 'programing Hero' } => { courseId: 'level1' },
//   { name: 'Next Level Web Development' } => { courseId: 'level2' }
// }

//6. map.clear()
// const course1 = { name: "programing Hero" };
// const course2 = { name: "Next Level Web Development" };
// const map = new Map();
// map.set(course1, { courseId: "level1" });
// map.set(course2, { courseId: "level2" });
// map.clear();
// console.log(map);
//output:
// map(0) {}

//7. map.size
// const course1 = { name: "programing Hero" };
// const course2 = { name: "Next Level Web Development" };
// const map = new Map();
// map.set(course1, { courseId: "level1" });
// map.set(course2, { courseId: "level2" });

// console.log(map.size);
//output:
// 2

//8. map.get()
// const course1 = { name: "programing Hero" };
// const course2 = { name: "Next Level Web Development" };
// const map = new Map();
// map.set(course1, { courseId: "level1" });
// map.set(course2, { courseId: "level2" });
// map.delete(course1);

// console.log(map);
//output:
// map(1) { { name: 'Next Level Web Development' } => { courseId: 'level2' } }

//9. map .forEach() method of key value pairs
// const course1 = { name: "programing Hero" };
// const course2 = { name: "Next Level Web Development" };
// const map = new Map();
// map.set(course1, { courseId: "level1" });
// map.set(course2, { courseId: "level2" });
// map.forEach((value, key) => console.log("key:", key, "value:", value));

//output:
// key: { name: 'programing Hero' } value: { courseId: 'level1' }
// key: { name: 'Next Level Web Development' } value: { courseId: 'level2' }

//10. map forEach to append to the name property of each key object in the map the string "Shohoj solor simple "
// const course1 = { name: "programing Hero" };
// const course2 = { name: "Next Level Web Development" };
// const map = new Map();
// map.set(course1, { courseId: "level1" });
// map.set(course2, { courseId: "level2" });
// map.forEach((value, key) => (key.name = "Shohoj solor simple" + key.name));
// console.log(map);
//output:
// map(2) {
//   { name: 'Shohoj solor simpleprograming Hero' } => { courseId: 'level1' },
//   { name: 'Shohoj solor simpleNext Level Web Development' } => { courseId: 'level2' }
// }

//11 map.keys()
// const course1 = { name: "programing Hero" };
// const course2 = { name: "Next Level Web Development" };
// const map = new Map();
// map.set(course1, { courseId: "level1" });
// map.set(course2, { courseId: "level2" });
// console.log(map.keys());
//output:
// [Map Iterator] {
//   { name: 'programing Hero' },
//   { name: 'Next Level Web Development' }
// }

//12 spread operator with map keys
// const course1 = { name: "programing Hero" };
// const course2 = { name: "Next Level Web Development" };
// const map = new Map();
// map.set(course1, { courseId: "level1" });
// map.set(course2, { courseId: "level2" });
// console.log(...map.keys());
//output
// { name: 'programing Hero' } { name: 'Next Level Web Development' }

//13 spread operator with values
// const course1 = { name: "programing Hero" };
// const course2 = { name: "Next Level Web Development" };
// const map = new Map();
// map.set(course1, { courseId: "level1" });
// map.set(course2, { courseId: "level2" });
// console.log(...map.values());
//output
// { courseId: 'level1' } { courseId: 'level2' }

//14 map for loop..of with keys
// const course1 = { name: "programing Hero" };
// const course2 = { name: "Next Level Web Development" };
// const map = new Map();
// map.set(course1, { courseId: "level1" });
// map.set(course2, { courseId: "level2" });
// for (let key of map.keys()) {
//   console.log(key);
// }
//output
// { name: 'programing Hero' }
// { name: 'Next Level Web Development' }

//15 append to the name property of each key object in the map the string "Shohoj Solor Simple "
// const course1 = { name: "programing Hero" };
// const course2 = { name: "Next Level Web Development" };
// const map = new Map();
// map.set(course1, { courseId: "level1" });
// map.set(course2, { courseId: "level2" });
// for (let key of map.keys()) {
//   key.name = "Shohoj Solor Simple " + key.name;
// }
// console.log(map);
//output
// map(2) {
//   { name: 'Shohoj Solor Simple programing Hero' } => { courseId: 'level1' },
//   { name: 'Shohoj Solor Simple Next Level Web Development' } => { courseId: 'level2' }
// }

//16 map.entries()
// const course1 = { name: "programing Hero" };
// const course2 = { name: "Next Level Web Development" };
// const map = new Map();
// map.set(course1, { courseId: "level1" });
// map.set(course2, { courseId: "level2" });

// console.log(map.entries());
//output
// [Map Entries] {
//   [ { name: 'programing Hero' }, { courseId: 'level1' } ],
//  [ { name: 'Next Level Web Development' }, { courseId: 'level2' } ]
// }

//17. map from array of arrays with primitive keys
// const courses = [
//   ["programing Hero", "level1"],
//   ["Next Level Web Development", "level2"],
// ];
// const map = new Map(courses);

// console.log(map);

//output
// Map(2) {
//   'programing Hero' => 'level1',
//   'Next Level Web Development' => 'level2'
// }

//18. map from array of arrays with object keys
const course1 = { name: "programing Hero" };
const course2 = { name: "Next Level Web Development" };
const courses = [
  [course1, "level1"],
  [course2, "level2"],
];
const map = new Map(courses);

console.log(map);
//output
// Map(2) {
//   { name: 'programing Hero' } => 'level1',
//   { name: 'Next Level Web Development' } => 'level2'
// }
