Project Structure:

GardenPlanner/
├── .env
├── .github
│   │   └── workflows
│       │       └── ci.yml
├── .gitignore
├── client
│   │   ├── .env
│   │   ├── .gitignore
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   ├── public
│   │   │   │   ├── favicon.ico
│   │   │   │   ├── index.html
│   │   │   │   ├── logo192.png
│   │   │   │   ├── logo512.png
│   │   │   │   ├── manifest.json
│   │   │   │   └── robots.txt
│   │   ├── README.md
│   │   └── src
│       │       ├── App.css
│       │       ├── App.js
│       │       ├── App.test.js
│       │       ├── components
│       │   │       │   ├── Header.js
│       │   │       │   ├── PlantForm.cy.js
│       │   │       │   ├── PlantForm.js
│       │   │       │   └── PlantForm.module.css
│       │       ├── containers
│       │   │       │   └── PlantFormContainer.js
│       │       ├── index.css
│       │       ├── index.js
│       │       ├── logo.svg
│       │       ├── redux
│       │   │       │   ├── actions
│       │   │   │       │   │   ├── plantActions.js
│       │   │   │       │   │   └── themeActions.js
│       │   │       │   ├── reducers
│       │   │   │       │   │   ├── plantReducer.js
│       │   │   │       │   │   └── themeReducer.js
│       │   │       │   └── store.js
│       │       ├── reportWebVitals.js
│       │       ├── setupTests.js
│       │       ├── theme
│       │   │       │   ├── themeConfig.js
│       │   │       │   └── ThemeCustomizer.js
│       │       └── __tests__
│           │           ├── PlantForm.test.js
│           │           └── ThemeCustomizer.test.js
├── cypress
│   │   ├── downloads
│   │   ├── fixtures
│   │   │   │   └── example.json
│   │   └── support
│       │       ├── commands.js
│       │       ├── component-index.html
│       │       └── component.js
├── cypress.config.js
├── database
│   │   ├── garden_schema.sql
│   │   └── seed.sql
├── docs
│   │   ├── COMPREHENSIVE_PLAN.md
│   │   ├── DEVELOPMENT_GUIDELINES.md
│   │   ├── GARDEN_PLANNING.md
│   │   ├── MONTHLY_TRACKING_FORM.md
│   │   ├── PLANT_TRACKING_FORM.md
│   │   ├── PROJECT_OVERVIEW.md
│   │   ├── PROJECT_STATUS.md
│   │   ├── TABLES.md
│   │   └── THREAD_HANDOFF.md
├── generate-project-readme.js
├── generate-structure.js
├── jest.setup.js
├── LICENSE
├── logs
├── package-lock.json
├── package.json
├── README.md
├── scripts
└── server
        ├── package-lock.json
        ├── package.json
        └── src
                ├── config
        │           │   ├── db.js
        │           │   └── knexfile.js
                ├── controllers
        │           │   └── PlantController.js
                ├── index.js
                ├── middleware
        │           │   └── errorHandler.js
                ├── models
        │           │   ├── Plant.js
        │           │   └── Tracking.js
                ├── routes
        │           │   └── plantRoutes.js
                └── __tests__
                        └── plant.test.js
