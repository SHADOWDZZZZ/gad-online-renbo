const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$' ; 


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//////////////////////يثبت البوت داخل روم/////////////////////////////////////


client.on('ready', () => {
var x = client.channels.get("604262020761649183");
if (x) x.join();
});



/////////////////////////////////كود حالة البةت/////////////////////////////////




//////////////////////////كود عرض البنق/////////////////////////////////////////
	  

client.on('message', message => {
    if (message.author.id === client.user.id) return;
            if (message.content.startsWith(prefix + "ping")) {
        message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');
    }
});

	  

////////////////////////////////كود لون متغير//////////////////////////////////

	  


client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "Members", // اسم الرتبة
      guildid: "600993072016392203", // اي دي السيرفر
      sec: 5.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  





/////////////////////////////BOT MUSIC//////////////////////////////////////



client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "BOT", // اسم الرتبة
      guildid: "600993072016392203", // اي دي السيرفر
      sec: 5.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	  




 
  client.on('message', msg => {//msg
    if (msg.content === `الالوان`) {
      msg.channel.send({file : "https://cdn.pg.sa/2wIrLKA0eJ.png"})
    }
  });;

  client.on('message', msg => {//msg
    if (msg.content === `colors`) {
      msg.channel.send({file : "https://cdn.pg.sa/2wIrLKA0eJ.png"})
    }
  });;



  client.on('message', msg => {//msg
    if (msg.content === `الوان`) {
      msg.channel.send({file : "https://cdn.pg.sa/2wIrLKA0eJ.png"})
    }
  });;


 
  client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.split(' ')[0] == `لون`){
    const embedd = new Discord.RichEmbed()
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
    .setDescription(`**لا يوجد لون بهذا الأسم ** :x: `)
    .setColor(`ff0000`)
   
    if(!isNaN(args) && args.length > 0)
   
   
    if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
   
   
    var a = message.guild.roles.find("name",`${args}`)
     if(!a)return;
    const embed = new Discord.RichEmbed()
   
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
    .setDescription(`**Done , تم تغير لونك . :white_check_mark: **`)
   
    .setColor(`${a.hexColor}`)
    message.channel.sendEmbed(embed);
    if (!args)return;
    setInterval(function(){})
       let count = 0;
       let ecount = 0;
    for(let x = 1; x < 201; x++){
   
    message.member.removeRole(message.guild.roles.find("name",`${x}`))
   
    }
     message.member.addRole(message.guild.roles.find("name",`${args}`));
   
   
    }
    });



  client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.split(' ')[0] == `color`){
    const embedd = new Discord.RichEmbed()
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
    .setDescription(`**لا يوجد لون بهذا الأسم ** :x: `)
    .setColor(`ff0000`)
   
    if(!isNaN(args) && args.length > 0)
   
   
    if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
   
   
    var a = message.guild.roles.find("name",`${args}`)
     if(!a)return;
    const embed = new Discord.RichEmbed()
   
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
    .setDescription(`**Done , تم تغير لونك . :white_check_mark: **`)
   
    .setColor(`${a.hexColor}`)
    message.channel.sendEmbed(embed);
    if (!args)return;
    setInterval(function(){})
       let count = 0;
       let ecount = 0;
    for(let x = 1; x < 201; x++){
   
    message.member.removeRole(message.guild.roles.find("name",`${x}`))
   
    }
     message.member.addRole(message.guild.roles.find("name",`${args}`));
   
   
    }
    });


/////////////////////////////////////////////////////////////////////

client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
    .setColor('RANDOM')
    .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
var channel =member.guild.channels.find('name', 'chat-msg-bot')
if (!channel) return;
channel.send({embed : embed});
});


/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////











client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا
