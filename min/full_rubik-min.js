!function($){Drupal.behaviors.collapseBlock={attach:function(i,t){$(".panelizer-view-mode.node-embedded-to-profile>h3").off("click"),$(".panelizer-view-mode.node-embedded-to-profile>h3").on("click",function(){var i=$(this);i.parents(".panelizer-view-mode.node-embedded-to-profile").find(".panel-display").first().slideToggle(),i.toggleClass("open")})}},Drupal.behaviors.stickyButtons={attach:function(i,t){$('[id*="edit-actions"]').offset()&&$(window).on("load resize",function(){$('[id*="edit-actions"]').css("position","static"),$('[id*="edit-actions"]').width($this.parent().width());var i=$('[id*="edit-actions"]').offset().top,t=$(window).height(),o=$('[id*="edit-actions"]').width(),e=$(window).scrollTop(),d=e+t;i>d?$('[id*="edit-actions"]').css({position:"fixed",top:"initial",bottom:0,width:o}):0>i-e?$('[id*="edit-actions"]').css({position:"fixed",top:0,bottom:"initial",width:o}):$('[id*="edit-actions"]').css("position","static"),$(window).scroll(function(){var e=$(window).scrollTop(),d=e+t;i>d?$('[id*="edit-actions"]').css({position:"fixed",top:"initial",bottom:0,width:o}):0>i-e?$('[id*="edit-actions"]').css({position:"fixed",top:0,bottom:"initial",width:o}):$('[id*="edit-actions"]').css("position","static")})})}}}(jQuery);