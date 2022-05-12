// --- Constantes et variables globales

// Objets DOM.
let buttonSaveContact = document.querySelector("#save-contact");

// Le carnet d'adresses (tableau d'objets représentant chacun un contact).
let contacts = new Array();

// --- Fonctions du carnet d'adresses

/* Etape Intermédiaire */

// 1) Fonction qui permet d'ajouter un contact à notre carnet d'adresses

function createContact(prenom, nom, tel, mail) {
    let contact = {
        firstName: prenom,
        lastName: nom,
        tel: tel,
        email: mail
    };
    contacts.push(contact);
}

// 2) Fonction refresh
function refresh() {
    // récupérer en Javascript le carnet d'adresses
    let liste = document.querySelector("ul");
    // Vider la liste
    liste.innerHTML = '';
    // Pour chaque contact de notre tableau Javascript contacts
    for (let i = 0; i < contacts.length; i++) {
        // J'ajoute au HTML de mon carnet d'adresses un nouveau li, qui contient les informations du contact
        liste.innerHTML += `
        <li class="card">
                <div class="card-body">
                    <h5>${contacts[i].lastName} ${contacts[i].firstName}</h5>
                    <p class="card-text">${contacts[i].tel}</p>
                    <p class="card-text">${contacts[i].email}</p>
                </div>
            </li>
        `;
    }
}


// 3) Fonction de sauvegarde de contact (déclenchée au clic)
function saveContact(){
    // récupérer les valeurs du formulaire
    let prenom = getFormFieldValue("#firstName");
    let nom = getFormFieldValue("#lastName");
    let tel = getFormFieldValue("#tel");
    let email = getFormFieldValue("#email");

    // créer un nouveau contact
    createContact(prenom, nom, tel, email);

    // mettre à jour le HTML
    refresh();

    // réinitialiser le formulaire
    document.querySelector("#contact-form").reset();
}


// --- Code principal.

// ajout de l'écouteur d'évenements
buttonSaveContact.addEventListener("click", saveContact);