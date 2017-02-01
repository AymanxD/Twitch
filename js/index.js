$(document).ready(function(){


var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

      var twitch = function() {
        $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + channels[i], function(datas){
          if (datas.stream !== null) {
            online(datas);
            console.log(datas);
          }
          if (datas.stream === null) {
            offline(datas);
        }
          })

        var online =  function(datas) {
          $("#Online").append("<a class='links' target='_blank' href="+
            datas.stream.channel.url + "><div class='on row'><img class='img col-1-3' src=" + datas.stream.channel.logo + ">" +
            "<h4 class='name col-1-3'>" + datas.stream.channel.name + "</h4></br></br><p class='status'>" + datas.stream.channel.status + "</p></div></a>");
          }

        var offline = function(datas) {
          $.getJSON("https://wind-bow.gomix.me/twitch-api/channels/" + channels[i], function(datac){
            $("#Offline").append("<div>"+datac.display_name+"</div>")
            console.log(datac);
            })
        }
      }
    for(i=0; i< channels.length; i++) {
      twitch();
    }
});

/*
"<a href=" + data.url +"><div class='Info col-1-1'>"+
   "<div class='grid'>" +
      "<img class='images col-2-12' src='" + data.logo + "'>" +
      "<div class='name col-4-12'>"+
       data.display_name +
      "</div>" +
     "<div class='followers col-5-12'>Followers: " + data.followers + "</div>" +
    "</div>" +
    "<div class='grid'>" +
    "<div class='status col-6-12'>" + data.status + "</div>"+
     "<div class='views col-6-12'> Views:" + data.views + "</div>" +
   "</div>" +
"</div>" +
"</a>";
$(".Streamers").html(html); */
