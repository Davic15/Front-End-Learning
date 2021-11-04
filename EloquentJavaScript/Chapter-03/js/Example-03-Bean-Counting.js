function countChar(str, char) {
    let counter = 0;
    for(let i = 0; i < str.length; i++){
        if (str[i] == char){
            counter++;
        }
    }
    return counter;
}

function countBs(str){
    return countChar(str, 'B');
}

console.log(countBs("asBBBdsB"));
console.log(countChar("aaBsdBs", "a"));