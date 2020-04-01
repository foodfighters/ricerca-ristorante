 

document.getElementById('province').onchange = function(){getOption()};

function getOption(v)
 {
    

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "/data/comuni.json",
  "method": "GET",
}

var provincia = document.getElementById('province');
var pv = "all";
    pv = provincia.options[provincia.selectedIndex].value;
    console.log(pv);

$.ajax(settings).done(function (jcontent){
    
   // console.log(jcontent);
    $( ".comuni" ).empty();

    
    var output = document.getElementById('comuni');
    
    if (pv== "all") {
     
output.innerHTML += '<option id="remove-me" value="all">Tutti</option><option id="remove-me" value="none" disabled>Seleziona Provincia</option>';
       loadcomuni();
    }
    else {


output.innerHTML += '<option id="remove-me" value="all">Tutti (intera regione)</option>'; 
        
            
    
for (var i = 0; i < jcontent.regioni[id].province[pv].comuni.length; i++) {
    console.log(i);
   

output.innerHTML += '<option id="remove-me" value="' + jcontent.regioni[id].province[pv].comuni[i].nome + '">' + jcontent.regioni[id].province[pv].comuni[i].nome + '</option>';
    
    

} 
        

  }loadcomuni();
        
});
     
    

 }

