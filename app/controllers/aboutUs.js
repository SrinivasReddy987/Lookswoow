var httpManager = require("httpManager");

function goBack()
{
	$.aboutUs.close();
}

function logoutClicked (e)
{
	httpManager.userLogout(function(response) {
		if(response.success == 1)
		{
		   Alloy.createController('login').getView();
		   $.aboutUs.close();
		   Alloy.Globals.closeDentalServices();
		}
	});	
}

$.aboutUs.open(); 