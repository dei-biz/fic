const express = require('express');
const couchbase = require('couchbase');
const cluster = new couchbase.Cluster('couchbase://localhost/');
cluster.authenticate('test', '12345678_');

const bucket = cluster.openBucket('test');

const app = express();
const http = require('http').createServer(app);

const getSingleDoc = (req, res) => {
    bucket.get(req.params.id, (err, doc) => {
        res.type('json');
        if (err) {
            console.log(err);
            console.trace();
            res.status(404).send({ "error": { code: 404, reason: "no document" } });
        } else {
            res.send(doc.value);
        }
    });
};

app.use('/doc/:id', function(req, res) {
    getSingleDoc(req, res);
});

http.listen(4001, function() {
    console.log('escuchando en puerto 4001');
});