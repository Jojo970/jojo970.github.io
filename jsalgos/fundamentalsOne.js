//setting and swapping
let myNumber = 42;

let myName ="Jong";

let x = myNumber;
myNumber = myName;
myName = x

// print -52 to 1066

for( let i = -52; i <= 1066; i ++) {
    console.log(i)
}

// dont worry be happy
const beCheerful = () => {
    console.log("good morning")
}
for( let i= 0; i < 99; i++){
    beCheerful()
}

//multiples of 3

for( let i = -300; i<=0; i+=3){
    if(i === -3){
        continue
    } else if( i === -6){
        continue
    } else { console.log(i)}
}

// printing integers with while

let integer = 2000

while( integer <= 5280){
    console.log(integer);
    integer ++
}