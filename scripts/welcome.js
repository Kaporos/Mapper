
if (Cookies.get("tutorial") === "done"){
		console.log("Tutorial already done")
}else{

Swal.fire({
  icon: 'info',
  title: 'Bienvenue sur Mapper',
  text: 'Mapper est un outil pour apprendre la géographie progressivement',
}).then((result) => {


	Swal.fire({
	  icon: 'info',
	  title: 'Le fonctionnement est simple',
	  text: 'Mapper ne fonctionnera toujours qu\'avec une liste de 10 pays. Donc si vous révisez les pays de l\'europe par exemple, il prendra 10 pays aléatoirement, et dès qu\'il verra que vous maitrisez un pays, il le retirera de la liste, et en rajoutera un autre.',
	}).then((result) => {


		Swal.mixin({
		  title: 'Bienvenue sur Mapper',
		  text: 'Voici comment jouer ',
		  icon: 'info',
		  confirmButtonText: 'Suite &rarr;',
		  progressSteps: ['1', '2', '3','4']
		}).queue([
		  {
			title: 'Première étape',
			text: 'Le jeu va te donner un pays a localiser ( en haut a droite )'
		  },
		  {
			title: 'Ensuite',
			text: 'Tu vas devoir trouver ce pays sur la carte. Pour cela tu as 3 chances , pour valider un choix, il faut double cliquer sur le pays. Si c\'est bon, ça passe au suivant , sinon il passe en rouge'
		  },  {
			title: 'Et pour finir',
			text: 'Si au bout de 3 essais tu n\'as toujours pas trouvé, le pays recherché se colore en bleu, et tu doit double cliquer dessus pour me montrer que tu l\'as bien vu !'
		  },
		  {
			  title:" Et voila ! ",
			  text: 'Bonne étude :p ',
			  confirmButtonText: "Valider"
		  }
		])
		Cookies.set("tutorial","done")
		})
	}
)}

