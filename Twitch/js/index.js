$(document).ready(function(){
  

var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

for(i=0; i< channels.length; i++) {
  $.getJSON("https://wind-bow.gomix.me/twitch-api/channels/" +channels[i], function(data){
           console.log(data);
            })
  }
});