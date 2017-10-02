var sendMessageWithPubSubModule = angular.module('sendMessageWithPubSubModule', []);
sendMessageWithPubSubModule.controller('sendMessageWithPubSubController', function($scope,$timeout,CommunicationManager) {
	$scope.title = "";
	$scope.message = "";
	CommunicationManager.subscribe("/Nav/Update", function(data) {
		$timeout(function() {
			$scope.screen = data.id;
		}, 0)
	}, this);
	$scope.setMessage = function(message) {
		$timeout(function() {
			$scope.message = message;
		})
	}

})
	

sendMessageWithPubSubModule.directive('sendMessageWithPubSub', function() {
    return {
    	restrict: 'E', 
    	templateUrl: 'components/sendMessageWithPubSub/sendMessageWithPubSub.htm',
    	controller: 'sendMessageWithPubSubController'
    };
});
