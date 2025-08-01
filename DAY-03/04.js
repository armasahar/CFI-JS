function greetUser(name, callback) {
  console.log(`🤝 Greeting ${name}...`);

  setTimeout(() => {
    console.log(`👋 Hello, ${name}! How are you today?`);

    // After greeting, call the next action (callback)
    callback(name);
  }, 2000); // 2-second delay
}

function sayGoodbye(name) {
  setTimeout(() => {
    console.log(`👋 Goodbye, ${name}. Have a great day!`);
  }, 2000); // 2-second delay after greeting
}

// Start the greeting process
greetUser("Arma", sayGoodbye);
