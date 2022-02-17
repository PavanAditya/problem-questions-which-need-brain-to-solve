
// ! LOGIC ONLYY!!

module.exports = {
    //param A : integer
    //param B : integer
    //param C : array of integers
    //return a array of integers
    solve: function (A, B, C) {
        let result = [A - 1];
        let usedTimes = [C[0]];
        for (let i = 1; i < C.length; i++) {
            while (C[i] - usedTimes[0] >= B && usedTimes.length) {
                usedTimes = usedTimes.slice(1);
            }
            usedTimes.push(C[i]);
            result[i] = A - usedTimes.length > 0 ? A - usedTimes.length : 0;
        }
        return result;
    }
};
