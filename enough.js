//You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.


//ternary
function enough(cap, on, wait) {
    return (on + wait > cap) ? on+wait-cap : 0;
}


//math.max - return largest number
function enough(cap, on, wait) {
    return Math.max(on + wait - cap, 0)
}


//if statement
function enough(cap, on, wait) {
    if (on + wait < cap){
        return 0;
    }else{
        return on + wait - cap;
    }
}