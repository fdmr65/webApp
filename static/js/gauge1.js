$(document).ready(function (){
    $(this).on("click", "tbody tr", function() { 
      clearInterval(timer); 
      clearInterval(timer1);
      $("#gaugeText1").text(0+"%").css("color", "white");
      $("#gaugeText2").text(0+"%").css("color","white");
      $("#gaugeText3").text(0+"%").css("color","white");
      $("#gauge1").gauge(0,{ type: "halfcircle"});
      $("#gauge2").gauge(0,{ type: "halfcircle"});
      $("#gauge3").gauge(0,{ type: "halfcircle"});
    });
}); 