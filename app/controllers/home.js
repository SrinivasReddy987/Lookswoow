$.home.open();
var httpManager = require("httpManager");
Alloy.Globals.isHome = true;

function clickDentalButton(e) {
	Ti.App.Properties.setString('serviceTab', 'dental');
	payload = {
		name : "dental",
	};
	Alloy.createController('dentalServices', payload).getView();

}

function clickDermatologyButton(e) {
	payload = {
		name : "dermatology",
	};
	Ti.App.Properties.setString('serviceTab', 'dermatology');
	Alloy.createController('dentalServices', payload).getView();

}

function logoutClicked(e) {
	httpManager.userLogout(function(response) {
		if (response.success == 1) {
			Alloy.createController('login').getView();
			$.home.close();
		}
	});
}

Alloy.Globals.closeHomeWindow = function() {
	$.home.close();
};

