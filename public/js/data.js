// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    $(".searchgame").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const game = $("#gamename").val().trim();

        // Send the GET request.
        $.ajax("/api/game/" + game, {
            type: "GET"
        }).then(function (data) {
            console.log("search results");
            // data.data.name
            
            // Reload the page to get the updated list

            //this will return an array of objects containing all the clips data.data
            console.log(data.data);
            gameData = data.data

            for (let i = 1; i < 6; i++) {
                const broadcaster = gameData[i].broadcaster_name;
                $(`#${i}`).text(broadcaster);
            }

            // JQuery or handlebars 
        });
    });

    $(".addbtn").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // Send the POST request.
        $.ajax("/api/videos", {
            type: "POST",
            data: [{
                video,
                gameName,
                streamerName
            }
            ],
        }).then(function () {
            console.log("Added a new video.");

            //Render

            // Reload the page to get the updated list
            location.reload();
        });
    });

    $(".deletebtn").on("click", function (e) {
        e.preventDefault();
        const id = $(this).attr("data-id");
        $.ajax({
            url: "/api/cats/" + id,
            method: "DELETE",
        }).then(function () {
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



function renderResult(name) {

}