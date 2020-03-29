

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "/data/demo.json",
  "method": "GET",
}



$.ajax(settings).done(function (jcontent){
    
   // console.log(jcontent);
    console.log(jcontent.ristoranti[0].nome);
    console.log(jcontent.ristoranti.length);
    document.getElementById("remove").remove();


for (var i = 0; i < jcontent.ristoranti.length; i++) {
    
  var comuniz = ""; 
for (var k = 0; k < jcontent.ristoranti[i].comune.length; k++) {
    comuniz +=' id="' + jcontent.ristoranti[i].comune[k] + '"';

}

    var comunix = "";
for (var x = 0; x < jcontent.ristoranti[i].comune.length; x++) {
    comunix += jcontent.ristoranti[i].comune[x] + ', ';
}
    

var output = document.getElementById('ristoranti');
output.innerHTML += '<div class="col-xl-6 col-lg-4 col-md-6 col-sm-6 col-xs-12" id="' + jcontent.ristoranti[i].tag + '"> <div class="sched d-block d-lg-flex"> <div class="bg-image order-1" style="background-image: url(\'../img/dishes_4.jpg\');" data-aos="fade"></div> <div class="text order-2"> <h3>' + jcontent.ristoranti[i].nome + ' </h3> <p>' + jcontent.ristoranti[i].text + '</p> <p class="text-primary h3"> <a class="" href="#popup-' + jcontent.ristoranti[i].code + '" >Info</a> </p> </div> </div> </div>';

var overlay = document.getElementById('overlay');
overlay.innerHTML += ' <div class="overlay" id="popup-' + jcontent.ristoranti[i].code + '"> <div class="sched popup d-block d-lg-flex"><div class="container" style="margin-top: 10%; margin-bottom: 10%; "> <div class="close"><a href="#close"><i class="fa fa-times"></i></a></div> <h4 class="text-primary">#' + jcontent.ristoranti[i].code + '</h4> <h2>' + jcontent.ristoranti[i].nome + '</h2> <p>' + jcontent.ristoranti[i].text + '</p> <p class="text-primary h4"><a href="' + jcontent.ristoranti[i].link_ordinazione + '">Link Ordinazione</a></p> <p class="text-primary h4"><a href="' + jcontent.ristoranti[i].link_facebook + '">Link Facebook <i class="fa fa-facebook"></i> </a></p> <h3>Telefono :&nbsp; </h3> <p>' + jcontent.ristoranti[i].numero + '</p> <h3>Mail :&nbsp;</h3> <a href="mailto:' + jcontent.ristoranti[i].email + '">' + jcontent.ristoranti[i].email + '</a> <h3>Consegna a:</h3> <p class="text-primary h4">' +  comunix  + '</p> </div> </div> </div> ';

  }      
        
});



function loadcomuni(v)
 {
     
     
     
     var provincia = document.getElementById('comuni');
   var cm = "";
     cm = provincia.options[provincia.selectedIndex].value;
     
     
     
     
     $.ajax(settings).done(function (jcontent){
    
   // console.log(jcontent);
    console.log(jcontent.ristoranti[0].nome);
    console.log(jcontent.ristoranti.length);
      
         $("#ristoranti").empty();


    for (var i = 0; i < jcontent.ristoranti.length; i++) {

         
    var comunix = "";
for (var x = 0; x < jcontent.ristoranti[i].comune.length; x++) {
    comunix += jcontent.ristoranti[i].comune[x] + ', ';
}
    
         if (comunix.includes(cm)){
             
         
var output = document.getElementById('ristoranti');
output.innerHTML += '<div class="col-xl-6 col-lg-4 col-md-6 col-sm-6 col-xs-12" id="' + jcontent.ristoranti[i].tag + '"> <div class="sched d-block d-lg-flex"> <div class="bg-image order-1" style="background-image: url(\'../img/dishes_4.jpg\');" data-aos="fade"></div> <div class="text order-2"> <h3>' + jcontent.ristoranti[i].nome + ' </h3> <p>' + jcontent.ristoranti[i].text + '</p> <p class="text-primary h3"> <a class="" href="#popup-' + jcontent.ristoranti[i].code + '" >Info</a> </p> </div> </div> </div>';

var overlay = document.getElementById('overlay');
overlay.innerHTML += ' <div class="overlay" id="popup-' + jcontent.ristoranti[i].code + '"> <div class="sched popup d-block d-lg-flex"><div class="container" style="margin-top: 10%; margin-bottom: 10%; "> <div class="close"><a href="#close"><i class="fa fa-times"></i></a></div> <h4 class="text-primary">#' + jcontent.ristoranti[i].code + '</h4> <h2>' + jcontent.ristoranti[i].nome + '</h2> <p>' + jcontent.ristoranti[i].text + '</p> <p class="text-primary h4"><a href="' + jcontent.ristoranti[i].link_ordinazione + '">Link Ordinazione</a></p> <p class="text-primary h4"><a href="' + jcontent.ristoranti[i].link_facebook + '">Link Facebook <i class="fa fa-facebook"></i> </a></p> <h3>Telefono :&nbsp; </h3> <p>' + jcontent.ristoranti[i].numero + '</p> <h3>Mail :&nbsp;</h3> <a href="mailto:' + jcontent.ristoranti[i].email + '">' + jcontent.ristoranti[i].email + '</a> <h3>Consegna a:</h3> <p class="text-primary h4">' +  comunix  + '</p> </div> </div> </div> ';
             
  } else if (cm == "all")  {
      
      var output = document.getElementById('ristoranti');
output.innerHTML += '<div class="col-xl-6 col-lg-4 col-md-6 col-sm-6 col-xs-12" id="' + jcontent.ristoranti[i].tag + '"> <div class="sched d-block d-lg-flex"> <div class="bg-image order-1" style="background-image: url(\'../img/dishes_4.jpg\');" data-aos="fade"></div> <div class="text order-2"> <h3>' + jcontent.ristoranti[i].nome + ' </h3> <p>' + jcontent.ristoranti[i].text + '</p> <p class="text-primary h3"> <a class="" href="#popup-' + jcontent.ristoranti[i].code + '" >Info</a> </p> </div> </div> </div>';

var overlay = document.getElementById('overlay');
overlay.innerHTML += ' <div class="overlay" id="popup-' + jcontent.ristoranti[i].code + '"> <div class="sched popup d-block d-lg-flex"><div class="container" style="margin-top: 10%; margin-bottom: 10%; "> <div class="close"><a href="#close"><i class="fa fa-times"></i></a></div> <h4 class="text-primary">#' + jcontent.ristoranti[i].code + '</h4> <h2>' + jcontent.ristoranti[i].nome + '</h2> <p>' + jcontent.ristoranti[i].text + '</p> <p class="text-primary h4"><a href="' + jcontent.ristoranti[i].link_ordinazione + '">Link Ordinazione</a></p> <p class="text-primary h4"><a href="' + jcontent.ristoranti[i].link_facebook + '">Link Facebook <i class="fa fa-facebook"></i> </a></p> <h3>Telefono :&nbsp; </h3> <p>' + jcontent.ristoranti[i].numero + '</p> <h3>Mail :&nbsp;</h3> <a href="mailto:' + jcontent.ristoranti[i].email + '">' + jcontent.ristoranti[i].email + '</a> <h3>Consegna a:</h3> <p class="text-primary h4">' +  comunix  + '</p> </div> </div> </div> ';
  }
        
    }
          
             
        
});

 }

var load = document.getElementById("comuni").value;

load.addEventListener("all", loadcomuni);

// document.getElementById("comuni").onselect = function() {loadcomuni()};

function loadtag(v)
 {
     var categoria = document.getElementById('categoria').value;
   var tag = "";
     tag +='"#' + categoria + '"';
    console.log(tag);
     
$(tag).remove();

 }
