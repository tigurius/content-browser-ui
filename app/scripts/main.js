'use strict';

require.config({
  baseUrl: 'scripts',

  paths: {
    modernizr: '../../bower_components/modernizr/modernizr',
    underscore: '../../bower_components/underscore/underscore',
    requirejs: '../../bower_components/requirejs/require',
    moment: '../../bower_components/moment/moment',
    jquery: '../../bower_components/jquery/dist/jquery',
    handlebars: '../../bower_components/handlebars/handlebars',
    'backbone.localstorage': '../../bower_components/backbone.localstorage/backbone.localStorage',
    backbone_original: '../../bower_components/backbone/backbone',
    backbone: './extended/backbone_override',

    jquery_ui: '../../bower_components/jquery-ui/jquery-ui',

    collection: 'extended/collection',
    model: 'extended/model',
    view: 'extended/view',
    register_helpers: './register_helpers',
    templates: 'templates',
    app: 'app',
    init: 'init',
    modal: '../../bower_components/bootstrap-sass/assets/javascripts/bootstrap/modal'
  },

  shim: {

    modal: {
      deps: ['jquery'],
      exports: 'jquery'
    },

    handlebars: {
      exports: 'Handlebars',

      init: function() {
        this.Handlebars = Handlebars; /*jshint ignore:line */ //NOTE: dont write window.Handlebars here it causes build bug
        return this.Handlebars;
      }
    },


    templates: {
      deps: ['register_helpers']
    }

  }
});

require(['init', 'jquery', 'jquery_ui', 'modal', 'templates'], function(App){

  $(function(){
    App.init();
  });

});
