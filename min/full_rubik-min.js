!function($){Drupal.behaviors.collapseBlock={attach:function(i,o){$(".panelizer-view-mode.node-embedded-to-profile>h3").off("click"),$(".panelizer-view-mode.node-embedded-to-profile>h3").on("click",function(){var i=$(this);i.parents(".panelizer-view-mode.node-embedded-to-profile").find(".panel-display").first().slideToggle(),i.toggleClass("open")})}},Drupal.behaviors.stickyButtons={attach:function(i,o){if($('div[id*="edit-actions"]')){var t=$(this);$(window).on("load resize",function(){var i=t.offset().top,o=$(window).height(),e=t.parent().width(),n=$(window).scrollTop(),s=n+o;t.css("position","static"),t.width(e),i>s?t.css({position:"fixed",top:"initial",bottom:0,width:$(this).parent().width()}):0>i-n?t.css({position:"fixed",top:0,bottom:"initial",width:$(this).parent().width()}):t.css("position","static"),$(window).scroll(function(){var n=$(window).scrollTop(),s=n+o;i>s?t.css({position:"fixed",top:"initial",bottom:0,width:e}):0>i-n?t.css({position:"fixed",top:0,bottom:"initial",width:e}):t.css("position","static")})})}}}}(jQuery);