The best practice of communication among scopes, specially one to many communication.
What is wrong with the way many developers use to communicate among scopes ?

  It is known that there are different techniques of communication among scopes in AngularJS, which one is the best solution , especially for one to many communications? What's wrong with the popular $rootScope, Service or even $Broadcast/$Emit techniques of communications? Let's take a look by going through a sample project:

The four techniques we will going to comparing are:
1. communicate with $rootScope
2. communicate with Service
3. communicate with $Broadcast, $Emit and $On
4. communicate with Publish and Subscribe

	 communication with $rootScope
	 
	In order to let the child or sibling component know what to do once parent or another component send out an event, using $rootScope so that all the other components will see the order; it's easy and fast ; but what if we have more than 10 children/sibling and more than 10 events; this technique will be messy and hard to maintain. What if today we have 10 events and 10 children/sibling, tomorrow the number of orders or children/sibling have changed ? So that the parent/sibling component will need to find where those 10 children/sibling components are and each other component will need to let the parent component know the changes as well. 
	
	communication with Service
	
	If we create a communication management Service which has a register, unregister, getScope functions, then the component who receive event can register its scope and the component to send event can use getScope to get the data. This is a technique better than using $rootScope because in this way, the parent component doesn't need to change if the children components have changes. But the disadvantage of the components having to know each other when sending and receiving events is still there.
	
	communication with $broadcast, $emit and $on
	
	This technique is more popular than previous two techniques. It uses $broadcast to send event down to children components from parent component, use $emit to send event up from children components to parent component, use $on to listen to the event. It is much better for one to many communication, but there is a catch: because the direction is either up or down, there's no direct communication between siblings, the child has to $emit event up to the parent, then the parent $broadcast down to the children; both parent and child need to set up $on to listen to the event.
	
	communication with Publish and Subscribe
	
	This last technique is what I am going to introduce and I think it's the best approach within the known methods of communication of components.
	Using publish and subscribe, both parent and children components don't know each other's existing and they don't need to know. The parent sends out event by publishing its event topic to a pub-sub-manager controller; the children get the event notice by subscribing to different event topics on the same pub-sub-manager. It's just like job offers publishing v.s. resumes subscribing on job searching web pages. The companies who offer jobs don't need to know who may fit the job, and the job applier doesn't need to know what company might fit her/him. They just publish and subscribe and wait. When there's event come out and the fit is found , the pair of company and applier will get what they need. 
	
	
	
	
	
 
 
 