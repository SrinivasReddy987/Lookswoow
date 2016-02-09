

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
	if(Alloy.Globals.isSearch == true){
		Ti.API.info('isSearch');
		Alloy.Globals.isSearch = false;
		Alloy.Globals.closeSearchWindow();
	}
	if(Alloy.Globals.isPromotions == true){
		Ti.API.info('isPromotions');
		Alloy.Globals.isPromotions = false;
		Alloy.Globals.closePromotionsWindow();
	}
	if(Alloy.Globals.isFeedback == true){
		Ti.API.info('isFeedback');
		Alloy.Globals.isFeedback = false;
		Alloy.Globals.closeFeedbackWindow();
	}
	if(Alloy.Globals.isServices == true){
		Ti.API.info('isServices');
		Alloy.Globals.isServices = false;
		Alloy.Globals.closeServicesWindow();
	}
}

function openSearch()
{
	Alloy.createController('search').getView();
	if(Alloy.Globals.isHome == true){
		Ti.API.info('isHome');
		Alloy.Globals.isHome = false;
		Alloy.Globals.closeHomeWindow();
	}
	if(Alloy.Globals.isPromotions == true){
		Ti.API.info('isPromotions');
		Alloy.Globals.isPromotions = false;
		Alloy.Globals.closePromotionsWindow();
	}
	if(Alloy.Globals.isFeedback == true){
		Ti.API.info('isFeedback');
		Alloy.Globals.isFeedback = false;
		Alloy.Globals.closeFeedbackWindow();
	}
	if(Alloy.Globals.isServices == true){
		Ti.API.info('isServices');
		Alloy.Globals.isServices = false;
		Alloy.Globals.closeServicesWindow();
	}
}

function openPromotion()
{
	Alloy.createController('promotions').getView();
	if(Alloy.Globals.isHome == true){
		Ti.API.info('isHome');
		Alloy.Globals.isHome = false;
		Alloy.Globals.closeHomeWindow();
	}
	if(Alloy.Globals.isSearch == true){
		Ti.API.info('isSearch');
		Alloy.Globals.isSearch = false;
		Alloy.Globals.closeSearchWindow();
	}
	if(Alloy.Globals.isFeedback == true){
		Ti.API.info('isFeedback');
		Alloy.Globals.isFeedback = false;
		Alloy.Globals.closeFeedbackWindow();
	}
	if(Alloy.Globals.isServices == true){
		Ti.API.info('isServices');
		Alloy.Globals.isServices = false;
		Alloy.Globals.closeServicesWindow();
	}
}

function openFeedback()
{
	Alloy.createController('feedback').getView();
	if(Alloy.Globals.isHome == true){
		Ti.API.info('isHome');
		Alloy.Globals.isHome = false;
		Alloy.Globals.closeHomeWindow();
	}
	if(Alloy.Globals.isSearch == true){
		Ti.API.info('isSearch');
		Alloy.Globals.isSearch = false;
		Alloy.Globals.closeSearchWindow();
	}
	if(Alloy.Globals.isPromotions == true){
		Ti.API.info('isPromotions');
		Alloy.Globals.isPromotions = false;
		Alloy.Globals.closePromotionsWindow();
	}
	if(Alloy.Globals.isServices == true){
		Ti.API.info('isServices');
		Alloy.Globals.isServices = false;
		Alloy.Globals.closeServicesWindow();
	}
}

function openServices()
{
	Alloy.createController('services').getView();
	if(Alloy.Globals.isHome == true){
		Ti.API.info('isHome');
		Alloy.Globals.isHome = false;
		Alloy.Globals.closeHomeWindow();
	}
	if(Alloy.Globals.isSearch == true){
		Ti.API.info('isSearch');
		Alloy.Globals.isSearch = false;
		Alloy.Globals.closeSearchWindow();
	}
	if(Alloy.Globals.isPromotions == true){
		Ti.API.info('isPromotions');
		Alloy.Globals.isPromotions = false;
		Alloy.Globals.closePromotionsWindow();
	}
	if(Alloy.Globals.isFeedback == true){
		Ti.API.info('isFeedback');
		Alloy.Globals.isFeedback = false;
		Alloy.Globals.closeFeedbackWindow();
	}
}

function closeOtherViews(){
	if(Alloy.Globals.isSearch == true){
		Ti.API.info('isSearch');
		Alloy.Globals.isSearch = false;
		Alloy.Globals.closeSearchWindow();
	}
	if(Alloy.Globals.isPromotions == true){
		Ti.API.info('isPromotions');
		Alloy.Globals.isPromotions = false;
		Alloy.Globals.closePromotionsWindow();
	}
	if(Alloy.Globals.isFeedback == true){
		Ti.API.info('isFeedback');
		Alloy.Globals.isFeedback = false;
		Alloy.Globals.closeFeedbackWindow();
	}
	if(Alloy.Globals.isServices == true){
		Ti.API.info('isServices');
		Alloy.Globals.isServices = false;
		Alloy.Globals.closeServicesWindow();
	}
}

