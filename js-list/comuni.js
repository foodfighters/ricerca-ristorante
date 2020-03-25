var settings = {
  "async": true,
  "crossDomain": true,
  "url": "/data/italia.json",
  "method": "GET",
}

var regione = 5;
var id = regione;
    console.log(id);

$.ajax(settings).done(function (jcontent){
    
    console.log(jcontent);
    console.log(jcontent.regioni[id].province.length);
    console.log(jcontent.regioni[id].province);
 document.getElementById("remove").remove();
 
for (var i = 0; i < jcontent.regioni[id].province.length; i++) {
    console.log(i);
    console.log(jcontent.regioni[i].nome);

var output = document.getElementById('province');
output.innerHTML += '<option value="' + jcontent.regioni[id].province[i] + '">' + jcontent.regioni[id].province[i] + '</option>';

}

});

