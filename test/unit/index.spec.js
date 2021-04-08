/*
 * Unit tests for lib/calculator.js
 */

describe('isEmailValid', function() {

  // SET UP: do something before each 'it' test aka unit test
  beforeEach(function() {
    
  });

  // TEAR DOWN: do something after each
  afterEach(function() {
    
  });

  it('should return false when the email is abc', function() {
    var result = isEmailValid('abc');
    expect(result).toBe(true);
  });

  it('should return true for you@example.com', function() {
    isEmailValid('you@example.com');
    expect(result).toBe(false);
    expect(result).toBeFalsy();
  });

});
  
describe('verifyPassword', function() {
  beforeEach(function() {
    var pass = "123";
  });

  it('should alert user if password is less than 8 characters', function() {
    var result = verifyPassword(pass);
    expect(result).toBe("Password length must be atleast 8 characters")
  });

  it('should return Password is empty, if password is ""', function() {
    pass = ""
    var result = verifyPassword(pass);
    expect(result).toBe("Password is empty")
  });

  it('should alert user if password is greater than 15 characters', function() {
    pass = "password123456789"
    var result = verifyPassword(pass);
    expect(result).toBe("Password length must not exceed 15 characters")
  });
});