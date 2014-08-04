var should = require('chai').should(),
	middle = require('../index.js'),
	bid = middle.bid;

describe('#bid', function(){
	
	it('buyer max and seller min are the same, should return 5', function(){
		var buyer = {
			min: 1,
			max: 5
		};

		var seller = {
			min: 5,
			max: 10
		}

		bid(buyer,seller).should.equal(5);		
	});

	it('normal buy/sell ranges, should return 4', function(){
		var buyer = {
			min: 1,
			max: 5
		};

		var seller = {
			min: 3,
			max: 10
		}

		bid(buyer,seller).should.equal(4);		
	});

	it('normal buy/sell ranges large, should return 75', function(){
		var buyer = {
			min: 1,
			max: 100
		};

		var seller = {
			min: 50,
			max: 100
		}

		bid(buyer,seller).should.equal(75);		
	});

	it('normal buy/sell ranges decimal, should return 28.625', function(){
		var buyer = {
			min: 31.50,
			max: 42.25
		};

		var seller = {
			min: 15,
			max: 100
		}

		bid(buyer,seller).should.equal(28.625);		
	});

	it('buyer.max and seller.min are the same 6, should return 6', function(){
		var buyer = {
			min: 1,
			max: 6
		};

		var seller = {
			min: 6,
			max: 10
		}

		bid(buyer,seller).should.equal(6);		
	});

	it('seller range inside buyer range should return 4', function(){
		var buyer = {
			min: 1,
			max: 6
		};

		var seller = {
			min: 2,
			max: 5
		}

		bid(buyer,seller).should.equal(4);		
	});

	it('buyer range inside seller range should return 4', function(){
		var buyer = {
			min: 2,
			max: 5
		};

		var seller = {
			min: 1,
			max: 6
		}

		bid(buyer,seller).should.equal(3);		
	});

	it('buyer and seller not within range', function(){
		var buyer = {
			min: 0,
			max: 10
		};

		var seller = {
			min: 20,
			max: 30
		}

		should.not.exist(bid(buyer, seller));
	});

	it('missing paramaters', function(){
		var buyer = {
			min: 0,
			max: 10
		};

		var seller = {
			min: 20,
			max: 30
		}

		should.not.exist(bid(seller));		
	})

	it('missing paramaters', function(){
		var buyer = {
			max: 10
		};

		var seller = {
			min: 20,
			max: 30
		}

		should.not.exist(bid(buyer,seller));		
	})

});