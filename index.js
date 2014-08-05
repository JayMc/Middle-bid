module.exports = {

	/**
	 * Finds a middle point between buyer max price and seller min price
	 * $param {buyer} JSON object of buyer with min and max attributes
	 * $param {seller} JSON object of seller with min and max attributes
	 * @return {init} middle price overlapping or null if there was an error.
	 */
	match: function(buyer, seller, round){

		//return early for exceptions
		if(buyer == undefined){
			return null
		}
		if(seller == undefined){
			return null
		}
		if(buyer.min == undefined || buyer.max == undefined){
			return null
		}
		if(seller.min == undefined || seller.max == undefined){
			return null
		}

		if(buyer.max >= seller.min){
			//within trading range
			//find halfway of what the seller wants to get and the least amount the buyer is to pay
			middle = Number((buyer.max + seller.min)/2);

			if(round){
				middle = Math.round(middle);
			}
			return middle;

		}else{
			//not within range - no deal!
			return null;
		}

		
	}
}
