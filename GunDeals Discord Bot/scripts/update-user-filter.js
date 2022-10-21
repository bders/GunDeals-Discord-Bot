const { Channel } = require('discord.js')
const Enmap = require('enmap')

const channel = client.channels.cache.get('1032973416480915506'); //bot-command channel

const userDB = new Enmap({
    name: 'UserSettingsDatabase',
    autoFetch: true,
    fetchAll: true
})

const currUserID = this.getVariable(1,"userID", cache)
const currUsername = this.getVariable(1,"currUsername", cache)
const newFilter = this.getVariable(1,"newFilter", cache)

try{
if(userDB.has(currUserID) == false){
    userDB.ensure(currUserID, {
        name: currUsername,
        filters: [newFilter]
    })

    channel.send("<@" + currUserID + "> " + newFilter + " has been added to your list of filters.")
}
else{
    userDB.push(currUserID,newFilter,"filters")
    channel.send("<@" + currUserID + "> " + newFilter + " has been added to your list of filters.")
}
}
catch(err){
    console.log(err)
}