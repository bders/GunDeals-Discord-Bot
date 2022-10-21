const Enmap = require('enmap')

const postsDB = new Enmap({
    name: 'GundealsDatabase',
    autoFetch: true,
    fetchAll: true
})

const postID = this.getVariable(1,"id", cache)
const field = this.getVariable(1,"field", cache)
const data = false


try{
    if(postsDB.has([postID]) == false){
        channel.send("No Data")
    }
    else{
        postsDB.set(postID,data,field)
    }
}
catch(err){
    console.log(err)
}
