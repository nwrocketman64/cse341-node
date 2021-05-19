//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'items.json');

router.get('/',(req, res, next) => {
    // Read the JSON file
    const data = [getItemsFile()];
    console.log(data);
    res.render('pages/ta03', { 
        title: 'Team Activity 03', 
        path: '/ta03', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        data: data
    });
});

function getItemsFile(){
    var data = fs.readFile(p, (err, fileContent) => {
        if (err) {
          cb([]);
        } else {
          return JSON.parse(fileContent);
        }
      });
};

module.exports = router;