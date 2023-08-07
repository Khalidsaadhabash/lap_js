// ===============loop=================

for (let i = 1; i <= 10; i++) {
    let square = i ** 2;
    console.log(square);
  }
  
console.log("============loop1==============")


  let num = 1;
while (num <= 20) {
  if (num % 2 !== 0) {
    console.log(num);
  }
  num++;
}
console.log("===========loop2===============")

let numq = 1;

while (numq <= 25) {
  if (numq % 2 === 0) {
    console.log(numq);
  }
  numq++;
}

console.log("==========loop 3================")


for (let i = 1; i <= 8; i++) {
 let a = '';
  for (let j = 1; j <= i; j++) {

    a += j+' ';
  }
  console.log(a);
}





console.log("=============fib=============")





 function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  n=0;
 
  return fibonacci(n - 1) + fibonacci(n - 2);

 }