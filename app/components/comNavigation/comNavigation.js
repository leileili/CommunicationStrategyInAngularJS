var comNavigationModule = angular.module('comNavigationModule', []);
 
comNavigationModule.controller('comNavigationController', function($scope,$timeout,$rootScope,$http,CommunicationManager, ServiceCommunication) {
    $scope.choices = [{"id":'sendMessageWithRootScopeController', "Label":"Use rootScope"},{"id":'sendMessageWithServiceController', "Label":"User Service"},{"id":'sendMessageWithEmitBroadcastController', "Label":"Use Broadcast"},{"id":'sendMessageWithPubSubController', "Label":"Use Pub Sub"}];
    $scope.pickChoices = function(sel){
    	$scope.sel = sel;
    	//CommunicationManager.publish("/Nav/Update", sel)
    	switch($scope.sel.id)
    	{
	    	case 'sendMessageWithRootScopeController': 
	    		$rootScope.scopeMap[sel.id].title = $scope.sel.Label;
	    		break;
	    	case 'sendMessageWithServiceController': 
	    		ServiceCommunication.getScope("sendMessageWithServiceController").title = $scope.sel.Label;
				break;
	    	case 'sendMessageWithEmitBroadcastController': 
	    		$scope.$emit("selectPage", sel)
	    		break;
	    	case 'sendMessageWithPubSubController': 
	    		CommunicationManager.publish("/Nav/Update", $scope.sel);
	    		CommunicationManager.subscribe("/Nav/Update", function() {
	    			$timeout(function() {
	    				$scope.screen = $scope.sel.id;
	    				$scope.title = $scope.sel.Label;
	    			}, 0)
	    		}, this);
				break; 	
    	}
    };
    $scope.msg = ""

    $scope.sendMsg = function(){
    	switch($scope.sel.id){
	    	case 'sendMessageWithRootScopeController': 
	    		$scope.sendMessageWithRootScope()
	    		break;
	    	case 'sendMessageWithServiceController': 
	    		$scope.sendMessageWithService()
    			break;
	    	case 'sendMessageWithEmitBroadcastController': 
	    		$scope.$emit("selectPage", $scope.sel)
    			break;
	    	case 'sendMessageWithPubSubController': 
	    		$scope.sendMessageWithPubSub()
    			break; 	
    	}   	
    }
    
    $scope.sendMessageWithRootScope = function() {
    	$rootScope.scopeMap["sendMessageWithRootScopeController"].setMessage($scope.msg);
    }
    $scope.sendMessageWithService = function() {
    	ServiceCommunication.getScope("sendMessageWithServiceController").setMessage($scope.msg);
	}
    $scope.sendMessageWithEmitBroadcast = function() {
    	//$scope.$broadcast("$scope.sel.id", "$scope.sel.Label");
	}
    $scope.sendMessageWithPubSub = function() {
    	CommunicationManager.publish("/Nav/Update", $scope.sel);
	}
	

});

comNavigationModule.directive('comNavigation', function() {
  return {
    restrict: 'E',
    transclude: 'true',
    templateUrl: 'components/comNavigation/comNavigation.htm',
    controller: 'comNavigationController'
  };
});