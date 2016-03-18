var app = angular.module('FruitsVeggies', []);

app.controller('produceCtrl',['$scope', function($scope) {
	$scope.fruit = [];
	$scope.vegetables = [];
	$scope.pool = fruit.concat(vegetables);


	function shuffle(a) {
    	var j, x, i;
    	for (i = a.length; i; i -= 1) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
	}

	shuffle($scope.pool);

	$scope.leftArrow = function(idx, item) {
		if ($scope.pool.indexOf(item) != -1) {
			$scope.fruit.push($scope.pool[idx]);
			$scope.pool.splice(idx, 1);
			checkFruit(item);
			checkVeggie(item);
		} else {
			$scope.pool.push($scope.vegetables[idx]);
			$scope.vegetables.splice(idx, 1);
			checkFruit(item);
			checkVeggie(item);
		}
	}

	$scope.rightArrow = function(idx, item) {
		if ($scope.pool.indexOf(item) != -1) {
			$scope.vegetables.push($scope.pool[idx]);
			$scope.pool.splice(idx, 1);
			checkFruit(item);
			checkVeggie(item);
		} else {
			$scope.pool.push($scope.fruit[idx]);
			$scope.fruit.splice(idx, 1);
			checkFruit(item);
			checkVeggie(item);
		}
	}

	var checkFruit = function(item) {
		if($scope.pool.length === 0) {
			console.log($scope.fruit, item, fruit);
			if(JSON.stringify($scope.fruit.slice().sort()) === JSON.stringify(fruit)) {
				alert('You answered them right')
			}
		}
	}

	var checkVeggie = function() {
		if($scope.pool.length === 0) {
			if(JSON.stringify($scope.vegetables.slice().sort())===JSON.stringify(vegetables)) {

			} 
		}
	}

	var colorChanger = function(item) {
		if(!$scope.pool.inlcudes(item)) {
			if(fruit.inlcudes(item) && !$scope.fruit.includes(item)) {
				return 'colorChanger';
			} else {
				return '';
			}
		} else {
			return '';
		}
	} 
}]);


//debug stuff to show the app is loading and fruit / veggies are available
console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);