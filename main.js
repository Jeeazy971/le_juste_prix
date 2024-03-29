// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('#formulaire');


// Etape 2 - Cacher l'erreur
error.style.display = "none";


// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi;


// Etape 4- Créer la fonction vérifier
function verifier(nb){

    let instruction = document.createElement("div");

    if(nb < nombreAleatoire){

        instruction.textContent = `#${coups} (${nb}) C"est plus !`;
        instruction.className = "instruction plus";

    }else if(nb > nombreAleatoire) {

        instruction.textContent = `#${coups} (${nb}) C"est moins !`;
        instruction.className = "instruction moins";
    } else {

        instruction.textContent = "Félicitations vous avez trouvé le juste prix !";
        instruction.className = "instruction fini";
        input.disabled = "true";
    }

    document.querySelector("#instructions").prepend(instruction);
}


// Etape 5 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener("keyup", () => {
    if(isNaN(input.value)){
        error.style.display = "inline";
    }else{
        error.style.display = "none";
    }
});



// Etape 6 - Agir à l'envoi du formulaire
formulaire.addEventListener("submit", (e) => {
    e.preventDefault();

    if(isNaN(input.value), input.value == ""){
        input.style.borderColor = 'red';
    }else{
        coups++;
        input.style.borderColor = "silver";
        nombreChoisi = input.value;
        input.value = "";
        verifier(nombreChoisi);
    }
});