var recip = ["книга1=г1+г2","книга2=г2+г3"];
var b = 0;

function renderItems2 () {
		 ready= recip;	
		b = 0;	
		document.getElementById('recipe').innerHTML = '';
		for (var i = 0; i < ready.length; i++) {
			putRecipe(ready[i]);	
		}
	}
	renderItems2();	
	
function putRecipe (recipeName) {
		var div = document.createElement('div');
		div.id = 'book' + b;
		div.className = 'Book';
		div.innerHTML = recipeName;
		document.getElementById('recipe').appendChild(div);
		b++;
	}