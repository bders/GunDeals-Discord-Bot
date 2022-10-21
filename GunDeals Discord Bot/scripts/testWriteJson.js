const fs = require('fs')
var jsonObj = 
{
    "users": [
        {
            "userid": "842570967310139432",
            "filters": ""
        },
        {
            "userid": "test1",
            "filters": ""
        },
        {
            "userid": "test2",
            "filters": ""
        },
        {
            "userid": "test3",
            "filters": ""
        },
]};

var data = JSON.stringify(jsonObj)

fs.writeFile('./resources/user-filters.json',data, err => {
    if (err) {
      throw err
    }
    console.log('JSON data is saved.')
  })