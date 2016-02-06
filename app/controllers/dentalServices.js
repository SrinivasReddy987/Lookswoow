var args = arguments[0] || {};
var httpManager = require("httpManager");
$.shareView.visible = false;

var appointmentNumber = Ti.App.Properties.getString('appoinmentNo');

function sendButtonClicked() {
	if($.emailField.value === '' )
		{
		alert("Please enter email");
		return;
	}
	else
	{
		var str = $.emailField.value;
        var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (filter.test(str)) {
           // testresults = true;
        } else {
            alert("Please enter valid email id");
		    return;
        }
     }
	var emailDialog = Ti.UI.createEmailDialog();
	emailDialog.subject = "Hello from Titanium";
	emailDialog.toRecipients = $.emailField.value ;
	emailDialog.messageBody = '<b>Lookwoow</b>';
	emailDialog.open();
}


function openFindUs() {
	Alloy.createController('findUs').getView();
}

function openDeal() {
	Alloy.createController('deals').getView();
}

function openTestimonial() {
	Alloy.createController('testmonials').getView();
}

function openLoyalty() {
	Alloy.createController('loyalty').getView();
}

function openServices() {
	Alloy.createController('services').getView();
}

function openSocial() {
	Alloy.createController('beSocial').getView();
}

function openBeforeAfter() {
	Alloy.createController('beforeAfter').getView();
}

function openShare() {
	$.shareView.visible = true;
}

function openAboutUs() {
	Alloy.createController('aboutUs').getView();
}

function closeWin() {
	$.shareView.visible = false;
}

function bookAppoinment() {
	if(appointmentNumber > 0)
	{
		Alloy.createController('appointmentList').getView();
	}
	else
	{
	  Alloy.createController('bookAppointment').getView();
	}
}

function liveChat() {
	Titanium.Platform.openURL("https://dashboard.tawk.to/login");
}

function makeCall() {
	if (Ti.Platform.osname == 'android') {
		var phoneNum = "tel:" + "+971 565693417";
		var confomAlert = Ti.UI.createAlertDialog({
			title : 'Lookwoow',
			//message : Alloy.Globals.selectedLanguage.callConformAlert + number + ((Alloy.Globals.isArabic) ? "؟" : "?"),
			message : '+971 565693417',
			buttonNames : ['Cancel', 'Call']
		});
		confomAlert.addEventListener('click', function(e) {
			if (e.index == 1) {
				Ti.Platform.openURL(phoneNum);
			}
		});
		confomAlert.show();
	} else {
		var phoneNum = "telprompt:" + '+971 565693417';

		if (Ti.Platform.canOpenURL(phoneNum)) {
			Ti.Platform.openURL(phoneNum);
		} else {
			//exports.showAlert(Alloy.Globals.selectedLanguage.call, Alloy.Globals.selectedLanguage.noCallAlert);
		}
	}
};


function logoutClicked (e)
{
	httpManager.userLogout(function(response) {
		if(response.success == 1)
		{
		   Alloy.createController('login').getView();
		}
	});	
}



$.dentalServices.open();

// if(args.name = "dental")
// {
	// $.tabView.image ="/tabicons/dental-tab.png";
// }else
// {
	// $.tabView.image ="/tabicons/dermatology-tab.png";
// }


// function winPostLayout(){
// var topView = $.topView.toImage().height;
// var tabView = $.bottomView.toImage().height;
// $.scrollview.height = Ti.Platform.DisplayCaps.platformHeight - 120;
// }

