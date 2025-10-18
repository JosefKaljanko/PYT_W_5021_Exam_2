

function biggestSumOfTwoElements(array) {
    if (array.length === 0 ) {
        return false;
    } else if (array.length === 1) {
        return array[0];
    } else {
        array.sort((a,b) => b-a);
        return array[0] + array[1];
    }

}

console.log(biggestSumOfTwoElements([1,2,3,4]))  // => 7
console.log(biggestSumOfTwoElements([])) // => false
console.log(biggestSumOfTwoElements([76])) // => 76
console.log(biggestSumOfTwoElements([23,45,17,12])) // => 68
console.log()




