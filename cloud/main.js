Parse.Push.send({
	where: { 
		"deviceType": { "$in": [ "ios",  "android"  ]  }  	  
	},
	data: { 
		"title": "Test",
		"alert": "Test"
	}
}, { useMasterKey: true });
