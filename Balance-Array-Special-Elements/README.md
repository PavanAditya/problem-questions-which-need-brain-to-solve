# Balance Array

```Source: Scaler - InterviewBit```

> Given an integer array A of size N. You need to count the number of special elements in the given array.
> A element is special if removal of that element make the array balanced.
> Array will be balanced if sum of even index element equal to sum of odd index element.

Quick Links:

[Jump to Logic](#logic-explanation)


```
Problem Constraints

1 <= N <= 105

1 <= A[i] <= 109
```

### Input Format
- First and only argument is an integer array A of size N.


### Output Format

- Return an integer denoting the count of special elements.


### Example Input

```
Input 1:

A = [2, 1, 6, 4]
Input 2:

A = [5, 5, 2, 5, 8]
```

### Example Output
```
Output 1:

1
Output 2:

2
```

### Example Explanation

```
Explanation 1:

After deleting 1 from array : {2,6,4} (2+4) = (6)
Hence 1 is the only special element, so count is 1

Explanation 2:

If we delete A[0] or A[1] , array will be balanced (5+5) = (2+8)
So A[0] and A[1] are special elements, so count is 2.
```


## Logic Explanation:

```
For example if [1,2,3,4,5,6,7,8,9,10] is the input array,
EvenSum = 1+3+5+7+9
Oddsum = 2+4+6+8+10

If 6 is removed from the array, the sums will get updated as below:
EvenSum = 1+3+5+8+10
OddSum = 2+4+7+9

At any given point, for a particular element to be removed and needs to be checked dynamically the cumulative even and odd sums till that point should be reverse added to the totalSums.

Example formula for an even positioned element removal:
TotalEvenSum - A[i] - cumulativeEvenSum + cumulativeOddSum 
```