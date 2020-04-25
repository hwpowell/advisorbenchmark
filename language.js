function languageSelector(region="US", country="US"){

	Qualtrics.SurveyEngine.setEmbeddedData("Delimiter" ,",");
	var lang = jQuery("#Q_lang").val();
	
	switch (region){
		case "EU":
			jQuery(".LanguageSelectorContainer").show();
			jQuery("#Q_lang option[value="+"EN"+"]").remove();
			jQuery("#Q_lang option[value="+"EN-AU"+"]").remove();
	
			if (country == "DE"){
				Qualtrics.SurveyEngine.setEmbeddedData("Delimiter" ,".");
				if (lang != "EN-GB" && lang != "DE" && lang != "NL"){
					jQuery("#Q_lang").val("DE");
				}
			}
			else if (country == "NL"){
				if (lang != "EN-GB" && lang != "DE" && lang != "NL"){
					jQuery('#Q_lang').val('NL');
				}
			}
			else{
				if (lang != "EN-GB" && lang != "DE" && lang != "NL"){
					jQuery("#Q_lang").val("EN-GB");
				}
			}
			break;
		
		case "AU":
			Qualtrics.SurveyEngine.setEmbeddedData("Sign" ,"$");
			jQuery("#Q_lang").val("EN-AU");
			
			if (country == "NZ"){
				Qualtrics.SurveyEngine.setEmbeddedData("Cr" ,"NZD");
			}
			else {
				Qualtrics.SurveyEngine.setEmbeddedData("Cr" ,"AUD");
			}
			break;
		
		default:
			Qualtrics.SurveyEngine.setEmbeddedData("Cr" ,"USD");
			Qualtrics.SurveyEngine.setEmbeddedData("Sign" ,"$");
			jQuery("#Q_lang").val("EN");
			break;
	}
};


function translations(language){
	switch (language){
		case "DE":
			var dict = {
				//Core
				"EmailText" : "E-Mail-Adresse",
				"PasswordText" : "Passwort",
				"Location" : "(Stand)Ort",
				"PostValid" : "Please enter a valid postal code",
				"PostError" : "is not a valid postal code",
				"NewClientsError" : "Bitte geben Sie die folgende minimale Anzahl an Neukunden an",
				"LostClientsError" : "Anzahl an verlorenen Kunden muss entsprechen",
				//M&A
				"Months" : "monate",
				// All modules
				"SubmitSurvey" : "FRAGEBOGEN ABSCHICKEN"
			};
			break;
		
		case "NL":
			var dict = {
				//Core
				"EmailText" : "E-mailadres",
				"PasswordText" : "Wachtwoord",
				"Location" : "Locatie",
				"PostValid" : "Please enter a valid postal code",
				"PostError" : "is not a valid postal code",
				"NewClientsError" : "Voor nieuwe klanten moet u een getal aangeven dat groter is dan of gelijk is aan",
				"LostClientsError" : "Het aantal verloren klanten moet gelijk zijn aan",
				//M&A
				"Months" : "maanden",
				// All modules
				"SubmitSurvey" : "VRAGENLIJST VERZENDEN"
			};
			break;
		
		default:
			var dict = {
				//Core
				"EmailText" : "Email",
				"PasswordText" : "Password",
				"Location" : "Location",
				"PostValid" : "Please enter a valid postal code",
				"PostError" : "is not a valid postal code",
				"NewClientsError" : "For new clients, you must indicate a value greater than or equal to",
				"LostClientsError" : "Lost clients must equal",
				//M&A
				"Months" : "months",
				// All modules
				"SubmitSurvey" : "SUBMIT SURVEY"
			};
			break;
	};
	
	return dict;

};


function languageSettings(region, country){
	
	jQuery(document).ready(function(){
		if (jQuery("[id^='Authenticator']").length !=0){
			jQuery(".LanguageSelectorContainer").show();
			var dict = translations(jQuery("#Q_lang").val());
			jQuery("[id$='0~label']").html(dict["EmailText"]);
			jQuery("[id$='1~label']").html(dict["PasswordText"]);
			
		}
		else if (jQuery("#Password").length !=0){
			jQuery(".LanguageSelectorContainer").show();
		}
		else {
			languageSelector(region, country);
		}
	});
};
