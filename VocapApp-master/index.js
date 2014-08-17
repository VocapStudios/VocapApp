
//*****************************************************************************************************************************
//alert("Before onload");
window.onload = function() {
//	alert("After onload");
		var fileInput = document.getElementById('fileInput');
		var fileDisplayArea = document.getElementById('fileDisplayArea');
  //    var videoSubtitles = document.getElementById('videoSubtitle');
      var wordBank = document.getElementById('word-bank');
		fileInput.addEventListener('change', function(e) {
			var file = fileInput.files[0];
			var textType = /.*/;

			if (file.type.match(textType)) {
				var reader = new FileReader();

				reader.onload = function(e) {
					var subtitle = reader.result.replace(/[^a-zA-Z]+/g , ',');
					var lowercaseSubtitles=subtitle.toLowerCase();
					var allWords = lowercaseSubtitles.split(',');
					var spanishRadio = document.getElementById("Spanish");
					var frenchRadio = document.getElementById("French");
					var commonWords;
					//Removing duplicates in array

					var uniqueWords = [];
					uniqueWords = allWords.filter(function(elem, pos) {
    												return allWords.indexOf(elem) == pos;
					});

					

					var sortedWords = uniqueWords.sort();
					console.log('\n NEW ARRAY \n');


					var wordFrequ = allWords.reduce(function(p, c){
  						  if (c in p) {
   						    p[c]++;
   						 } else {
    					    p[c]=1;
  						  }
  					  return p;
					}, {});

					function intersect(a, b) {
					    var t;
					    if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
					    return a.filter(function (e) {
					        if (b.indexOf(e) !== -1) return true;
					    });
					}

					function shuffle(array) {
                          var currentIndex = array.length
                            , temporaryValue
                            , randomIndex
                            ;

                          // While there remain elements to shuffle...
                          while (0 !== currentIndex) {

                            // Pick a remaining element...
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;

                            // And swap it with the current element.
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                          }

                          return array;
                        }
                        if(spanishRadio.checked){
                        	commonWords = intersect(sortedWords,dictionarySpanishTwo);
                        }
                        else if(frenchRadio.checked){
                        	commonWords = intersect(sortedWords,frenchWords);
                        }
                    var shuffledWords = shuffle(commonWords);
                    var randomWords = shuffledWords.splice(0,10);


					var actualResult = wordFrequ;

				//	console.log(actualResult);

					fileDisplayArea.innerText = reader.result;

					//console.log(sortedWords);
					console.log(sortedWords);
				
					// console.log(dictionarySpanish);
					console.log(frenchWords);

					console.log(randomWords);
 
               $("body").highlight(randomWords, { wordsOnly: true });
               //Video Subtitles
               console.log(fileInput.names);
               wordBank.innerText = "";
               wordBank.innerText += randomWords.join('\n');

               console.log(Object.keys(frenchDictionary));
           
				}
            reader.readAsText(file, 'ISO-8859-1');
			} else {
				fileDisplayArea.innerText = "File not supported!"
			}
		});


}

