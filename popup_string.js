
       $(document).on( "pagebeforecreate",function()
      {
        $("#popup_timer").append("<p>A information about a timer program. <a href='#popupInfo_timer' data-rel='popup' data-transition='pop' class='my-tooltip-btn ui-btn ui-alt-icon ui-nodisc-icon ui-btn-inline ui-icon-info ui-btn-icon-notext' title='Learn more'>info</a></p><div data-role='popup' id='popupInfo_timer' class='ui-content' style='max-width:350px;'><p>The timer service is program enable you to schedule timer to turn on and off room. Follow list to select and set then press updtae button.</p></div>");

        $("#popup_count").append("<p>A information about a detections system. <a href='#popupInfo_count' data-rel='popup' data-transition='pop' class='my-tooltip-btn ui-btn ui-alt-icon ui-nodisc-icon ui-btn-inline ui-icon-info ui-btn-icon-notext' title='Learn more'>info</a></p><div data-role='popup' id='popupInfo_count' class='ui-content' style='max-width:350px;'><p>The reset count detection button for to zero all detections unless one of counter has reaching the maximum value(500), will automatically be reset to zero.</p></div>");

        $("#popup_flash").append("<p>A information about a flash time system. <a href='#popupInfo_flash' data-rel='popup' data-transition='pop' class='my-tooltip-btn ui-btn ui-alt-icon ui-nodisc-icon ui-btn-inline ui-icon-info ui-btn-icon-notext' title='Learn more'>info</a></p><div data-role='popup' id='popupInfo_flash' class='ui-content' style='max-width:350px;'><p>The selection of flash pattern program. you can program them what you need it do flash pattern in each detections. The signal time pattern is between 1 to 15 per count flash period. The time length on and off is 500 to 10,000 per millisecond.</p></div>");

        $("#popup_room").append("<p>A information about a location room of flashing singal. <a href='#popupInfo_room' data-rel='popup' data-transition='pop' class='my-tooltip-btn ui-btn ui-alt-icon ui-nodisc-icon ui-btn-inline ui-icon-info ui-btn-icon-notext' title='Learn more'>info</a></p><div data-role='popup' id='popupInfo_room' class='ui-content' style='max-width:350px;'><p>The program is applicable for location room selection to on or off, which you like it do flashing event of location room from detection trigger. Please do switch all switch before submit.</p></div>");

        $("#popup_Change_password").append("<p>A information about a change username and password program. <a href='#popupInfo_CPassword' data-rel='popup' data-transition='pop' class='my-tooltip-btn ui-btn ui-alt-icon ui-nodisc-icon ui-btn-inline ui-icon-info ui-btn-icon-notext' title='Learn more'>info</a></p><div data-role='popup' id='popupInfo_CPassword' class='ui-content' style='max-width:350px;'><p>This is change username and password program that set up that you want to change it.</p></div>");

        $("#popup_light").append("<p>A information about a toggle light room system. <a href='#popupInfo_light' data-rel='popup' data-transition='pop' class='my-tooltip-btn ui-btn ui-alt-icon ui-nodisc-icon ui-btn-inline ui-icon-info ui-btn-icon-notext' title='Learn more'>info</a></p><div data-role='popup' id='popupInfo_light' class='ui-content' style='max-width:350px;'><p>This is toggle light program that you can toggle these buttons to on or off in room. Status of light room has box show color with on/off. And you see icon 'power' for relay control when you turn it on it will white icon that is active.</p></div>");

        $("#popup_datetime").append("<p>A information about update date and time in Arduino device. <a href='#popupInfo_datetime' data-rel='popup' data-transition='pop' class='my-tooltip-btn ui-btn ui-alt-icon ui-nodisc-icon ui-btn-inline ui-icon-info ui-btn-icon-notext' title='Learn more'>info</a></p><div data-role='popup' id='popupInfo_datetime' class='ui-content' style='max-width:350px;'><p>This is manual press button when you see compare of web's date/time and Arduino's date/time if you see there is different date/time of Arduino from web's real-date/time. You can update time button to restore device's date and time.</p></div>");

        $("#popup_current").append("<p>A information about a change sensor system for detect power of ligh in room. <a href='#popupInfo_current' data-rel='popup' data-transition='pop' class='my-tooltip-btn ui-btn ui-alt-icon ui-nodisc-icon ui-btn-inline ui-icon-info ui-btn-icon-notext' title='Learn more'>info</a></p><div data-role='popup' id='popupInfo_current' class='ui-content' style='max-width:350px;'><p>This is basic of modifying program when you see number of current sensor. If it is great than zero which light is still off.  It should be zero so you make modifications this set subtraction number make it to zero.</p></div>");

        $("#popup_Change_background").append("<p>A information about a url-background-image program. <a href='#popupInfo_background' data-rel='popup' data-transition='pop' class='my-tooltip-btn ui-btn ui-alt-icon ui-nodisc-icon ui-btn-inline ui-icon-info ui-btn-icon-notext' title='Learn more'>info</a></p><div data-role='popup' id='popupInfo_background' class='ui-content' style='max-width:350px;'><p>This is download background-image program from url address. You can copy URL-ADDRESS when you like the background-image or email to me  picture or link I will download it ino harddrive.</p></div>");

      $("#popup_timepicker").append("<p>A information about a timepicker program. <a href='#popupInfo_timepicker' data-rel='popup' data-transition='pop' class='my-tooltip-btn ui-btn ui-alt-icon ui-nodisc-icon ui-btn-inline ui-icon-info ui-btn-icon-notext' title='Learn more'>info</a></p><div data-role='popup' id='popupInfo_timepicker' class='ui-content' style='max-width:350px;'><p>This is a text input in time for entering numeric values, with up/down buttons and arrow key handling. And the checkbox is using to disable if you don't need both function to turn on or off. Pick one of these boxs.</p></div>");

     $("#popup_set_timer").append("<p>A information about a set timer program. <a href='#popupInfo_set_timer' data-rel='popup' data-transition='pop' class='my-tooltip-btn ui-btn ui-alt-icon ui-nodisc-icon ui-btn-inline ui-icon-info ui-btn-icon-notext' title='Learn more'>info</a></p><div data-role='popup' id='popupInfo_set_timer' class='ui-content' style='max-width:350px;'><p>When you are finish with set all of list drop-down for alarm timer, then press set timer to complete task and save these programs.</p></div>");

     $("#popup_select_room").append("<p>A information about a room selection system. <a href='#popupInfo_S_room' data-rel='popup' data-transition='pop' class='my-tooltip-btn ui-btn ui-alt-icon ui-nodisc-icon ui-btn-inline ui-icon-info ui-btn-icon-notext' title='Learn more'>info</a></p><div data-role='popup' id='popupInfo_S_room' class='ui-content' style='max-width:350px;'><p>The light alarm room selection is used for doorbell and ringer program that control light flash program. Other devices as smoke and security alarm must be used to control all light rooms.</p></div>");



      });

