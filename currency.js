function formatInputTextGenerator(inputs, positive=false, noDelimiter=false) {
	return function(){
		const countriesWithCommaDecimal = ["BE","CH","DE","DK","FI","LU","NL","NO","SE"];
		
		var country = "${e://Field/Country}";
		
		if (countriesWithCommaDecimal.indexOf(country) > -1){
			delimiter = ".";
			decimalMark = ",";
		}
		else {
			delimiter = ",";
			decimalMark = ".";
		}
		if (noDelimiter == true){
			delimiter = "";
		}
		inputs.each(function(index, value) {
			new Cleave(this, {
				numeral: true,
				numeralPositiveOnly: positive,
				prefix: '', 
				noImmediatePrefix: true,
				numeralDecimalMark: decimalMark,
				delimiter: delimiter,
				numeralDecimalScale: 0
			});
		});
	}
};

function removeDelimiter(inputs) {
	return function(){
		inputs.each(function(){
			this.value = this.value.replace(/[,.]/g,"");
		});
	}
};
			
function formatBlankToZero(inputs) {
	inputs.each(function(){
		if (this.value == ""){
			this.value = 0;
		}
	});
};

function removeOnlyNegativeSign(inputs) {
	inputs.each(function(){
		if (this.value == "-"){
			this.value = "";
		}
	});
};

function numberFormatter(inputs, positiveOnly=false, noDelimiter=false, blankToZero=false, calculate){
	var nextButton = jQuery("#NextButton");
	var legibleFormatter = formatInputTextGenerator(inputs, positiveOnly, noDelimiter);
	var numericFormatter = removeDelimiter(inputs);

	if (calculate != null){
		numericFormatter();
		calculate();
	}

	legibleFormatter();

	inputs.keyup(function(){
		legibleFormatter();
		if (calculate != null){
			numericFormatter();
			calculate();
			legibleFormatter();
		}
			
		if (jQuery("#NextButton:hover").length != 0) {
			numericFormatter();
		}
	});
	
	inputs.focus(legibleFormatter);
	nextButton.hover(function(){
		if (blankToZero == true){
			formatBlankToZero(inputs);
		}
		numericFormatter();
	});
	nextButton.mouseleave(legibleFormatter);
	nextButton.click(function(){
		nextButton.mouseleave(numericFormatter); //Required for firefox
	});
};
