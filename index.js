//   ___ ___ ___ ___   _   _____   _______ ___ 
//  / __|_ _| _ ) _ ) /_\ | _ ) \ / /_   _| __|
// | (_ || || _ \ _ \/ _ \| _ \\ V /  | | | _|  
//  \___|___|___/___/_/ \_\___/ |_|   |_| |___|
//  By Evan Gassman

let settingsOBJ = {show: true};

const NightTerror = require('nightterror');
const NightTerrorClient = new NightTerror(settingsOBJ);

exports.getEarnings = async function(username, password) {
    return new Promise(resolve => {
        NightTerrorClient
        .goto("https://esp.gettyimages.com/sign-in?returnUrl=/ccw")
        .wait(10000)
        .type("#new_session_username", username)
        .wait((Math.floor(Math.random() * 3) + 1)* 1000)
        .type("#new_session_password", password)
        .wait((Math.floor(Math.random() * 3) + 1)* 1000)
        .click("#sign_in")
        .wait((Math.floor(Math.random() * 7) + 3)* 1000)
        .goto("https://accountmanagement.gettyimages.com/Reports/Statement")
        .wait((Math.floor(Math.random() * 7) + 3)* 1000)
        NightTerrorClient.xpath("//span[@id='carry-fwd-min-hdr']", (text) => {
           return text.textContent;
          })
          .then((text) => {
            value = text[0];
            resolve(value);
          });     
    });
}