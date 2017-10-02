var sendMessageWithRootScopeModule = angular.module('sendMessageWithRootScopeModule', []);
sendMessageWithRootScopeModule.controller('sendMessageWithRootScopeController', function($scope, $timeout,$rootScope) {
	if ($rootScope.scopeMap===undefined) {
		$rootScope.scopeMap = {}
	}
	$rootScope.scopeMap["sendMessageWithRootScopeController"] = $scope;
	$scope.title = ""
	$scope.message = ""
	$scope.setMessage = function(message) {
		$timeout(function() {
			$scope.message = message;
		})
	}
})
sendMessageWithRootScopeModule.directive('sendMessageWithRootScope', function() {
    return {
    	restrict: 'E', 
    	templateUrl: 'components/sendMessageWithRootScope/sendMessageWithRootScope.htm',
    	controller: 'sendMessageWithRootScopeController'
    };
});
