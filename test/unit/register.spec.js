/*
 Nathaniel Bedassie 7/4/2020
 Unit test for register user story/feature
*/

describe('register', function() {
    // SET UP: do something before each 'it' test aka unit test
    beforeEach(function() {
    });
    // TEAR DOWN: do something after each
    afterEach(function() {
    
    });

    it('should create a user in the database', function() {
        name = "You Me"
        email = "youme@example.com"
        card = "1234512345"
        password = "1u89djb13"
        registerUser(name, email, password, card)
        var result = getUser(card)
        expect(result.name).toBe(name)
        expect(result.email).toBe(email)
      });
    
    it('should ...', function() {
    
    });
})