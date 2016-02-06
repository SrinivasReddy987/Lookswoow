var httpManager = require("httpManager");

function goBack()
{
	$.bookAppointment.close();
}

function payAmount()
{
	Titanium.Platform.openURL("https://www.paypal.com/ae/webapps/mpp/home");
}

$.firstName.value = Ti.App.Properties.getString('userName');
$.emailTxt.value = Ti.App.Properties.getString('userEmail');

function bookAppointment() {

	if($.firstName.value === '' || $.lastName.value === '' || $.number.value === '' || $.cuntryCode.value === '' || $.emailTxt.value === '' || $.citiTxt.value === '' || $.countryTxt.value === '' || $.dateText.value === '' || $.countryTxt.value === '' || $.timeTxt.value === '' || $.servicesTxt.value === '' || $.specialTxt.value === '')
	{
		alert("Please enter all fields");
		return;
	}
	else
	{
		var str = $.emailTxt.value;
        var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (filter.test(str)) {
           // testresults = true;
        } else {
            alert("Please enter valid email id");
		    return;
        }
     }
	

	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function(e) {
		if (this.responseText != null) {
			
			var jsObj = JSON.stringify(this.responseText);
			var data = JSON.parse(this.responseText);
			
		   if(data.success == 1)
		   {
		   	 $.bookAppointment.close();
			 Alloy.createController('congrats').getView();
		   }
		   else
		   {
		   	alert(data.error);
		   }
		} else {
			Ti.API.info("Response is Empty");
		}
	};

	xhr.onerror = function(e) {
	   alert("Error");
	};
		
	xhr.open('GET', 'http://dmsapiensdubai.com/lookswoow/appcms/?tag=appointment&name='+ $.firstName.value + $.lastName.value +'&phn=' + $.cuntryCode.value + $.number.value +'&email='+ $.emailTxt.value +'&city='+ $.citiTxt.value + '&country=' + $.countryTxt.value + '&service=' + $.servicesTxt.value + '&spreq=' + $.specialTxt.value + '&date=' + $.dateText.value + '&time=' + $.timeTxt.value);
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


$.bookAppointment.open();


 