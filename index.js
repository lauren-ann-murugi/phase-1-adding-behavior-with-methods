// Define the Cat class
class Cat {
  // Constructor method to initialize name and sex
  constructor(name, sex) {
    this.name = name; // Save the cat's name
    this.sex = sex;   // Save the cat's sex
  }

  // Method that returns how the cat speaks
  speak() {
    // Returns a string with the cat's name and "says meow!"
    return `${this.name} says meow!`;
  }
}

// Define the Dog class
class Dog {
  // Constructor method to initialize name and sex
  constructor(name, sex) {
    this.name = name; // Save the dog's name
    this.sex = sex;   // Save the dog's sex
  }

  // Method that returns how the dog speaks
  speak() {
    // Returns a string with the dog's name and "says woof!"
    return `${this.name} says woof!`;
  }
}

// Define the Bird class
class Bird {
  // Constructor method to initialize name and sex
  constructor(name, sex) {
    this.name = name; // Save the bird's name
    this.sex = sex;   // Save the bird's sex
  }

  // Method that returns how the bird speaks
  speak() {
    // If the bird is male, return a special message
    if (this.sex === "male") {
      return `It's me! ${this.name}, the parrot!`;
    } else {
      // Otherwise, return a normal bird sound
      return `${this.name} says squawk!`;
    }
  }
}
