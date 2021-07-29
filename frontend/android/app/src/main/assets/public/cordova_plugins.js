
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-contacts.Contact",
          "file": "plugins/cordova-plugin-contacts/www/Contact.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "Contact"
        ]
        },
      {
          "id": "cordova-plugin-contacts.ContactAddress",
          "file": "plugins/cordova-plugin-contacts/www/ContactAddress.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "ContactAddress"
        ]
        },
      {
          "id": "cordova-plugin-contacts.ContactError",
          "file": "plugins/cordova-plugin-contacts/www/ContactError.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "ContactError"
        ]
        },
      {
          "id": "cordova-plugin-contacts.ContactField",
          "file": "plugins/cordova-plugin-contacts/www/ContactField.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "ContactField"
        ]
        },
      {
          "id": "cordova-plugin-contacts.ContactFindOptions",
          "file": "plugins/cordova-plugin-contacts/www/ContactFindOptions.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "ContactFindOptions"
        ]
        },
      {
          "id": "cordova-plugin-contacts.ContactName",
          "file": "plugins/cordova-plugin-contacts/www/ContactName.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "ContactName"
        ]
        },
      {
          "id": "cordova-plugin-contacts.ContactOrganization",
          "file": "plugins/cordova-plugin-contacts/www/ContactOrganization.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "ContactOrganization"
        ]
        },
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
          "id": "cordova-plugin-contacts.contacts",
          "file": "plugins/cordova-plugin-contacts/www/contacts.js",
          "pluginId": "cordova-plugin-contacts",
        "clobbers": [
          "navigator.contacts"
        ]
        },
      {
          "id": "cordova-plugin-statusbar.statusbar",
          "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
          "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
          "window.StatusBar"
        ]
        },
      {
          "id": "cordova-plugin-contacts.convertUtils",
          "file": "plugins/cordova-plugin-contacts/www/convertUtils.js",
          "pluginId": "cordova-plugin-contacts"
        },
      {
          "id": "cordova-plugin-contacts.ContactFieldType",
          "file": "plugins/cordova-plugin-contacts/www/ContactFieldType.js",
          "pluginId": "cordova-plugin-contacts",
        "merges": [
          ""
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-clipboard": "1.3.0",
      "cordova-plugin-contacts": "3.0.1",
      "cordova-plugin-fingerprint-aio": "4.0.2",
      "ionic-plugin-deeplinks": "1.0.22",
      "cordova-plugin-device": "2.0.2",
      "cordova-plugin-statusbar": "2.4.2",
      "cordova-plugin-whitelist": "1.3.4"
    };
    // BOTTOM OF METADATA
    });
    