function reverseArray(array) {
    let newArray = [];
    for (let i = array.length -1; i >= 0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++){
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]));


let array = [4,3,7,8,1,3,10];
console.log(reverseArray(array));

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);