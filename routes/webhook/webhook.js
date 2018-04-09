var express = require('express');
var facebook = require('./webhook.facebook');
var menu = require('./webhook.menu');
var msg = require('./webhook.templates');

var router = express.Router();

router.get('/', function (req, res) {
    // Your verify token. Should be a random string.
    var VERIFY_TOKEN = process.env.VERIFY_TOKEN;

    // Parse the query params
    var mode = req.query['hub.mode'];
    var token = req.query['hub.verify_token'];
    var challenge = req.query['hub.challenge'];

    // Checks if a token and mode is in the query string of the request
    if (mode && token) {

        // Checks the mode and token sent is correct
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {

            // Responds with the challenge token from the request
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);

        } else {
            // Responds with '403 Forbidden' if verify tokens do not match
            res.sendStatus(403);
        }
    }
});

router.post('/', function (req, res) {
    // Parse the request body from the POST
    var body = req.body;

    // Check the webhook event is from a Page subscription
    if (body.object === 'page') {

        // helper.callMenu();
        // Iterate over each entry - there may be multiple if batched
        body.entry.forEach(function (entry) {

            // Get the webhook event. entry.messaging is an array, but 
            // will only ever contain one event, so we get index 0
            var webhook_event = entry.messaging[0];
            console.log(webhook_event);

            // Get the sender PSID
            var sender_psid = webhook_event.sender.id;
            console.log('Sender PSID: ' + sender_psid);

            // Check if the event is a message or postback and
            // pass the event to the appropriate handler function
            if (webhook_event.message) {
                handleMessage(sender_psid, webhook_event.message);
            } else if (webhook_event.postback) {
                handlePostback(sender_psid, webhook_event.postback);
            }
        });

        // Return a '200 OK' response to all events
        res.status(200).send('EVENT_RECEIVED');
    } else {

        // Return a '404 Not Found' if event is not from a page subscription
        res.sendStatus(404);
    }
});

function handleMessage(sender_psid, received_message) {
    // callSenderAction(sender_psid, 'typing_on');
    let response;
    // Check if the message contains text

    if (received_message.text) {
        // Create the payload for a basic text message

        response = msg.processMessage('I recieved a message! :)');

    } else if (received_message.attachments) {
        // Gets the URL of the message attachment
        let attachment_url = received_message.attachments[0].payload.url;
        response = msg.processAttachment(attachment_url);
    }
    // Sends the response message
    facebook.callSendAPI(sender_psid, response);
}

function handlePostback(sender_psid, received_postback) {
    let response;
    // Get the payload for the postback
    let payload = received_postback.payload;
    let values = payload.split('_');
    // Set the response based on the postback payload
    if (payload === 'FACEBOOK_WELCOME') {
        facebook.callMenu(menu.menu());
        response = msg.processMessage('Welcome to the UBAE chatbot');
    } else if (payload === 'VIEW_EVENTS_EXAM') {
        response = msg.genericMsg()
    }
    // Send the message to acknowledge the postback
    facebook.callSendAPI(sender_psid, response);
}

module.exports = router;