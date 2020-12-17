
const axios = require("axios").default;
const clientid = process.env.CLIENT_ID;
const clientsecret = process.env.CLIENT_SECRET;
const token = process.env.TWITCH_TOKEN;
const tokenurl = `https://id.twitch.tv/oauth2/token?client_id=${clientid}&client_secret=${clientsecret}&grant_type=client_credentials`;
// axios.defaults.headers.common["Authorization"] = "Bearer " + token;
const gamesEndpoint = "https://api.twitch.tv/helix/games?name=fortnite";
async function init() {
  //   const { tokendata } = await axios.post(tokenurl);
  //   const accessToken = tokendata.access_token;
  const { data } = await axios.get(gamesEndpoint, {
    headers: {
      Authorization: "Bearer " + token,
      "Client-Id": clientid,
    },
  });
  console.log(data);
}
app.get("/api/game/:game", async function (req, res) {
  const { data } = await axios.get(gamesEndpoint, {
    headers: {
      Authorization: "Bearer " + token,
      "Client-Id": clientid,
    },
  });
  res.json(data);
});
init();


// function getClipsbyName(gameName) {

//     //URL used to query the database
//     const idQuery = `https://api.twitch.tv/helix/games?name=${gameName}`

//     // Create an AJAX call to retrieve game name from id
//     $.ajax({
//         method: "GET",
//         url: idQuery,
//     }).then(function (result) {

//         const { gameID } = result.data;

//         const clipsQuery = `https://api.twitch.tv/helix/clips?game_id=${gameID}`

//         // Create an AJAX call to retrieve game name from id
//         $.ajax({
//             method: "GET",
//             url: clipsQuery,
//         }).then(function (result) {
//             //get clips data
//         });

//     });
// }
// function getClipsbyBroad(broadName) {

//     //URL used to query the database
//     const idQuery = `https://api.twitch.tv/helix/users?id=${broadName}`

//     // Create an AJAX call to retrieve game name from id
//     $.ajax({
//         method: "GET",
//         url: idQuery,
//     }).then(function (result) {

//         const { gameID } = result.data;

//         const clipsQuery = `https://api.twitch.tv/helix/users?id=${gameID}`

//         // Create an AJAX call to retrieve game name from id
//         $.ajax({
//             method: "GET",
//             url: clipsQuery,
//         }).then(function (result) {
//             //get clips data
//         });

//     });
// }


// getClipsbyBroad();