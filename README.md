cricscore
=========


By defualt which theme to show ?

Picks the width of


http://ads.cricbuzz.com/adserver/apis/schedule_feeds/ipl2013.php

function getCurrentMatch () {

	for(var i=0; i< document.querySelectorAll('cmatch[url]').length; i++){

	if(document.querySelectorAll('cmatch[url]')[i].getAttribute('url') === 'NONE'){
                console.log(document.querySelectorAll('cmatch[url]')[i-1].getAttribute('url'));
		return;
	}
}
}

http://live.cricbuzz.com/cbz_pub/fetch?id=11914
http://live.cricbuzz.com/livecricketscore/2013/2013_T20_LEAGUE/MUM_CHN_MAY05/commentary-push.json?1367752528980


1367752968541
http://live.cricbuzz.com/livecricketscore/2013/2013_T20_LEAGUE/MUM_CHN_MAY05/commentary-push.json?1367752968541


	/* (function() {
  var flickerAPI = "http://live.cricbuzz.com/livecricketscore/2013/2013_T20_LEAGUE/MUM_CHN_MAY05/commentary-push.json?" + (new Date()).getTime() + "?callback=?";
  $.getJSON( flickerAPI,
    function(data) {
    console.log("Data recieved succesfully"+ data);

    //var score = jQuery.parseJSON(data);
    //console.log("score is -" + score[score.length-2].batteamdesc);
    //console.log("score is -" + console.dir(data));
    //});
	  }
  );
  //.always(function(data) {
    //console.log("Data recieved succesfully"+ data);

    //var score = jQuery.parseJSON(data);
    //console.log("score is -" + score[score.length-2].batteamdesc);
    //console.log("score is -" + console.dir(data));
    //});
	  })(); */


 ///(function($) {
//var url = "http://live.cricbuzz.com/livecricketscore/2013/2013_T20_LEAGUE/MUM_CHN_MAY05/commentary-push.json?" + (new Date()).getTime() + "&callback=localJsonpCallback";

//$.ajax({
  // type: 'GET',
    //url: url,
	//jsonpCallback: "localJsonpCallback",
	jsonp: false,
//});

//function localJsonpCallback (data){
	//console.log(data);
//};
//})(jQuery);
//});
/*var myCallback = function(data) {
  alert(data);
};

$.ajax({
  url: "http://live.cricbuzz.com/livecricketscore/2013/2013_T20_LEAGUE/MUM_CHN_MAY05/commentary-push.json?1367752968541&jsonpCallback=?",
  type: 'GET',
  dataType: 'jsonp',
  jsonp: 'callback',
  jsonpCallback: myCallback
});*

cricscore
