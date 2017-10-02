var sendMessageWithEmitBroadcastModule = angular.module('sendMessageWithEmitBroadcastModule', []);
sendMessageWithEmitBroadcastModule.controller('sendMessageWithEmitBroadcastController', function($scope,$rootScope) {
	$scope.title = "";
	$scope.message = "";
	
	$scope.$on("topicB", function(event,data)
	{
			$scope.title = data.Label;
	})
	$scope.$on("topicD", function(event,data)
	{
			$scope.message = data;
	})
})

sendMessageWithEmitBroadcastModule.directive('sendMessageWithEmitBroadcast', function() {
    return {
    	restrict: 'E', 
    	templateUrl: 'components/sendMessageWithEmitBroadcast/sendMessageWithEmitBroadcast.htm',
    	controller: 'sendMessageWithEmitBroadcastController'
    };
});
