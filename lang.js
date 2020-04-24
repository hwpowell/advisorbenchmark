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
};

function translations(language){
	switch (language){
		case "DE":
			var dict = {
				//Core
				"EmailText" : "E-Mail-Adresse",
				"PasswordText" : "Passwort",
				"Location" : "Location",
				"Please enter a valid postal code" : "Please enter a valid postal code",
				"PostError" : " is not a valid postal code",
				"NewClientsError" : "For new clients, you must indicate a value greater than or equal to:",
				"LostClientsError" : "Lost clients must equal:",
				//EX and Comp
				"ExIntroText" : "Update here",
				//M&A
				"Months" : "Months",
				// All modules
				"SubmitSurvey" : "SUBMIT SURVEY"
			};
			break;
		
		case "NL":
			var dict = {
				//Core
				"EmailText" : "E-mailadres",
				"PasswordText" : "Wachtwoord",
				"Location" : "Location",
				"Please enter a valid postal code" : "Please enter a valid postal code",
				"PostError" : " is not a valid postal code",
				"NewClientsError" : "For new clients, you must indicate a value greater than or equal to:",
				"LostClientsError" : "Lost clients must equal:",
				//EX and Comp
				"ExIntroText" : "Update here",
				//M&A
				"Months" : "Months",
				// All modules
				"SubmitSurvey" : "SUBMIT SURVEY"
			};
			break;
		
		default:
			var dict = {
				//Core
				"EmailText" : "Email",
				"PasswordText" : "Password",
				"Location" : "Location",
				"Please enter a valid postal code" : "Please enter a valid postal code",
				"PostError" : " is not a valid postal code",
				"NewClientsError" : "For new clients, you must indicate a value greater than or equal to:",
				"LostClientsError" : "Lost clients must equal:",
				//EX and Comp
				"ExIntroText" : "This survey requires a password.",
				//M&A
				"Months" : "Months",
				// All modules
				"SubmitSurvey" : "SUBMIT SURVEY"
			};
			break;
	};
	
	return dict;
};
