

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "../data/aziende.json",
  "method": "GET",
}



window.onload = function(){loadcomuni()};


function loadcomuni(cm)
 {
     
     
     
     var provincia = document.getElementById('comuni');
     var cm = "";
     cm = provincia.options[provincia.selectedIndex].value;
     
     if (document.getElementById('province') == "all") {
        console.log("OK") 
     }
     
     
     $.ajax(settings).done(function (jcontent){
    
   // console.log(jcontent);
    console.log(jcontent.aziende[1].nome);
    console.log(jcontent.aziende.length);
      
         $("#aziende").empty();


for (var i = 0; i < jcontent.aziende.length; i++) {

         
        var comunix = "";
        for (var x = 0; x < jcontent.aziende[i].comune.length; x++) {
        comunix += jcontent.aziende[i].comune[x] + ', '; }
    
        var divristorante = '<div class="col-xl-6 col-lg-4 col-md-6 col-sm-6 col-xs-12" id="' + jcontent.aziende[i].tag + '"> <a class="text-white" href="#popup-' + jcontent.aziende[i].code + '" onclick="popuptitle(text);"> <div class="sched-r d-block d-lg-flex"> <div <div class="text order-2"> <h3 class="text-white">' +  jcontent.aziende[i].nome + ' </h3> <p  class="text-white" >' + jcontent.aziende[i].text + '</p> <p class="text-white h3">  </p> </div>  </div> </a> </div>';
             
        var divpopup = ' <div class="overlay" id="popup-' + jcontent.aziende[i].code + '"> <div class="sched popup d-block d-lg-flex"><div class="container" style="margin-top: 10%; margin-bottom: 10%; "> <div class="close"><a href="#close" onclick="popupclose();"><i class="fa fa-times"></i></a></div> <h4 class="text-primary">#' + jcontent.aziende[i].code + '</h4> <h2>' + jcontent.aziende[i].nome + '</h2> <p>' + jcontent.aziende[i].text + '</p> <p class="text-primary h4"><a href="' + jcontent.aziende[i].link_ordinazione + '">Link Ordinazione</a></p> <p class="text-primary h4"><a href="' + jcontent.aziende[i].link_facebook + '">Link Facebook <i class="fa fa-facebook"></i> </a></p> <h3>Telefono :&nbsp; </h3> <p>' + jcontent.aziende[i].numero + '</p> <h3>Mail :&nbsp;</h3> <a href="mailto:' + jcontent.aziende[i].email + '">' + jcontent.aziende[i].email + '</a> <h3>Consegna a:</h3> <p class="text-primary h4">' +  comunix  + '</p> <div id="share"></div> </div> </div> </div> ';  

        
        var output = document.getElementById('aziende');
        
        var overlay = document.getElementById('overlay');
        
        
         if (comunix.includes(cm)){
             
            
             output.innerHTML +=  divristorante;
             overlay.innerHTML += divpopup;
                  
                                    } 
        
            else if (cm == "all")  {
      
                output.innerHTML +=  divristorante;
                overlay.innerHTML += divpopup;  
      
  }    
        
    }
         output.innerHTML += '<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12"> <div class="sched-r d-block d-lg-flex"> <a class="text-white typeform-share link" href="https://binco.typeform.com/to/eBtaMu" data-mode="popup" target="_blank" ><div class="text order-1"> <h4 class="text-white">Altre in arrivo ...</h4> <p class="text-white h3">Comunica aziende agricole</p> </div> </a> <script> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script></p> </div> </div> </div>';
          
             
        
});

 }


function popuptitle(a){
    document.title = "Prova :" + a;
    var share = document.getElementById('share');
    share.innerHTML += '';
}

function popupclose(a){
    document.title = "Food Mule - Ricerca Ristoranti";
}


// document.getElementById("comuni").onselect = function() {loadcomuni()};


