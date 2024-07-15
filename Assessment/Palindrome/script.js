function isPalindrome(s) {
    s = s.toLowerCase();
    return s === s.split('').reverse().join('');
}
console.log(isPalindrome("radar"));
console.log(isPalindrome("Hello")); 
