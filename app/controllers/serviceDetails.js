var args = arguments[0] || {};
var httpManager = require("httpManager");
$.textArea.value = args.desc;
$.headerLabel.text = args.heading;

function goBack()
{
	$.serviceDetails.close();
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

$.serviceDetails.open();