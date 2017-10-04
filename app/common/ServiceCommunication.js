
communicationStrategyApp.service("ServiceCommunication",function(){
	 
	 return {
		 scopeMap:{},
		 register: function(key, value){
			 this.scopeMap[key] = value;
		 },
		 unregister:function(key){
			 delete this.scopeMap[key]
		 },
		 getScope: function(key) {
			 return this.scopeMap[key]
		 }
	 
	};
})