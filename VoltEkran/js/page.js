$(function(){
    $(this).on("click", "#failure  tr", function() { 
      
        if($(this).index()==0)
        {
           window.location="ariza1.html";       
         }
        else if($(this).index()==1)
        {
            window.location="ariza2.html"; 
        }
        else if($(this).index()==2)
        {
            window.location="ariza3.html"; 
        }
    });
});
