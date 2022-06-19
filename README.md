# Strapi plugin strapi-4-deep-export-to-csv-plugin

Working on Strapi (version 4)

## Demo

[![EStrapi plugin strapi-4-deep-export-to-csv-plugin](https://free-png.ru/wp-content/uploads/2020/07/logo-you-tube-2-1.png)](https://www.youtube.com/watch?v=pnbbesqGfmw "Strapi plugin strapi-4-deep-export-to-csv-plugin")

## First Setup

### 1. Clone the plugin into your Strapi project

```bash
cd /<path-to-your-strapi-project>/src
```

create plugins folder if not exists

```bash
mkdir plugins
```

go to plugins folder

```bash
cd plugins
```

clone the plugin code into a folder and skip the prefix

```bash
git clone https://github.com/StekolschikovV/csv-export.git csv-export-all-v && cd csv-export-all-v && mv v4 ../csv-export && cd ../ && rm -fr csv-export-all-v
```

### 2. Install dependencies

```bash
cd strapi-4-deep-export-to-csv-plugin && yarn install
```

### 3. Enable the plugin in `<root>/config/plugins.js` .

```javascript
module.exports = {
  // ...
  "strapi-4-deep-export-to-csv-plugin": {
    enabled: true,
    resolve: "./node_modules/strapi-4-deep-export-to-csv-plugin", // path to plugin folder
  },
  // ...
};
```

### 4. Build the plugin

```bash
# back to project root and build the plugin
yarn build
# start
yarn develop
```

## Plugin development

```bash
yarn develop --watch-admin
```

### Enable the plugin in `<root>/config/plugins.js` .

```javascript
module.exports = {
  // ...
  "strapi-4-deep-export-to-csv-plugin": {
    enabled: true,
    resolve: "./src/plugins/strapi-4-deep-export-to-csv-plugin", // path to plugin folder
  },
  // ...
};
```

Running at http://localhost:8080/

## Features

- Support CSV export
