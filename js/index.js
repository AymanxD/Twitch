$(document).ready(function(){


var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","brunofin", "comster404"];

      var twitch = function() {
        $.getJSON("https://api.twitch.tv/kraken/streams/" + channels[i] + "?client_id=vkt06djc7pfa24zsgs0dht9lfd5p3x", function(datas){
          if (datas.stream === null) {
             offline(datas);
          }
         else if(datas.stream !== null) {
           online(datas);
            }
          })

        var online =  function(datas) {
          $("#Online").append("<a class='links' target='_blank' href="+
            datas.stream.channel.url + "><div class='on row'><img class='img col-1-3' src=" + datas.stream.channel.logo + ">" +
            "<h4 class='name col-1-3'>" + datas.stream.channel.name + "</h4></br></br><p class='status'>" + datas.stream.channel.status + "</p></div></a>");
          }

        var offline = function(datas) {
          $.ajax({
                url:datas._links.channel  + "?client_id=vkt06djc7pfa24zsgs0dht9lfd5p3x",
                dataType:"jsonp",
                type:"GET",
                success:function(datac){
          if (datac.display_name === undefined){
            $("#Deleted").append("<div class='deleted'><h4>" + datac.message + ".</h4></div>");
          }
          else {
            $("#Offline").append("<a class='links' target='_blank' href="+
              datac.url + "><div class='off row'><img class='img col-1-3' src=" + datac.logo + ">" +
              "<h4 class='name col-1-3'>" + datac.display_name + "</h4></div></a>");
            }
          }
        })
      }

      }
    for(i=0; i< channels.length; i++) {
      twitch();
    }

    $(".All").click(function() {
      $("#Online").show(500);
      $("#Offline").show(500);
      $("#Deleted").show(500);
    })

    $(".Online").click(function() {
      $("#Online").show(500);
      $("#Offline").hide(500);
      $("#Deleted").hide(500);
    })

    $(".Offline").click(function() {
      $("#Online").hide(500);
      $("#Offline").show(500);
      $("#Deleted").hide(500);
    })
});
