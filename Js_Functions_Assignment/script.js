// function welcome(first, second) {
//   let Message = first + " " + second;
//   document.write(Message);
//   console.log(Message);
// }
// welcome("Hello", "World");

// Calculating the area of a rectangle by using a function
function calculateAreaOfRectangle(length, width) {
  let area = length * width;
  console.log(area);
  return area;
}
// Invoke the function
calculateAreaOfRectangle(7, 9);

// Create a function for Temperature Conversion
function convertFahrenheitToCelsius(F) {
  let C = ((F - 32) * 5) / 9;
  console.log(C);
  document.write(C);
  return C;
}
// invoke the function
convertFahrenheitToCelsius(85);

// Using a different approach to convert Fahrenheit to Celsius
function convertFahrenheitToCelsius(F) {
  const divide = 5 / 9;
  let celsius = (F - 32) * divide;
  console.log(celsius);
  return celsius;
}

// invoke the function
convertFahrenheitToCelsius(85);

//   Function to Greet a user
function GreetUser(name) {
  const greeting = `Hi There, ${name}!`;
  console.log(greeting);
  return greeting;
}
// inoke or Call the function
GreetUser("Umar");

// Another example of Greet function
function greetUser(name) {
  const greeting = "Welcome" + ", " + name + "!!";
  console.log(greeting);
  return greeting;
}

// Call the function
greetUser("Mr. Umar");
