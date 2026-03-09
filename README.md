# Genius N7 Website

Site statique de l'association etudiante Genius N7 (ENSEEIHT - Toulouse INP), concu pour un deploiement simple sur GitHub Pages.

## Structure

```text
.
|-- index.html
|-- css/
|   `-- style.css
|-- js/
|   `-- script.js
|-- assets/
|   |-- images/
|   |   |-- events/
|   |   `-- projects/
|   `-- logos/
`-- events/
		|-- thcon2026.json
		`-- hackathon2026.json
```

## Sections du site

- Accueil
- A propos
- Projets
- Evenements
- Explorer
- Communaute
- Contact

## Ajouter un evenement

1. Creer un nouveau fichier `.json` dans `events/`.
2. Respecter le format suivant:

```json
{
	"name": "Nom evenement",
	"date": "JJ mois AAAA",
	"location": "Lieu",
	"description": "Description courte",
	"category": "upcoming"
}
```

3. Ajouter le chemin du nouveau fichier dans le tableau `eventFiles` de `js/script.js`.

## Deploiement GitHub Pages

- Pousser le contenu du repository sur GitHub.
- Activer GitHub Pages depuis la branche `main` (racine du projet).
- Le site sera servi comme frontend statique sans build.
