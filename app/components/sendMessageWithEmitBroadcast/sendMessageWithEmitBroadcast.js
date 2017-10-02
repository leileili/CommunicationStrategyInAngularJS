var sendMessageWithEmitBroadcastModule = angular.module('sendMessageWithEmitBroadcastModule', []);
sendMessageWithEmitBroadcastModule.controller('sendMessageWithEmitBroadcastController', function($scope,$rootScope) {
	$scope.title = "";
	$scope.message = "";
	$scope.$on("selectPage", function(msg) {
			$scope.message = msg;
			$scope.title = $rootScope.sel.Label;
		})	
})

sendMessageWithEmitBroadcastModule.directive('sendMessageWithEmitBroadcast', function() {
    return {
    	restrict: 'E', 
    	templateUrl: 'components/sendMessageWithEmitBroadcast/sendMessageWithEmitBroadcast.htm',
    	controller: 'sendMessageWithEmitBroadcastController'
    };
});
