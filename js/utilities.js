// --- Fonctions utilitaires

// 1) Fonction pour récupérer la saisie du formulaire
function getFormFieldValue(selector) {
    // Je récupère l'input qui correspond au selecteur CSS passé en paramètre
    let input = document.querySelector(selector);
    // J'extrait la valeur de ce champ de formulaire
    let valeur = input.value;
    // Je retourne la valeur
    return valeur;

    // En 1 ligne
    // return document.querySelector(selector).value
}

// 2) Fonction pour sauvegarder dans le local storage