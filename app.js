console.log('ok');



// Fonctions
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}



// Gestion du score
let score = 0;
let theScore = document.getElementById('score');








if (!window.speechSynthesis) {
	alert('Votre navigateur n\'est pas supporté !');
}




// hamburger
let hamburger = document.getElementById("hamburger");
let menu = document.getElementById("nav");
hamburger.addEventListener('click', function() {
	menu.classList.toggle('show');
});



// Prépare la synthèse vocale en anglais
let synth = window.speechSynthesis;

function parle(str) {
	let annonce = new SpeechSynthesisUtterance(str);
	annonce.lang = "fr-FR";
	annonce.rate = 1;
	synth.speak(annonce);
}
function ditQuelquechose(str) {
	if (synth.speaking) {
		synth.cancel();
	}
	parle(str);
}



// Gestion des vues
let nav = document.querySelectorAll('#nav li a');
let view = document.querySelectorAll('.view');
// au chargement, on ne garde que la première view
nav.forEach((element, index) => {
	
	view[index].classList.add('d-none');
});
view[0].classList.remove('d-none');
nav.forEach((element, index) => {
	element.addEventListener('click', (element) => {
		nav.forEach((element, index) => {
			view[index].classList.add('d-none');
		});
		view[index].classList.remove('d-none');
		let laVue = view[index].getAttribute('id');
		menu.classList.remove('show');

		// On lance le jeu
		let animal = "chercheAnimal";
		let legume = "chercheLeLegume";
		if (laVue.substring(laVue.length - animal.length) == animal) {
			trouveAnimal();
			theScore.innerText = score;
		} else if (laVue.substring(laVue.length - legume.length) == legume){
			trouveLeLegume();
			theScore.innerText = score;
		} else {
			theScore.innerText = '';
		}
	});
});




// Bonjour Prénom
let lePrenom = document.getElementById('lePrenom');
let enregistrer = document.getElementById('enregistrer');
enregistrer.addEventListener('click', event => {
	event.preventDefault();
	parle('Bonjour ' + lePrenom.value);
});



// lire un mot
let mot = document.getElementById('mot');
let lire = document.getElementById('lire');
lire.addEventListener('click', event => {
	event.preventDefault();
	parle(mot.value);
});



// lire une lettre
let alphabetBox = document.querySelectorAll('#alphabetBox .box');
alphabetBox.forEach((element, index) => {
	element.addEventListener('click', event => {
		parle(element.innerText.toLowerCase());
	});
});



// clavier
let clavierBox = document.querySelector('#clavier .box');
document.addEventListener('keydown', event => {
	let url = String(window.location);
	if (url.substring(url.length - 7) == "clavier") {
		let nomTouche = event.key;
		if (event.which >= 48 && event.which <= 90) {
			clavierBox.innerText = nomTouche;
			parle(nomTouche);
		}
	}
})


// Animaux
let animauxBoxContent = [
		{ 'image': 'animaux/perroquet-ara-3601194_640.jpg', 'sexe': 'le ', 'voice': 'perroquet' },
		{ 'image': 'animaux/chat-cat-2083492_640.jpg', 'sexe': 'le ', 'voice': 'chat' },
		{ 'image': 'animaux/cheval-horses-430441_640.jpg', 'sexe': 'le ', 'voice': 'cheval' },
		{ 'image': 'animaux/chien-dog-2785074_640.jpg', 'sexe': 'le ', 'voice': 'chien' },
		{ 'image': 'animaux/cygne-swan-2107052_640.jpg', 'sexe': 'le ', 'voice': 'cygne' },
		{ 'image': 'animaux/elephant-1822636_640.jpg', 'sexe': "l'", 'voice': 'éléphant' },
		{ 'image': 'animaux/herisson-hedgehog-468228_640.jpg', 'sexe': "l'", 'voice': 'hérisson' },
		{ 'image': 'animaux/lapin-rabbit-1903016_640.jpg', 'sexe': 'le ', 'voice': 'lapin' },
		{ 'image': 'animaux/lion-3576045_640.jpg', 'sexe': 'le ', 'voice': 'lion' },
		{ 'image': 'animaux/mouton-ireland-1985088_640.jpg', 'sexe': 'le ', 'voice': 'mouton' },
		{ 'image': 'animaux/renard-des-neiges-iceland-1979445_640.jpg', 'sexe': 'le ', 'voice': 'renard des neige' },
		{ 'image': 'animaux/renard-fox-715588_640.jpg', 'sexe': 'le ', 'voice': 'renard' },
		{ 'image': 'animaux/tortue-sea-2361247_640.jpg', 'sexe': 'la ', 'voice': 'tortue' },
		{'image': 'animaux/oiseau-bird-3158784_640.jpg', 'sexe': 'la ', 'voice': 'mouette' },
		{'image': 'animaux/aigle-adler-2386314_640.jpg', 'sexe': "l'", 'voice': 'aigle' },
		{'image': 'animaux/crabe-crab-1990198_640.jpg', 'sexe': 'le ', 'voice': 'crabe' },
		{'image': 'animaux/etoile-de-mer-starfish-74535_640.jpg', 'sexe': "l'", 'voice': 'étoile de mer' },
		{'image': 'animaux/girafe-giraffe-614141_640.jpg', 'sexe': 'la ', 'voice': 'girafe' },
		{'image': 'animaux/gorille-gorilla-2318998_640.jpg', 'sexe': 'le ', 'voice': 'gorille' },
		{'image': 'animaux/grenouille-frog-2240764_640.jpg', 'sexe': 'la ', 'voice': 'grenouille' },
		{'image': 'animaux/hummingbird-2139278_640.jpg', 'sexe': 'le ', 'voice': 'colibri' },
		{'image': 'animaux/ladybugs-1593406_640.jpg', 'sexe': 'la ', 'voice': 'coccinelle' },
		{'image': 'animaux/lapin-rabbit-373691_640.jpg', 'sexe': 'le ', 'voice': 'lapin' },
		{'image': 'animaux/lion-lions-21787_640.jpg', 'sexe': 'le ', 'voice': 'lion' },
		{'image': 'animaux/meduse-sea-21649_640.jpg', 'sexe': 'la ', 'voice': 'méduse' },
		{'image': 'animaux/mouflon-3024471_640.jpg', 'sexe': 'le ', 'voice': 'mouflon' },
		{'image': 'animaux/papillon-butterfly-142506_640.jpg', 'sexe': 'le ', 'voice': 'papillon' },
		{'image': 'animaux/poussin-bird-349026_640.jpg', 'sexe': 'le ', 'voice': 'poussin' },
		{'image': 'animaux/raton-laveur-raccoon-3538081_640.jpg', 'sexe': 'le ', 'voice': 'raton laveur' },
		{'image': 'animaux/zebre-zebras-927272_640.jpg', 'sexe': 'le ', 'voice': 'zèbre' },
		{'image': 'animaux/vache-cow-1715829_640.jpg', 'sexe': 'la ', 'voice': 'vache' },
		{'image': 'animaux/abeille-bee-170551_640.jpg', 'sexe': "l'", 'voice': 'abeille' },
		{'image': 'animaux/araignee-spider-111075_640.jpg', 'sexe': "l'", 'voice': 'araignée' },
		{'image': 'animaux/bison-60592_640.jpg', 'sexe': 'le ', 'voice': 'bison' },
		{'image': 'animaux/cameleon-chameleon-540655_640.jpg', 'sexe': 'le ', 'voice': 'caméléon' },
		{'image': 'animaux/canard-ducks-1463317_640.jpg', 'sexe': 'le ', 'voice': 'canard' },
		{'image': 'animaux/carpe-koi-fish-1868779_640.jpg', 'sexe': 'la ', 'voice': 'carpe' },
		{'image': 'animaux/cochon-piglet-3386356_640.jpg', 'sexe': 'le ', 'voice': 'cochon' },
		{'image': 'animaux/coq-rooster-1867562_640.jpg', 'sexe': 'le ', 'voice': 'coq' },
		{'image': 'animaux/dauphins-dolphins-1869337_640.jpg', 'sexe': 'le ', 'voice': 'dauphin' },
		{'image': 'animaux/ecureuil-snow-17854_640.jpg', 'sexe': "l'", 'voice': 'écureuil' },
		{'image': 'animaux/escargot-snail-582201_640.jpg', 'sexe': "l'", 'voice': 'escargot' },
		{'image': 'animaux/faon-fallow-deer-3729821_640.jpg', 'sexe': 'le ', 'voice': 'faon' },
		{'image': 'animaux/hippopotame-hippopotamus-95472_640.jpg', 'sexe': "l'", 'voice': 'hippopotame' },
		{'image': 'animaux/koala-animals-2608662_640.jpg', 'sexe': 'le ', 'voice': 'koala' },
		{'image': 'animaux/lama-alpaca-5405469_640.jpg', 'sexe': 'le ', 'voice': 'lama' },
		{'image': 'animaux/lemuriens-lemurs-1010643_640.jpg', 'sexe': 'le ', 'voice': 'lémurien' },
		{'image': 'animaux/lezard-reptile-2042906_640.jpg', 'sexe': 'le ', 'voice': 'lézard' },
		{'image': 'animaux/libellule-dragonfly-3456317_640.jpg', 'sexe': 'la ', 'voice': 'libellule' },
		{'image': 'animaux/loup-wolf-2984865_640.jpg', 'sexe': 'le ', 'voice': 'loup' },
		{'image': 'animaux/oie-duck-6198196_640.jpg', 'sexe': "l'", 'voice': 'oie' },
		{'image': 'animaux/ours-bear-1245807_640.jpg', 'sexe': "l'", 'voice': 'ours' },
		{'image': 'animaux/paon-peacock-90051_640.jpg', 'sexe': 'le ', 'voice': 'paon' },
		{'image': 'animaux/pingouins-emperor-penguins-429128_640.jpg', 'sexe': 'le ', 'voice': 'pingouins' },
		{'image': 'animaux/serpent-snake-653639_640.jpg', 'sexe': 'le ', 'voice': 'serpent' },
		{'image': 'animaux/souris-mouse-1708347_640.jpg', 'sexe': 'la ', 'voice': 'souris' },
		{'image': 'animaux/taupe-nature-13298_640.jpg', 'sexe': 'la ', 'voice': 'taupe' },
		{'image': 'animaux/tigre-tiger-1526704_640.png', 'sexe': 'le ', 'voice': 'tigre' },
		{'image': 'animaux/crocodile-nile-crocodile-245013_640.jpg', 'sexe': 'le ', 'voice': 'crocodile' },
];
animauxBoxContent = shuffle(animauxBoxContent);
let animauxBox = document.querySelector('.animauxBox1');

animauxBoxContent.forEach((element, index) => {
	let box = document.createElement("li", {'class': 'box'+index});
	let image = document.createElement("img", {'src': element.image});
	image.setAttribute("src", 'images/' + element.image);
	image.setAttribute("alt", element.voice);
	let bi = box.appendChild(image);

	d = animauxBox.appendChild(box);
	d.classList.add('box', 'box-'+index, 'clickable');
	d.dataset.voice = element.voice;
	d.dataset.id = index;

	box.addEventListener('click', event => {
		ditQuelquechose(box.dataset.voice);
	});
});





// trouve Animal
let animauxBox2 = document.querySelector('.animauxBox2');
let chercheAnimalTitre = document.querySelector('#chercheAnimal h2');

function initJeuAnimal() {
	animauxBoxContent = shuffle(animauxBoxContent);
	animauxBoxContent.forEach((element, index) => {
		let box = document.createElement("li", {'class': 'box'+index});
		let image = document.createElement("img", {'src': element.image});
		image.setAttribute("src", 'images/' + element.image);
		image.setAttribute("alt", element.voice);
		let bi = box.appendChild(image);

		d = animauxBox2.appendChild(box);
		d.classList.add('box', 'box-'+index, 'clickable');
		d.dataset.sexe = element.sexe;
		d.dataset.voice = element.voice;
		d.dataset.id = index;
	});
}

function trouveAnimal() {
	animauxBox2.innerHTML = '';
	initJeuAnimal();
	let solution = getRandomInt(animauxBoxContent.length);
	let nomAnimalCapitalized = animauxBoxContent[solution].voice.charAt(0).toUpperCase() + animauxBoxContent[solution].voice.slice(1)
	chercheAnimalTitre.innerText = nomAnimalCapitalized;
	s = 'Cherche ' + animauxBoxContent[solution].sexe + ' ' + animauxBoxContent[solution].voice;
	ditQuelquechose(s);
	chercheAnimalTitre.addEventListener('click', event => {
		ditQuelquechose(s);
	});


	let boxClickable = document.querySelectorAll('#chercheAnimal .box.clickable');
	boxClickable.forEach((element, index) => {
		element.addEventListener('click', event => {
			if (boxClickable[index].dataset.id == solution) {
				score += 1;
				theScore.innerText = score;
				ditQuelquechose('Gagné !');
				trouveAnimal();
			} else {
				ditQuelquechose('Perdu !');
				score -= 1;
				theScore.innerText = score;
				boxClickable[index].removeEventListener('click', event => {}, true);
				boxClickable[index].classList.remove('clickable');
			}
		});
	});
}







// trouve le légume
let legumeBoxContent = [
	{ 'image': 'legumes/chou-2924245_640.jpg', 'sexe': 'le ', 'voice' : 'chou' },
	{ 'image': 'legumes/ail.jpg', 'sexe': "l'", 'voice' : 'ail' },
	{ 'image': 'legumes/artichauts-3594246_640.jpg', 'sexe': "les ", 'voice' : 'artichauts' },
	{ 'image': 'legumes/asperges-2178164_640.jpg', 'sexe': "les ", 'voice' : 'asperges' },
	{ 'image': 'legumes/basilic-1248955_640.jpg', 'sexe': 'le ', 'voice' : 'basilic' },
	{ 'image': 'legumes/bettrave.jpg', 'sexe': 'la ', 'voice' : 'bettrave' },
	{ 'image': 'legumes/broccoli-1238250_640.jpg', 'sexe': 'le ', 'voice' : 'broccoli' },
	{ 'image': 'legumes/carrottes-673184_640.jpg', 'sexe': 'les ', 'voice' : 'carrottes' },
	{ 'image': 'legumes/chou-romanesco-3493007_640.jpg', 'sexe': 'le ', 'voice' : 'chou' },
	{ 'image': 'legumes/choux-de-bruxelles-3100702_640.jpg', 'sexe': 'les ', 'voice' : 'choux de Bruxelles' },
	{ 'image': 'legumes/citrouilles-2204643_640.jpg', 'sexe': 'les ', 'voice' : 'citrouilles' },
	{ 'image': 'legumes/cornichons-849269_640.jpg', 'sexe': 'les ', 'voice' : 'cornichons' },
	{ 'image': 'legumes/gingembre-1714196_640.jpg', 'sexe': 'le ', 'voice' : 'gingembre' },
	{ 'image': 'legumes/mais-3705687_640.jpg', 'sexe': 'le ', 'voice' : 'mais' },
	{ 'image': 'legumes/oignons-1397037_640.jpg', 'sexe': "les ", 'voice' : 'oignons' },
	{ 'image': 'legumes/petits-pois-1205673_640.jpg', 'sexe': 'les ', 'voice' : 'petits pois' },
	{ 'image': 'legumes/poivrons-421087_640.jpg', 'sexe': 'le ', 'voice' : 'poivrons' },
	{ 'image': 'legumes/pomme-de-terre-1585060_640.jpg', 'sexe': 'les ', 'voice' : 'pommes de terre' },
	{ 'image': 'legumes/tomates-3520004_640.jpg', 'sexe': 'les ', 'voice' : 'tomates' },
];
let legumeBox2 = document.querySelector('.legumeBox2');
let chercheLegumeTitre = document.querySelector('#chercheLeLegume h2');

function initJeuLegume() {
	legumeBoxContent = shuffle(legumeBoxContent);
	legumeBoxContent.forEach((element, index) => {
		let box = document.createElement("li", {'class': 'box'+index});
		let image = document.createElement("img", {'src': element.image});
		image.setAttribute("src", 'images/' + element.image);
		image.setAttribute("alt", element.voice);
		let bi = box.appendChild(image);

		d = legumeBox2.appendChild(box);
		d.classList.add('box', 'box-'+index, 'clickable');
		d.dataset.sexe = element.sexe;
		d.dataset.voice = element.voice;
		d.dataset.id = index;
	});
}

function trouveLeLegume() {
	legumeBox2.innerHTML = '';
	initJeuLegume();
	let solution = getRandomInt(legumeBoxContent.length);
	let nomLegumeCapitalized = legumeBoxContent[solution].voice.charAt(0).toUpperCase() + legumeBoxContent[solution].voice.slice(1)
	chercheLegumeTitre.innerText = nomLegumeCapitalized;
	s = 'Cherche ' + legumeBoxContent[solution].sexe + legumeBoxContent[solution].voice;
	ditQuelquechose(s);
	chercheLegumeTitre.addEventListener('click', event => {
		ditQuelquechose(s);
	});


	let boxClickable = document.querySelectorAll('#chercheLeLegume .box.clickable');
	boxClickable.forEach((element, index) => {
		element.addEventListener('click', event => {
			if (boxClickable[index].dataset.id == solution) {
				score += 1;
				theScore.innerText = score;
				ditQuelquechose('Gagné !');
				trouveLeLegume();
			} else {
				ditQuelquechose('Perdu !');
				score -= 1;
				theScore.innerText = score;
				boxClickable[index].removeEventListener('click', event => {}, true);
				boxClickable[index].classList.remove('clickable');
			}
		});
	});
}



// Crée le Service Worker
// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", function() {
//     navigator.serviceWorker.register("/sw.js").then(
//       function(registration) {
//         console.log("Enregistrement OK - Scope : ", registration.scope);
//       },
//       function(err) {
//         console.log("Erreur d'enregistrement : ", err);
//       }
//     );
//   });
// }