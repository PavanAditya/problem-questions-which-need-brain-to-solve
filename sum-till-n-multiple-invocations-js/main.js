let totalSum = 0;

let sum = (n = undefined) => {
    if (n === undefined)
        return totalSum;
    totalSum += n;
    return sum;
};

console.log(sum(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)());