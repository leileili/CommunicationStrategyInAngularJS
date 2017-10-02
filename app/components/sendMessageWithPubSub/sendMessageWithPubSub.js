var sendMessageWithPubSubModule = angular.module('sendMessageWithPubSubModule', []);
sendMessageWithPubSubModule.controller('sendMessageWithPubSubController', function($scope,$timeout,CommunicationManager) {
	$scope.title = "";
	$scope.message = "";

	CommunicationManager.subscribe("/Nav/Update", function(data) {
		$timeout(function() {
			$scope.title = data.Label;
		}, 0)
	}, this);
	
	CommunicationManager.subscribe("send msg", function(data) {
		$timeout(function() {
			$scope.message = data;
		}, 0)
	}, this);
	
})
	

sendMessageWithPubSubModule.directive('sendMessageWithPubSub', function() {
    return {
    	restrict: 'E', 
    	templateUrl: 'components/sendMessageWithPubSub/sendMessageWithPubSub.htm',
    	controller: 'sendMessageWithPubSubController'
    };
});
