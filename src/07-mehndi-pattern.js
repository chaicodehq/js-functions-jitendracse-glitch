/**
 * 🎨 Mehndi Pattern Maker - Recursion
 *
 * Mehndi artist hai tu! Intricate patterns banane hain using RECURSION.
 * Yahan loops use karna MANA hai — sirf function khud ko call karega
 * (recursive calls). Har function mein base case aur recursive case hoga.
 *
 * Functions:
 *
 *   1. repeatChar(char, n)
 *      - Repeat char n times using recursion (NO loops, NO .repeat())
 *      - Base case: n <= 0 => return ""
 *      - Recursive: char + repeatChar(char, n - 1)
 *      - Agar char not a string or empty, return ""
 *
 *   2. sumNestedArray(arr)
 *      - Sum all numbers in an arbitrarily nested array
 *      - e.g., [1, [2, [3, 4]], 5] => 15
 *      - Skip non-number values
 *      - Base case: empty array => 0
 *      - Agar input not array, return 0
 *
 *   3. flattenArray(arr)
 *      - Flatten an arbitrarily nested array into a single flat array
 *      - e.g., [1, [2, [3, 4]], 5] => [1, 2, 3, 4, 5]
 *      - Agar input not array, return []
 *
 *   4. isPalindrome(str)
 *      - Check if string is palindrome using recursion
 *      - Case-insensitive comparison
 *      - Base case: string length <= 1 => true
 *      - Compare first and last chars, recurse on middle
 *      - Agar input not string, return false
 *
 *   5. generatePattern(n)
 *      - Generate symmetric mehndi border pattern
 *      - n = 1 => ["*"]
 *      - n = 2 => ["*", "**", "*"]
 *      - n = 3 => ["*", "**", "***", "**", "*"]
 *      - Pattern goes from 1 star up to n stars, then back down to 1
 *      - Use recursion to build the ascending part, then mirror it
 *      - Agar n <= 0, return []
 *      - Agar n is not a positive integer, return []
 *
 * Hint: Every recursive function needs a BASE CASE (when to stop) and a
 *   RECURSIVE CASE (calling itself with a smaller/simpler input).
 *
 * @example
 *   repeatChar("*", 4)        // => "****"
 *   sumNestedArray([1, [2, [3]]]) // => 6
 *   flattenArray([1, [2, [3]]]) // => [1, 2, 3]
 *   isPalindrome("madam")     // => true
 *   generatePattern(3)        // => ["*", "**", "***", "**", "*"]
 */
export function repeatChar(char, n) {
  if (typeof char !== 'string' || char === '' || n <= 0) return '';
  return char + repeatChar(char, n - 1);
}

export function sumNestedArray(arr) {
  if (!Array.isArray(arr)) return 0;

  let sum = 0;
  for (const item of arr) {
    if (typeof item === 'number') {
      sum += item;
    } else if (Array.isArray(item)) {
      sum += sumNestedArray(item);
    }
  }
  return sum;
}

export function flattenArray(arr) {
  if (!Array.isArray(arr)) return [];

  const result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

export function isPalindrome(str) {
  if (typeof str !== 'string') return false;

  const s = str.toLowerCase();
  if (s.length <= 1) return true;

  if (s[0] !== s[s.length - 1]) return false;

  return isPalindrome(s.slice(1, -1));
}

export function generatePattern(n) {
  if (!Number.isInteger(n) || n <= 0) return [];

  function ascending(current) {
    if (current > n) return [];
    return ['*'.repeat(current), ...ascending(current + 1)];
  }

  function descending(current) {
    if (current < 1) return [];
    return ['*'.repeat(current), ...descending(current - 1)];
  }

  return [...ascending(1), ...descending(n - 1)];
}
