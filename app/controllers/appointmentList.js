var data = [];
var details = [];
var httpManager = require("httpManager");

dealsDetails();
function addTableData(){
for (var i=0; i < details.length; i++) {
var row = Titanium.UI.createTableViewRow();
var viewRow = Titanium.UI.createView({
    backgroundColor:'#FFDDEE',
    top:5,
    left:5,
    right:5,
    height : 120,
    layout : "vertical",
});


var nameLabel = Ti.UI.createLabel({
     top : 2,
     left :10,
     color : "black"
});
nameLabel.text = details[i].name;


var emailLabel = Ti.UI.createLabel({
    top : 2,
    left :10,
    right : 10,
    height : 30,
    font:{fontSize:13},
     color : "black"
});
emailLabel.text = details[i].email;

var dateLabel = Ti.UI.createLabel({
    top : 2,
    left :10,
    right : 10,
   height : 30,
    font:{fontSize:13},
     color : "black"
});
dateLabel.text = details[i].date + " " + details[i].time;


var statusLabel = Ti.UI.createLabel({
    top : 2,
    left :10,
    right : 10,
    height : 30,
    font:{fontSize:13},
     color : "black"
});

if(details[i].status == 0)
{
  statusLabel.text = "Pending";
  statusLabel.color = "red";
} 
else
{
 statusLabel.text = "Approved";
 statusLabel.color = "green";
}


viewRow.add(nameLabel);
viewRow.add(emailLabel);
viewRow.add(dateLabel);
viewRow.add(statusLabel);


row.add(viewRow);
data.push(row);
}

$.tableView.setData(data);
}

function goBack()
{
	$.appointmentList.close();
}

function dealsDetails() {
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function(e) {
		if (this.responseText != null) {
			var jsObj = JSON.stringify(this.responseText);
			var data = JSON.parse(this.responseText);
			details = data.dentalservices;
			addTableData();
		} else {
			alert("No Data Found");
			Ti.API.info("Response is Empty");
		}
	};

	xhr.onerror = function(e) {
	   alert("Error");
	};
	
	xhr.open('GET', 'http://dmsapiensdubai.com/lookswoow/appcms/?tag=appointments');
	xhr.send();	
}

function bookAppointment(){
	Alloy.createController('bookAppointment').getView();
	//Alloy.createController('congrats').getView();
}


function logoutClicked (e)
{
	httpManager.userLogout(function(response) {
		if(response.success == 1)
		{
		   Alloy.createController('login').getView();
		   $.appointmentList.close();
		}
	});	
}


$.appointmentList.open(); 



