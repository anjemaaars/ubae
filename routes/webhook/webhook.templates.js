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
                        type: 'web_url',
                        url: process.env.WEB_PAGE_URL + '/examination/first',
                        title: 'First Grading Exam'
                    }, {
                        type: 'web_url',
                        url: process.env.WEB_PAGE_URL + '/examination/midterm',
                        title: 'Midterm Exam'
                    }, {
                        type: 'web_url',
                        url: process.env.WEB_PAGE_URL + '/examination/final',
                        title: 'Final Exam'
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
                    subtitle: 'This feature is under development.',
                    image_url: attachment_url
                }]
            }
        }
    }
}