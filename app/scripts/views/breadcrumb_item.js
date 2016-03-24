'use strict';

var Core = require('core_boot');

module.exports = Core.View.extend({
  template: 'breadcrumb_item',
  tagName: 'li',
  className: function(){
    if(this.model.get('last')){
      return 'active';
    }
    return '';
  },

  events: {
    'click a': '$open'
  },

  $open: function(e){
    e.preventDefault();

    var tabs = this.parent.tabs;

    console.log(this.model.attributes);

    if(Core.g.tree_config.is_in_root_item(this.model.id)){
      var $item = $('option[data-id="' + this.model.id + '"]');
      if($item.length === 0){ return false; }
      $item.prop('selected', true);
      $item.parent().change();
    }else{
      var result = tabs.tree_view.click_item_by_id(this.model.id);
      if(!result){
        tabs.render_list_view(this.model);
      }
    }
  }

});