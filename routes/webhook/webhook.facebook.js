var request = require('request');

// Sends response messages via the Send API
exports.callSendAPI = function (sender_psid, response) {
    // Construct the message body
    let request_body = {
        recipient: {
            id: sender_psid
        },
        message: response
    }
    // Send the HTTP request to the Messenger Platform
    request({
        uri: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {
            access_token: process.env.PAGE_ACCESS_TOKEN
        },
        method: 'POST',
        json: request_body
    }, (err, res, body) => {
        if (!err) {
            console.log('Request sent to "Messenges');
        } else {
            console.error('Unable to send message:' + err);
        }
    });
}

exports.callMenu = function (menu) {
    // Construct the message body
    let request_body = menu;
    request({
        uri: 'https://graph.facebook.com/v2.6/me/messenger_profile',
        qs: {
            access_token: process.env.PAGE_ACCESS_TOKEN
        },
        method: 'POST',
        json: request_body
    }, (err, res, body) => {
        if (!err) {
            console.log('Request sent to "Messenger Profile');
        } else {
            console.error('Unable to send message:' + err);
        }
    });
}