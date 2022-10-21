const { Channel } = require('discord.js')
const Enmap = require('enmap')

const userDB = new Enmap({
    name: 'UserSettingsDatabase',
    autoFetch: true,
    fetchAll: true
})

const currUserID = this.getVariable(1,"userID", cache)

try{
    if(userDB.get(currUserID).filters.length > '0')
        channel.send(userDB.get(currUserID).filters.toString())
    else
        channel.send("No filters currently stored for you.")
}
catch(err){
    console.log(err)
}
