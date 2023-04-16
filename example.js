const {getEarnings} = require("./index");

let username = process.argv[2];
let password = process.argv[3];

async function main() {
    console.log(await getEarnings(username, password));
}

main();