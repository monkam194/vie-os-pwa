# Vie OS

Systeme de vie personnel — habitudes, identite, discipline.

Vie OS est une Progressive Web App (PWA) minimaliste qui aide a suivre ses
habitudes quotidiennes, visualiser sa progression et exporter un bilan en PDF.

## Fonctionnalites

- Suivi d'habitudes et progression de la journee
- Statistiques et series (streaks)
- Export / import des donnees (JSON)
- Theme clair / sombre
- Rappels (notifications navigateur)
- Export PDF du bilan
- Installable en PWA (icone, mode standalone, service worker)

## Installation

Aucune dependance de build n'est necessaire : l'application est un simple
trio HTML/CSS/JS statique.

```bash
git clone git@github.com:monkam194/vie-os-pwa.git
cd vie-os-pwa
```

Ouvrir `index.html` dans un navigateur, ou servir le dossier avec un serveur
statique quelconque, par exemple :

```bash
npx serve .
```

## Tests

Un petit jeu de tests Node valide la structure du `manifest.json` et
l'absence d'instructions de debogage residuelles :

```bash
npm test
```

## Contribuer

Ce projet suit le workflow Git Flow. Voir [CONTRIBUTING.md](CONTRIBUTING.md)
pour les branches, conventions de commit et la procedure de contribution.

## Licence

Distribue sous licence [MIT](LICENSE).
