const Enmap = require('enmap')

const postsDB = new Enmap({
    name: 'GundealsDatabase',
    autoFetch: true,
    fetchAll: false
})

const fs = require('fs')

fs.readFile("./resources/gundealsNew.json", "utf8", (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err);
        return;
    }
    try {
        const postsArr = JSON.parse(jsonString);

        for (let obj in postsArr) {
            post = postsArr[obj].data
            postTimestamp = Math.round(post.created)

            postsDB.ensure(post.id, {
                title: post.title,
                url: post.url,
                created: post.created,
                flair: post.link_flair_text,
                permalink: 'https://reddit.com' + post.permalink,
                thumbnail: post.thumbnail,
                botSentDeal: false,
            })
            let data = postsDB.get(post.id)
            console.log(data.title)

        }
    } catch (err) {
        console.log("Error parsing JSON string:", err);
    }
});