function languageSelector(region='US', country='US'){

	Qualtrics.SurveyEngine.setEmbeddedData('Delimiter' ,',');
	var lang = jQuery('#Q_lang').val();
	
	switch (region){
		case 'EU':
			jQuery(".LanguageSelectorContainer").show();
			jQuery('#Q_lang option[value='+'EN'+']').remove();
			jQuery('#Q_lang option[value='+'EN-AU'+']').remove();
	
			if (country == 'DE'){
				Qualtrics.SurveyEngine.setEmbeddedData('Delimiter' ,'.');
				if (lang != 'EN-GB' && lang != 'DE' && lang != 'NL'){
					jQuery('#Q_lang').val('DE');
				}
			}
			else if (country == 'NL'){
				if (lang != 'EN-GB' && lang != 'DE' && lang != 'NL'){
					jQuery('#Q_lang').val('NL');
				}
			}
			else{
				if (lang != 'EN-GB' && lang != 'DE' && lang != 'NL'){
					jQuery('#Q_lang').val('EN-GB');
				}
			}
			break;
		
		case 'AU':
			Qualtrics.SurveyEngine.setEmbeddedData('Sign' ,'$');
			jQuery('#Q_lang').val('EN-AU');
			
			if (country == 'NZ'){
				Qualtrics.SurveyEngine.setEmbeddedData('Cr' ,'NZD');
			}
			else {
				Qualtrics.SurveyEngine.setEmbeddedData('Cr' ,'AUD');
			}
			break;
		
		default:
			Qualtrics.SurveyEngine.setEmbeddedData('Cr' ,'USD');
			Qualtrics.SurveyEngine.setEmbeddedData('Sign' ,'$');
			jQuery('#Q_lang').val('EN');
			break;
	}
};

function languageSettings(region, country){
	
	jQuery(document).ready(function(){
		if (jQuery("[id^=Authenticator]").length !=0){
			jQuery(".LanguageSelectorContainer").show();
		}
		else {
			languageSelector(region, country);
		}
	});
