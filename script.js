// Données de départ : utilisez ce tableau comme source de votre affichage.
let participants = [
  { id: 101, nom: "Salma Bennani", statut: "Inscrit" },
  { id: 102, nom: "Youssef Amrani", statut: "Présent" },
  { id: 103, nom: "Lina Idrissi", statut: "Inscrit" }
];

// À réaliser :
// 1. Afficher les participants à partir de ce tableau.
// 2. Ajouter un participant avec un id unique et le statut "Inscrit".
// 3. Changer le statut du participant choisi dans les deux sens.
// 4. Supprimer le participant choisi après confirmation.
// 5. Actualiser l'affichage après chaque action.

// Écrivez votre JavaScript ci-dessous.

const listeParticipants = document.querySelector("#liste-participants");

listeParticipants.classList.add("participants")

const affichageListre = () => {

 participants.forEach(participante => {
   const  participant = document.createElement("li");
   participant.classList.add("participant");

   const participantInfo = document.createElement("div")
   participantInfo.classList.add("participant-info")


   const participantId = document.createElement("span")
   participantId.classList.add("participantId")
   participantId.textContent = participante.id

    const div = document.createElement("div")
   
   const participantName = document.createElement("h3")
   participantName.classList.add("participant-name")
   participantName.textContent = participante.nom


   const badgeInscrit = document.createElement("span")
   badgeInscrit.classList.add("badge", "badge-inscrit")
   badgeInscrit.textContent = participante.statut


   const participantActions = document.createElement("div")
   participantActions.classList.add("participant-actions")


   const buttonM = document.createElement("button");
   buttonM.classList.add("button", "button-presence");
   buttonM.textContent = "Marquer présent";


    const buttonS = document.createElement("button");
   buttonS.classList.add("button", "button-delete");
   buttonS.textContent = "Supprimer";

listeParticipants.appendChild(participant)
participant.appendChild(participantInfo)
participantInfo.appendChild(participantId)
participantInfo.appendChild(div)
div.appendChild(participantName)
div.appendChild(badgeInscrit)

div.appendChild(buttonM);
div.appendChild(buttonS)

listeParticipants.appendChild(participant)
 })
}

affichageListre();

 const ajouter = document.querySelector("button");

  const ajouterLiset = () => {
      
    const inputName = document.querySelector("nom");
    
    const badge = document.querySelector(".legend")

 
 participants.push({
   id: participants.length +1,
   nom: inputName.value,
   statut: badge.value
 })
 affichageListre()
  }
  ajouter.addEventListener("click", (e) => {
 
    ajouterLiset();
  })
