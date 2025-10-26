
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

//This function returns a new array with the elements sorted in ascending order
function orderedArray(array) {
  return array.slice().sort((a, b) => a - b);
}

//This function returns the longest common subsequence between two strings
function longestCommonSubsequence(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let index = dp[m][n];
  let lcs = Array(index).fill('');
  let i = m, j = n;

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      lcs[index - 1] = str1[i - 1];
      i--;
      j--;
      index--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return lcs.join('');
}

module.exports = { fibonacci, orderedArray, longestCommonSubsequence };