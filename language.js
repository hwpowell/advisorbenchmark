Qualtrics.SurveyEngine.addOnload(function(){
	console.log('${e://Field/Region}');
	console.log('${e://Field/Country}');
	
	if (jQuery("[id^=Authenticator]").length ==0){	
		languageSelector('${e://Field/Region}','${e://Field/Country}');
	}

});
