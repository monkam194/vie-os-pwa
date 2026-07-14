# Contribuer a ce projet

## Workflow

Ce projet suit Git Flow :

- `main` : code de production, stable
- `dev` : branche d'integration
- `feature/*` : nouvelles fonctionnalites, creees depuis `dev`
- `fix/*` : corrections de bugs
- `release-x.x.x` : preparation de release
- `hotfix/*` : corrections urgentes en production, depuis `main`

## Etapes

1. Cree ta branche : `git checkout -b feature/ma-feature dev`
2. Commit tes changements en suivant les conventions de commit
3. Push et ouvre une Pull Request vers `dev`
4. Attends une review avant merge

## Messages de commit

- Ligne 1 : resume <= 50 caracteres, a l'imperatif
- Ligne 2 : vide
- Ligne 3+ : details si necessaire

## Signature des commits

Les commits doivent etre signes (SSH).

## Hooks

Le hook `pre-commit` est versionne dans `.githooks/` et active via :

```bash
git config core.hooksPath .githooks
```

Il bloque les commits contenant des instructions de debogage
(console log JS ou print Python) residuelles dans les fichiers stages.
