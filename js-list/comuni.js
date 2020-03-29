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
    console.log(jcontent.regioni[id].province[0].comuni[0].nome);
    console.log(jcontent.regioni[id].province[0].comuni.length);
    $( ".comuni" ).empty();

    if (pv== "all") {
     var output = document.getElementById('comuni');
output.innerHTML += '<option id="remove-me" value="all">Tutti</option><option id="remove-me" value="none" disabled>Seleziona Provincia</option>';   
    }
    else {
        
        var output = document.getElementById('comuni');
output.innerHTML += '<option id="remove-me" value="all">Tutti</option>'; 
    
for (var i = 0; i < jcontent.regioni[id].province[pv].comuni.length; i++) {
    console.log(i);
   

var output = document.getElementById('comuni');
output.innerHTML += '<option id="remove-me" value="' + jcontent.regioni[id].province[pv].comuni[i].nome + '">' + jcontent.regioni[id].province[pv].comuni[i].nome + '</option>';

}

  }      
        
});


 }