# FashionStore E-commerce — Projet DevOps

Mise en place de pratiques DevOps sur un site e-commerce statique existant :
CI/CD, tests, Docker et monitoring.

## Structure du projet

```
ecomerseSite/
├── public/                   site web (déployé sur GitHub Pages)
│   ├── *.html                pages statiques
│   ├── scripts/
│   │   ├── cart.js           logique du panier (ajouté)
│   │   ├── cart-ui.js        relie cart.js à la page (ajouté)
│   │   └── script*.js        scripts UI d'origine
│   ├── styles/               fichiers CSS
│   ├── images/, fonts/, slick/, videos/
├── tests/
│   └── cart.test.js          tests unitaires Jest
├── cypress/e2e/
│   ├── navigation.cy.js      tests de navigation
│   └── cart.cy.js            tests du panier
├── monitoring/
│   ├── prometheus.yml        configuration Prometheus
│   └── blackbox.yml          configuration des sondes
├── .github/workflows/
│   └── ci-cd.yml             pipeline GitHub Actions
├── Dockerfile                image du site (nginx)
└── docker-compose.yml        site + stack monitoring
```

## Lancer en local

```bash
npm install
npm start                  # http://localhost:8080
```

## Tests

```bash
npm test                   # tests unitaires Jest (9 tests)
npm run lint               # ESLint
npm run cypress:run        # tests E2E Cypress (10 tests)
```

## Docker

```bash
docker build -t fashionstore .
docker run -p 8080:80 fashionstore
```

Ou avec la stack complète (site + monitoring) :

```bash
docker-compose up -d
```

Puis ouvrir :
- Site : http://localhost:8080
- Prometheus : http://localhost:9090
- Grafana : http://localhost:3000  (admin / admin)

## CI/CD

Le pipeline s'exécute à chaque push sur `main` (5 étapes) :

1. **Lint** (ESLint)
2. **Tests unitaires** (Jest)
3. **Tests E2E** (Cypress)
4. **Build Docker**
5. **Déploiement** sur GitHub Pages

## Monitoring

- **UptimeRobot** — surveillance externe via une requête HTTP sur l'URL déployée.
- **Prometheus + Grafana** — stack locale via docker-compose,
  utilise blackbox-exporter pour sonder le site.

Indicateurs surveillés : temps de réponse, disponibilité, erreurs HTTP.

## Lien avec le cahier des charges

| Section | Exigence | Réalisation |
|---|---|---|
| §3 | Planification (GitHub Projects) | tableau Kanban sur GitHub |
| §4 | CI/CD (GitHub Actions) | `.github/workflows/ci-cd.yml` |
| §5.1 | Tests unitaires (panier, prix) | `tests/cart.test.js` |
| §5.2 | Tests d'intégration | `cypress/e2e/*.cy.js` |
| §5.3 | Outils Jest, Cypress, ESLint | `package.json` |
| §6.1 | Dockerfile + compose | `Dockerfile` + `docker-compose.yml` |
| §6.2 | Déploiement cloud | GitHub Pages |
| §7 | Monitoring | UptimeRobot + Prometheus/Grafana |
| §8 | Documentation | ce README |
