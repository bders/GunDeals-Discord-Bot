const { Channel } = require('discord.js')
const Enmap = require('enmap')

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
}
else{
    userDB.push(currUserID,newFilter,"filters")
}
}
catch(err){
    console.log(err)
}