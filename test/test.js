const Word = require('../index');
const chai = require('chai'),
assert = chai.assert,
expect = chai.expect,
should = chai.should;
describe('Get longest Word in a sentence', function() {
    it('should return the longest word in a sentence', function() {
        var results = "mountain " + 8;
        assert.equal(Word,results);
    });

    it("should only be a string",function(){
        assert.isString(Word,"");
    });

});