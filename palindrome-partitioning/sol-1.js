function minCut(s) {  
    const n = s.length;  
    if (n <= 1) return 0;  

    // Create a dp array to check if substrings are palindromes  
    const dp = Array.from({ length: n }, () => Array(n).fill(false));  

    for (let i = 0; i < n; i++) {  
        dp[i][i] = true; // Single character is always a palindrome  
    }  

    // Fill the dp table  
    for (let length = 2; length <= n; length++) {  
        for (let i = 0; i <= n - length; i++) {  
            const j = i + length - 1;  
            if (s[i] === s[j]) {  
                dp[i][j] = length === 2 || dp[i + 1][j - 1];  
            }  
        }  
    }  

    const cuts = Array(n).fill(0);  
    for (let j = 0; j < n; j++) {  
        if (dp[0][j]) {  
            cuts[j] = 0; // No cuts needed if the whole substring is a palindrome  
        } else {  
            cuts[j] = Infinity;  
            for (let i = j; i >= 1; i--) {  
                if (dp[i][j]) {  
                    cuts[j] = Math.min(cuts[j], cuts[i - 1] + 1);  
                }  
            }  
        }  
    }  

    return cuts[n - 1];  
}  

// Example usage  
console.log(minCut("aab"));          // Output: 1  
console.log(minCut("a"));            // Output: 0  
console.log(minCut("ab"));           // Output: 1  
console.log(minCut("racecar"));      // Output: 0