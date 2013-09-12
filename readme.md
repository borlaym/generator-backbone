# Yeoman SubGenerators for the Kriek Template

Maintainer: [Márton Borlay](https://github.com/borlaym)

Forked from the Backbone Generator.
Right now only the subgenerators work for this template : https://github.com/borlaym/kriek_template
TODO: full project generator.

## Installation

1. Clone this repository
`$ git clone https://github.com/borlaym/generator-kriek.git`

2. From this directory, run
`$ npm link`
Now the 'yo kriek' command is available.

3. Clone the kriek_template repository to a different directory
`$ git clone https://github.com/borlaym/kriek_template.git`

## Usage

Available generators:

- kriek:model
- kriek:view
- kriek:listview - a view for displaying a model in a collection
- kriek:listitemview - a view for displaying a collection
- kriek:collection
- kriek:router
- kriek:controller - a generic object
- kriek:structure - creates a model, collection, listitemview and listview
- kriek:module - like kriek:structure, but also creates a controller and a view for the controller

## Notes

- Defaults to using Handlebars as it's templating engine
- Models and Collections are Parse objects