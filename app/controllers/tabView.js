

if(Ti.App.Properties.getString('serviceTab') == "dental")
{
   $.servicesImage.image = "/tabicons/dermatology_tab.png";
}
else
{
  $.servicesImage.image = "/tabicons/dental_tab.png";
}

function openHome()
{
	Alloy.createController('home').getView();
}

function openSearch()
{
	Alloy.createController('search').getView();
}

function openPromotion()
{
	Alloy.createController('promotions').getView();
}

function openFeedback()
{
	Alloy.createController('feedback').getView();
}

function openServices()
{
	Alloy.createController('services').getView();
}

