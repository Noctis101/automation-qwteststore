/**
 * NOTE: To run specifically, npm test -- --<reporter> ./test/<testFileName>
**/

describe('Sample Test - Go To Sign Up Page', function() {
    it('should take you to the sign up page', () => {
        browser.url(`${browser.options.baseUrl}`)
        
    });
});