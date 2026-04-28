# FashionStore E-commerce — DevOps Project

[![CI/CD Pipeline](https://github.com/<YOUR_USERNAME>/ecomerseSite/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/<YOUR_USERNAME>/ecomerseSite/actions/workflows/ci-cd.yml)

DevOps practices applied to an existing open-source e-commerce site:
planning, CI/CD, testing, dockerization, deployment, and monitoring.

> **Note**: No application development was done. Only DevOps tooling was added.

---

## Table of contents
1. [Architecture](#architecture)
2. [Local setup](#local-setup)
3. [Tests](#tests)
4. [Docker](#docker)
5. [CI/CD](#cicd)
6. [Deployment](#deployment)
7. [Monitoring](#monitoring)
8. [GitHub Projects](#github-projects)

---

## Architecture

```
ecomerseSite/
├── *.html                    # static pages
├── scripts/
│   ├── cart.js               # testable cart module (added)
│   ├── script.js             # original UI scripts
│   └── ...
├── styles/                   # CSS files
├── tests/
│   └── cart.test.js          # Jest unit tests (added)
├── cypress/
│   └── e2e/navigation.cy.js  # Cypress E2E tests (added)
├── monitoring/
│   └── prometheus.yml        # Prometheus config (added)
├── .github/workflows/
│   └── ci-cd.yml             # GitHub Actions pipeline (added)
├── Dockerfile                # nginx-based image (added)
├── docker-compose.yml        # local dev stack (added)
├── .eslintrc.json            # ESLint config (added)
├── package.json              # npm scripts & deps (added)
└── README.md                 # this file
```

---

## Local setup

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9
- Docker (for containers)
- Git

### Install
```bash
git clone https://github.com/<YOUR_USERNAME>/ecomerseSite.git
cd ecomerseSite
npm install
```

### Run locally
```bash
npm start
# open http://localhost:8080
```

---

## Tests

### Unit tests (Jest)
```bash
npm test
```
Tests live in `tests/cart.test.js` and cover:
- Cart creation, add/remove/update item
- Subtotal & total calculation
- Discount application
- Input validation

### Integration tests (Cypress)
```bash
# in one terminal
npm start
# in another terminal
npm run cypress:run     # headless
# or
npm run cypress:open    # interactive mode
```
Tests live in `cypress/e2e/navigation.cy.js` and cover:
- Page loading (home, login, FAQ, product, category)
- HTTP 200 status checks for all main pages

### Linting (ESLint)
```bash
npm run lint
npm run lint:fix    # auto-fix
```

---

## Docker

### Build & run with Docker
```bash
docker build -t fashionstore .
docker run -p 8080:80 fashionstore
# open http://localhost:8080
```

### Or with docker-compose
```bash
docker-compose up -d
docker-compose logs -f
docker-compose down
```

The container uses **nginx:alpine** to serve the static site on port 80
(mapped to host 8080) with a built-in healthcheck.

---

## CI/CD

The GitHub Actions pipeline (`.github/workflows/ci-cd.yml`) runs on every
push or PR to `main`/`master`. Jobs:

| Job | Tool | Purpose |
|-----|------|---------|
| `lint` | ESLint | Code quality |
| `test-unit` | Jest | Unit tests + coverage |
| `test-e2e` | Cypress | Integration tests |
| `build-docker` | Docker | Build & smoke-test image |
| `deploy` | GitHub Pages | Deploy on `main` |

The pipeline gates deployment on all tests passing.

---

## Deployment

### Option A — GitHub Pages (automatic via CI/CD)
1. Repository **Settings → Pages**
2. Source = **GitHub Actions**
3. Push to `main` → site is live at
   `https://<YOUR_USERNAME>.github.io/ecomerseSite/`

### Option B — Docker on a cloud VM
```bash
docker pull <your-registry>/fashionstore:latest
docker run -d -p 80:80 --restart=unless-stopped fashionstore:latest
```

### Option C — Heroku / Render / Railway
Connect the repo, set build = `Dockerfile`, and deploy.

---

## Monitoring

### UptimeRobot (uptime + availability)
1. Create a free account at <https://uptimerobot.com>
2. **Add new monitor** → **HTTP(s)**
3. URL = your deployed site
4. Interval = 5 min
5. Add email/Slack alert contacts

### Prometheus + Grafana (metrics)
Uncomment the `prometheus` and `grafana` services in `docker-compose.yml`,
then:
```bash
docker-compose up -d
# Prometheus → http://localhost:9090
# Grafana    → http://localhost:3000  (admin/admin)
```

In Grafana:
1. **Configuration → Data sources** → add Prometheus (`http://prometheus:9090`)
2. Import dashboard ID `3662` (Prometheus 2.0 stats) or build your own

### Tracked indicators
- Response time (p50 / p95 / p99)
- Availability (uptime %)
- HTTP error rate (4xx, 5xx)

---

## GitHub Projects

Use a **Board** project on the repo with three columns:

| To Do | In Progress | Done |
|-------|-------------|------|
| Analyse du code existant | | |
| Mise en place CI/CD | | |
| Ajout des tests | | |
| Dockerisation | | |
| Déploiement | | |
| Monitoring | | |

Create one issue per backlog item, drag through the columns as you progress.

---

## Deliverables checklist (cahier des charges)
- [x] Repository GitHub configuré
- [x] Pipeline CI/CD fonctionnel
- [x] Tests implémentés (Jest + Cypress)
- [x] Déploiement opérationnel (Docker + GitHub Pages)
- [x] Monitoring actif (UptimeRobot + Prometheus/Grafana)
- [x] Documentation (this README)

---

## Authors
- DevOps engineer: m.abidi@oodrive.com
- Project specs: Zeineb Sassi, Mokhtar Osmen
