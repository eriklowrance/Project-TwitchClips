// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".searchgame").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const game = $("#gamename")
      .val()
      .trim();

    // Send the GET request.
    $.ajax("/api/game/" + game, {
      type: "GET",
    }).then(function(data) {
      console.log("search results");
      // data.data.name

      // Reload the page to get the updated list

      //this will return an array of objects containing all the clips data.data
      console.log(data.data[0].id);
      const clips = data.data;

      for (let i = 1; i < 6; i++) {
        // const broadcaster = gameData[i].broadcaster_name;
        // $(`#${i}`).text(broadcaster);
        // $()
        const clip = clips[i].id;
        $("<iframe>")
          .attr(
            "src",
            `https://clips.twitch.tv/embed?clip=${clip}&parent=${window.location.hostname}`
          )
          .attr("frameborder", "0")
          .attr("allowfullscreen", "true")
          .attr("height", "400")
          .attr("width", "620")
          .appendTo($("#clips"));
      }

      // JQuery or handlebars
    });
  });

  $(".searchstream").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const stream = $("#streamer-search")
      .val()
      .trim();
    console.log(stream);

    // Send the GET request.
    $.ajax("/api/broadcaster/" + stream, {
      type: "GET",
    }).then(function(data) {
      console.log("search results");
      // data.data.name

      // Reload the page to get the updated list

      //this will return an array of objects containing all the clips data.data
      console.log(data.data[0].id);
      const clips = data.data;

      for (let i = 1; i < 6; i++) {
        // const broadcaster = gameData[i].broadcaster_name;
        // $(`#${i}`).text(broadcaster);
        // $()
        const clip = clips[i].id;
        $("<iframe>")
          .attr(
            "src",
            `https://clips.twitch.tv/embed?clip=${clip}&parent=${window.location.hostname}`
          )
          .attr("frameborder", "0")
          .attr("allowfullscreen", "true")
          .attr("height", "400")
          .attr("width", "620")
          .appendTo($("#clips"));

        $("<button>")
          .text("add")
          .attr("class", "addbtn")
          .attr("data-clip", clip)
          .attr("data-gameId", clips[i].game_id)
          .attr("data-streamer", clips[i].broadcaster_name)
          .appendTo($("#clips"));
      }

      $(".addbtn").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
  
        console.log("button");
  
        // Send the POST request.
        $.ajax("/api/videos", {
          type: "POST",
          data: [
            {
              video: $(this).attr("data-clip"),
              gameId: $(this).attr("data-gameId"),
              streamerName: $(this).attr("data-streamer"),
            },
          ],
        }).then(function() {
          console.log("Added a new video.");
  
          //Render
  
          // Reload the page to get the updated list
          location.reload();
        });
      });
      // JQuery or handlebars
    });
  });

  //   $(".addbtn").on("click", function(event) {
  //     // Make sure to preventDefault on a submit event.
  //     event.preventDefault();

  // console.log("button")

  //     // Send the POST request.
  //     $.ajax("/api/videos", {
  //       type: "POST",
  //       data: [
  //         {
  //           video,
  //           gameName,
  //           streamerName,
  //         },
  //       ],
  //     }).then(function() {
  //       console.log("Added a new video.");

  //       //Render

  //       // Reload the page to get the updated list
  //       location.reload();
  //     });
  //   });

  $(".deletebtn").on("click", function(e) {
    e.preventDefault();
    const id = $(this).attr("data-id");
    $.ajax({
      url: "/api/cats/" + id,
      method: "DELETE",
    }).then(function() {
      location.reload();
    });
  });

  // $(".change-sleep").on("click", function (event) {
  //     var id = $(this).data("id");
  //     var newSleep = $(this).data("newsleep");

  //     var newSleepState = {
  //       sleepy: newSleep,
  //     };

  //     // Send the PUT request.
  //     $.ajax("/api/cats/" + id, {
  //       type: "PUT",
  //       data: newSleepState,
  //     }).then(function () {
  //       console.log("changed sleep to", newSleep);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     });
  //   });
});

function renderResult(name) {}
