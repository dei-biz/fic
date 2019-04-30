const fs = require("fs");
const kafka = require("kafka-node");
const uuidv1 = require('uuid/v1');
const Producer = kafka.Producer;
const client = new kafka.KafkaClient();
const producer = new Producer(client, { requireAcks: 1 });


const template = fs.readFileSync("template.xml");

producer.on("ready", function() {
    console.log("READY to SEND");
    feed();
});

const getData = () => ({
    XXTIENDAXX: Math.floor(Math.random() * 5000),
    XXUUIDXX: uuidv1(),
    XXPAISXX: Math.floor(Math.random() * 20),
    XXCAJAXX: Math.floor(Math.random() * 3),
    XXOPERACIONXX: 5
});

const subst = (match, offset, string) => {
    return getData()[match];
}

const sendMessage = (key) => {
    const message = template.toString().replace(/XX\w+XX/g, subst);
    producer.send([
        { topic: "FIC", partition: 0, messages: [message], key: key, timestamp: Date.now() }
    ], function(err, result) {
        console.log(err || result);
        //process.exit();
    });
}
let key = uuidv1();
const feed = () => {
    setTimeout(function() {
        key = Math.random() < 0.5 ? key : uuidv1();
        sendMessage(key);
        console.log("key:", key);
        feed();
    }, 100);
}

client.on("ready", function() {
    console.log("CLIENT READY!");
});