
// ! ONLY LOGIC !!

lowHighSearch = function (A, B, low, high) {
    let mid = Math.floor((low + high) / 2);
    if (A[mid] === B) {
        return mid;
    }
    if (low > high) {
        return -1;
    }
    if (A[low] < A[mid]) {
        if (B >= A[low] && B <= A[mid]) {
            return lowHighSearch(A, B, low, mid - 1);
        }
        return lowHighSearch(A, B, mid + 1, high);
    }
    if (B >= A[mid] && B <= A[high]) {
        return lowHighSearch(A, B, mid + 1, high);
    }
    return lowHighSearch(A, B, low, mid - 1);
}

module.exports = {

    //param A : array of integers
    //param B : integer
    //return an integer
    search: function (A, B) {
        return lowHighSearch(A, B, 0, A.length - 1);
    }
};
