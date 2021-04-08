/*
 Nathaniel Bedassie 7/4/2020
 Unit test for deposit user story/feature
*/

describe('deposit', function() {
    // SET UP: do something before each 'it' test aka unit test
    beforeEach(function() {
        balance = checkBalance("8768768768") 
    });
    // TEAR DOWN: do something after each
    afterEach(function() {
    
    });

    it('should check that amount is deposited', function() {
        amount = 1000
        var result = makeDeposit("8768768768", amount)
        result = checkBalance("8768768768")
        expect(result).toBe(balance + amount)
      });
    
    it('should ...', function() {
    
    });
})