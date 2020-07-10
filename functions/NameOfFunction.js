const axios = require("axios");

exports.handler = function(event, context, callback) {
    // your server-side functionality
    axios({
        method:'post',
        url: 'https://846199000090b3de4fc1f2b14682b17e.m.pipedream.net',
        data: {name: "Hello, Netlify"}
    }).then((res) => {
        callback(null, {
            statusCode: 200,
            body: "Hello, World"
            });
    }).catch((err) => {
        console.log(err);
        callback(new Error("Something went wrong."))
    })

    
}
