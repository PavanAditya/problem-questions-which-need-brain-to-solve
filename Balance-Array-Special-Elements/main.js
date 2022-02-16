module.exports = {
    // ? param A : array of integers
    // ? return an integer
    solve: function (A) {
        let [totalEvenSum, totalOddSum] = A.reduce(
            ([totalEvenSum, totalOddSum], ele, ind) => ind % 2 === 0 ? [totalEvenSum + ele, totalOddSum] : [totalEvenSum, totalOddSum + ele],
            [0, 0]);
        let i = 0;
        let numOfSpecialElements = 0;
        let cumulativeEvenSum = 0;
        let cumulativeOddSum = 0;
        while (i < A.length) {
            if (i % 2 === 0) {
                if (totalEvenSum - A[i] - cumulativeEvenSum + cumulativeOddSum === totalOddSum + cumulativeEvenSum - cumulativeOddSum) {
                    numOfSpecialElements++
                }
                cumulativeEvenSum += A[i];
            } else {
                if (totalEvenSum - cumulativeEvenSum + cumulativeOddSum === totalOddSum - A[i] + cumulativeEvenSum - cumulativeOddSum) {
                    numOfSpecialElements++;
                }
                cumulativeOddSum += A[i];
            }
            i++;
        }
        return numOfSpecialElements;
    }
};
