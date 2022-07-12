//Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1

function correct(string){
    string = string.split('');
    for(var i = 0; i < string.length; i++){
        if (string[i] === '5') string[i] = 'S';
        else if (string[i] === '0') string[i] = 'O';
        else if (string[i] === '1') string[i] = 'I';
    }
    return string.join('');
}

//regex
correct = string => string.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S')

//G is global flag so it doesn't stop after first match
function correct(string){
    return string.replace(/0/g, 'O')
                 .replace(/1/g, 'I')
                 .replace(/5/g, 'S');
}


//array to if statement
function correct(string){
    let array = [];

    for(let i = 0; i < string.length;, i++){
        if(string[i] === '5'){
            array.push('S')
        }else if(string[i] === '0'){
            array.push('O')
        }else if(string[i] === '1'){
            array.push('I')
        }else{
            array.push(string[i])
        }
    }
    return array.join('');
}


const correct = string => string.split('').map(i => {
    if (i =='0'){
        return 'O'
    }else if(i == '5'){
        return 'S'
    }else if(i == '1'){
        return 'I'
    }else{
        return i
    }
}).join('')