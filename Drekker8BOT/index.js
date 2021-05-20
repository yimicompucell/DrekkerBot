const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

const { Client, Collection, Guild} = require("discord.js");
const keepAlive = require('./server')

let prefix = 'D/' //Esto define un prefix

client.on('message', (message) => { //Abrimos el evento

if (!message.content.startsWith(prefix))
if (message.author.bot) return;

let usuario = message.mentions.members.first() || message.member; //Definimos usuario
const args = message.content.slice(prefix.length).trim().split(/ +/g); //definimos los argumentos
const command = args.shift().toLowerCase(); //definimos el comando

if(command === "pan"){ // Esto abre o inicia el comando

    message.channel.send('pan con queso a 5 pesos') //Respuesta del bot 
} //Cierra el comando

if(command === 'play'){
    const cancion = args.join(" ")
    if(!cancion) return message.channel.send("Debes escribir una canción")

    if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz")

    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send('¡Debes estar en el mismo canal de bot que yo!')

    client.distube.play(message, cancion)
}

});


//////////////////////////////////////////////////////////////////

const Distube = require("distube");
client.distube = new Distube(client, {
    emitNewSongOnly: true,
    searchSongs: false,
    leaveOnStop: true,
    leaveOnFinish: true,
    leaveOnEmpty: true,
});

client.distube.on("addList", (playList)=> {
    message.channel.send(`Playlist añadida: **${playlist.name}** - **${playlist.songs.length}** canciones`)
})

client.distube.on("addSong", (Song) => {
    message.channel.send(`Cancion Añadida: **${song.name}** - **${song.formattedDuration}**`)
})

client.distube.on("playSong", (playsong) => {
    message.channel.send(`Reproduciendo Ahora: **${playsong.name}** - **${playsong.formattedDuration}**`)
})

client.distube.on("playList", (playList) => {
    message.channel.send(`Reproduciendo Playlist: **${playlist.name}**`)
})

client.distube.on("error", (error) => {
    console.log(error)
})

client.login('ODQ0NDc2Mzk2NTExODIxODI0.YKS97g.6S1ej1vdKznyCCtoFXCq-l1x1OQ');
