//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

//if double sons age the number will be negative. ABS to turn it positive
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - (2 * sonYearsOld))
}


function twiceAsOld(dadYearsOld, sonYearsOld) {
    return dadYearsOld > 2 * sonYearsOld ? dadYearsOld-(2*sonYearsOld) : 2*sonYearsOld-dadYearsOld
}