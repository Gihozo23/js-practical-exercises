# You are given an array of product objects, each containing a name (string) and a price (number). Your task is to implement a function called sortProducts that sorts the products based on their prices in ascending order. 
function sortProducts(products) {

  products.sort((a, b) => {
    if (a.price < b.price) {
      return -1; 
    } else if (a.price > b.price) {
      return 1;
    } else {
      return 0;
    }
  });

  return products; // Return the sorted array of products
}
    const products = [
  { name: 'Laptop', price: 420000 },
  { name: 'Phone', price: 800000 },
  { name: 'Tablet', price: 500000 },
  { name: 'Headphones', price: 15000 },
];
console.log(sortProducts(products));
