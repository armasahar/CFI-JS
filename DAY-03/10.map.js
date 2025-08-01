const productsDB = [
  { id: 'prod001', name: 'Laptop Pro', price: 1200.00, category: 'Electronics', stock: 15 },
  { id: 'prod002', name: 'Mechanical Keyboard', price: 95.50, category: 'Accessories', stock: 0 },
  { id: 'prod003', name: 'Gaming Mouse', price: 49.99, category: 'Accessories', stock: 250 },
  { id: 'prod004', name: '4K Monitor', price: 350.00, category: 'Electronics', stock: 5 },
  { id: 'prod005', name: 'Webcam HD', price: 75.00, category: 'Peripherals', stock: 0 }
];

const SALES_TAX_RATE = 0.08; // 8% tax

let productSummary = productsDB.map(product => ({
    product_Id : product.id,
    product_name : product.name,
    dsiplay_price : `$${(product.price * 0.8).toFixed(2)}`,
    availabili : product.stock > 0 ? "In stock" : "out of stock",
}))

console.log(productSummary)
/*
Goal:
Create a new array, productSummaries, where each object contains:
productName (the original name)
displayPrice (the original price plus sales tax, formatted as a currency string)
availabilityStatus ("In Stock" or "Out of Stock" based on stock)
productid
*/

console.log()