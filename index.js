//the Dictionary File
var dictionarySpanish = [
	{"abajo":"down"},
	{"dr":"Doctor"},
	{"hija":"daughter"},
	{"dejar":"leave"},
	{"necesita":"need"},
	{"llegar":"to get"},
	{"hago":"do"},
	{"señora":"Mrs."},
	{"haya":"have been"},
	{"suficiente":"enough"},
	{"doctor":"Doctor"},
	{"gustaría":"like"},
	{"tierra":"land"},
	{"cara":"face"},
	{"siquiera":"even"},
	{"genial":"great"},
	{"cree":"believe"},
	{"supuesto":"assume"},
	{"tomar":"take"},
	{"equipo":"computer equip"},
	{"justo":"just"},
	{"juego":"game play"},
	{"ninguna":"none"},
	{"matar":"kill"},
	{"cinco":"five"},
	{"dicen":"say"},
	{"amo":"love love"},
	{"cuándo":"when"},
	{"pequeño":"small"},
	{"algunos":"any"},
	{"conozco":"know"},
	{"clase":"class"},
	{"maldito":"damn"},
	{"unas":"one"},
	{"muchos":"a lot of"},
	{"hubiera":"have"},
	{"segundo":"second"},
	{"aunque":"even if"},
	{"pueda":"power"},
	{"dime":"say"},
	{"igual":"Like"},
	{"comida":"food to eat"},
	{"ay":"ay"},
	{"cuerpo":"body"},
	{"encontrar":"find"},
	{"fuerte":"strong"},
	{"vuelta":"Return back"},
	{"venga":"come"},
	{"creer":"believe"},
	{"realidad":"reality"},
	{"saben":"know"},
	{"puta":"whore"},
	{"deberías":"duty"},
	{"pregunta":"question asking"},
	{"fui":"going to be"},
	{"cuatro":"four"},
	{"sra":"Mrs."},
	{"primer":"first"},
	{"trabajar":"work"},
	{"e":"and"},
	{"hagas":"do"},
	{"alto":"high"},
	{"maldita":"damn"},
	{"comer":"eat"},
	{"número":"number"},
	{"dar":"give"},
	{"necesitas":"need"},
	{"oportunidad":"opportunity"},
	{"punto":"point"},
	{"misma":"same"},
	{"última":"Finally"},
	{"afuera":"out"},
	{"mujeres":"Women"},
	{"pensar":"think"},
	{"fueron":"going to be"},
	{"difícil":"difficult"},
	{"vivir":"live"},
	{"paso":"step move"},
	{"malo":"bad"},
	{"estabas":"be"},
	{"vivo":"Live Chat"},
	{"haga":"do"},
	{"queda":"be"},
	{"hijos":"son"},
	{"mayor":"more"},
	{"fiesta":"party"},
	{"hacen":"do"},
	{"medio":"Average"},
	{"algunas":"any"},
	{"basta":"sufficient"},
	{"arma":"gun arm"},
	{"vino":"come wine"},
	{"meses":"month"},
	{"cuarto":"fourth"},
	{"éste":"this"},
	{"escuela":"school"},
	{"esté":"be"},
	{"dólares":"dollar"},
	{"tío":"Uncle"},
	{"posible":"possible"}
];
//*****************************************************************************************************************************
window.onload = function() {
		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('fileDisplayArea');

		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var textType = /.*/;

			if (file.type.match(textType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
					var subtitle = reader.result.replace(/[^a-zA-Z]+/g , ',');
					var lowercaseSubtitles=subtitle.toLowerCase();
					var allWords = lowercaseSubtitles.split(',');
				

					//Removing duplicates in array

					var uniqueWords = [];
					uniqueWords = allWords.filter(function(elem, pos) {
    												return allWords.indexOf(elem) == pos;
					});

					

					var sortedWords = uniqueWords.sort();
					console.log('\n NEW ARRAY \n');


					var result = allWords.reduce(function(p, c){
  						  if (c in p) {
   						    p[c]++;
   						 } else {
    					    p[c]=1;
  						  }
  					  return p;
					}, {});
					var actualResult = [result];

					console.log(actualResult);

					fileDisplayArea.innerText = actualResult; 
					
					//console.log(sortedWords);

				
					console.log(dictionarySpanish);
				}
				reader.readAsText(file);	
			} else {
				fileDisplayArea.innerText = "File not supported!"
			}
		});
}
