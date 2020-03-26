

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
    console.log(i);
    
    var k =i+1;
    function IsNotUneven(numero)
{
    if (isNaN(numero) == false)
    {
        return (numero %2 == 1 ?  true : false);
    }
    else
    {
        return null;
    }
}
    
    function IsNotUneven2(numero)
{
    if (isNaN(numero) == false)
    {
        return (numero %3 == 1 ?  true : false);
    }
    else
    {
        return null;
    }
}
    function IsNotUneven3(numero)
{
    if (isNaN(numero) == false)
    {
        return (numero %4 == 1 ?  true : false);
    }
    else
    {
        return null;
    }
}
      
    
    if (IsNotUneven(k) == true)
{
    var order_1 = 2;
    var order_2 = 1;
}
else if (IsNotUneven2(k) == true)
{
    order_1 = 1;
    order_2 = 2;
}
else if (IsNotUneven3(k) == true)
{
    order_1 = 2;
    order_2 = 1;
}
else
{
    order_1 = 2;
    order_2 = 1;
}
    
    console.log(order_1);
    console.log(order_2);
    

var output = document.getElementById('ristoranti');
output.innerHTML += '<div class="col-xl-6 col-lg-4 col-md-6 col-sm-6 col-xs-12" id="' + jcontent.ristoranti[i].code + '"> <div class="sched d-block d-lg-flex"> <div class="bg-image order-' + order_1 + '" style="background-image: url(\'../img/dishes_4.jpg\');" data-aos="fade"></div> <div class="text order-' + order_1 + '"> <h3>' + jcontent.ristoranti[i].nome + ' </h3> <p>' + jcontent.ristoranti[i].text + '</p> <p class="text-primary h3"> <a class="" href="#popup-' + jcontent.ristoranti[i].code + '" >Info</a> </p> </div> </div> </div>';

var overlay = document.getElementById('overlay');
overlay.innerHTML += '<div id="popup-' + jcontent.ristoranti[i].code + '" class="overlay"> <img class="popup img" src="' + jcontent.ristoranti[i].image + '"></img> </div>';

  }      
        
});


             

