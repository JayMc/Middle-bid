module.exports = {

	/**
	 * [middle description]
	 * $param {buyer} JSON object of buyer with min and max attributes
	 * $param {seller} JSON object of seller with min and max attributes
	 * @return {init} middle price overlapping
	 */
	bid: function(buyer, seller){

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

		buyerRange = (buyer.max - buyer.min);
		sellerRange = (seller.max - seller.min);
		rangeMiddle = (buyerRange + sellerRange)/2;
		if(buyer.max >= seller.min){
			//within trading range
			//find halfway point
			middle = Number((buyer.max + seller.min)/2);
			return middle;

		}else{
			//not within range - no deal!
			return null;
		}

		
	}
}
