let numbers = 1;



function isPrime(a) {

    if (a == 1) return console.log("1 bukan bilangan prima atau bilangan komposit");

    if (a > 1 && a % 2 == 0 && a != 2 || a > 1 && a % 3 == 0 && a != 3) {
        return console.log("bukan prima");
    }
    else if (a > 1) {
        return console.log("bilangan prima");
    }
    else {
        return console.log("bukan bilangan prima");
    }
}


isPrime(numbers);