Const number=17;
let is prime=true;
    if (num <= 1) {
        isPrime= false;
    }else{

    for (let i = 2; i <=Math.sqrt(number); i++) {
        if (num % i === 0) {
            isPrime=false;
            break;
        }
    }
}
if(isPrime){
    console.log(number + " is a Prime Number");
} else {
    console.log(number + " is not a Prime Number");
}
