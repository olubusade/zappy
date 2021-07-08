
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-clipboard.Clipboard",
          "file": "plugins/cordova-clipboard/www/clipboard.js",
          "pluginId": "cordova-clipboard",
        "clobbers": [
          "cordova.plugins.clipboard"
        ]
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-plugin-fingerprint-aio.Fingerprint",
          "file": "plugins/cordova-plugin-fingerprint-aio/www/Fingerprint.js",
          "pluginId": "cordova-plugin-fingerprint-aio",
        "clobbers": [
          "Fingerprint"
        ]
        },
      {
          "id": "ionic-plugin-deeplinks.deeplink",
          "file": "plugins/ionic-plugin-deeplinks/www/deeplink.js",
          "pluginId": "ionic-plugin-deeplinks",
        "clobbers": [
          "IonicDeeplink"
        ],
        "runs": true
        },
      {
          "id": "cordova-plugin-statusbar.statusbar",
          "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
          "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
          "window.StatusBar"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-clipboard": "1.3.0",
      "cordova-plugin-fingerprint-aio": "4.0.2",
      "ionic-plugin-deeplinks": "1.0.22",
      "cordova-plugin-device": "2.0.2",
      "cordova-plugin-statusbar": "2.4.2",
      "cordova-plugin-whitelist": "1.3.4"
    };
    // BOTTOM OF METADATA
    });
    