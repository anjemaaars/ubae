exports.menu = function () {
    var action = [{
        title: "Events",
        type: "nested",
        call_to_actions: [{
            title: "Examination",
            type: "postback",
            payload: "VIEW_EVENTS_EXAM"
        }]
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
            url: "http://ubae-v1.herokuapp.com/about",
            webview_height_ratio: "full"
        }]
    }]

    return {
        persistent_menu: [{
            locale: "default",
            composer_input_disabled: false,
            call_to_actions: action
        }]
    };
}