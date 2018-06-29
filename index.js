const Discord = require('discord.js');
const index = new Discord.Client();
const client = new Discord.Client();
const prefix = '+'
client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});
client.on('ready', () => {
     client.user.setActivity("+help",{type: 'WATCHING'})

});
client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`


('+id ' , 'لعرض معلوماتك') 
('+server' , 'لمعلومات سيرفر') 
('رابط السيرفر الي تكتب الاوامر بيه' ,' رابط  ')
('+invite   ' ,' لاضافه البوت   ')
('+roles' ,'لاضهار رتب  سيرفر بالترتيب')
('+infobot ' ,'معلومات البوت')
('+bc ' , 'لارسال رساله جماعية')
('+v2min ' , 'لانشاء روم مؤقت بتأكيد')
('+ping ' , 'سرعه بوت')
('+vc ' , 'كيك فويس')
('removeRoles ' , 'لحذف جميع رتب')
('+invites ' , 'لمعرفه عدد الاعضاء الذي دخلوا عبرك')
('+rmutechannel ' , 'لقفل الشات')
('+runmutechannel ' , 'لفتح الشات')
('+rooms ' , 'لاضهار الرومات')
('+ct ' , 'لانشاء روم كتابي')
('+cv ' , 'لانشاء روم صوتي')
('+delet ' , 'لخذف روم صوتي او شات')
('+calculator ' , 'الالة الحسابية')
('+unhide ' , 'لفتح جميع الرومات صوتية وكتابية')
('+content ' , 'لارسال اقتراح لصحاب البوت')
('+move ' , 'لسحب الشخص في رومات صوتية')
('+uptime ' , 'لمعرفه مده تشغيل البوت')
('+member ' , 'حالة الاعضاء')
('+serverimage ' , 'لاضهار صوره السيرفر')
('+image ' , 'لاضهار صورتك')
('roleadd ' , 'لاعطاء رتبه')
('+roleremove ' , 'لازاله الرتبه')
('+nickname ' , 'لتغير اسم العضو')
('+suppport ' , 'لحصول على سيرفر المساعدة')
('+Mute ' , 'لاعطاء ميوت شات مع سبب')
('UnMute ' , 'لفك ميوت شات')
('+clear ' , 'لمسح الشات حد اقصى 200رساله') 
('+serooms' , 'انشاء رومات جاهزه')
('+seroles' , 'انشاء رتب جاهزه')
('+removerooms' , 'لازالة جميع الرومات')
('+createcolors' , 'لانشاء 137 الوان')
('+deletecolors' , 'لحذف جميع الوان')
('+hide' , 'لاخفاء جميع رومات في سسيرفر')
('+tag' , 'لزخرفه الكتابه للانكليزي فقط')
('+sd' , 'لحذف كل شيئ بسيرفر')
('+removeroles' , 'لحذف جميع رتب')
('+unhide' , 'لفتح جميع رومات')
('+ban' , 'لاعطاء باند')
('+unbans' , 'لفك باند عن جميع')
('لاتخيار الوان الذي تريده' , 'لون')
('+owner' , 'كود تأكد من ملكيه البوت')
تحذير :البوت يمتلك لوق يعمل في روم يسمى log
البوت يقوم بطرد من ينشر سيرفر تحذير

`)
   message.author.sendEmbed(embed)
   
   }
   });
client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
	const prefix = '+'
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});
client.on('message', function(msg) {
	const prefix = '+'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });


client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});
client.on('message', message => {
  if (true) {
if (message.content === '+invite') {
      message.author.send('https://discordapp.com/api/oauth2/authorize?client_id=457536673333379083&permissions=8&scope=bot').catch(e => console.log(e.stack));

    }
   } 
  });
client.on('message', message => {
     if (message.content === "+invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
     
     
     
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message =>{
    if (message.author.bot) return;
    if(message.content == "+roles"){
        var roles = '',
        ros=message.guild.roles.size,
        role = [];
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
  role.push(message.guild.roles.filter(r => r.position == ros-i).map(r => `${i}- ${r.name}`));  
        }}
        message.channel.send(role.join("\n"));
    }
});
client.on('message', message => {
    if (message.content.startsWith("+infobot")) {
      message.channel.send({
 embed: new Discord.RichEmbed() 
    .setColor('RED')
    .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**وقت الاقلاع⌚**', timeCon(process.uptime()), true)
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
     })
    }
  });
  function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
};
client.on('message', message => {
	const prefix = '+'
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});
client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('+ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    });
					client.on("message", message => {
    const command = message.content.split(" ")[0];

    if(command == prefix+"vc"){

        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }

        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("please mention the member")
            return;
        }

    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
        


    
      });
     });
    }
});
client.on("message", message =>{
//if(message.author.id !== "378294311126695938") return;
 var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

   if(command == "+removeRoles"){
       var user= message.mentions.users.first();
       if(!user){
           user = message.author;
       }
    message.guild.member(user).removeRoles(message.guild.member(user).roles)
//      .then(console.log)
      .catch(console.error);
   message.channel.send(".. Removed");
   }
});
client.on('message', message => {
  if (message.content.startsWith ("+invites")) {
   if(!message.channel.guild) return message.reply('** This command only for servers **');
       var mentionned = message.mentions.users.first();
      var os;
    if(mentionned){
        var os = mentionned.id;
    } else {
        var os = message.author.id;
        
    }
        var oss;
    if(mentionned){
        var oss = mentionned;
    } else {
        var oss = message.author;
        
    }
message.guild.fetchInvites()
.then(invites =>{
if(!invites.find(invite => invite.inviter.id === `${os}`)) return message.channel.send(`**${oss.username}, Does't Have Invites :x:**`);
message.channel.send(`**__${invites.find(invite => invite.inviter.id === `${os}`).uses}__ Member Joined By ${oss.username} !** :chart_with_upwards_trend: `)

})



}

});
client.on('message' , message => { 
const prefix = '+'
    if (message.author.bot) return;
     if (message.content === prefix + "se") {
       if (message.author.id !== '389090790984515594') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')

if(!message.channel.guild) return;
  if(message.content < 1023) return
  const Embed11 = new Discord.RichEmbed()
.setAuthor(client.user.username,client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setDescription(`***مجموع السيرفرات ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)
         message.channel.sendEmbed(Embed11)
    }
});
client.on('message', message => {

if (message.author.bot) return;
    if (message.content === "+rmutechannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات ✅ ")
           });
             }
if (message.content === "+runmutechannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات✅")
           });
             }



});
client.on('message', message => {
    if (message.content === "+rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**الرومات✅**`)
        .addField('⬇ عدد الرومات. ✔',`** ${message.guild.channels.size}**`)
        
.addField('⬇اسماء الرومات. ✔:',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});
client.on("message", message => {
           if (message.content.startsWith("+ct")) {
             if(!message.channel.guild) return message.reply('هذا الأمر للسيرفرات فقط')
                       if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("انت لا تمتلك صلاحيه `MANAGE_CHANNELS`");
                   let args = message.content.split(" ").slice(1).join(" ")
                   if (!args[1] || args[1 == " "]) return message.reply("يرجى كتابه اسم الشات الكتابي")
               message.guild.createChannel(args, 'text');
           message.channel.sendMessage(`✅ تـم إنـشـاء شـات كتابي بأسـم **{  ${args}  }**`)

           }
           });
client.on("message", (message) => {
           if (message.content.startsWith("+cv")) {
             if(!message.channel.guild) return message.reply('هذا الأمر للسيرفرات فقط')
                       if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("انت لا تمتلك صلاحيه `MANAGE_CHANNELS`");
                  let args = message.content.split(" ").slice(1).join(" ")
                 if (!args[1] || args[1 == " "]) return message.reply("يرجى كتابته اسم الروم الصوتي")
               message.guild.createChannel(args, 'voice');
               message.channel.sendMessage(`✅ تـم إنـشـاء روم صـوتي بـأسـم **{  ${args}  }**`)

           }
           });		   
client.on("message", (message) => {
                 if (message.content.startsWith('+delete')) {
if(!message.channel.guild) return message.reply('هذا الأمر للسيرفرات فقط')
                     if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("انت لا تمتلك صلاحيه `MANAGE_CHANNELS`");

                     let args = message.content.split(' ').slice(1);
                     let channel = message.client.channels.find('name', args.join(' '));
                     if (!channel) return message.reply('**لا يوجد روم صوتي او شات كتابي بهذا الأسم**')
                     channel.delete()
                     message.channel.sendMessage('❌ تـم حـذف الـروم الـصوتـي او الـشـات الـكـتـابـي')
                 }
             });		   
const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;

client.on('message', msg => {
	const prefix = '+'
 if (msg.content.startsWith(prefix + 'calculator')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('Specify a equation, please.');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`Error: ${err}`);
    }

    const embed = new Discord.RichEmbed()
    .addField("**السؤال**: ",`**${question}**`, true)
    .addField("**الناتج**: ",`**${answer}**`, true)
    .setFooter("S Bot حاسبه")
    msg.channel.send(embed)
    }
};
});			 
client.on('message', msg => {
  if(msg.content === '+unhide') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      })
    })
    msg.channel.send('.')
  }
})

client.on('message', message => {
	const prefix = '+'
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك:white_check_mark: `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("#000000")
.setDescription(`<@${message.author.id}> moved you to his channel!\nServer => ${message.guild.name}`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``")
}
} else {
message.react("❌")
 }}});		












client.login(process.env.BOT_TOKEN);
