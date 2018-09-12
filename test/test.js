/*
Explaining: 
describe takes two parameters, a name and a callback function
describe('string name', function(){
  // can nest more describe()'s here, or tests go here
});

it, takes two arguments, a string to explain what the test should do and a callback function,
it is use for an individual test case, 
it('should do ............. bla', function(){
  // Test case goes here
});
*/

var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function(){
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });

describe('Math',function(){
    it('should return  9 when multiplying 3 * 3', function(){
        assert.equal(9,(3*3));
    });
    it('should return -8 when multiplying (3-4)*8)', function(){
        assert.equal(-8,(3-4)*8);
    });
});