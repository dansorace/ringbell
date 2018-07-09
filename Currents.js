function GetCurrentData(){
    nocache = "&nocache=" + Math.random() * 1000000;
    var request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            if (this.readyState == 4){
                if (this.status == 200){
                    if(this.responseText !== null){
                        document.getElementById("current_data").innerHTML = this.responseText;
                    }
                }
            }
        };
    request.open("GET","current_status" + nocache, true);
    request.send(null);
    setTimeout(GetCurrentData, 1000);
}