# Yeoman SubGenerators for the Kriek Template

Maintainer: [Márton Borlay](https://github.com/borlaym)

Forked from the Backbone Generator.
Right now only the subgenerators work for this template : https://github.com/borlaym/kriek_template
TODO: full project generator.

## Installation

1. Clone the kriek_template repository
`$ git clone https://github.com/borlaym/kriek_template.git`

Make a new directory and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo backbone`, optionally passing an app name:
```
yo backbone [app-name]
```

## Generators

Available generators:

- backbone:model
- backbone:view
- backbone:collection
- backbone:router
- backbone:all

## Typical workflow

```
yo backbone # generates your application base and build workflow
yo backbone:model blog
yo backbone:collection blog
yo backbone:router blog
yo backbone:view blog
grunt server
```

Also checkout this [NetTuts write-up](http://net.tutsplus.com/tutorials/javascript-ajax/building-apps-with-the-yeoman-workflow/) for a guide to building Backbone.js apps using this generator.


## Options

* `--coffee`
  
  Generate scaffolds in CoffeeScript.
  RequireJS is not supported with `--coffee` option for now.

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after
  scaffolding has finished.

* `--test-framework=[framework]`

  Defaults to `mocha`. Can be switched for
  another supported testing framework like `jasmine`.

* `--template-framework=[framework]`

  Defaults to `lodash` templating with grunt-contrib-jst.
  `handlebars` and `mustache` are also supported.

## Contribute

See the [contributing docs](https://github.com/yeoman/yeoman/blob/master/contributing.md)

When submitting an issue, please follow the [guidelines](https://github.com/yeoman/yeoman/blob/master/contributing.md#issue-submission). Especially important is to make sure Yeoman is up-to-date, and providing the command or commands that cause the issue.

When submitting a bugfix, write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.

When submitting a new feature, add tests that cover the feature.


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
