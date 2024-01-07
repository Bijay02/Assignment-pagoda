// Create a function that takes a number (step) as an argument and returns the number of
// matchsticks in that step. See step 1, 2 and 3 in the image above.

function matchHouses(step){
    return 6*step-(step-1)
}

console.log("Number of the matchsticks is:",matchHouses(87))