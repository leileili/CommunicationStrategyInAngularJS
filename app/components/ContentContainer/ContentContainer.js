var contentContainerModule = angular.module('contentContainerModule', []);
contentContainerModule.controller('contentContainerController', function($scope, $timeout, CommunicationManager,ServiceCommunication, $rootScope) {
	//Add an id field to the owner so that we can use a map to container subscribers to prevent
	//redundantly subscribing. We use "this"(the controller) as owner so that we can 
	//use the controller as the caller (this) when invoke the subscription handler.
	this.id = "contentContainerController";
	
	$scope.$on("topicB", function(event,data)
	{
		$scope.screen = data.id;
	})
	
	CommunicationManager.subscribe("/Nav/Update", function(data) {
		$timeout(function() {
			$scope.screen = data.id;
		}, 0)
	}, this);
		
})
contentContainerModule.directive('contentContainer', function() {
    return {
    	restrict: 'E', 
    	templateUrl: 'components/ContentContainer/ContentContainer.htm',
    	controller: 'contentContainerController'
    };
});
