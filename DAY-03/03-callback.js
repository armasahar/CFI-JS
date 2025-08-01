function placeOrder(order, notifyCustomer) {
  console.log(`You ordered: ${order}`);
  console.log("Waiter: Okay, I’ll let you know when it's ready.");
  console.log("Chef is cooking...");

  // Simulate cooking time with setTimeout
  setTimeout(() => {
    // After 3 seconds, the food is ready — call the customer
    notifyCustomer(order);
  }, 5000); // 5000 milliseconds = 3 seconds
}

function notifyCustomer(orderReady) {
  console.log(`Waiter (calling): Your ${orderReady} is ready!`);
}

// Let’s place an order
placeOrder("Pizza", notifyCustomer);