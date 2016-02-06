var appointmentNumber;
var httpManager = require("httpManager");

$.loyalty.addEventListener('focus', function(e)
{
	getUserDetails();
});


function addstars() {
	appointmentNumber = Ti.App.Properties.getString('appoinmentNo');

	$.appoinmentNum.text = "Number of Appoinments :" + appointmentNumber;

	if (appointmentNumber >= 1) {
		$.star1.image = "/star/starfill.png";
	}

	if (appointmentNumber >= 2) {
		$.star2.image = "/star/starfill.png";
	}

	if (appointmentNumber >= 3) {
		$.star3.image = "/star/starfill.png";
	}

	if (appointmentNumber >= 4) {
		$.star4.image = "/star/starfill.png";
	}

	if (appointmentNumber >= 5) {
		$.star5.image = "/star/starfill.png";
	}
}


function goBack()
{
	$.loyalty.close();
}


function bookAppointment()
{
	if(appointmentNumber > 0)
	{
	 Alloy.createController('appointmentList').getView();
	}else
	{
	 Alloy.createController('bookAppointment').getView();	
	}
}

function view3click()
{
	if(appointmentNumber >= 3)
	{
		alert("User already booked this appoinment");
		return;
	}
		else if(appointmentNumber < 3 && appointmentNumber !=2)
	{
		alert("User not eligible for this appoinment");
		return;
	}
	//Ti.App.Properties.setString(1, 'appNumber');
	Alloy.createController('appointmentList').getView();
}

function view1click()
{
	if(appointmentNumber >= 1)
	{
		alert("User already booked this appoinment");
		return;
	}

	Alloy.createController('bookAppointment').getView();
}

function view2click()
{
	if(appointmentNumber >= 2)
	{
		alert("User already booked this appoinment");
		return;
	}
	else if(appointmentNumber < 2 && appointmentNumber !=1)
	{
		alert("User not eligible for this appoinment");
		return;
	}
	//Ti.App.Properties.setString(3, 'appNumber');
	Alloy.createController('appointmentList').getView();
}

function view4click()
{
	if(appointmentNumber >= 4)
	{
		alert("User already booked this appoinment");
		return;
	}
		else if(appointmentNumber < 4 && appointmentNumber !=3)
	{
		alert("User not eligible for this appoinment");
		return;
	}
	//Ti.App.Properties.setString(4, 'appNumber');
	Alloy.createController('appointmentList').getView();
}

function view5click()
{
	if(appointmentNumber >= 5)
	{
		alert("User already booked this appoinment");
		return;
	}
		else if(appointmentNumber < 5 && appointmentNumber !=4)
	{
		alert("User not eligible for this appoinment");
		return;
	}
	Alloy.createController('appointmentList').getView();
}

function view6click()
{
	if(appointmentNumber < 5)
	{
		alert("User not eligible for this appoinment");
		return;
	}
	Alloy.createController('appointmentList').getView();
}


function getUserDetails() {
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function(e) {
		if (this.responseText != null) {
			
			var jsObj = JSON.stringify(this.responseText);
			var data = JSON.parse(this.responseText);
			
		   if(data.success == 1)
		   {
		   	Ti.App.Properties.setString('appoinmentNo',data.profile.total_appointments);
		   	Ti.App.Properties.setString('userName',data.profile.name);
		   	Ti.App.Properties.setString('userEmail',data.profile.email);
		   	addstars();
		   }
		   else
		   {
		   	alert("Incorrect email or password!"); 
		   }
		} else {
			Ti.API.info("Response is Empty");
		}
	};

	xhr.onerror = function(e) {
	   alert("Error");
	};
	
	xhr.open('GET', 'http://dmsapiensdubai.com/lookswoow/appcms/?tag=profile');
	xhr.send();	
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


$.loyalty.open();
