$(".t-Region--stickyRegionHeader .t-Region-header").stickyWidget({toggleWidth: true});

apex.message.setThemeHooks({
  beforeShow: function(pMsgType, pElement$){
    if (pMsgType==apex.message.TYPE.SUCCESS){ 
   setTimeout(function() {
        $('.t-Body-alert .t-Alert').fadeOut('slow');
      }, 3000);
    }   
  }
});
