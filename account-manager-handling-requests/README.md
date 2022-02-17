# Account Manager

```Source: Scaler - InterviewBit```

## Problem Description
```
We want to stimulate a simple order dispatch module. We have A different accounts/ connections with the exchange. At any point in time, we can send an order via an account if it is in “available” mode. The account goes in “busy” mode for B microseconds after sending an order successfully.

We are given a list C of timestamps of the orders where C[i] denotes that an order was placed at C[i] microseconds. The timestamps are given in increasing order of time. For each timestamp entry, we need to find the number of accounts available after sending this particular order. If no account is available before sending the order, the answer is 0.
```

[Jump To Logic](#logic-explanation)

## Problem Constraints
```
1 <= A <= 105
1 <= B <=104
1 <= |C| <=105
0 <= C[i] <= 109
```


## Input Format

- The first line of input contains A.
- The second line of input contains B.
- The third line contains an integer array C denoting the timestamps.


## Output Format

- Return an integer array, the ith element of which is equal to the number of accounts available after sending this particular order.

## Example Input 1:
```
A = 4
B = 5
C = [0, 1, 6, 11]
```
## Example Input 2:
```
A = 2
B = 100
C = [0, 1, 5]
```

## Example Output 1:
```
[3, 2, 3, 3]
```
## Example Output 2:
```
[1, 0, 0]
```

## Example Explanation 1:
```
After first order at 0, we have 3 accounts available. 
After second order at 1, we have 2 accounts available. 
At 5, first account gets available.
After third order at 6, we have 3 accounts available. 
All the accounts become available at 11.
After fourth order at 11, we have 3 accounts available. 
```
## Example Explanation 2:
```
After first order at 0, we have 1 account available. 
After second order at 1, we have 0 accounts available. 
No account get available and we have 0 accounts at third order.
```

### Logic Explanation

Calculate individual usedTimes in an accumulator and according to the request incoming times free-up/add-to the usedTimes accumulator respectively.