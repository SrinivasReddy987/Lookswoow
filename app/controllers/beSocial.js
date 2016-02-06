var httpManager = require("httpManager");

function goBack()
{
	$.beSocial.close();
}

function openFacebook()
{
	Titanium.Platform.openURL("https://www.facebook.com/Lookswoow"); 
}

function openTwitter()
{
	Titanium.Platform.openURL("https://twitter.com/lookswoow"); 
}

function openInstagram()
{
	Titanium.Platform.openURL("https://www.instagram.com/lookswoow/"); 
}

function openGooglePlus()
{
	Titanium.Platform.openURL("https://plus.google.com/+LookswoowDentalClinicDubai/posts"); 
}

function openPinterest()
{
	Titanium.Platform.openURL("https://www.pinterest.com/lookswoow/"); 
}

function logoutClicked (e)
{
	httpManager.userLogout(function(response) {
		if(response.success == 1)
		{
		   Alloy.createController('login').getView();
		}
	});	
}



$.beSocial.open();
 