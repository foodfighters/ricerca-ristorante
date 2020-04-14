var settings = {
    "dataType": "json",
  "async": true,
  "crossDomain": true,
  "url": "https://raw.githubusercontent.com/foodmule/contributors/master/.all-contributorsrc",
  "method": "GET",
}

$.ajax(settings).done(function (jcontent){
    
    console.log(jcontent);
  console.log(jcontent.contributors.length);
  console.log(jcontent.contributors);
 document.getElementById("remove").remove();
 
for (var i = 0; i < jcontent.contributors.length; i++) {
    console.log(i);
    console.log(jcontent.contributors[i].name);

var output = document.getElementById('contributors');
output.innerHTML += '<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12"> <div class="sched-r d-block d-lg-flex text-center"> <a class="text-white" href="' + jcontent.contributors[i].profile + '" > <div class="text order-1"> <img class="rounded-img" height="100px" src="' + jcontent.contributors[i].avatar_url + '"></img> <h4 class="text-white">' + jcontent.contributors[i].name + '</h4> <p class="text-white h3">Ha contribuito a : ' + jcontent.contributors[i].contributions + '</p> </div> </a> </div> </div> </div>';

}

});
