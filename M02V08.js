//* Grouping and Aggregating Data

// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.

const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

// TODO init empty obj
//Todo init obj category
// ToDO  calculate total revenue and items sold
totalSalesByCategory = sales.reduce((table, sale) => {
  console.log(table, ":", sale);
  const { category, price, quantity } = sale;
  if (!table[category]) {
    table[category] = {
      totalRevenue: 0,
      itemCount: 0,
    };
  }

  table[category].totalRevenue += price * quantity;
  table[category].itemCount += quantity;
  return table;
}, {});
console.log(totalSalesByCategory);
// output
// {
//   Electronics: { totalRevenue: 1330, itemCount: 4 },
//   Books: { totalRevenue: 110, itemCount: 3 },
//   Home: { totalRevenue: 150, itemCount: 1 }
// }
//or
// {} : { category: 'Electronics', item: 'Laptop', price: 1200, quantity: 1 }
// { Electronics: { totalRevenue: 1200, itemCount: 1 } } : {
// category: 'Books', item: 'JS Basics', price: 30, quantity: 2 }
// {
//   Electronics: { totalRevenue: 1200, itemCount: 1 },
//   Books: { totalRevenue: 60, itemCount: 2 }
// } : { category: 'Electronics', item: 'Mouse', price: 25, quantity: 2 }
// {
//   Electronics: { totalRevenue: 1250, itemCount: 3 },
//   Books: { totalRevenue: 60, itemCount: 2 }
// } : { category: 'Home', item: 'Chair', price: 150, quantity: 1 }
// {
//   Electronics: { totalRevenue: 1250, itemCount: 3 },
//   Books: { totalRevenue: 60, itemCount: 2 },
//   Home: { totalRevenue: 150, itemCount: 1 }
// } : { category: 'Books', item: 'React Deep Dive', price: 50, quantity: 1 }
// {
//   Electronics: { totalRevenue: 1250, itemCount: 3 },
//   Books: { totalRevenue: 110, itemCount: 3 },
//   Home: { totalRevenue: 150, itemCount: 1 }
// } : { category: 'Electronics', item: 'Keyboard', price: 80, quantity: 1 }
// {
//   Electronics: { totalRevenue: 1330, itemCount: 4 },
//   Books: { totalRevenue: 110, itemCount: 3 },
//   Home: { totalRevenue: 150, itemCount: 1 }
// }
