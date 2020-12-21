
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

// data.data[0].broadcaster_name
// data.data[0].embed_url
// data.data.name

// data: [
//   {
//     id: 'TrustworthyBreakableJuiceCorgiDerp',
//     url: 'https://clips.twitch.tv/TrustworthyBreakableJuiceCorgiDerp',
//     embed_url: 'https://clips.twitch.tv/embed?clip=TrustworthyBreakableJuiceCorgiDerp',
//     broadcaster_id: '110690086',
//     broadcaster_name: 'Myth',
//     creator_id: '99256167',
//     creator_name: 'M0oosik',
//     video_id: '',
//     game_id: '33214',
//     language: 'en',
//     title: 'Solving food problems',
//     view_count: 1851555,
//     created_at: '2018-03-26T17:20:15Z',
//     thumbnail_url: 'https://clips-media-assets2.twitch.tv/214578507-preview-480x272.jpg'
//   },