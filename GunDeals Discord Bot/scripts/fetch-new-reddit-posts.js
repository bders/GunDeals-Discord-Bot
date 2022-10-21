const fetch = require('node-fetch2');

const fs = require('fs')
const Enmap = require('enmap')

const postsDB = new Enmap({
    name: 'GundealsDatabase',
    autoFetch: true,
    fetchAll: false
})

var unixTimestamp = Date.now()
var timestamp = new Date(unixTimestamp)

fetch('https://www.reddit.com/r/gundeals/new.json')
  .then(function(res) {
    return res.json();   // Convert the data into JSON
  })
  .then(function(res){
    const postsArr = res.data.children;

    for (let obj in postsArr) {
        post = postsArr[obj].data
        postTimestamp = Math.round(post.created)

        postsDB.ensure(post.id, {
            title: post.title,
            url: post.url,
            created: post.created,
            flair: post.link_flair_text.toLowerCase(),
            permalink: 'https://reddit.com' + post.permalink,
            thumbnail: post.thumbnail,
            botSentDeal: false,
        })
    }
    console.log('Fetch Complete at ' + timestamp.toLocaleDateString("en-US") + ' ' + timestamp.toLocaleTimeString("en-US"))
})
