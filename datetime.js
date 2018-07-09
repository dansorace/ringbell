$(document).ready(function() {
   
    
    var newDate = new Date();
    var ampm = "AM";
    newDate.setDate(newDate.getDate());
    $('#Date').html(newDate.toDateString());
    setInterval(function() {
        var seconds = new Date().getSeconds();
        $("#sec").html((seconds < 10 ? "0" : "") + seconds);
    }, 1000);
    setInterval(function() {
        var minutes = new Date().getMinutes();
        $("#min").html((minutes < 10 ? "0" : "") + minutes);
    }, 1000);
    setInterval(function() {
        var hours = new Date().getHours();
        if (hours > 12) {
            hours -= 12;
        } else if (hours === 0) {
            hours = 12;
        }
        $("#hours").html((hours < 10 ? "0" : "") + hours);
    }, 1000);
    var h = new Date().getHours();
    ampm = ((h >= 12) ? "PM" : "AM");
    $('#AM_PM').html(ampm);
    $("#showup").hide();
    $("#showup").delay(3000).fadeIn(500);
    $("#welcome").delay(500).fadeIn(500);
    $("#welcome").delay(2200).hide(500);


    $("form").validate({
            rules: {
                username: {
                    required: true
                },
                password: {
                    required: true
                }
            },
            errorPlacement: function(error, element) {
                error.insertAfter(element.parent());
            }
        });
});
    function date_time(id) {
        var date = new Date();
        var n = date.toString();
        var local_date = date.toLocaleString();
        var date_string = date.toDateString();
        var local_time = date.toLocaleTimeString();
        var result = '' + date_string + ' ' + local_time;
        document.getElementById(id).innerHTML = result;
        setTimeout('date_time("' + id + '");', '1000');
        return true;
    }
    
 
    