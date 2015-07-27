var app = angular.module("animationApp",['ngAnimate']).controller("mainController", function($scope){

	$scope.fruits = ["Apple","Apricot","Avocado","Banana","Breadfruit","Bilberry","Blackberry","Blackcurrant","Blueberry","Boysenberry","Cantaloupe","Currant","Cherry","Cherimoya","Cloudberry","Coconut","Cranberry","Cucumber","Damson","Date","Dragonfruit","Durian"];

	$scope.delete = function (index) {
		var deleteFruit = $scope.fruits[index];

		$scope.fruits.splice(index, 1);
	};
});


