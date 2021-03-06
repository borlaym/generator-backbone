/*jshint latedef:false */
var path = require('path'),
  util = require('util'),
  yeoman = require('yeoman-generator'),
  scriptBase = require('../script-base');

module.exports = Generator;

function Generator() {
  scriptBase.apply(this, arguments);
  var dirPath = this.options.coffee ? '../templates/coffeescript/' : '../templates';
  this.sourceRoot(path.join(__dirname, dirPath));

}

util.inherits(Generator, scriptBase);

Generator.prototype.createViewFiles = function createViewFiles() {
  var ext = this.options.coffee ? '.coffee' : '.js';
  var templateFramework = this.getTemplateFramework();
  var templateExt = '.hbs';
  if (templateFramework === 'mustache') {
    templateExt = '-template.mustache';
  } else if (templateFramework === 'handlebars') {
    templateExt = '.hbs';
  }
  this.jst_path = 'app/scripts/templates/' + this.name + templateExt;
  var destFile = path.join('app/scripts/', this.name + ext);
  var isRequireJsApp = this.isUsingRequireJS();

  var template = [
    '/*global define*/',
    '',
    'define([',
    '    \'jquery\',',
    '    \'underscore\',',
    '    \'backbone\',',
    '    \'collections/'+this.name+'\',',
    '    \'views/'+this.name+'\'',
    '], function ($, _, Backbone, '+this._.classify(this.name)+'Collection, '+this._.classify(this.name)+'View) {',
    '    \'use strict\';',
    '',
    '    var ' + this._.classify(this.name) + ' = {',
    '        initialize : function() {',
    '           this.collection = new ' + this._.classify(this.name) + 'Collection();',
    '        }',
    '    };',
    '',
    '    return ' + this._.classify(this.name) + ';',
    '});'
  ].join('\n');

  this.write(destFile, template);
};
