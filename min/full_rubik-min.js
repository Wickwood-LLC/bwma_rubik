!function($){Drupal.behaviors.collapseBlock={attach:function(i,o){$(".panelizer-view-mode.node-embedded-to-profile>h3").off("click"),$(".panelizer-view-mode.node-embedded-to-profile>h3").on("click",function(){var i=$(this);i.parents(".panelizer-view-mode.node-embedded-to-profile").find(".panel-display").first().slideToggle(),i.toggleClass("open")})}},Drupal.behaviors.stickyButtons={attach:function(i,o){$(window).on("load resize",function(){var i=$('div[id*="edit-actions"]'),o=i.offset().top,t=$(window).height(),e=i.parent().width(),n=i.parent().height(),s=$(window).scrollTop(),d=s+t;i.css("position","static"),i.width(e),o>d?i.css({position:"fixed",top:"initial",bottom:0,width:$(this).parent().width()}):0>o-s+n?i.css({position:"fixed",top:"65px",bottom:"initial",width:$(this).parent().width()}):i.css("position","static"),$(window).scroll(function(){var s=$(window).scrollTop(),d=s+t;o>d?i.css({position:"fixed",top:"initial",bottom:0,width:e}):0>o-s+n?i.css({position:"fixed",top:"65px",bottom:"initial",width:e}):i.css("position","static")})})}}}(jQuery);