angular.module('Fizzbuzz', []);

angular.module('Fizzbuzz').controller('FizzbuzzController', function($scope, FizzbuzzFactory) {
	$scope.fizzbuzz = FizzbuzzFactory;

	$scope.startFizzbuzz = function(number) {
		$scope.fizzbuzz.displayNumbers(number).then(function(success) {
			$scope.result = success;
		}, function(error) {
			$scope.result = error;
		});
	}
});

angular.module('Fizzbuzz').factory('FizzbuzzFactory', function($q) {
	return {
		displayNumbers: function(number) {
			var defer = $q.defer();	

			if (number && number > 0) {
				var string = "";

				for (var i = 1; i <= number; i++) {
					var fizz = (i % 3 === 0);
					var buzz = (i % 5 === 0);
					string += (fizz ? buzz ? " fizzbuzz" : " fizz" : buzz ? " buzz" : " "+i);
					string += "\n";
				}

				defer.resolve(string);
			}
			else {
				defer.reject("The entered value is not a positive number. Please enter a positive number ...");
			}

			return defer.promise;
		}
	};
});
