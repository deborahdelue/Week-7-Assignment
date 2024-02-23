// NOTE - All questions should be printed to your Browser's console using console.log()

// NOTE - #1 - Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age.

console.log("Qeuestion 1 answers are below")

// INFO - this is the array for question #1 (works)
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log("This is the ages array", ages) // this prints the numbers in the array on line ll to the console.log (works)

// INFO - this subtracts the value of the first element in the array from the value in the last element of the array. (works)
let difference = ages[ages.length - 1] - ages[0] //this subtracts the lengths of the first element from the lenght of the last element
console.log("This is the difference between the first and last element in the ages array ", difference) // this prints the difference calculated on line 15 to the console log (works)

// INFO -  ages[7] - ages[0] is not allowed! Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths) (works)
console.log("These are the ages of everyone over the age of 7", ages.filter(ages => ages >7)) // this filters out anyone over the age of 7 and prints those to the console log

// INFO - Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(12, 6, 52) // this adds 3 ages to the ages array (works)
console.log("These are the ages of everyone over the age of 7 after adding 12, 6 and 52 to the ages array", ages.filter(ages => ages >7)) // this filters out anyone over the age of 7 and prints those to the console.log

// INFO - Use a loop to iterate through the array and calculate the average age.
let sum = 0 // this initializes the sum variable (works)
for (let i = 0; i < ages.length; i++) { // this iterates through the the ages array (works)
    sum += ages[i] // this sums up the ages
}
let averageAge = sum / ages.length // this calculates the average age
console.log("This is the average age of everyone in the ages array ", averageAge.toFixed(2)) 


// INFO - #2 - Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// Use a loop to iterate through the array and calculate the average number of letters per name.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

console.log("Question 2 answers are below")

// INFO Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; // This is the names array (works)
console.log("This is the names array ", names);

let totalLetters = names.reduce((acc, name) => acc + name.length, 0); // This calculates the sum of the lengths of all the names using the reduce method (works)
console.log("This is the total number of letters of all the names", totalLetters);

let averageLettersPerName = totalLetters / names.length; // This calculates the average number of letters per name (works)
console.log("This is the average number of letters per name", averageLettersPerName.toFixed(2));


// INFO - #3 - How do you access the last element of any array? 
console.log("Question #3 answer - you can access the last element of an array by using arrayname.lenght - 1")
console.log("This is the last element in the names array - ", names[names.length - 1]);

// INFO - #4 - How do you access the first element of any array?
console.log("Question #4 answer - you can access the first element of an array by using arrayname[0] with 0 being the first element in the array")
console.log("This is the first element in the names array - ", names[0])


// INFO - #5 Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
console.log("Question #5 answers are below")
// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

let nameLengths = []; // This initializes the nameLengths array
for (let i = 0; i < names.length; i++) { // This loops over the names array
    nameLengths.push(names[i].length); // This adds the length of each name to the nameLengths array 
}
console.log("This is the length of each name in the names array", nameLengths);

// INFO - #6 - Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
console.log("Question #6 answers are below")

let totalLength = 0; // this initializes a variable to hold the sum of all name lengths

for (let i = 0; i < names.length; i++) {
    totalLength += names[i].length; // Add the length of each name to the totalLength directly
}

console.log("The sum of all name lengths in the nameLength array is :", totalLength);


// INFO - #7 - Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
console.log("Question #7 answers are below")
function repeatWord(word, n) { // this creates the function to repeat a word a number of time (n)
    return word.repeat(n); // this returns the repeating word
}
console.log("This is a repeating word string - ", repeatWord('JumpingJacks', 5)); // this tells the function to repeat JumpingJacks 5 times

// INFO - #8 - Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
console.log("Question #8 answers are below")
function fullName(firstName, lastName) { // this creates the functions with 2 parameters
    return `${firstName} ${lastName}` // this tells the function what would be returned
}
console.log("This is the full name - ", fullName("Jimmy", "Johnson"))

// INFO #9 - Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
console.log("Question #9 answers are below")

function isSumGreaterThan100(numbersArray) { // this calculates the sum of the array elements
    let sum = numbersArray.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0); // this checks if the sum is greater than 100
    return sum > 100;
}

console.log("This should return true because the sum is 115", isSumGreaterThan100([50, 25, 30, 10])); // This should return true because the sum is 115
console.log("This should return false because the sum is 9", isSumGreaterThan100([20, 30, 40])); // This should return false because the sum is 90


// INFO - #10 - Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log("Question #10 answers are below")
function calculateAverage(numbersArray) {
    if (numbersArray.length === 0) return 0; // this check to ensure the array isn't empty
    
    let sum = numbersArray.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0); // this uses the reduce method to create a sum
    let average = sum / numbersArray.length; // this divides the sum by length
    return average; // this returns the average
}


console.log("This is the average of 10, 20, 30, 40 and 50 - ", calculateAverage([10, 20, 30, 40, 50])); // this should return 30



// INFO - #11 - Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

console.log("Questions #11 answers are below")

// create a function to calculate an average 
function calculateAverage(numbersArray) {
    if (numbersArray.length === 0) return 0; // this prevents dividing by zero
    let sum = numbersArray.reduce((acc, curr) => acc + curr, 0); // this uses reduce method to sum up then numbers
    return sum / numbersArray.length; // this returns the average
}
// creates a function to compare averages of 2 arrays
function isAverageOfFirstGreaterThanSecond(array1, array2) {
    let average1 = calculateAverage(array1); // this is average of first array
    let average2 = calculateAverage(array2); // this is average of second array
    return average1 > average2; // returns true if array 1 is greater
}


console.log("This is the average if true", isAverageOfFirstGreaterThanSecond([10, 20, 30], [5, 10, 15])); // this should return true
console.log("This is the average if false", isAverageOfFirstGreaterThanSecond([1, 2, 3], [4, 5, 6])); // this should return false


// INFO - #12 - Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.


console.log("Question #12 answers are below")
// this creates a function to determine if someone should buy a drink
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;  // this returns true if it is hot outside and has > $10.50
}


console.log("Should I buy a drink?", willBuyDrink(true, 11)); // this should return true because it's hot outside and you have more than $10.50.
console.log("Should I buy a drink?",willBuyDrink(false, 12)); // this should return false because it's not hot outside.
console.log("Should I buy a drink?", willBuyDrink(true, 10)); // this should return false because you don't have more than $10.50.


// INFO - #13 - Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
console.log("Question #13 calculates expected weight loss in one year by walking 3000 extra steps per day. I created this because I received a treadmill desk for Christmas and wanted to see what might happen if I walk an extra 3000 steps every day")

function calculateWeightLoss(stepsPerDay, strideLengthFeet, personWeightPounds, daysInYear = 365) {
    const feetPerMile = 5280; // this is how many feet are in a mile
    const caloriesPerPound = 3500; // this is how many calories must be consumed to burn 1 pound
    // this converts stride length from feet to miles
    const milesWalkedPerDay = (stepsPerDay * strideLengthFeet) / feetPerMile;
    // this adjust calories burned per mile based on person's weight (assuming 100 calories per mile for 180 pounds as a base)
    const caloriesBurnedPerMile = (100 / 180) * personWeightPounds;
    // this calculate total calories burned in a year
    const totalCaloriesBurned = milesWalkedPerDay * caloriesBurnedPerMile * daysInYear;
    // this calculate potential weight loss
    const weightLossPounds = totalCaloriesBurned / caloriesPerPound;

    return weightLossPounds;
}

// Assuming my stride length is 2.0 feet
let weightLoss = calculateWeightLoss(3000, 2.0, 213); // input is - steps per day, stride lenght in feet, weight in lbs
console.log(`Estimated weight loss in one year: ${weightLoss.toFixed(2)} pounds`);
