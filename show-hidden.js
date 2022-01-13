
 function show_hidden(){
    var flag= $("#hidden").text();
     if (flag == 1){
        $("#app").show(200);
      $("#hidden").text("0");
      console.log("succe" +flag);
     }
     else {
        $("#app").hide(200);
        $("#hidden").text("1");
        console.log("succe" +flag);
     }
     
     
 } 