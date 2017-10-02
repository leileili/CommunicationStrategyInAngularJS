class Sub {
	constructor(owner, handler) {
		this.owner = owner;
		this.handler = handler;
	}
	run(data) {
		this.handler.call(this.owner, data)
	}
}

class Topic {
	constructor(topicName) {
		this.name = topicName;
		this.subMap = {}
	}
}


mostPopularListingsApp.service("CommunicationManager",function(){
	 
	 return {		
		 topicMap:{},
		 subscribe:function(topicName, handler, owner){
			 var topic = this.topicMap[topicName];
			 if (topic===undefined) {
				 topic = this.topicMap[topicName] = new Topic(topicName)
			 }
			 topic.subMap[owner.id] = new Sub(owner, handler)
	     },
	     publish:function(topicName, data){
	    	 var topic = this.topicMap[topicName];
	    	 console.log("Publish:"+topicName);
			 if (topic===undefined) {
				 console.log("WARNING: there is no subscriber for topic:"+topicName)
				 return
			 }
			 for (var t in topic.subMap) {
				 var sub = topic.subMap[t];
				 sub.run(data);
			 }
	     }
	 
	 };
})