exports.menu = function () {
    var action = [{
        title: "Inquire",
        type: "nested",
        call_to_actions: [{
                title: "Guide",
                type: "nested",
                call_to_actions: [{
                    title: "Enrollment Process",
                    type: "postback",
                    payload: "VIEW_GUIDE"
                }, {
                    title: "Claiming Drop AMC",
                    type: "postback",
                    payload: "VIEW_GUIDE"
                }, {
                    title: "Assessment of Fees",
                    type: "postback",
                    payload: "VIEW_GUIDE"
                }, {
                    title: "Payments",
                    type: "postback",
                    payload: "VIEW_GUIDE"
                }, {
                    title: "Student Records",
                    type: "postback",
                    payload: "VIEW_GUIDE"
                }]
            }, {
                title: "Events",
                type: "nested",
                call_to_actions: [{
                    title: "Enrollment",
                    type: "postback",
                    payload: "VIEW_EVENTS"
                }, {
                    title: "Examination",
                    type: "postback",
                    payload: "VIEW_EVENTS_EXAM"
                }, {
                    title: "Semestral Break",
                    type: "postback",
                    payload: "VIEW_EVENTS"
                }]
            }, {
                title: "Locations",
                type: "nested",
                call_to_actions: [{
                    title: "Office",
                    type: "postback",
                    payload: "VIEW_LOCATIONS"
                }, {
                    title: "School/Department",
                    type: "postback",
                    payload: "VIEW_LOCATIONS"
                }, {
                    title: "Food Court",
                    type: "postback",
                    payload: "VIEW_LOCATIONS"
                }, {
                    title: "Parking Space",
                    type: "postback",
                    payload: "VIEW_LOCATIONS"
                }, {
                    title: "Comfort Room",
                    type: "postback",
                    payload: "VIEW_LOCATIONS"
                }]
            }, {
                title: "Help",
                type: "postback",
                payload: "VIEW_HELP"
            }
        ]
    }, {
        title: "Visit Website",
        type: "nested",
        call_to_actions: [{
                type: "web_url",
                title: "University of Baguio",
                url: "http://www.ubaguio.edu/",
                webview_height_ratio: "full"
            }, {
                type: "web_url",
                title: "UBAE Development",
                url: "http://ubae.herokuapp.com/about",
                webview_height_ratio: "full"
            }
        ]
    }]

    return {
        persistent_menu: [{
            locale: "default",
            composer_input_disabled: false,
            call_to_actions: action
        }]
    };
}