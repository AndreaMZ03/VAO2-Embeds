module.exports = {
  Admins: ["158349411016114176", "236991468357550080"], // Admins of the bot, I don't know what this do. -Darren.
  ExpressServer: true, // If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "?", // Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "aún no", // Support Server Link
  Token: process.env.Token || "MTA5OTQ1NTk3MzkwODgyODE5MA.GfJYYN._wnhAW0cK60BVdM0xxiG3dNwAfVluW7oBiApsg", // Discord Bot Token
  ClientID: process.env.Discord_ClientID || "1099455973908828190", // Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "m0D5EH5oY1ftiqeh-voiZMMPnapc-xjb", // Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], // Discord OAuth2 Scopes
  ServerDeafen: true, // If you want bot to stay deafened
  DefaultVolume: 50, // Sets the default volume of the bot, You can change this number anywhere from 1 to 9007199254740991 (JS Integer limit. If you do set it to that, you're a monster.)
  CallbackURL: "/api/callback", // Discord API Callback url. Do not touch it if you don't know what you are doing. All you need to change for website to work is on line 20.
  "24/7": false, // Make the bot stays in VC 24/7 (when you reboot the bot will **not** automatically rejoin.)
  CookieSecret: "viaje", // A cookie for you, cookie for me. make sure you change this value!
  IconURL:
    "https://i.imgur.com/oR9poa9.png", // URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "#EAE368", // Color of most embeds | Custom Hex value are supported. I.e: "#36393F"
  Permissions: 2205281600, // Bot Inviting Permissions
  Website: process.env.Website || "https://servers.redm.gg/servers/detail/po9kky", // Website where it is hosted at includes http or https || Use "0.0.0.0" if you using Heroku || Do not include /api/callback. Just the website url. I.e. "https://foo.bar"
  // If you get invalid oauth, make sure on the discord developer page you set the oauth url to something like: https://example.com/api/callback.

  Presence: {
    status: "dnd", // You can show online, idle, and dnd
    name: "Viaje al Oeste | RedM", // The message shown
    type: "WATCHING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  // You need a lavalink server for this bot to work!!!!
  // Lavalink server; public lavalink -> https://lavalink-list.darrennathanael.com/; create one yourself -> https://darrennathanael.com/post/how-to-lavalink
  Lavalink: {
    id: "Main", //- Used for indentifier. You can set this to whatever you want.
    host: "narco.buses.rocks", //- The host name or IP of the lavalink server.
    port: 2269, // The port that lavalink is listening to. This must be a number!
    pass: "glasshost1984", //- The password of the lavalink server.
    secure: false, // Set this to true if the lavalink uses SSL. if not set it to false.
    retryAmount: 200, //- The amount of times to retry connecting to the node if connection got dropped.
    retryDelay: 40, //- Delay between reconnect attempts if connection is lost.
  },
  // Spotify Integration, allows you to enter a spotify link.
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "6022186cfa2c470bab967c8339c7870f", // Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "32aa50d9ef394501acb51fd41a1b9342", // Spotify Client Secret
  },
};
