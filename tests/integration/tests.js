const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

  // Do the number buttons update the display of the running total?
  it('should update the display of the running total when the numbers are clicked', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('93')
  })

  // Do the arithmetical operations update the display with the result of the operation?
  it('should update the display with the result of the operation when the arithmetical operations are clicked', function(){
    
  })
  // Can multiple operations be chained together?
  // Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  // What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you’d prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).

});
