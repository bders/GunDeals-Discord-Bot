const fs = require('fs')
var userData = require('./resources/user-filters.json')


var currUser = '842570967310139430'
var newFilter = "test 2 test"

function findId(data, idToLookFor) {
    var userArray = data.user;
    for (var i = 0; i < userArray.length; i++) {
        if (userArray[i].userid == idToLookFor) {
            return(i);
        }
    }
}

function addFilters(idToUpdate, discordID,filterValue){
    if(idToUpdate === undefined){
        let newUser = {
            "userid": discordID,
            "filters": filterValue
        }
        userData.user.push(newUser)
    }
    else{
        if(userData.user[idToUpdate].filters.length === 0)
            userData.user[idToUpdate].filters += filterValue
        else
            userData.user[idToUpdate].filters += "," + filterValue
    }

    
}

addFilters(findId(userData, currUser),currUser, newFilter)

console.log(findId(userData, currUser))


var data = JSON.stringify(userData)

fs.writeFile('./resources/user-filters.json',data, err => {
    if (err) {
      throw err
    }
    console.log('JSON data is saved.')
  })