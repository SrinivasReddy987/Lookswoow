var httpManager = require("httpManager");

function goBack()
{
	$.beforeAfter.close();
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


$.beforeAfter.open(); 