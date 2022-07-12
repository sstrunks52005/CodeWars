// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.


//unary plus turns string into number. Need to add index value pulling first value [0]
function getAge(inputString){
    return +inputString[0]
}

//parseInt - since first char in string is a number, it pulls out first char. If 'i am 4', will return NaN
function getAge(inputString){
    return parseInt(inputString);
}


//switch case
function getAge(inputString){
    switch(inputString){
        case "1 years old":
          return 1;
        case "2 years old":
          return 2;
        case "3 years old":
          return 3;
        case "4 years old":
          return 4;
        case "5 years old":
          return 5;
        case "6 years old":
          return 6;
        case "7 years old":
          return 7;
        case "8 years old":
          return 8;
        case "9 years old":
          return 9;
        default:
          return 1;
      }
    }