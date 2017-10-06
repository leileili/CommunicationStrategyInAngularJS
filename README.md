 Communication Strategies in AngularJS

  In this article we will go through different techniques of communication across different components in AngularJS , we will compare the pro and con of each method to find a best solution for AngularJS components communication.

The four techniques we will going to discuss are:
1. communicate with $rootScope
2. communicate with Service
3. communicate with $Broadcast, $Emit and $On
4. communicate with Publish and Subscribe

  We will set up a simple environment to demonstrate these four strategies, we will have a communication navigation component "comNavigationController" and in this controller we will have four different links for each technique, when user click each link, there is a content component "contentContainerController" who act as a path way , will get the information and pass to four different components pages which each has its own controller: 
1. "sendMessageWithRootScopeController" for $rootScope technique; 
2. "sendMessageWithServiceController" for Service technique
3. "sendMessageWithEmitBroadcastController" for $Broadcast, $Emit and $On technique
4. "sendMessageWithPubSubController" for Publish and Subscribe technique

  We will also have a text field and submit button to test the same techniques for the communications.

  Here put the picture of the frontpage.png



1. communication with $rootScope
   The first technique we will discuss is using $rootScope communicate between components.
 The communication navigation component "comNavigationController" has four choices list in an array, then use switch to process the user's selection. Inside the switch, we are using $rootScope to set up "title" and "screen" for next component controller "contentContainerController" to process. 
 
 In the sendMessageWithRootScope.js file, it has $rootScope injected, created a customized directive: "sendMessageWithRootScope"; the directive is called by sendMessageWithRootScope.htm file by passing screen; this screen decide which controller to call to display the final page, in this case , the "sendMessageWithRootScopeController" is called.
 
 
 
 