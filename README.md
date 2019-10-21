# fdz-paginator
AngularJS component which implements a paginator for AngularJS Material.

## Getting started

### Dependencies
This repository contains a component based on AngularJS and AngularJS Materials.

### Installation
You need declare the dependency on the fdzPaginatorModule:
```
angular.module('ExampleModule', ['ngMaterial', 'fdzPaginatorModule'])
```

Add the the fdz-pagination.css to your html file and change the fdzPaginatorTemplate.html to your needs.

### fdz-paginator settings
- `options` This is the configuration object: 

        options = {
            sortObject: {                       // Options for the sort md-select
              selected: 'Relevance',
              options: ['Relevance', 'Date']
            },
            pageObject : {                      // Options for the page handling
              options : [10, 20, 50],
              totalHits: 100,
              size: 20,
              page: 1
        }
- `template-url` (Default: `./fdzPaginatorTEmplate.html`) Override the template for the component with a custom provided template 

## Build

### Production Build
`npm run build`

### Build the example in the docs folder
`npm run docs`

## Development

### Using the webpack-dev-server
`npm run start`

### Watch the webpack files
`npm run watch`

### Tests
`npm run test`
