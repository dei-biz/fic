const couchbase = require("couchbase");
const kafka = require("kafka-node");
const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient("127.0.0.1:8091");
const consumer = new Consumer(client, [{ topic: "FIC" }]);

const cluster = new couchbase.Cluster('couchbase://localhost/');
cluster.authenticate('test', '12345678_');

const bucket = cluster.openBucket("test");



const storeDocument = (uuid, data) => {
    bucket.get(uuid, (err, doc) => {
        const docs = [];
        if (!err) {
            Array.prototype.push.apply(docs, doc.value.docs);
        }
        docs.push(data)
        bucket.upsert(uuid, { docs: docs }, () => {});
    });
}

client.on("ready", function() {
    console.log("CLIENT READY!");
});

consumer.on("message", (msg) => {
    console.log(`GOT ${msg.key}`);
    storeDocument(msg.key, msg.value, );
});