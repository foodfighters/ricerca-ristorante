var settings = {
  "async": true,
  "crossDomain": true,
  "url": "../data/categorie-1.json",
  "method": "GET",
}

$.ajax(settings).done(function (jcontent){
    
    console.log(jcontent);
    console.log(jcontent.categorie.length);
    console.log(jcontent.categorie);
 document.getElementById("remove").remove();
 
for (var i = 0; i < jcontent.categorie.length; i++) {
    console.log(i);
    console.log(jcontent.categorie[i].nome);

var output = document.getElementById('categorie');
output.innerHTML += '<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12"> <div class="sched-r d-block d-lg-flex"> <a class="text-white" href="' + jcontent.categorie[i].link + '" > <div class="text order-1"> <h4 class="text-white">' + jcontent.categorie[i].nome + '</h4> <p class="text-white h3">Cerca</p> </div> </a> </div> </div> </div>';

}

});
