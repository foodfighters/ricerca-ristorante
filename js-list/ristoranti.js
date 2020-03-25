

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
      
    
    if (IsNotUneven(i) == true)
{
    var order_1 = 2;
    var order_2 = 1;
}
else
{
    order_1 = 1;
    order_2 = 2;
}
    
    console.log(order_1);
    console.log(order_2);
    

var output = document.getElementById('ristoranti');
output.innerHTML += '<div class="col-xl-6 col-lg-4 col-md-6 col-sm-6 col-xs-12" id="' + jcontent.ristoranti[i].code + '"> <div class="sched d-block d-lg-flex"> <div class="bg-image order-' + order_1 + '" style="background-image: url(\'../img/dishes_4.jpg\');" data-aos="fade"></div> <div class="text order-' + order_2 + '"> <h3>' + jcontent.ristoranti[i].nome + ' </h3> <p>' + jcontent.ristoranti[i].text + '</p> <p class="text-primary h3"> <a class="" href="' + jcontent.ristoranti[i].link + '" >Info</a> </p> </div> </div> </div';



  }      
        
});


             

