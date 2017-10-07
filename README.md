***The best practice of communication among scopes, specially one to many communication.
What is wrong with the way many developers use to communicate among scopes ?***

  It is known that there are different techniques of communication among scopes in AngularJS, which one is the best solution , especially for one to many communications? What's wrong with the popular $rootScope, Service or even $Broadcast/$Emit techniques of communications? Let's take a look by going through a sample project:

The four techniques we will going to comparing are:
1. communicate with $rootScope
2. communicate with Service
3. communicate with $Broadcast, $Emit and $On
4. communicate with Publish and Subscribe

**communication with $rootScope**
	 
In order to access to an <b>arbitrary</b> controller/scope, to use $rootScope as a way to find the other party, each controller needs to "register" itself by adding its $scope to a map (say scopeMap) in $rootScope (with controller name as key and $scope as value). Then one party, say A, can obtain the scope of the other party (say B) given B's name as key to the scopeMap. <br/>
It is handy and straight forward but A has to know exactly whom (B) to communicate so A and B are tightly coupled.<br/>
This tightly coupled relation seems no much problem in small and simple projects but it is hard to manage in big and complicate projects. One use case is where you need a one to many communication situation: you need to hard code A to B...Z in order to access them and next day your boss may tell you to change to XX ...ZZZ...The key problem is that A knows other parties.

**communication with Service**
	
Similar to $rootScope above, a service can be used to do the same: have a scopeMap and have all the parties "register" initially and then inject the service to all involve parties so that A can use the scopeMap of service to find B...Z. Again, A knows all its "friends" and A may need to update its "contact list" frequently during heavily development and maintenance. 
	
**communication with $broadcast, $emit and $on**
	
This technique can have communication parties coupled more loosely than previous two techniques. In our case above, A first emits a message up to the $rootScope and then the $rootScope "passes" the message to other parties like B by $broadcast and next B (C..Z) listen to the message with "on". In this way, A has no idea about who A is sending the message to. And B...Z also have not idea about where the message is from: A is "isolated" from others like B.
	The problem with emit/broadcast is that broadcast is too "heavy" to use as a major mean to communicate.

**communication with Publish and Subscribe**
	
This last technique is what I am going to introduce and I think it's the best approach within the known methods of communication of components. It is similar to emit/broadcast above but much more efficient.
	
Using publish and subscribe, I built a custom pub/sub system where A can directly reach A's other communication parties through a simple map in the middle man, CommunicationManager.
	
	
**Conclusion**


	
	
	
	
	
 
 
 
