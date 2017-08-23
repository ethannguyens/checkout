const sauceConnectLauncher = require('sauce-connect-launcher');

const SauceConnect = function () {
    sauceConnectLauncher({
        username: 'ethannguyens',
        accessKey: 'a1f85fc0-ba5f-4ac3-95e1-b2fdc1a93a9e',
        verbose: false,
        logger: console.log
    }, function (err, sauceConnectProcess) {
        console.log("Started Sauce Connect Process");
    });
};

module.export = SauceConnect();