var a = '   {  '  + 
'       "id1": {  '  + 
'         "power": 110,  '  + 
'         "speed": 1500,  '  + 
'         "frame-size": "315 S",  '  + 
'         "type": "B3",  '  + 
'         "efficiency": "IE3;",  '  + 
'         "voltage": 400,  '  + 
'         "frequency": 50,  '  + 
'         "duty-type": "S1",  '  + 
'         "insulationclass": "F"  '  + 
'       },  '  + 
'       "id2": {  '  + 
'         "power": 160,  '  + 
'         "speed": 3000,  '  + 
'         "frame-size": "315 L",  '  + 
'         "type": "B3",  '  + 
'         "efficiency": "IE3",  '  + 
'         "voltage": 400,  '  + 
'         "frequency": 50,  '  + 
'         "duty-type": "S1",  '  + 
'         "insulationclass": "F"  '  + 
'       },  '  + 
'       "id3": {  '  + 
'         "power": 75,  '  + 
'         "speed": 1500,  '  + 
'         "frame-size": "280 S",  '  + 
'         "type": "B35",  '  + 
'         "efficiency": "IE3",  '  + 
'         "voltage": 400,  '  + 
'         "frequency": 50,  '  + 
'         "duty-type": "S1",  '  + 
'         "insulationclass": "F"  '  + 
'       },  '  + 
'       "id4": {  '  + 
'         "power": 110,  '  + 
'         "speed": 3000,  '  + 
'         "frame-size": "315 S",  '  + 
'         "type": "B3",  '  + 
'         "efficiency": "IE3",  '  + 
'         "voltage": 400,  '  + 
'         "frequency": 50,  '  + 
'         "duty-type": "S1",  '  + 
'         "insulationclass": "F"  '  + 
'       },  '  + 
'       "id5": {  '  + 
'         "power": 90,  '  + 
'         "speed": 1500,  '  + 
'         "frame-size": "280 M",  '  + 
'         "type": "B3",  '  + 
'         "efficiency": "IE3",  '  + 
'         "voltage": 400,  '  + 
'         "frequency": 50,  '  + 
'         "duty-type": "S1",  '  + 
'         "insulationclass": "F"  '  + 
'       },  '  + 
'       "id6": {  '  + 
'         "power": 132,  '  + 
'         "speed": 1500,  '  + 
'         "frame-size": "315 M",  '  + 
'         "type": "B3",  '  + 
'         "efficiency": "IE3",  '  + 
'         "voltage": 400,  '  + 
'         "frequency": 50,  '  + 
'         "duty-type": "S1",  '  + 
'         "insulationclass": "F"  '  + 
'       },  '  + 
'       "id7": {  '  + 
'         "power": 270,  '  + 
'         "speed": 3000,  '  + 
'         "frame-size": "275 M",  '  + 
'         "type": "B35",  '  + 
'         "efficiency": "IE3",  '  + 
'         "voltage": 400,  '  + 
'         "frequency": 50,  '  + 
'         "duty-type": "S1",  '  + 
'         "insulationclass": "F"  '  + 
'       },  '  + 
'       "id8": {  '  + 
'         "power": 132,  '  + 
'         "speed": 1500,  '  + 
'         "frame-size": "315 M",  '  + 
'         "type": "B3",  '  + 
'         "efficiency": "IE3",  '  + 
'         "voltage": 400,  '  + 
'         "frequency": 50,  '  + 
'         "duty-type": "S1",  '  + 
'         "insulationclass": "F"  '  + 
'       },  '  + 
'       "id9": {  '  + 
'         "power": 132,  '  + 
'         "speed": 1500,  '  + 
'         "frame-size": "315 M",  '  + 
'         "type": "B3",  '  + 
'         "efficiency": "IE3",  '  + 
'         "voltage": 400,  '  + 
'         "frequency": 50,  '  + 
'         "duty-type": "S1",  '  + 
'         "insulationclass": "F"  '  + 
'      },'+      
'         "id10": {  '  + 
'         "power": 270,  '  + 
'         "speed": 1500,  '  + 
'         "frame-size": "315 M",  '  + 
'         "type": "B3",  '  + 
'         "efficiency": "IE3",  '  + 
'         "voltage": 400,  '  + 
'         "frequency": 50,  '  + 
'         "duty-type": "S1",  '  + 
'         "insulationclass": "F"  '  + 
'       },'+
'         "id11": {  '  + 
'         "power": 130,  '  + 
'         "speed": 3000,  '  + 
'         "frame-size": "315 M",  '  + 
'         "type": "B3",  '  + 
'         "efficiency": "IE3",  '  + 
'         "voltage": 400,  '  + 
'         "frequency": 50,  '  + 
'         "duty-type": "S1",  '  + 
'         "insulationclass": "F"  '  + 
'   }}  ' ; 
var obj =JSON.parse(a)
$(function(){
        
    $(this).on("click", "tbody tr", function() {  
            localStorage.setItem("power",obj["id"+($(this).index()+1).toString()].power);
            localStorage.setItem("rpm",obj["id"+($(this).index()+1).toString()].speed);
            localStorage.setItem("frequency",obj["id"+($(this).index()+1).toString()].frequency);
            localStorage.setItem("class",obj["id"+($(this).index()+1).toString()].insulationclass);
            window.location="index.html";
    });
});