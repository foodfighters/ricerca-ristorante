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
output.innerHTML += '<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12"> <div class="sched-r d-block d-lg-flex"> <a class="text-white" href="' + jcontent.regioni[i].link + '" > <div class="text order-1"> <h4 class="text-white">' + jcontent.regioni[i].nome + '</h4> <p class="text-white h3">Cerca</p> </div> </a> </div> </div> </div>';

}
    
var output = document.getElementById('regioni');
output.innerHTML += '<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12"> <div class="sched-r d-block d-lg-flex"> <a class="text-white typeform-share link" href="https://binco.typeform.com/to/eBtaMu" data-mode="popup" target="_blank" ><div class="text order-1"> <h4 class="text-white">Altre in arrivo ...</h4> <p class="text-white h3">Comunica ristoranti</p> </div> </a> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script></p> </div> </div> </div>';

});
