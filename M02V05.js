// Calculate subtotal of cart items using reduce()
const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
  { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
];
// const subtotal = cartItems.reduce((acc, item) => {
//   return acc + item.price * item.quantity;
// }, 0);
const subtotal = cartItems.reduce((subtotal, product) => {
  console.log(subtotal, product);
  return subtotal + product.price * product.quantity;
}, 0);
// console.log(subtotal);
//output
// 0 { id: 'p-001', name: 'Daraz Laptop Bag', price: 1500, quantity: 1 }
// 1500 { id: 'p-002', name: 'Walton USB-C Cable', price: 350, quantity: 2 }
// 2200 { id: 'p-003', name: 'Aarong Kurta', price: 2200, quantity: 1 }
// 4400

// Find the player with the highest score using reduce()

const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Anisur Rahman", score: 72 },
];
// const bestScore = players.reduce((bestPlayer, player) => {
//   console.log(bestPlayer, player);
//   if (bestPlayer.score > player.score) {
//     return bestPlayer;
//   }
//   return player;
// }, players[0]);
//or
const bestScore = players.reduce((bestPlayer, player) => {
  console.log(bestPlayer, player);
  return bestPlayer.score > player.score ? bestPlayer : player;
}, players[0]);
console.log(bestScore);
//output
// { name: 'Jamal Bhuyan', score: 88 } { name: 'Rakib Hossain', score: 95 }
// { name: 'Rakib Hossain', score: 95 } { name: 'Topu Barman', score: 91 }
// { name: 'Rakib Hossain', score: 95 } { name: 'Anisur Rahman', score: 72 }
// { name: 'Rakib Hossain', score: 95 }
