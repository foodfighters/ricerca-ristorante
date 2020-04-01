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
    
    
// cambia 0 con id per faree tutte le regioni
    
    console.log(jcontent);
    console.log(jcontent.regioni[0].province.length);
    console.log(jcontent.regioni[0].province);
 
for (var i = 0; i < jcontent.regioni[0].province.length; i++) {
    console.log(i);
    // cambia 0 con i per faree tutte le regioni
    console.log(jcontent.regioni[0].nome);

var output = document.getElementById('province');
output.innerHTML += '<option value="' + i + '">' + jcontent.regioni[0].province[i] + '</option>';

}

});

