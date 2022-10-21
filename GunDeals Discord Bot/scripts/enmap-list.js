const Enmap = require('enmap')

const postsDB = new Enmap({
    name: 'GundealsDatabase',
    autoFetch: true,
    fetchAll: true
})

postsDB.forEach((value, key, map) => {
    console.log(postsDB.get(key))
  });
