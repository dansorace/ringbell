




$(document).on("pagecreate", "#Status-History", function() {
    
    
    $('#radio-on').click(function() {
        $('#div2,#wk2').fadeOut('slow');
        $('#div1,#wk1').show('slow');
        $('#wk-both').prop("checked", false).checkboxradio("refresh");
        $('#wk-off').prop("checked", false).checkboxradio("refresh");
        $('#wk-on').prop("checked", this.checked).checkboxradio("refresh");
    });
    $('#radio-off').click(function() {
        $('#div1,#wk1').fadeOut('slow');
        $('#div2,#wk2').show('slow');
        $('#wk-both').prop("checked", false).checkboxradio("refresh");
        $('#wk-off').prop("checked", this.checked).checkboxradio("refresh");
        $('#wk-on').prop("checked", false).checkboxradio("refresh");
    });
    $('#radio-both').click(function() {
        $('#wk-both').prop("checked", this.checked).checkboxradio("refresh");
        $('#wk-off').prop("checked", false).checkboxradio("refresh");
        $('#wk-on').prop("checked", false).checkboxradio("refresh");
        $('#div2, #div1,#wk2,#wk1').show('slow');
    });
    $('#wk-on').click(function() {
        $('#wk2,#div2').slideUp('slow');
        $('#wk1,#div1').slideDown('slow');
        $('#radio-both').prop("checked", false).checkboxradio("refresh");
        $('#radio-off').prop("checked", false).checkboxradio("refresh");
        $('#radio-on').prop("checked", this.checked).checkboxradio("refresh");
    });
    $('#wk-off').click(function() {
        $('#wk1,#div1').slideUp('slow');
        $('#wk2,#div2').slideDown('slow');
        $('#radio-both').prop("checked", false).checkboxradio("refresh");
        $('#radio-off').prop("checked", this.checked).checkboxradio("refresh");
        $('#radio-on').prop("checked", false).checkboxradio("refresh");
    });
    $('#wk-both').click(function() {
        $('#wk2, #wk1,#div2, #div1').slideDown('slow');
        $('#radio-both').prop("checked", this.checked).checkboxradio("refresh");
        $('#radio-off').prop("checked", false).checkboxradio("refresh");
        $('#radio-on').prop("checked", false).checkboxradio("refresh");
    });
    var isCheckedOn = $('#wk-on').is(':checked');
    var isCheckedOff = $('#wk-off').is(':checked');
    var isCheckedBoth = $('#wk-both').is(':checked');
    $('#Daily-on').change(function() {
        $('.days-on').prop('checked', true).checkboxradio("refresh");
    });
    $('.days-on').change(function() {
        if ($('input:checkbox:checked.days-on').length == $("input:checkbox.days-on").length) {
            $('#Daily-on').prop("checked", true).checkboxradio("refresh");
        } else {
            $('#Daily-on').prop("checked", false).checkboxradio("refresh");
        }
    });
    $('#Dailyoff').change(function() {
        $('.daysoff').prop('checked', true).checkboxradio("refresh");
    });
    $('.daysoff').change(function() {
        if ($('input:checkbox:checked.daysoff').length == $("input:checkbox.daysoff").length) {
            $('#Dailyoff').prop("checked", true).checkboxradio("refresh");
        } else {
            $('#Dailyoff').prop("checked", false).checkboxradio("refresh");
        }
    });
    if (isCheckedOn) {
        $('#wk2,#div2').slideUp('slow');
        $('#wk1,#div1').slideDown('slow');
    };
    if (isCheckedOff) {
        $('#wk1,#div1').slideUp('slow');
        $('#wk2,#div2').slideDown('slow');
    };
    if (isCheckedBoth) {
        $('#wk2, #wk1,#div2, #div1').slideDown('slow');
    };
});

