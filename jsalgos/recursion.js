// const rSigma = (num) => {
//     let added = 0
//     if (added <= num){
//         added++
        
//     }
// }


function sum(n) {
    if (n <= 1) {
      return n;
    }
    return n + sum(n - 1);
  }

const x = sum(0)

console.log(x)

function mult(n) {
    if (n <= 1) {
      return n;
    }
    return n * mult(n - 1);
  }

const y = mult(6)

console.log(y)