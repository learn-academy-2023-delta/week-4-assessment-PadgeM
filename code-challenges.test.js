// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("arrShuffle", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    const result1 = arrShuffle(colors1)
    expect(result1).toHaveLength(colors1.length - 1)
    expect(colors1.slice(1)).toEqual(expect.arrayContaining(result1))

    const colors2 = [
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron"
    ]
    const result2 = arrShuffle(colors2);
    expect(result2).toHaveLength(colors2.length - 1);
    expect(colors2.slice(1)).toEqual(expect.arrayContaining(result2))
  })
})

// b) Create the function that makes the test pass.

const arrShuffle = (arr) => {
  const shuffledArray = [...arr.slice(1)]

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = shuffledArray[i]
    shuffledArray[i] = shuffledArray[j]
    shuffledArray[j] = temp
  }

  return shuffledArray
}



// Pseudo code:
// The function arrShuffle takes an array arr as input.
// A new array shuffledArray is created by using the spread operator (...) on arr.slice(1). This creates a shallow copy of arr excluding the first element.
// The for loop is used to iterate over the elements of shuffledArray in reverse order. It starts from the last index (shuffledArray.length - 1) and goes down to index 1.
// Inside the loop, a variable j is declared and initialized with a random index between 0 and i (inclusive). The expression Math.floor(Math.random() * (i + 1)) generates a random number between 0 and i.
// Next, a temporary variable temp is created and assigned the value of shuffledArray[i]. This is done to temporarily store the value at index i.
// The elements at indices i and j in shuffledArray are swapped using array destructuring assignment. This is done by assigning shuffledArray[j] to shuffledArray[i] and vice versa.
// The loop continues until all the elements have been shuffled.






// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe('calcTally', () => {
  it('takes in an object that contains up votes and down votes and returns the end tally', () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    expect(calcTally(votes1)).toBe(11)
  })

  it('should return the correct tally when there are negative up votes and positive down votes', () => {
    const votes2 = { upVotes: 2, downVotes: 33 }
    expect(calcTally(votes2)).toBe(-31)
  })
})

// b) Create the function that makes the test pass.

const calcTally = (votes) => votes.upVotes - votes.downVotes


// Pseudo code:
// I have to define a function called calcTally. It takes in a single argument called votes. This argument is an object that contains two properties: upVotes and downVotes.
// Inside the function, I have a simple expression. I have to subtract the value of votes.downVotes from votes.upVotes. This calculates the difference between the number of upvotes and the number of downvotes.
// By performing this subtraction, I get the net vote tally. If the upVotes are greater than the downVotes, I'll have a positive tally. If the downVotes are greater, the tally will be negative. And if both values are the same, the tally will be zero.
// So, when I call this calcTally function with a votes object, it will calculate the vote tally by subtracting the downvotes from the upvotes and return the result.

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("removeDuplicates", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    const result = removeDuplicates(dataTypesArray1, dataTypesArray2)
    expect(result).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})
const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

const removeDuplicates = (...arrays) => {
  const concatenatedArray = [].concat(...arrays)
  const uniqueArray = [...new Set(concatenatedArray)]
  return uniqueArray
}


// Pseudo code:
// So I need to define a function called removeDuplicates. It takes in any number of arrays as arguments, which is indicated by the ...arrays syntax. This allows me to pass multiple arrays to the function.
//  I create a new variable called concatenatedArray. I'm using an empty array [] and the concat method to combine all the input arrays into a single array.
// I have to create another variable called uniqueArray. I want to remove any duplicate elements from the concatenatedArray. To do this, I use the Set object. I pass the concatenatedArray to the Set constructor to create a new Set containing only unique elements.


