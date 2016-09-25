Parse.Push.send({
 -Parse.Cloud.define('hello', function(req, res) {		 +	where: { 
 -  res.success('Hi');		 +		"deviceType": { "$in": [ "ios",  "android"  ]  }  	  
 -});		 +	},
 +	data: { 
 +		"title": "iOBest",
 +		"alert": "Test"
 +	}
 +}, { useMasterKey: true });
