var settings = {
  "async": true,
  "crossDomain": true,
  "url": "/data/italia.json",
  "method": "GET",
}

$.ajax(settings).done(function (jcontent){
    
    console.log(jcontent);
    console.log(jcontent.regioni.length);
    console.log(jcontent.regioni);
 document.getElementById("remove").remove();
 
for (var i = 0; i < jcontent.regioni.length; i++) {
    console.log(i);
    console.log(jcontent.regioni[i].nome);

var output = document.getElementById('regioni');
output.innerHTML += '<div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12"> <div class="sched-r d-block d-lg-flex"> <div class="text order-1"> <h4 class="text-white">' + jcontent.regioni[i].nome + '</h4> <p class="text-white h3"> <a class="text-white" href="' + jcontent.regioni[i].link + '" >Cerca</a> </p> </div> </div> </div> </div>';

}

});

