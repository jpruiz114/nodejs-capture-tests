var screenshot = require('url-to-screenshot');
var fs = require('fs');

var url = 'http://demosite.theonlinepractice.com/dental/general/nina/';

screenshot(url).width(1280).capture(
    function(error, img) {
        if (error) {
            throw error;
        } else {
            fs.writeFileSync(__dirname + '/shots/' + 'desktop.png', img);
        }
    }
);
