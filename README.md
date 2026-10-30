# Mise en situation — Les participants à un atelier

**Durée indicative : 30 minutes · Travail individuel**

## Contexte

Vous accueillez les participants à un atelier. Rendez la page interactive pour
inscrire des personnes, suivre leur présence et supprimer une inscription.

## Fichiers fournis

- `index.html` : formulaire, liste et boutons, déjà intégrés.
- `style.css` : présentation responsive, sans bibliothèque ni dépendance.
- `script.js` : uniquement les trois participants de départ et les missions.

Ouvrir `index.html` dans le navigateur ou avec Live Server.
Le fichier JavaScript est déjà relié au HTML avec `defer`.

**Les trois lignes visibles sont des exemples HTML statiques.** Remplacez-les
par votre affichage généré depuis le tableau `participants`. Les boutons et
le formulaire n'ont encore aucun comportement JavaScript.

## Travail demandé

1. **Consulter** : afficher les participants depuis les données JavaScript.
   Chaque ligne présente le nom, le statut et les deux actions.
2. **Ajouter** : lire le nom du formulaire, refuser une saisie vide ou composée
   uniquement d'espaces, puis ajouter un participant avec un identifiant unique
   et le statut initial `Inscrit`. Réinitialiser le formulaire après réussite.
3. **Modifier** : le bouton `Marquer présent` passe le bon participant à `Présent`.
   Il devient `Remettre inscrit` et permet de revenir à `Inscrit` au clic suivant.
   Le nom et l'identifiant sont conservés. Actualiser le texte et le style.
4. **Supprimer** : demander confirmation avant de retirer le participant choisi.
   Une annulation conserve les données.

Les opérations doivent modifier le tableau de données, puis actualiser la page
sans rechargement. Deux personnes peuvent avoir le même nom : leurs identifiants
permettent de les distinguer. Aucun stockage local, recherche ou tri n'est exigé.

## Repères du starter

| Élément | Identifiant ou classe |
| --- | --- |
| Formulaire | `formulaire-participant` |
| Champ nom | `nom` |
| Erreur du nom | `erreur-nom` |
| Liste à générer | `liste-participants` |
| Message de retour | `message` |
| Message si aucune inscription | `etat-vide` |
| Ligne participant | `participant` |
| Ligne d'un participant présent | `participant est-present` |
| Informations / nom | `participant-info` / `participant-name` |
| Groupe des actions | `participant-actions` |
| Badge inscrit | `badge badge-inscrit` |
| Badge présent | `badge badge-present` |
| Bouton de présence | `button button-presence` |
| Bouton supprimer | `button button-delete` |

Le message d'état vide est masqué par `hidden`. Affichez-le lorsque la liste est
vide. Les classes de la page peuvent être réutilisées lors de la création des
éléments. Conservez des boutons de type `button` pour les actions dans la liste.

## Vérifications à réaliser

- Les trois participants de départ sont affichés une seule fois.
- Un nom vide ou composé d'espaces ne crée pas d'inscription.
- Deux inscriptions portant le même nom restent indépendantes.
- Le changement de présence fonctionne dans les deux sens sans créer de ligne.
- Après suppression du deuxième participant, l'action sur le dernier reste juste.
- Une nouvelle inscription après suppression possède toujours un id unique.
- Annuler une suppression ne change rien.
- Supprimer tous les participants affiche le message d'état vide.

Expliquez où vous modifiez les données et à quel moment vous actualisez le DOM.
