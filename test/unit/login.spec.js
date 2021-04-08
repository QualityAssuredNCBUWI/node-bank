/*
 Nathaniel Bedassie 7/4/2020
 Unit test for login user story/feature
*/

describe('login', function() {
    // SET UP: do something before each 'it' test aka unit test
    beforeEach(function() {
        name = "You Me"
        email = "youme@example.com"
        card = "1234512345"
        password = "1u89djb13"
    });
    // TEAR DOWN: do something after each
    afterEach(function() {
    
    });

    it('should create a user in the database', function() {
        registerUser(name, email, password, card)
        var result = getUser(card)
        expect(result.name).toBe(name)
        expect(result.email).toBe(email)
      });
    
    it('should authenticate the user created', function() {
        
    });
})