//require("dotenv").config();

var axios = require("axios");

//var keys = require("./keys.js");

var inputString = process.argv;          

var which = inputString[2];  
                             
var specific = inputString[3];
var bandQueryURL = "https://rest.bandsintown.com/artists/" + specific + "/events?app_id=codingbootcamp";
console.log(bandQueryURL);

console.log(which)

if (which === 'concert-this') {
  axios.get(bandQueryURL).then(
      function(response) {
         // console.log(response.data);
       let result = [];
       response.data.forEach(res => {
           let venue = res.venue;
           let datetime = res.datetime;
           let isTicketAvail = res.offers[0].status;
           result.push({
               venue : venue,
               datetime : datetime,
               isTicketAvail : isTicketAvail
           })
       });
       console.log(result);
      }
    );
} else if (which === "spotify-this-song") {
  

}