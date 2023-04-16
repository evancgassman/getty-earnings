# getty-earnings
A simple NodeJS library that allows you to get the amount of contributor earnings from Vecteezy.<br>
### PLEASE NOTE: `This is not officially endorsed by Getty Images, or Getty Images Holdings, Inc. This is solely for educational and entertainment purposes. In addition, by using this software you agree that I will not be held responsible for your actions. This is not an official API, which also means it is slower than normal. Unfortunately, it could potentially take up to 60 seconds to get a valid response.`
❗❗❗ This package only contains ```.getEarnings(username, password)``` which is dervied from <a href="">this parent package</a>. 

## Integrating with NodeJS
```js
 //example.js
 
 const {getEarnings} = require("./index");
 async function main() {
   console.log(await getEarnings("username", "password"));
 }
 main();
```

## Using with PHP
```php
$earnings = shell_exec("node example 'username' 'password'");
//Ofcourse, you need to be in the proper directory. 
```

❤️ If you require any assistance, feel free to join <a href="https://discord.gg/y6UywbeB3U">my support Discord!</a>!<br>
💙 If you would love to support me as an independent developer and have the means necessary, check out https://ko-fi.com/evangassman! Anything is appreciated! 