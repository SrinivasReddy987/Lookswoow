var MapModule = require('ti.map');
var httpManager = require("httpManager");

// var map1 = MapModule.createView({
// userLocation: true,
// mapType: MapModule.NORMAL_TYPE,
// animate: true,
// region: {latitude: -33.87365, longitude: 151.20689, latitudeDelta: 0.1, longitudeDelta: 0.1 },
// height: '33%',
// top: 0,
// width: Ti.UI.FILL
// });
//
// $.mapview.add(map1);

function winOpen() {
	try {
		var annotation = MapModule.createAnnotation({
			latitude : 25.1975,
			longitude : 55.2792,
			title : "DUBAI MALL",
			subtitle : "LOOKSWOOW",
			pincolor : MapModule.ANNOTATION_RED
		});
		$.mapview.addAnnotations([annotation]);

		$.mapview.region = {
			latitudeDelta : 0.1,
			longitudeDelta : 0.1,
			latitude : 25.1975,
			longitude : 55.2792,
		};

	} catch(e) {
		Ti.API.info('Error ' + e.message);
	}
}

function showMap() {
	try {
		if (Ti.Network.online) {
			if (OS_IOS) {
				Ti.Platform.openURL('Maps://http://maps.google.com/maps?q=25.1975,55.2792');
			} else {
				Ti.Platform.openURL('http://maps.google.com/maps?q=25.1975,55.5637938');
			}
		} else {
			alert("No Internet Connection");
		}
	} catch(e) {
		Ti.API.info('Error ' + e.message);
	}
}

function goBack() {
	$.findUs.close();
}

function logoutClicked (e)
{
	httpManager.userLogout(function(response) {
		if(response.success == 1)
		{
		   Alloy.createController('login').getView();
		   $.findUs.close();
		}
	});	
}


$.findUs.open();
