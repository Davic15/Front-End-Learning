/*
    Looping Triangle
*/ 
let counter = "", i;
console.log("For");
for (i = 0; i < 7; i++) {
    console.log(counter = counter + "#");
}

counter = "";
console.log("While");
i = 0;
while(i < 7){
    console.log(counter = counter + "!");
    i++;
}

counter = "";
console.log("Do - While");
i = 0;
do {
    console.log(counter = counter + "@");
    i++;
} while (i < 7);