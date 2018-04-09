exports.processMessage = function (message) {
    return {
        text: message
    }
}

exports.genericMsg = function () {
    return {
        attachment: {
            type: 'template',
            payload: {
                template_type: 'generic',
                elements: [{
                    title: 'Examination',
                    subtitle: 'Which one do you need?',
                    // image_url: 'http://www.ubaguio.edu/index.php/resources-offices/admissions-and-records-center-arc.html',
                    buttons: [{
                        type: 'postback',
                        title: 'First Grading Exam',
                        payload: 'EVENT_EXAM_FIRST'
                    }, {
                        type: 'postback',
                        title: 'Midterm Exam',
                        payload: 'EVENT_EXAM_MIDTERM'
                    }, {
                        type: 'postback',
                        title: 'Final Exam',
                        payload: 'EVENT_EXAM_FINAL'
                    }],
                }]
            }
        }
    }
}

exports.processAttachment = function (attachment_url) {
    return {
        attachment: {
            type: 'template',
            payload: {
                template_type: 'generic',
                elements: [{
                    title: 'I recieved an attachment',
                    subtitle: 'Tap a button to answer.',
                    image_url: attachment_url,
                    buttons: [{
                        type: 'postback',
                        title: 'Yes!',
                        payload: 'yes',
                    }, {
                        type: 'postback',
                        title: 'No!',
                        payload: 'no',
                    }],
                }]
            }
        }
    }
}