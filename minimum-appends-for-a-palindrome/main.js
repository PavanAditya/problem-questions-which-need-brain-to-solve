
// ! LOGIC ONLYY!!!


module.exports = {
    //param A : string
    //return an integer
    solve: function (A) {
        if (A === A.split('').reverse().join('')) {
            return 0;
        }
        let count = 1;
        let strSplitArr = A.split('');
        while (count < A.length - 1) {
            if ([...strSplitArr, ...strSplitArr.slice(0, count).reverse()].join('') ===
                [...strSplitArr, ...strSplitArr.slice(0, count).reverse()].reverse().join('')) {
                break;
            }
            count++;
        }
        return count;
    }
};
