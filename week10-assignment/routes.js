const express = require('express');
const router = express.Router();

// Path to your JSON file, although it can be hardcoded in this file.
const dummyData = require('./data/dummy.json');

router.get('/', (req, res, next) => {
    res.render('index.ejs', {
        title: 'Team Activity 10',
        path: '/teamActivities/10',
    });
});

router.get('/fetchAll', (req, res, next) => {
    res.json(dummyData);
});

router.post('/insert', (req, res, next) => {
    /************************************************
     * INSERT YOUR WEB ENDPOINT CODE HERE
     ************************************************/
     if (req.body.newName !== undefined) {
        const newName = req.body.newName;

        // Make our submissions somewhat unique.
        if (!dummyData.avengers.some(a => a.name === newName)) {
            dummyData.avengers.push({ name: newName });
            res.sendStatus(200);
        };
    } else {
        res.sendStatus(400);
    };

});

module.exports = router;