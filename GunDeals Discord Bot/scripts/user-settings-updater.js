const Enmap = require('enmap')

const userDB = new Enmap({
    name: 'UserSettingsDatabase',
    autoFetch: true,
    fetchAll: true
})

const currUserID = this.getVariable(1,"userID", cache)
const currUsername = this.getVariable(1,"currUsername", cache)

if(userDB.has(currUserID) == false){
    userDB.ensure(currUserID, {
        name: currUsername,
        filters: []
    })
}
else{
    userDB.set(currUserID,currUsername, name)
}