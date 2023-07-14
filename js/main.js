'use strict'

/*Consegna:
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!*/

//I create the array with members and they keys with values
const teamMembers = [
    {
        firstName: "Wayne",
        lastName: "Barnett",
        role: "Founder & CEO",
        profilePic: "wayne-barnett-founder-ceo.jpg",
    },
    {
        firstName: "Angela",
        lastName: "Caroll",
        role: "Chief Editor",
        profilePic: "angela-caroll-chief-editor.jpg",
    },
    {
        firstName: "Walter",
        lastName: "Gordon",
        role: "Office Manage",
        profilePic: "walter-gordon-office-manager.jpg",
    },
    {
        firstName: "Angela",
        lastName: "Lopez",
        role: "Social Media Manager",
        profilePic: "angela-lopez-social-media-manager.jpg",
    },
    {
        firstName: "Scott",
        lastName: "Estrada",
        role: "Developer",
        profilePic: "scott-estrada-developer.jpg",
    },
    {
        firstName: "Barbara",
        lastName: "Ramos",
        role: "Graphic Designer",
        profilePic: "barbara-ramos-graphic-designer.jpg",
    },
];

let row = document.querySelector(".row");

/*I create a for cycle that points to a team member object in the teamMembers array from index 0
until reaching the array max length*/
for (let i = 0; i < teamMembers.length; i++){
    const singleMember = teamMembers[i];
    console.log(`Team member #: ${i+1}`)

    /*I create a for..in cycle that console prints both the key and its value for each key-value 
    pair for each team member cycled in the father for cycle*/
    for (const key in teamMembers[i]){
        console.log(`${key}: ${singleMember[key]}`);
    };

    /*I created an innerHTML on the row I querySelected above and I print
    consequentially all the team members' informations with ${constDesired}
    + html to visually each team member's card*/
    row.innerHTML += `<div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
                        <div class="card">
                            <img src="img/${singleMember.profilePic}" class="card-img-top" alt="...">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item fw-bold fs-2 text-success">${singleMember.firstName} ${singleMember.lastName}</li>
                                <li class="list-group-item fw-bold fs-5 text-primary">${singleMember.role}</li>
                            </ul>
                        </div>
                    </div>`;
};



