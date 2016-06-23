'use strict';

var Core = require('core_boot');
var MixinTree = require('core_tree');
var _ = require('underscore');

module.exports = Core.Model
  .extend(MixinTree)
  .extend({

    idAttribute: 'value',

    content_browser: true,

    index: [
      ['value']
    ],

    path: function(){
      return this.collection.tree_config.get('root_path') +  '/browse';
    },

    has_sub_items: function(){
      return this.attributes.has_sub_items;
    },


    can_show_children: function(){
      return this.attributes.has_sub_items && !this.is_root_model;
    },


    short_name: function(){
      return this.get('name').length > 27 ? this.get('name').substring(0, 27) + '...' : this.get('name');
    },

    select: function(){
      this.selected = true;
    },

    deselect: function(){
      this.selected = false;
    },

    check: function(){
      this.selected_collection().add(this.clone());
      Core.trigger('browser:check', this.get('value'))
      return this;
    },

    uncheck: function(){
      this.selected_collection().remove(this.clone());
      Core.trigger('browser:uncheck', this.get('value'))
      return this;
    },

    is_checked: function(){
      return this.prechecked() || this.selected_collection().where({value: this.get('value')}).length;
    },


    prechecked: function(){
      return _.contains(this.get_browser().disabled_item_ids, this.get('value'));
    },

    is_disabled: function(){
      var not_selectable = !this.get('selectable');
      return not_selectable || this.prechecked();
    },

    get_browser: function(){
      return this.browser || (this.collection && this.collection.browser);
    },

    selected_collection: function(){
      return this.get_browser().selected_collection;
    }


  });
