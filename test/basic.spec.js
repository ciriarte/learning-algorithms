describe('Reverse a string', function () {

  it('should revert the phrase "Hello, World!"', function () {
    expect(reverse('Hello, World!')).toEqual('!dlroW ,olleH');
  });
});


describe('Reverse polish notation', function () {

  it('should interpret ["2", "1", "+", "3", "*"] as ((2 + 1) * 3) -> 9', function () {
    expect(rpn(["2", "1", "+", "3", "*"])).toEqual(9);
  });

    it('should interpret ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6', function () {
    expect(rpn(["4", "13", "5", "/", "+"])).toEqual(6);
  });
});

describe('Palindrome', function() {
  it('ABBA should be a palindrome', function() {
    expect(isPalindrome('ABBA')).toEqual(true);
  });

  it('PABBA should be a palindrome', function() {
    expect(isPalindrome('PABBA')).toEqual(false);
  });
});

describe('Longest palindrome', function() {
  
  it('should return BCCB for ABCCBP', function() {
    expect(longestPalindrome('ABCCBP')).toEqual('BCCB');
  });

  it('should return AABBAA for 56742AABBAA34', function() {
    expect(longestPalindrome('56742AABBAA34')).toEqual('AABBAA');
  });

  it('should return ANINA for 1ANINA2', function() {
    expect(longestPalindrome('1ANINA2')).toEqual('ANINA');
  });
});

describe('Balance parenthesis', function() {
  it('should be true for "()"', function() {
    expect(isBalanced("()")).toEqual(true);
  });

  it('should be false for ")("', function() {
    expect(isBalanced(")(")).toEqual(false);
  });

  it('should be true for "(Hello (World))"', function() {
    expect(isBalanced("(Hello (World))")).toEqual(true);
  });

  it('should be false for "(Hello World))"', function() {
    expect(isBalanced("(Hello World))")).toEqual(false);
  });

  it('should be false for "())()("', function() {
    expect(isBalanced("())()(")).toEqual(false);
  });
});