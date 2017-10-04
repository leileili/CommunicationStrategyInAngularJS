var comNavigationModule = angular.module('comNavigationModule', []);
 
comNavigationModule.controller('comNavigationController', function($scope,$timeout,$rootScope,$http,CommunicationManager, ServiceCommunication) {
    $scope.choices = [{"id":'sendMessageWithRootScopeController', "Label":"Use rootScope"},{"id":'sendMessageWithServiceController', "Label":"User Service"},{"id":'sendMessageWithEmitBroadcastController', "Label":"Use Broadcast"},{"id":'sendMessageWithPubSubController', "Label":"Use Pub Sub"}];
	
    $rootScope.$on("topicA",function(event,data){
    	$rootScope.$broadcast("topicB",data);
    });
    
    $rootScope.$on("topicC",function(event,data){
    	$rootScope.$broadcast("topicD",data);
    });

    $scope.pickChoices = function(sel){
    	$scope.sel = sel;
    	    	
    	switch($scope.sel.id)
    	{
	    	case 'sendMessageWithRootScopeController': 
	    		$rootScope.scopeMap[sel.id].title = $scope.sel.Label;
	    		$rootScope.screen = $scope.sel.id;
	    		break;
	    	case 'sendMessageWithServiceController': 
	    		ServiceCommunication.getScope("sendMessageWithServiceController").title = $scope.sel.Label;
	    		ServiceCommunication.getScope("sendMessageWithServiceController").screen = $scope.sel.id;
				break;
	    	case 'sendMessageWithEmitBroadcastController': 
	    		$scope.$emit("topicA", $scope.sel);
	    		break;
	    	case 'sendMessageWithPubSubController': 
	    		CommunicationManager.publish("/Nav/Update", $scope.sel);
	    		CommunicationManager.publish("send msg", $scope.msg);
				break; 	
    	}
    };
    $scope.msg = ""

    $scope.sendMsg = function(){
    	switch($scope.sel.id){
	    	case 'sendMessageWithRootScopeController': 
	    		$scope.sendMessageWithRootScope();
	    		break;
	    	case 'sendMessageWithServiceController': 
	    		$scope.sendMessageWithService();
    			break;
	    	case 'sendMessageWithEmitBroadcastController': 
	    		$scope.sendMessageWithEmitBroadcast();
    			break;
	    	case 'sendMessageWithPubSubController': 
	    		$scope.sendMessageWithPubSub();
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
    	$scope.$emit("topicC", $scope.msg);
	}
    $scope.sendMessageWithPubSub = function() {
    	CommunicationManager.publish("/Nav/Update", $scope.sel);
    	CommunicationManager.publish("send msg", $scope.msg);
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