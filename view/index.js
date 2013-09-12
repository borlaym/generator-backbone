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
  this.jst_path = 'js/templates/' + this.name + templateExt;
  var destFile = path.join('js/views', this.name + ext);
  var isRequireJsApp = this.isUsingRequireJS();

  this.template('view.ejs', this.jst_path);
  if (templateFramework === 'mustache') {
    this.jst_path = this.name + '-template';
  }
  

  var template = [
    '/*global define*/',
    '',
    'define([',
    '    \'jquery\',',
    '    \'underscore\',',
    '    \'backbone\',',
    '    \'parse\',',
    '    \'hbs!templates/'+this.name+'\',',
    '], function ($, _, Backbone, Parse, template) {',
    '    \'use strict\';',
    '',
    '    var ' + this._.classify(this.name) + 'View = Backbone.View.extend({',
    '        ' + 'template: template,',
    '        tagName : "div",',
    '        className : "'+this.name+'",',
    '        initialize : function() {',
    '           ',
    '        },',
    '        render : function() {',
    '           this.$el.html(this.template({model : this.model.toJSON()}));',
    '        },',
    '        events : {',
    '           ',
    '        }',
    '    });',
    '',
    '    return ' + this._.classify(this.name) + 'View;',
    '});'
  ].join('\n');

  this.write(destFile, template);
};
