//Complete the function to return his total number of goals in all three leagues.


function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}


const goals = (a,b,c) => a + b + c;


//create array, loop through with reduce. ... is spread operator. goalsArray is array of all arguments passed. reduce to sum it all up. 0 is incase no arguments passed
const goals = (...goalsArray) => goalsArray.reduce((a,b) => a+b, 0);