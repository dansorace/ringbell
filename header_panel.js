 $(document).on( "pagebeforecreate",function()
      {
        $("#Headers_Panel").append(
            
             "<div data-role='panel' data-icon='bars' id='right-panel' data-display='overlay' data-position='right'data-position-fixed='true'><ul data-role='listview' data-icon='false'><li data-icon='delete'><a href='#' data-rel='close'>Close</a></li><li><a href='/?status' data-transition='flow'class='ui-btn ui-shadow ui-corner-all ui-mini ui-btn-icon-left ui-icon-bullets'>Switch to Status</a></li><a href='/?homeAutomation' data-transition='flow' class='ui-btn ui-shadow ui-corner-all ui-mini ui-btn-icon-left ui-icon-home'>Switch to Lighting</a><a href='/?Setting' data-transition='flow'class='ui-btn ui-shadow ui-corner-all ui-mini ui-btn-icon-left ui-icon-edit'>Switch to Setting</a></li><li data-role='list-divider'>Share this page</li><li><a href ='?logout' onclick=\"document.location.href ='http://twitter.com'\"class='icon-button twitter  ui-mini'><i class='icon-twitter'></i><span></span>Twitter</a></li><li><a href ='?logout' onclick=\"document.location.href ='http://facebook.com'\"class='icon-button facebook ui-mini'><i class='icon-facebook'></i><span></span>acebook</a></li><li><a href ='?logout' onclick=\"document.location.href ='http://google.com'\"class='icon-button google-plus ui-mini'><i class='icon-google-plus'></i><span></span>oogle</a></li><li><a href ='?logout' onclick=\"document.location.href ='http://gmail.com'\"class='icon-button google-plus ui-mini'><i class='icon-envelope-alt'></i><span></span>Gmail</a></li>"  );
             
             
        $("#Bottom_Panel").append(
            "</div><!-- /panel -->"
            );     
             
          
      });