var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('chai').should();
var chakram = require('chakram');
var _ = require('lodash');
expectChakram = chakram.expect;


var foo ='bar';
var abc = {
  name : 'avi',
  ar : ['a','b','c']
};
var xyz = _.cloneDeep(abc);
xyz.ar[0] = 'f';

var pqr = _.castArray(12);

describe('expect', function() {
	it('should check castArray', function(){
     expect(pqr).to.be.a('array');
	});
});

describe('expect', function() {
	it('should check clonedeep', function(){
     expect(abc.ar[0]).to.equal('a');
	});
});
describe('clonedeep', function(){
describe('expect', function() {
	it('should check clonedeep', function(){
     expect(xyz.ar[0]).to.equal('f');
	});
});
});
  
describe('#expect', function() {
  it('should check if it is a string', function() {
   expect(foo).to.be.a('string');
  });
});
describe('expect',function() {
  it('should check length if 3', function(){
   expect(foo).to.have.lengthOf(3);
 });
});

describe('expect',function(){
 it('should be equal to bar',function(){
   expect(foo).to.equal('bar');
 });
});

describe('assert',function(){
	it('should be equal to bar',function(){
		assert.equal(foo,'bar','should be equal');
	});
});

describe('assert', function(){
	it('should check type of foo', function(){
		assert.typeOf(foo,'string','foo is a string');
	});
});

describe('check length',function(){
	it('should check length of foo', function(){
		foo.should.have.lengthOf(3);
	});
});

describe('check type',function(){
	it('should check type of foo', function(){
		foo.should.be.a('string');
	});
});

describe("Chakram", function() {
    it("should offer simple HTTP request capabilities", function () {
        return chakram.get("http://google.com");
    });
});

describe("Chakram", function() {
    it("should provide HTTP specific assertions", function () {
        var response = chakram.get("http://google.com");
        return expectChakram(response).to.have.status(200);
    });
});
