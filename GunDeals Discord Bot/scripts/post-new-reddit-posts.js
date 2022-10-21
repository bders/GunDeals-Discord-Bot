const Enmap = require('enmap')

const postsDB = new Enmap({
    name: 'GundealsDatabase',
    autoFetch: true,
    fetchAll: true
})

const userDB = new Enmap({
    name: 'UserSettingsDatabase',
    autoFetch: true,
    fetchAll: true
})

const channel = client.channels.cache.get('1027104784349679728');

let interval = (Date.now() / 1000) - 10800 //2 hours

postsDB.forEach((value, key, map) => {
    let post = postsDB.get(key)

    var timestamp = new Date(post.created * 1000)
    var converted = new Date(interval * 1000)

    console.log(post.title)
    console.log('Bot Sent? ' + post.botSentDeal)
    console.log('Time Check: ' + timestamp >= converted )
    console.log('Bot SEnt Check: ' + post.botSentDeal == false)
    console.log('Logic Check: ' + timestamp >= converted && post.botSentDeal == false)
    console.log('Debug Check Time + BotSent')

    if (timestamp >= converted && post.botSentDeal == false) {
        console.log('Debug Start Send')
        var tagUserArr = []
        let titleArr = post.title.toLowerCase().split(" ")

        userDB.forEach((value, key, map) => {
            if(post.filters.includes(post.flair) ||titleArr.some(r=> post.filters.includes(r)))
                tagUserArr.push('<@' + key + '>')
        });

        var postThumbnail = ""

        if (post.thumbnail == 'default' || post.postThumbnail == 'spoiler') {
            postThumbnail = post.url
        }
        else {
            postThumbnail = post.thumbnail
        }

        var gundealsEmbed = {
            title: post.title,
            url: post.url,
            thumbnail: {
                url: postThumbnail,
                height: 0,
                width: 0
            },
            fields: [
                {
                    name: 'Time Posted',
                    value: timestamp.toLocaleDateString("en-US") + " " + timestamp.toLocaleTimeString("en-US"),
                    inline: true,
                },
                {
                    name: 'Type',
                    value: post.flair,
                    inline: true,
                },

                {
                    name: 'Deal URL',
                    value: post.url,
                    inline: false,
                },
                {
                    name: 'Reddit Post URL',
                    value: 'https://reddit.com' + post.permalink,
                    inline: false,
                }
            ]

        };

        
        post.botSentDeal = true
        console.log(post.title)
        console.log('Bot Sent Deal? ' + post.botSentDeal)
        postsDB.set(key, post)

        console.log('Sending Embed')
        if(tagUserArr.length > 0)
            channel.send({content:tagUserArr.toString(), embeds: [gundealsEmbed]})
        else
            channel.send({embeds: [gundealsEmbed]})

    }
});

/* fs.readFile("./resources/gundealsNew.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err);
        return;
    }
    try {
        const postsArr = JSON.parse(jsonString);
        var unixTimestamp = Date.now()
        var currentTimestamp = new Date(unixTimestamp)
        var fiveMinuteInterval = Math.floor((Date.now() / 1000)) - 180
        

        for (let obj in postsArr) {
            post = postsArr[obj].data
            postTimestamp = Math.round(post.created)

            console.log(post.title)
            console.log('Reddit Timestamp (Unix): ' + postTimestamp)
            console.log('Five Minute Interval (Unix): ' + fiveMinuteInterval)
            console.log('Reddit Timestamp: ' + new Date(Math.floor(postTimestamp * 1000)).toLocaleTimeString("en-US"))
            console.log('Five Minute Interval Start: ' + new Date(fiveMinuteInterval * 1000).toLocaleTimeString("en-US"))
            console.log('Current Time:  ' + currentTimestamp.toLocaleTimeString("en-US"))

            console.log(postTimestamp >= fiveMinuteInterval)

            if (postTimestamp >= fiveMinuteInterval) {
                var timestamp = new Date(postTimestamp * 1000)
                var postThumbnail = ""
                if(post.thumbnail === 'default'){
                    postThumbnail = post.url
                }
                else{
                    postThumbnail = post.thumbnail
                }
                var exampleEmbed = {
                    title: post.title,
                    description: 'Debug Message: Testing, ping me/text me if something is wrong.',
                    url: post.url,
                    thumbnail: {
                        url: postThumbnail,
                        height: 0,
                        width: 0
                    },
                    fields: [
                        {
                            name: 'Time Posted',
                            value: timestamp.toLocaleDateString("en-US") + " " + timestamp.toLocaleTimeString("en-US"),
                            inline: true,
                        },
                        {
                            name: 'Type',
                            value: post.link_flair_text,
                            inline: true,
                        },

                        {
                            name: 'Deal URL',
                            value: post.url,
                            inline: false,
                        },
                        {
                            name: 'Reddit Post URL',
                            value: 'https://reddit.com' + post.permalink,
                            inline: false,
                        }
                    ]

                };
                console.log('Sending Embed')
                channel.send({ embeds: [exampleEmbed] });
            }

        }
    } catch (err) {
        console.log("Error parsing JSON string:", err);
    }
}); */

