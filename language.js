function languageSelector(region="US", country="US"){

	var lang = jQuery("#Q_lang").val();	
	const countriesWithCommaDecimal = ["BE","CH","DE","DK","FI","LU","NL","NO","SE"];
	
	Qualtrics.SurveyEngine.setEmbeddedData("Delimiter" ,countriesWithCommaDecimal.indexOf(country) > -1 ? "." : ",");
	Qualtrics.SurveyEngine.setEmbeddedData("DecimalMark" ,countriesWithCommaDecimal.indexOf(country) > -1 ? "," : ".");
	
	switch (region){
		case "EU":
			jQuery(".LanguageSelectorContainer").show();
			jQuery("#Q_lang option[value="+"EN"+"]").remove();
			jQuery("#Q_lang option[value="+"EN-AU"+"]").remove();
	
			if (country == "DE"){
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
				"MM" : "Mio.",
				"Million": "Mio.",
				"Billion": "Mrd.",
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
				"MM" : "miljoen",
				"Million": "miljoen",
				"Billion": "miljard",
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
				"MM" : "MM",
				"Million": "million",
				"Billion": "billion",
				"SubmitSurvey" : "SUBMIT SURVEY"
			};
			break;
	};
	
	return dict;

};


function roleDefinitions(language){
	switch (language){
		case "DE":
			var dict = {
				"SeniorAdvisor" : "Dient als Hauptberater/Kundenbeziehungsmanager. Verwaltet Kundenbeziehungen und ist verantwortlich für die Finanzplanung, Anlageberatung und/oder das Portfoliomanagement. Kann möglicherweise auch für die Gewinnung potenzieller Kunden und den Aufbau neuer Kundenbeziehungen verantwortlich sein.",
				"ServiceAdvisor" : "Dient als unterstützender Mitarbeiter und unterstützt den leitenden Berater/Kundenbeziehungsmanager bei der Verwaltung von Kundenbeziehungen. Ist möglicherweise für die Formulierung und Umsetzung von Ratschlägen verantwortlich, es wird jedoch normalerweise nicht erwartet, dass potenzielle Kunden generiert und neue Kundenbeziehungen aufgebaut werden.",
				"AssociateAdvisor" : "Verantwortlich für die fortlaufende Verwaltung und das Halten bestehender Kundenbeziehungen. Kann mit Service- oder leitenden Beratern zusammenarbeiten, um Beziehungen auszubauen. Kann sich für Anreize zur Geschäftsentwicklung qualifizieren.",
				"ClientServiceAssociate" : "Verantwortlich für die Unterstützung bei Kundenanfragen und von Beratern. Ist in nicht beratender Funktion tätig. Setzt Termine für Kundenbesprechungen an, sammelt Kundendaten, bearbeitet administrative Anfragen und führt andere Betriebstätigkeiten im Unternehmen durch.",
				"BusinessDevelopmentOfficer" : "Verantwortlich für die Entwicklung neuer Geschäfte, die Generierung von potenziellen Kunden und die Vernetzung.",
				"DirectorClientService" : "Verantwortlich für die Verwaltung aller Kundendienstaktivitäten für das Unternehmen oder einen bestimmten Geschäftsbereich. Koordiniert und überwacht das Kundendienstpersonal. Verfolgt wichtige Leistungsmetriken im Zusammenhang mit dem Kundendienst.",
				"HeadOfAdvisors" : "Verantwortlich für das tägliche Management des Berater- und Kundendienstteams. Stellt sicher, dass im gesamten Team ein einheitliches Maß an Vertrieb, Service und Beratung implementiert wird. Verantwortlich für die Suche nach Wegen, um dem Unternehmen zu helfen, Kunden zu gewinnen und zu halten.",
				"CEO" : "Höchste Führungskraft in einem Unternehmen, deren Hauptverantwortung die Entwicklung und Umsetzung von Strategien, das Treffen wichtiger Entscheidungen und die Verwaltung der gesamten Tätigkeiten und Ressourcen eines Unternehmens umfasst.",
				"President" : "Verantwortlich für die laufende Geschäftsführung des Unternehmens.",
				"COO" : "Verantwortlich für die Überwachung der Geschäftstätigkeit des Unternehmens gemäß den allgemeinen Zielen und Richtlinien. Die Rolle ist sehr kontingent und situativ und variiert je nach Unternehmen.",
				"CIO" : "Verantwortlich für die Anlageportfolios, Programme und Philosophie eines Unternehmens. Die Position kann auch kurz- und langfristige Anlagerichtlinien entwickeln.",
				"CFO" : "Verantwortlich für die Überwachung der finanziellen Aktivitäten des Unternehmens und das Management der finanziellen Risiken. Die Position kann auch für die Finanzplanung und -aufzeichnung sowie für die Finanzberichterstattung und Datenanalyse verantwortlich sein.",
				"CCO" : "Verantwortlich dafür, dass das Unternehmen die externen regulatorischen Anforderungen und internen Richtlinien einhält. Kann interne Richtlinien entwerfen oder aktualisieren, um das Risiko zu verringern, dass das Unternehmen gegen Gesetze und Vorschriften verstößt.",
				"CMO" : "Verantwortlich für die Empfehlungen in Bezug auf die Marketingaktivitäten des Unternehmens und deren Durchführung und Überwachung, um die finanziellen und strategischen Ziele des Marketingplans zu erreichen.",
				"DirectorOfHR" : "Verantwortlich für die Rekrutierung und Einstellung von Personal für das Unternehmen. Weitere Aufgaben umfassen, ohne darauf beschränkt zu sein, die Verwaltung und Kommunikation von Leistungen an Arbeitnehmer.",
				"DirectorOfFP" : "Verantwortlich für die Analyse der Finanzplanung und Beratung, um Kunden bei der Erreichung kurz- und langfristiger finanzieller Ziele zu unterstützen. Zu dieser Rolle kann die Aufsicht über das Finanzplanungsteam gehören.",
				"Paraplanner" : "Verantwortlich für die Erstellung von Finanzplänen, das Zusammenstellen und Ausfüllen von Kundenunterlagen (z. B. Firmen- und Depotformulare) sowie die Erstellung von Portfolioanalysen für potenzielle Kunden. Diese Rolle bereitet den Hauptberater auf Besprechungen mit Kunden vor und kann sogar an Besprechungen teilnehmen. In der Regel wird jedoch nicht erwartet, dass sie potenzielle Kunden generiert und neue Kundenbeziehungen aufbaut.",
				"SeniorPortfolioManager" : "Verantwortlich für die Anlagestrategie und das Management einzelner Portfolios, einschließlich Wertpapierauswahl, Vermögensallokation und Neugewichtung von Portfolios. Bezeichnung „Senior“ basierend auf Zertifizierungen und Erfahrung. Im Allgemeinen keine kundenorientierte Rolle.",
				"PortfolioManager" : "Verantwortlich für die Anlagestrategie und das Management von Kundenvermögen und -portfolios, einschließlich Handel und Neugewichtung. Kann einem Senior Portfolio Manager oder CIO unterstellt sein. Kann an der Entwicklung der Anlagestrategie beteiligt sein.",
				"ResearchAnalyst" : "Verantwortlich für Research und Analyse von Anlageportfolios und Kundenbeständen. Kann an Anlagestrategien beteiligt sein oder diese entwickeln.",
				"Trader" : "Verantwortlich für die Neugewichtung und den Handel von Modellen und einzelnen Kundenkonten. Zu den Aufgaben können die Überwachung von „Drift“ und die Übertragung von Vermögenswerten gehören.",
				"OperationsManager" : "Verantwortlich für den täglichen Betrieb eines Unternehmens und dient als Verbindung zwischen der Betriebsabteilung und der Führung. Kann Betriebspersonal wie Handel und Berichterstattung verwalten und ist dafür verantwortlich, Wege zu finden, um das Unternehmen durch die Entwicklung effektiver Prozesse und Verfahren effizienter zu machen.",
				"PortfolioAdministrator" : "Verantwortlich für die Einrichtung und Pflege von Kundenkonten, das Zusammenstellen und Ausfüllen von Kundenunterlagen (z. B. Firmen- und Depotformulare) sowie die Überprüfung von Kundentransaktionen und -aktivitäten. Der Portfolioadministrator ist möglicherweise für die Übertragung und den Handel von Vermögenswerten verantwortlich.",
				"ExecutiveAssistant" : "Verantwortlich für administrative Funktionen in Bezug auf einen Manager oder mehrere Manager des Unternehmens. Kann bei Bedarf auch Büroarbeiten ausführen.",
				"AdministrativeAssistant" : "Verantwortlich für allgemeine administrative Unterstützung, einschließlich Ablage, Terminvereinbarung, Beantwortung eingehender Telefonanrufe und Ausführung anderer Büroarbeiten.",
				"Receptionist" : "Verantwortlich für die Begrüßung von Kunden, die Beantwortung eingehender Anrufe und die Ausführung anderer Büroarbeiten.",
				"OfficeManager" : "Verantwortlich für den allgemeinen Bürobetrieb (z. B. Buchhaltung, Büroausstattung, Verbrauchsmaterial). Diese Rolle führt häufig viele Aufgaben aus und ist eine Schlüsselposition in solchen Unternehmen, die kein spezielles Personal für bestimmte Bürofunktionen beschäftigen.",
				"TaxSpecialist" : "Verantwortlich dafür, über Änderungen im Steuerrecht informiert zu bleiben und Kunden bei der Steuerplanung zu beraten. Der Steuerberater kann Steuererklärungen für Kunden erstellen.",
				"EstateSpecialist" : "Verantwortlich dafür, über Änderungen im Nachlass- und Treuhandrecht informiert zu bleiben und Kunden Planungsberatung zu geben. Diese Position hat in der Regel tiefgreifende Kenntnisse der Vermögensbesteuerung und der Lebensversicherung. Der Nachlassspezialist kann für den Verkauf von Lebensversicherungsprodukten verantwortlich sein.",
				"TrustSpecialist" : "Verantwortlich dafür, über Änderungen im Nachlass- und Treuhandrecht informiert zu bleiben und Kunden Planungsberatung zu geben. Diese Position hat in der Regel tiefgreifende Kenntnisse der Vermögensbesteuerung.",
				"ITSpecialist" : "Verantwortlich für Technologieempfehlungen, regelmäßige Reparaturen und Wartung. Es wird erwartet, dass Software, Hardware und Datenbanken gewartet werden und je nach Fachkenntnis auch ganze Datenbanken und Programme für individuelle oder Unternehmensanforderungen erstellt werden.",
				"MarketingNM" : "Verantwortlich für die Empfehlungen in Bezug auf die Marketingaktivitäten des Unternehmens und deren Durchführung, um die finanziellen und strategischen Ziele des Marketingplans zu erreichen. Zu dieser Rolle gehören normalerweise auch Eventmanagement und Promotion des Unternehmens innerhalb der Gemeinschaft (z. B. soziale Medien).",
				"ComplianceNM" : "Verantwortlich dafür, dass das Unternehmen die externen regulatorischen Anforderungen und internen Richtlinien einhält. Kann interne Richtlinien entwerfen oder aktualisieren, um das Risiko zu verringern, dass das Unternehmen gegen Gesetze und Vorschriften verstößt."
			};
			break;
		
		case "NL":
			var dict = {
				"SeniorAdvisor" : "Dient als primaire adviseur/relatiemanager van klanten. Beheert klantenrelaties en is verantwoordelijk voor de vermogensplanning, beleggingsadvies en/of het portefeuillebeheer. Kan ook tot taak hebben prospects te werven en nieuwe klantenrelaties te ontwikkelen.",
				"ServiceAdvisor" : "Heeft een ondersteunende rol, helpt de senior adviseur/relatiebeheerder met het beheer van de klantenrelaties. Kan verantwoordelijk zijn voor het formuleren en toepassen van advies, maar wordt doorgaans niet geacht prospects te genereren en nieuwe klantenrelaties te ontwikkelen.",
				"AssociateAdvisor" : "Verantwoordelijk voor het continue beheer en behoud van bestaande klantrelaties. Kan samenwerken met service of senior adviseurs om relaties verder op te bouwen. Kan in aanmerking komen voor bedrijfsontwikkeling gerelateerde bonussen.",
				"ClientServiceAssociate" : "Verantwoordelijk voor de ondersteuning van klanten en adviseurs in een niet-adviserende rol. Zoals het ,het plannen van klantafspraken, bijwerken en in stand houden van klantengegevens, administratieve verzoeken en andere gerelateerde activiteiten.",
				"BusinessDevelopmentOfficer" : "Verantwoordelijk voor de ontwikkeling van nieuwe omzet, het genereren van leads en netwerken.",
				"DirectorClientService" : "Verantwoordelijk voor alle klantenservice gerelateerde activiteiten van het bedrijf of een specifieke divisie daarvan. Coördineert en begeleidt het personeel van de klantenservice. Volgt de belangrijkste prestatiecijfers gerelateerd aan de klantenservice.",
				"HeadOfAdvisors" : "Verantwoordelijk voor de dagelijkse leiding van het advies-en klantenserviceteam. Garandeert dat het hele team een consistent niveau van verkoop, dienstverlening en advies hanteert. Is verantwoordelijk voor het aantrekken en behouden van (nieuwe) klanten.",
				"CEO" : "Hoogstgeplaatste directeur in een bedrijf, die hoofdzakelijk verantwoordelijk is voor het uitwerken en invoeren van strategieën, het nemen van belangrijke beslissingen en het algemene beheer van de activiteiten en middelen van een bedrijf.",
				"President" : "Verantwoordelijk voor de dagelijkse leiding van het bedrijf.",
				"COO" : "Verantwoordelijk voor het toezicht op de operationele activiteiten van het bedrijf in overeenstemming met de algemene doelstellingen en beleidskeuzes. Deze functie is zeer veranderlijk, situatiegebonden en verschilt van bedrijf tot bedrijf.",
				"CIO" : "Verantwoordelijk voor de beleggingsportefeuilles, -programma’s en -filosofie van het bedrijf. Deze functie kan ook het beleggingsbeleid op korte en lange termijn uitwerken.",
				"CFO" : "Verantwoordelijk voor het toezicht op de financiële activiteiten van het bedrijf en het beheer van de financiële risico’s. Deze functie kan ook verantwoordelijk zijn voor financiële planning, het bewaren van gegevens, voor financiële verslaglegging en gegevensanalyse.",
				"CCO" : "Moet garanderen dat het bedrijf alle externe wet- of regelgeving, verplichtingen en interne beleidslijnen naleeft. Kan interne beleidslijnen uitwerken of bijwerken om het risico te verminderen dat het bedrijf inbreuk begaat tegen wet- of regelgeving.",
				"CMO" : "Verantwoordelijk voor het voorstellen, uitvoeren en opvolgen van de marketingactiviteiten van het bedrijf om de financiële en strategische doelstellingen uit het marketingplan te verwezenlijken.",
				"DirectorOfHR" : "Verantwoordelijk voor de selectie en werving van het personeel van het bedrijf. Overige verantwoordelijkheden zijn onder meer het beheer van en de communicatie over personeelsvoordelen.",
				"DirectorOfFP" : "Verantwoordelijk voor het verstrekken van analyses en advies inzake financiële/vermogensplanning om klanten te helpen hun financiële doelstellingen op korte en lange termijn te verwezenlijken. Deze functie kan toezicht houden op het financiële/vermogensplanning team.",
				"Paraplanner" : "Verantwoordelijk voor het opstellen van financiële/ vermogensplannen, het verzamelen en vervullen van de administratie van de klant (bijv. formulieren van het bedrijf en de bewaarder) en het opmaken van portefeuilleanalyses voor prospects. Deze functie bereidt de hoofd adviseur voor op vergaderingen met klanten en kan zelf vergaderingen bijwonen, maar wordt doorgaans niet geacht prospects te werven en nieuwe klantenrelaties te ontwikkelen.",
				"SeniorPortfolioManager" : "Verantwoordelijk voor de beleggingsstrategie en het beheer van individuele portefeuilles, waaronder de selectie van aandelen, asset allocatie en herbalancering van de portefeuille. Senior benoeming is op basis van certificeringen en ervaring. Heeft over het algemeen geen direct (fysiek) klantcontact.",
				"PortfolioManager" : "Verantwoordelijk voor de beleggingsportefeuilles en -programma’s van het bedrijf, handel en herschikking. Deze functie kan ook het beleggingsbeleid op korte en lange termijn uitwerken. Kan beleggingsstrategieën (helpen) ontwikkelen.",
				"ResearchAnalyst" : "Verantwoordelijk voor het onderzoeken en analyseren van beleggingsportefeuilles en klantenposities en kan beleggingsstrategieën (helpen) ontwikkelen.",
				"Trader" : "Verantwoordelijk voor het herbalanceren en verhandelen van modelportefeuilles en individuele klantenrekeningen. Taken kunnen onder meer het opvolgen van de ‘afwijking’ en vermogensoverdrachten zijn.",
				"OperationsManager" : "Verantwoordelijk voor de dagelijkse werking van het bedrijf en fungeert als verbinding tussen de operationele afdeling en de bedrijfsleiding. Kan operationele medewerkers aansturen, zoals voor handel en verslaglegging, en is verantwoordelijk om manieren te vinden om het bedrijf efficiënter te maken door doeltreffende processen en procedures uit te werken.",
				"PortfolioAdministrator" : "Verantwoordelijk voor het opzetten en in stand houden van klantenrekeningen, het verzamelen en vervullen van de administratie van de klant (bijv. formulieren van het bedrijf en de bewaarder) en het doorlichten van klanttransacties en -activiteiten. De Operationele portefeuillebeheerder kan verantwoordelijk zijn voor vermogensoverdracht en handel.",
				"ExecutiveAssistant" : "Verantwoordelijk voor administratieve werkzaamheden gerelateerd aan een manager of managers van het bedrijf. Kan indien nodig ook administratieve taken uitvoeren.",
				"AdministrativeAssistant" : "Verantwoordelijk voor de administratieve ondersteuning van medewerkers of management. Taken zijn onder meer het plannen van vergaderingen en afspraken, boekhouding, aankoop van kantoorbenodigdheden, onthaal en andere administratieve taken.",
				"Receptionist" : "Verantwoordelijk voor het welkom heten van klanten, beantwoorden van inkomende telefoongesprekken en het uitvoeren van andere administratieve werkzaamheden.",
				"OfficeManager" : "Verantwoordelijk voor het algemene functioneren van het kantoor (bijv. boekhouding, kantoormateriaal, toebehoren). Deze functie vervult vaak vele taken en is een algehele positie voor bedrijven die geen afzonderlijke medewerkers hebben voor specifieke kantoortaken.",
				"TaxSpecialist" : "Dient op de hoogte te blijven van de veranderingen in het fiscale recht en advies inzake belasting verstrekken aan klanten. De fiscaal specialist kan belastingaangiftes van klanten voorbereiden.",
				"EstateSpecialist" : "Dient op de hoogte te blijven van de veranderingen in het erf- en trustrecht en advies inzake nalatenschapsplanning verstrekken aan klanten. Deze functie vergt doorgaans grondige kennis van fiscaal recht en levensverzekeringen. De estateplanner kan verantwoordelijk zijn voor de verkoop van levensverzekeringsproducten.",
				"TrustSpecialist" : "Dient op de hoogte te blijven van de veranderingen in het successierecht en advies inzake planning verstrekken aan klanten. Deze functie vergt doorgaans grondige kennis van fiscaal recht.",
				"ITSpecialist" : "Verantwoordelijk voor aanbevelingen, reparaties en onderhoud van technologie. Wordt geacht software, hardware en databases te onderhouden en kan, afhankelijk van zijn/haar vaardigheidsniveau, ook volledige databases en programma’s ontwikkelen voor de behoeftes van individuele medewerkers of het bedrijf.",
				"MarketingNM" : "Verantwoordelijk voor het aanbevelen en uitvoeren van de marketingactiviteiten van het bedrijf om de financiële en strategische doelstellingen uit het marketingplan te verwezenlijken. Deze functie bevat doorgaans een aspect van evenementenbeheer en bedrijfspromotie binnen een groep (bijv. social media).",
				"ComplianceNM" : "Dient te garanderen dat het bedrijf alle externe reglementaire verplichtingen en interne beleidslijnen naleeft. Kan interne beleidslijnen uitwerken of bijwerken om het risico te verminderen dat het bedrijf inbreuk begaat tegen wet- of regelgeving."
			};
			break;
		
		default:
			var dict = {
				"SeniorAdvisor" : "Serves as the lead adviser/relationship manager for clients. Manages client relationships and is responsible for providing financial planning, investment advice, and/or portfolio management. May also be expected to generate prospects and develop new client relationships.",
				"ServiceAdvisor" : "Serves in a support role, assisting the senior adviser/relationship manager with managing client relationships. May be responsible for formulating and implementing advice, but usually is not expected to generate prospects and develop new client relationships.",
				"AssociateAdvisor" : "Responsible for the ongoing management and retention of existing client relationships. May work in tandem with service or senior advisers to further build relationships. May be eligible for business development incentives.",
				"ClientServiceAssociate" : "Responsible for supporting client requests and advisers in a non-advisory capacity. Schedules client meetings, collects client data, fulfils administrative requests, and conducts other operations of the firm.",
				"BusinessDevelopmentOfficer" : "Responsible for developing new business, generating leads, and networking.",
				"DirectorClientService" : "Responsible for managing all client service-related activities for the firm or a specific business division. Coordinates and supervises client service staff. Tracks key performance metrics related to client service.",
				"HeadOfAdvisors" : "Responsible for the day-to-day management of the adviser and client service team. Ensures that a consistent level of sales, service, and advice is implemented across the entire team. Responsible for finding ways to help the firm gain and retain clients.",
				"CEO" : "Highest-ranking executive in a firm whose main responsibilities include developing and implementing strategies, making major decisions, and managing overall operations and resources of a firm.",
				"President" : "Responsible for the day-to-day management of the firm.",
				"COO" : "Responsible for overseeing the operations of the firm in accordance with overall objectives and policies. The role is highly contingent and situational and varies by firm.",
				"CIO" : "Responsible for a firm’s investment portfolios, programs, and philosophy. Position may also develop short- and long-term investment policies.",
				"CFO" : "Responsible for overseeing the financial activities of the firm and managing financial risks. Position may also be responsible for financial planning and recordkeeping, as well as financial reporting and data analysis.",
				"CCO" : "Responsible for ensuring that the firm complies with outside regulatory requirements and internal policies. May design or update internal policies to mitigate the risk of the firm breaking laws and regulations.",
				"CMO" : "Responsible for recommending, executing, and overseeing the firm’s marketing activities to achieve the financial and strategic objectives of the marketing plan.",
				"DirectorOfHR" : "Responsible for recruiting and hiring firm staff. Other responsibilities include, but are not limited to, the management and communication of employee benefits.",
				"DirectorOfFP" : "Responsible for providing financial planning analysis and advice to help clients meet shortand long-term financial goals. This role may provide oversight to the financial planning team.",
				"Paraplanner" : "Responsible for preparing financial plans, compiling and completing client paperwork (e.g., firm and custodian forms), and preparing portfolio analysis for prospects. This role prepares the lead adviser for meetings with clients and may even attend meetings, but usually is not expected to generate prospects and develop new client relationships.",
				"SeniorPortfolioManager" : "Responsible for the investment strategy and management of individual portfolios, including security selection, asset allocation, and portfolio rebalancing. Senior designation based on certifications and experience. Generally not a client-facing role.",
				"PortfolioManager" : "Responsible for the investment strategy and management of client assets and portfolios, including trading and rebalancing. Can be under the direction of a senior portfolio manager or CIO. May participate in developing investment strategy.",
				"ResearchAnalyst" : "Responsible for researching and analysing investment portfolios and client holdings, and may participate in or develop investment strategies.",
				"Trader" : "Responsible for rebalancing and trading of models and individual client accounts. Duties may include monitoring “drift” and asset transfers.",
				"OperationsManager" : "Responsible for the day-to-day operations of a firm and serves as a liaison between the operations department and leadership. May manage operations staff, such as trading and reporting, and is responsible for finding ways to make the firm more efficient by developing effective processes and procedures.",
				"PortfolioAdministrator" : "Responsible for setting up and maintaining client accounts, compiling and completing client paperwork (e.g., firm and custodian forms), and reviewing client transactions and activity. Portfolio administrator may be responsible for asset transfers and trading.",
				"ExecutiveAssistant" : "Responsible for administrative functions related to a manager or managers of the firm. May also perform clerical duties as needed.",
				"AdministrativeAssistant" : "Responsible for general administrative support, including filing, arranging appointments, answering incoming phone calls, and performing other clerical duties.",
				"Receptionist" : "Responsible for greeting clients, answering inbound phone calls, and performing other clerical duties.",
				"OfficeManager" : "Responsible for general office operations (e.g., bookkeeping, office equipment, supplies). This role often performs many tasks and is a catchall position in firms that do not employ dedicated staff for specific office functions.",
				"TaxSpecialist" : "Responsible for staying informed of changes in tax law and providing tax planning advice to clients. The tax specialist may prepare client tax returns.",
				"EstateSpecialist" : "Responsible for staying informed of changes in estate and trust law and providing planning advice to clients. This position usually contains thorough knowledge of asset taxation and life insurance. The estate specialist may be responsible for the sale of life products.",
				"TrustSpecialist" : "Responsible for staying informed of changes in trust law and providing planning advice to clients. This position usually contains thorough knowledge of asset taxation.",
				"ITSpecialist" : "Responsible for technology recommendations, regular repair, and upkeep. Expected to service software, hardware, and databases and, depending on a specialist’s skill, may also create entire databases and programs for either individual or corporate needs.",
				"MarketingNM" : "Responsible for recommending and executing the firm’s marketing activities to achieve the financial and strategic objectives of the marketing plan. This role typically has a component of event management and firm promotion within the community (e.g., social media).",
				"ComplianceNM" : "Responsible for ensuring that the firm complies with outside regulatory requirements and internal policies. May design or update internal policies to mitigate the risk of the firm breaking laws and regulations.",
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
