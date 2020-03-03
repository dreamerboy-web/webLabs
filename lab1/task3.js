exports.theBig = (num1, num2) =>{
    let for1 = [1];
    let for2 = [1];
    let endl = 0;

    for(let i = 2, limit = num1 >>1; i<=limit; i++) if(!(num1 % i)) for1.push(i);
    if (num1 !== 1) for1.push(num1);

    for(let n = 2, limit = num2 >>1; n<=limit; n++) if(!(num2 % n)) for2.push(n);
    if (num2 !== 1) for2.push(num2);

    for1.forEach(value => {
        for(let i = 0; i < for2.length; i++){
            if(value === for2[i]) endl = value;
        }
    });

    console.log(endl);
};