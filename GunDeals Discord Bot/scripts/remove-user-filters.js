const { Channel } = require('discord.js')
const Enmap = require('enmap')

const channel = client.channels.cache.get('1032973416480915506'); //bot-command channel

const userDB = new Enmap({
    name: 'UserSettingsDatabase',
    autoFetch: true,
    fetchAll: true
})

const member = this.getVariable(1,"member", cache)
const currUserID = this.getVariable(1,"userID", cache)
const currUsername = this.getVariable(1,"currUsername", cache)
const newFilter = this.getVariable(1,"newFilter", cache)

try{
    if(userDB.has(currUserID) == false){
        channel.send("<@" + currUserID + "> No Filters stored for you currently")
    }
    else{
        userDB.remove(currUserID,newFilter,"filters")
        channel.send("<@" + currUserID + "> " + newFilter + " removed from your filters")
    }
}
catch(err){
    console.log(err)
}

