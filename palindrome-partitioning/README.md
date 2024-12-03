# Palindrome Partitioning  

## Problem Statement  

In a real-time application like a text editor or a messaging app, users often want to format their text in a way that enhances readability. One such formatting option is to split text into palindromic segments. A palindrome is a sequence that reads the same backward as forward, such as "madam" or "racecar."   

Your task is to determine the minimum number of cuts needed to partition a given string into palindromic substrings. This functionality can help users identify and highlight palindromic phrases in their text, making it easier to analyze or present.  

## Explanation  

Given a string `s`, you need to find the minimum number of cuts required to partition the string such that each substring is a palindrome. For example, if the input string is "aab", it can be partitioned into "aa" and "b", which are both palindromic substrings, requiring only one cut.  

# Sample Input and Output Examples for Palindrome Partitioning  

## Example 1  
**Input:**  
s = "aab"

**Output:**  
1

**Explanation:** The string can be split into "aa" and "b", requiring one cut.  

---  

## Example 2  
**Input:**
s = "a"

**Output:**
0

**Explanation:** The string is already a palindrome, so no cuts are needed.  

---  

## Example 3  
**Input:**
s = "ab"

**Output:**
1

**Explanation:** The only way to partition "ab" is to keep both characters as separate palindromes, requiring one cut.  

---  

## Example 4  
**Input:**
s = "racecar"

**Output:**
0

**Explanation:** The entire string is a palindrome, so no cuts are needed.  

---  

## Example 5  
**Input:**
s = "noonracecar"

**Output:**
1

**Explanation:** The string can be split into "noon" and "racecar", requiring one cut.  

---  

## Example 6  
**Input:**
s = "abccba"

**Output:**
0

**Explanation:** The entire string is a palindrome, so no cuts are needed.  

---  

## Example 7  
**Input:**
s = "abcba"

**Output:**
0

**Explanation:** The string is a palindrome. No cuts are needed.  

---  

## Example 8  
**Input:**
s = "aabbc"

**Output:**
1

**Explanation:** The best partitioning is "aa", "b", "c", which requires one cut.  

---  

## Example 9  
**Input:**
s = "racecarannakayak"

**Output:**
2

**Explanation:** The optimal partitioning can be "racecar", "anna", "kayak" which requires two cuts.