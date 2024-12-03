public class PalindromePartitioning {  

    public int minCut(String s) {  
        int n = s.length();  
        if (n <= 1) return 0;  

        // Create a dp array to determine if substrings are palindromes  
        boolean[][] dp = new boolean[n][n];  
        for (int i = 0; i < n; i++) {  
            dp[i][i] = true; // Single character is always a palindrome  
        }  

        // Fill the dp table  
        for (int length = 2; length <= n; length++) {  
            for (int i = 0; i <= n - length; i++) {  
                int j = i + length - 1;  
                if (s.charAt(i) == s.charAt(j)) {  
                    dp[i][j] = (length == 2) || dp[i + 1][j - 1];  
                }  
            }  
        }  

        int[] cuts = new int[n];  
        for (int j = 0; j < n; j++) {  
            if (dp[0][j]) {  
                cuts[j] = 0; // No cuts needed if the whole substring is a palindrome  
            } else {  
                cuts[j] = Integer.MAX_VALUE;  
                for (int i = j; i >= 1; i--) {  
                    if (dp[i][j]) {  
                        cuts[j] = Math.min(cuts[j], cuts[i - 1] + 1);  
                    }  
                }  
            }  
        }  

        return cuts[n - 1];  
    }  

    public static void main(String[] args) {  
        PalindromePartitioning pp = new PalindromePartitioning();  
        System.out.println(pp.minCut("aab")); // Output: 1  
        System.out.println(pp.minCut("a"));    // Output: 0  
        System.out.println(pp.minCut("ab"));   // Output: 1  
        System.out.println(pp.minCut("racecar")); // Output: 0  
    }  
}