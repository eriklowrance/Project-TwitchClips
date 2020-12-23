// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  //event listener for search by game button
  $(".searchgame").on("click", function(event) {
    // prevent refresh on click
    event.preventDefault();

    //store user input
    const game = $("#gamename")
      .val()
      .trim();

    // Send the GET request to access game data
    $.ajax("/api/game/" + game, {
      type: "GET",
    }).then(function(data) {
      console.log("search results");

      //console log test: returns id of first clip
      console.log(data);

      //this will return an array of objects containing all the clips data.data
      const clips = data.data;

      //for loop used to generate 5 clips to the page
      for (let i = 1; i < 6; i++) {

        //for each clip, create a new frame that contains the embedded video and an add button.
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
          .text("Save for later!")
          .attr("class", "addbtn btn btn-primary")
          .attr("data-clip", clip)
          .attr("data-gameId", clips[i].game_id)
          .attr("data-streamer", clips[i].broadcaster_name)

          .appendTo($("#clips"));
      }

      // Event listener for add button
      $(".addbtn").on("click", function(event) {
        // prevents refresh on click
        event.preventDefault();
  
        // Send the POST request to save selected clip to database 
        $.ajax("/api/videos", {
          type: "POST",
          data:
            {
              video: $(this).attr("data-clip"),
              gameId: $(this).attr("data-gameId"),
              streamerName: $(this).attr("data-streamer"),
            },
        }).then(function() {
          $()
        });
      });
    });
  });

  //Event listener for search by streamer
  $(".searchstream").on("click", function(event) {

    // prevent refresh on click
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

      //this will return an array of objects containing all the clips data.data
      const clips = data.data;

      for (let i = 1; i < 6; i++) {
        
        //for each clip, create a new frame that contains the embedded video and an add button.
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
          .text("Save for later!")
          .attr("class", "addbtn btn btn-primary")
          .attr("data-clip", clip)
          .attr("data-gameId", clips[i].game_id)
          .attr("data-streamer", clips[i].broadcaster_name)
          .appendTo($("#clips"));
      }

      $(".addbtn").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
  
        console.log("button");
  
        // Send the POST request to save selected clip to database 
        $.ajax("/api/videos", {
          type: "POST",
          data:
            {
              video: $(this).attr("data-clip"),
              gameId: $(this).attr("data-gameId"),
              streamerName: $(this).attr("data-streamer"),
            },
        }).then(function() {
          console.log("Added a new clip by streamer name.");
        });
      });
      // JQuery or handlebars
    });
  });


  //delete button attached to each saved clip isnide of user's page. **TO BE EDITED**
  $(".deletebtn").on("click", function(e) {
    e.preventDefault();
    const id = $(this).attr("data-clip");
    console.log(id);
    $.ajax({
      url: "/api/videos/" + id,
      method: "DELETE",
    }).then(function() {
      location.reload();
    });
  });

  $(".loginbtn").on("click", function(e){
    e.preventDefault();
    window.location.replace("/login");
    // $.ajax({
    //   url: "/login",
    //   method: "GET",
    // }).then(function(){
    //   window.location.replace("login");
    // })
  })

  $(".logoutbtn").on("click", function() {
    $.ajax({
      url: "/logout",
      method: "GET"
    }).then(function () {
      console.log("Logged out!")
      location.href= "/"
    })
  })

  // function getVids(){
  //   $.ajax({
  //     url: "/api/user_data/",
  //     method: "GET",
  //   }).then(function(data) {
      
  //     memberId = data.id;
  //     console.log(memberId);

  //     $.ajax({
  //       url: "/api/videos/" + memberId,
  //       method: "GET"
  //     }).then(function(results) {
        
  //       console.log(results);
  //     });
  //   });
  // }

  // getVids();
});