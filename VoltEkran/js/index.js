$(function(){
    var power= localStorage.getItem("power");
    var rpm=localStorage.getItem("rpm");
    var frequency=localStorage.getItem("frequency");
    var clas=localStorage.getItem("class");   
    $("#propertiesMotor tbody").append("\
    <tr>\
    <th scope='row'>#</th>\
    <td>Power</td>\
    <td>"+power+"</td>\
    </tr>\
    <tr>\
    <th scope='row'>#</th>\
    <td>Speed(rpm)</td>\
    <td>"+rpm+"</td>\
    </tr>\
    <tr>\
    <th scope='row'>#</th>\
    <td>Frequency</td>\
    <td>"+frequency+"</td>\
    </tr>\
    <tr>\
    <th scope='row'>#</th>\
    <td>INSULATION CLASS</td>\
    <td>"+clas+"</td>\
    </tr>"
    );  
}); 