const { Channel } = require('discord.js')
const Enmap = require('enmap')

const channel = client.channels.cache.get('1032973416480915506'); //bot-command channel

const userDB = new Enmap({
    name: 'UserSettingsDatabase',
    autoFetch: true,
    fetchAll: true
})

const currUserID = this.getVariable(1,"userID", cache)

try{
    if(userDB.get(currUserID).filters.length > '0')
        channel.send("<@" + currUserID + "> here are your current filters: " + userDB.get(currUserID).filters.toString())
    else
        channel.send("<@" + currUserID + "> No filters currently stored for you.")
}
catch(err){
    console.log(err)
}
