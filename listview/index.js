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
  this.jst_path = 'js/templates/' + this.name + 'List' + templateExt;
  var destFile = path.join('js/views', this.name + 'List' + ext);
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
    '    \'templates\',',
    '    \'views/'+this.name+'ListItem\'',
    '], function ($, _, Backbone, Parse, JST, '+this._.classify(this.name)+'ListItemView) {',
    '    \'use strict\';',
    '',
    '    var ' + this._.classify(this.name) + 'ListItemView = Backbone.View.extend({',
    '        ' + 'template: JST[\'' + this.jst_path + '\'],',
    '        tagName : "ul",',
    '        className : "'+this.name+'",',
    '        initialize : function() {',
    '           this.render();',
    '        },',
    '        render : function() {',
    '           this.collection.each(function(item) {',
    '              this.$el.html("");',
    '              var '+this.name+'ListItem = new ' + this._.classify(this.name) + 'ListItemView({model : item});',
    '              this.$el.append('+this.name+'ListItem);',
    '           }, this);  ',
    '        },',
    '        events : {',
    '           ',
    '        }',
    '    });',
    '',
    '    return ' + this._.classify(this.name) + 'ListItemView;',
    '});'
  ].join('\n');

  this.write(destFile, template);
};
