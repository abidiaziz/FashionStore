# FashionStore E-commerce — DevOps Project

DevOps practices applied to an existing static e-commerce site:
CI/CD, tests, Docker and monitoring.

## Project structure

```
ecomerseSite/
├── *.html                    static pages of the site
├── scripts/
│   ├── cart.js               cart logic (added)
│   ├── cart-ui.js            connects cart.js to the page (added)
│   └── script*.js            original UI scripts
├── styles/                   CSS files
├── tests/
│   └── cart.test.js          Jest unit tests
├── cypress/e2e/
│   ├── navigation.cy.js      navigation tests
│   └── cart.cy.js            cart tests
├── monitoring/
│   ├── prometheus.yml        Prometheus scrape config
│   └── blackbox.yml          probe config
├── .github/workflows/
│   └── ci-cd.yml             GitHub Actions pipeline
├── Dockerfile                site image (nginx)
└── docker-compose.yml        site + monitoring stack
```

## Run locally

```bash
npm install
npm start                  # http://localhost:8080
```

## Tests

```bash
npm test                   # Jest unit tests (9 tests)
npm run lint               # ESLint
npm run cypress:run        # Cypress E2E tests (10 tests)
```

## Docker

```bash
docker build -t fashionstore .
docker run -p 8080:80 fashionstore
```

Or with the full stack (site + monitoring):

```bash
docker-compose up -d
```

Then open:
- Site: http://localhost:8080
- Prometheus: http://localhost:9090
- Grafana: http://localhost:3000  (admin / admin)

## CI/CD

The pipeline runs on every push to `main`:

1. Lint (ESLint)
2. Unit tests (Jest)
3. E2E tests (Cypress)
4. Build Docker image
5. Deploy to GitHub Pages

## Monitoring

- **UptimeRobot** — external HTTP check on the deployed URL.
- **Prometheus + Grafana** — local metrics stack via docker-compose,
  using blackbox-exporter to probe the site.

Indicators tracked: response time, availability, HTTP errors.
