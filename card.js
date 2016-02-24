
var handleRating = function(){
	var score = $('input[name=ratingInput]:checked', '#ratingForm').val(),
		allRating = $('.rating-message'),
		goodRatingElement = $('.good-rating-message'),
		badRatingElement = $('.bad-rating-message');
	allRating.hide();
	if(3<score){
		goodRatingElement.show();
	}else{
		badRatingElement.show();
	}
}

var navigate = function(){
	//Todo: write your own navigation logic
	window.open('http://www.google.com','_blank')
}