var httpManager = require("httpManager");

function goBack()
{
	$.congrats.close();
}

function viewAppointmentList()
{
	Alloy.createController('appointmentList').getView();
}

function logoutClicked (e)
{
	httpManager.userLogout(function(response) {
		if(response.success == 1)
		{
		   Alloy.createController('login').getView();
		   $.congrats.close(); 
		}
	});	
}


$.congrats.open(); 
