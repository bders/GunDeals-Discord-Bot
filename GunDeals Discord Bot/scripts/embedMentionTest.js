const Enmap = require('enmap'
)
const userDB = new Enmap({
    name: 'UserSettingsDatabase',
    autoFetch: true,
    fetchAll: true
})

var tagUserArr = []

        userDB.forEach((value, key, map) => {
            if(userDB.get(key).filters.includes("test"))
                tagUserArr.push('<@' + key + '>')
        });

console.log(tagUserArr.toString())

var gundealsEmbed = {
    title: "test",
    fields: [
        {
            name: 'Time Posted',
            value: "test",
            inline: true,
        },
        {
            name: 'Type',
            value:"test",
            inline: true,
        },

        {
            name: 'Deal URL',
            value: "test",
            inline: false,
        },
        {
            name: 'Reddit Post URL',
            value: "test",
            inline: false,
        }
    ]

}

channel.send({content:tagUserArr.toString(), embeds: [gundealsEmbed]})