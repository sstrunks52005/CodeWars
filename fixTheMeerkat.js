//Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).


//reverse will mutate the original array, may cause bugs. 
function fixTheMeerkat(arr) {
    return arr.reverse();
}

//best practice to copy array first then reverse
function fixTheMeerkat(arr) {
    return Array.from(arr).reverse()  //readable
    // return [...arr].reverse()         //popular and short
    // return arr.slice().reverse()      //fastest and compatible with older browsers
}

//array destructuring
function fixTheMeerkat([tail, body, head]){
    return [head, body, tail]
}


const fixTheMeerkat = arr => [arr[2], arr[1], arr[0]]

const fixTheMeerkat = arr => arr.slice().reverse();


//for loop
function fixTheMeerkat(arr) {
    let newArr = [];
    for (let i = arr.length-1; i >=0; i--){
        newArr.push(arr[i])
    }
    return newArr;
}