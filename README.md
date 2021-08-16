## Foreword

The project is a web-based platform for creating a Search page to search and filter planets by their attributes.

## Scaffolding

```bash
├── public
│   └── favicon.ico                 # favicon
│   └── index.html                  # HTML Template
├── mockA
│   └── data.json                   # mocked planet data to be used in JSON-Server
├── src
│   ├── actions                     # redux actions
│   ├── components                  # component definitions
│   ├── config                      # API configurations
│   │   └── endpoint.js             # Contains endpoint for JSON-Server API
│   ├── services                    # redux services to fetch data from API
│   ├── reducers                    # reducer definitions
│   ├── utils                       # utility scripts
│   ├── app.js                      # entrypoint of the component
│   └── app.css                     # CSS definition for App component
├── .eslintrc.js                    # js linting configuration
├── .gitignore
├── package.json                    # project dependencies
└── README.md

```

## Installation

Install Dependencies

`yarn` is the default dependency manager used for installing and building the application.

```bash
$ yarn install
```

Start API Server

```bash
$ json-server --watch data.json --port:PORTNUMBER
```

Will start the `json-server` to fetch data from API.
Add the `PORTNUMBER` in `./src/config/endpoint.js`

Start Development Server

```bash
$ yarn start
```

This will automatically open the application on [http://localhost:3000](http://localhost:8000).

## Local Development

Both the production and development builds of the dashboard require API endpoint configurations in order to query data from specific datastores.

`src/config/endpoint.js` contains references to API required to visualize data. Please reference the following example for required configuration fields:

```JavaScript
const PORTNUMBER = PORTNUMBER // add your portnumber here
export const endpoints = {
  url: `http://localhost:${PORTNUMBER}`,
};
```

`src/config/endpoint.js` contains references to the mocked `PORTNUMBER`. Please replace it with your own `PORTNUMBER` which was used during creating `json-server`

## Requirements

Install yarn

```
curl -sL https://dl.yarnpkg.com/rpm/yarn.repo -o /etc/yum.repos.d/yarn.repo
dnf/yum install yarn
```

## Build

Build Application

```bash
$ yarn build
```

This will generate the `dist` folder in the root directory, which contains packaged files such as `***.js`, `***.css`, and `index.html`.

## Template

This application is based on v4 of Ant Design which is a production-ready UI solution for admin interfaces. For more information regarding the foundation and template of the application, please visit [https://ant.design/components/overview/](https://ant.design/components/overview/).
