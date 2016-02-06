
var httpManager = require("httpManager");
var data = [];
var details = [];
 
dealsDetails();

function addTableData(){
for (var i=0; i < details.length; i++) {
var row = Titanium.UI.createTableViewRow();
var viewRow = Titanium.UI.createView({
    backgroundColor:'#FFDDEE',
    top:5,
    left:5,
    right:5,
   height : 300,
    layout : "vertical"
});


var titleLabel = Ti.UI.createLabel({
	text : 'Ahmed Al - Rumaihi',
	left : "5%",
     font: { fontSize: '18', fontWeight: 'bold'},
     color : "#5F93A9",
     top : 5,
});
titleLabel.text = details[i].promoHeading;

viewRow.add(titleLabel);


// Create an ImageView.
var anImageView = Ti.UI.createImageView({
	image : 'services/men.jpg',
	hight : "150",
	width : "200",
	top : 10
});
anImageView.image = details[i].promoImg;
viewRow.add(anImageView);


var lablAmount = Ti.UI.createLabel({
	text : '3,999/- AED',
    top : 5,
    left :"5%",
    font: { fontSize: '18', fontWeight: 'bold'},
    color : "#DA308A"
});
lablAmount.text = details[i].promoPrice;
viewRow.add(lablAmount);

var textArea = Titanium.UI.createLabel({
    value : 'RESTORE THE FUNCTIONALITY OF YOUR MISSING TEETH IN JUST ONE DAY.',
    editable : false,
    top : 5,
    //backgroundColor : "transparent",
    color : "#DA308A",
    height : Ti.UI.SIZE,
    font : {
    	fontSize :'12sp'
    },
    left:"5%"
});
textArea.text = details[i].promoDesc;
viewRow.add(textArea);

row.add(viewRow);

data.push(row);
}

$.tableView.setData(data);
}


function dealsDetails() {
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function(e) {
		if (this.responseText != null) {
			var jsObj = JSON.stringify(this.responseText);
			var data = JSON.parse(this.responseText);
			details = data.promotions;
			addTableData();
			
		} else {
			alert("No Data Found");
			Ti.API.info("Response is Empty");
		}
	};

	xhr.onerror = function(e) {
	   alert("Error");
	};
	
	xhr.open('GET', 'http://dmsapiensdubai.com/lookswoow/appcms/json/promotions.json');
	xhr.send();	
}

function goBack()
{
	$.promotions.close();
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



$.promotions.open();
