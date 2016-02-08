if (Ti.App.Properties.getString('loggedInUserName') && Ti.App.Properties.getString('loggedInPassword')) {
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function(e) {
		if (this.responseText != null) {
			var data = JSON.parse(this.responseText);
			if (data.success == 1) {
				Alloy.createController('home').getView();
			} else {
				alert("Incorrect email or password!");
			}
		} else {
			Ti.API.info("Response is Empty");
		}
	};

	xhr.onerror = function(e) {
		alert("Error");
	};

	xhr.open('GET', 'http://dmsapiensdubai.com/lookswoow/appcms/?tag=login&email=' + Ti.App.Properties.getString('loggedInUserName') + '&password=' + Ti.App.Properties.getString('loggedInPassword'));
	xhr.send();
	//Alloy.createController('home').getView();
} else {
	Alloy.createController('login').getView();
}
