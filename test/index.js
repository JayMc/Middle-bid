var should = require('chai').should(),
	middle = require('../index.js');

describe('#match', function(){

	it('readme example', function(){
		var buyer = {
			min: 5000,
			max: 13000
		};

		var seller = {
			min: 8000,
			max: 15000
		};

		middle.match(buyer,seller).should.equal(10500);		
	});	
	
	it('buyer max and seller min are the same, should return 5', function(){
		var buyer = {
			min: 1,
			max: 5
		};

		var seller = {
			min: 5,
			max: 10
		};

		middle.match(buyer,seller).should.equal(5);		
	});

	it('normal buy/sell ranges, should return 4', function(){
		var buyer = {
			min: 1,
			max: 5
		};

		var seller = {
			min: 3,
			max: 10
		};

		middle.match(buyer,seller).should.equal(4);		
	});

	it('normal buy/sell ranges large, should return 75', function(){
		var buyer = {
			min: 1,
			max: 100
		};

		var seller = {
			min: 50,
			max: 100
		};

		middle.match(buyer,seller).should.equal(75);		
	});

	it('normal buy/sell ranges decimal, should return 28.625', function(){
		var buyer = {
			min: 31.50,
			max: 42.25
		};

		var seller = {
			min: 15,
			max: 100
		};

		middle.match(buyer,seller,true).should.equal(29);		
	});

	it('buyer.max and seller.min are the same 6, should return 6', function(){
		var buyer = {
			min: 1,
			max: 6
		};

		var seller = {
			min: 6,
			max: 10
		};

		middle.match(buyer,seller).should.equal(6);		
	});

	it('seller range inside buyer range should return 4', function(){
		var buyer = {
			min: 1,
			max: 6
		};

		var seller = {
			min: 2,
			max: 5
		};

		middle.match(buyer,seller).should.equal(4);		
	});

	it('buyer range inside seller range should return 4', function(){
		var buyer = {
			min: 2,
			max: 5
		};

		var seller = {
			min: 1,
			max: 6
		};

		middle.match(buyer,seller).should.equal(3);		
	});

	it('buyer and seller not within range', function(){
		var buyer = {
			min: 0,
			max: 10
		};

		var seller = {
			min: 20,
			max: 30
		};

		should.not.exist(middle.match(buyer, seller));
	});

	it('missing paramaters', function(){
		var buyer = {
			min: 0,
			max: 10
		};

		var seller = {
			min: 20,
			max: 30
		};

		should.not.exist(middle.match(seller));		
	})

	it('missing paramaters', function(){
		var buyer = {
			max: 10
		};

		var seller = {
			min: 20,
			max: 30
		};

		should.not.exist(middle.match(buyer,seller));		
	})

});