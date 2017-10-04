var sendMessageWithServiceModule = angular.module('sendMessageWithServiceModule', []);
sendMessageWithServiceModule.controller('sendMessageWithServiceController', function($scope, $timeout,ServiceCommunication) {
	$scope.title = "";
	$scope.message = "";
	ServiceCommunication.register("sendMessageWithServiceController", $scope);
	
	$scope.setMessage = function(data) {
		$timeout(function() {
			$scope.title = data;
		})
	}
	
	$scope.setMessage = function(message) {
		$timeout(function() {
			$scope.message = message;
		})
	}
})
sendMessageWithServiceModule.directive('sendMessageWithService', function() {
    return {
    	restrict: 'E', 
    	templateUrl: 'components/sendMessageWithService/sendMessageWithService.htm',
    	controller: 'sendMessageWithServiceController'
    };
});
