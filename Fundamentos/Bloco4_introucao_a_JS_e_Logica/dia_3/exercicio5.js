let maiorPrimo = 0;

for(let num = 2; num <= 50; num += 1){
    let primo = true;
    for(let divisor = 2 ; divisor < num; divisor += 1){
        if (num % divisor === 0) {
            primo = false;
        }
    }
    if (primo){
        maiorPrimo = num;
    }
}

console.log(maiorPrimo);