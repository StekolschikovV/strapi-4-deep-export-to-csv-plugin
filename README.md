# Strapi plugin strapi-4-deep-export-to-csv-plugin

This plugin is for strapi version 4. It allows you to do deep data export from tables. The data includes data with all components and dependencies.

## Installation

Use the package manager npm to install strapi-4-deep-export-to-csv-plugin

```bash
npm i strapi-4-deep-export-to-csv-plugin
```

Now create A file `/config/plugins.js`

And paste the following code to initiate the plugin.

```bash
module.exports = {
    // ...
    'strapi-4-deep-export-to-csv-plugin': {
        enabled: true,
        resolve: './node_modules/strapi-4-deep-export-to-csv-plugin'
    },
    // ...
}
```


## License

[MIT](https://choosealicense.com/licenses/mit/)
