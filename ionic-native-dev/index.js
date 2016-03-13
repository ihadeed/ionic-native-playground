function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var ng1_1 = require('./ng1');
ng1_1.initAngular1();
var DEVICE_READY_TIMEOUT = 2000;
var actionsheet_1 = require('./plugins/actionsheet');
exports.ActionSheet = actionsheet_1.ActionSheet;
var appavailability_1 = require('./plugins/appavailability');
exports.AppAvailability = appavailability_1.AppAvailability;
var apprate_1 = require('./plugins/apprate');
exports.AppRate = apprate_1.AppRate;
var appversion_1 = require('./plugins/appversion');
exports.AppVersion = appversion_1.AppVersion;
var badge_1 = require('./plugins/badge');
exports.Badge = badge_1.Badge;
var barcodescanner_1 = require('./plugins/barcodescanner');
exports.BarcodeScanner = barcodescanner_1.BarcodeScanner;
var base64togallery_1 = require('./plugins/base64togallery');
exports.Base64ToGallery = base64togallery_1.Base64ToGallery;
var batterystatus_1 = require('./plugins/batterystatus');
exports.BatteryStatus = batterystatus_1.BatteryStatus;
var ble_1 = require('./plugins/ble');
exports.BLE = ble_1.BLE;
var calendar_1 = require('./plugins/calendar');
exports.Calendar = calendar_1.Calendar;
var camera_1 = require('./plugins/camera');
exports.Camera = camera_1.Camera;
var clipboard_1 = require('./plugins/clipboard');
exports.Clipboard = clipboard_1.Clipboard;
var contacts_1 = require('./plugins/contacts');
exports.Contacts = contacts_1.Contacts;
var datepicker_1 = require('./plugins/datepicker');
exports.DatePicker = datepicker_1.DatePicker;
var dbmeter_1 = require('./plugins/dbmeter');
exports.DBMeter = dbmeter_1.DBMeter;
var device_1 = require('./plugins/device');
exports.Device = device_1.Device;
var devicemotion_1 = require('./plugins/devicemotion');
exports.DeviceMotion = devicemotion_1.DeviceMotion;
var deviceorientation_1 = require('./plugins/deviceorientation');
exports.DeviceOrientation = deviceorientation_1.DeviceOrientation;
var dialogs_1 = require('./plugins/dialogs');
exports.Dialogs = dialogs_1.Dialogs;
var facebook_1 = require('./plugins/facebook');
exports.Facebook = facebook_1.Facebook;
//import {File} from './plugins/file';
var flashlight_1 = require('./plugins/flashlight');
exports.Flashlight = flashlight_1.Flashlight;
var geolocation_1 = require('./plugins/geolocation');
exports.Geolocation = geolocation_1.Geolocation;
var globalization_1 = require('./plugins/globalization');
exports.Globalization = globalization_1.Globalization;
var hotspot_1 = require('./plugins/hotspot');
exports.Hotspot = hotspot_1.Hotspot;
var imagepicker_1 = require('./plugins/imagepicker');
exports.ImagePicker = imagepicker_1.ImagePicker;
var keyboard_1 = require('./plugins/keyboard');
exports.Keyboard = keyboard_1.Keyboard;
var launchnavigator_1 = require('./plugins/launchnavigator');
exports.LaunchNavigator = launchnavigator_1.LaunchNavigator;
var localnotifications_1 = require('./plugins/localnotifications');
exports.LocalNotifications = localnotifications_1.LocalNotifications;
var push_1 = require('./plugins/push');
exports.Push = push_1.Push;
var sms_1 = require('./plugins/sms');
exports.SMS = sms_1.SMS;
var splashscreen_1 = require('./plugins/splashscreen');
exports.Splashscreen = splashscreen_1.Splashscreen;
var statusbar_1 = require('./plugins/statusbar');
exports.StatusBar = statusbar_1.StatusBar;
var toast_1 = require('./plugins/toast');
exports.Toast = toast_1.Toast;
var touchid_1 = require('./plugins/touchid');
exports.TouchID = touchid_1.TouchID;
var vibration_1 = require('./plugins/vibration');
exports.Vibration = vibration_1.Vibration;
__export(require('./plugins/plugin'));
// Window export to use outside of a module loading system
window['IonicNative'] = {
    ActionSheet: actionsheet_1.ActionSheet,
    AppAvailability: appavailability_1.AppAvailability,
    AppRate: apprate_1.AppRate,
    AppVersion: appversion_1.AppVersion,
    Badge: badge_1.Badge,
    BarcodeScanner: barcodescanner_1.BarcodeScanner,
    Base64ToGallery: base64togallery_1.Base64ToGallery,
    BatteryStatus: batterystatus_1.BatteryStatus,
    BLE: ble_1.BLE,
    Calendar: calendar_1.Calendar,
    Camera: camera_1.Camera,
    Clipboard: clipboard_1.Clipboard,
    Contacts: contacts_1.Contacts,
    DatePicker: datepicker_1.DatePicker,
    DBMeter: dbmeter_1.DBMeter,
    Device: device_1.Device,
    DeviceMotion: devicemotion_1.DeviceMotion,
    DeviceOrientation: deviceorientation_1.DeviceOrientation,
    Dialogs: dialogs_1.Dialogs,
    Facebook: facebook_1.Facebook,
    //File: File,
    Flashlight: flashlight_1.Flashlight,
    Geolocation: geolocation_1.Geolocation,
    Globalization: globalization_1.Globalization,
    Hotspot: hotspot_1.Hotspot,
    ImagePicker: imagepicker_1.ImagePicker,
    Keyboard: keyboard_1.Keyboard,
    LaunchNavigator: launchnavigator_1.LaunchNavigator,
    LocalNotifications: localnotifications_1.LocalNotifications,
    Push: push_1.Push,
    SMS: sms_1.SMS,
    Splashscreen: splashscreen_1.Splashscreen,
    StatusBar: statusbar_1.StatusBar,
    Toast: toast_1.Toast,
    TouchID: touchid_1.TouchID,
    Vibration: vibration_1.Vibration
};
// To help developers using cordova, we listen for the device ready event and
// log an error if it didn't fire in a reasonable amount of time. Generally,
// when this happens, developers should remove and reinstall plugins, since
// an inconsistent plugin is often the culprit.
var before = +new Date;
var didFireReady = false;
document.addEventListener('deviceready', function () {
    console.log('DEVICE READY FIRED AFTER', (+new Date - before), 'ms');
    didFireReady = true;
});
setTimeout(function () {
    if (!didFireReady && window.cordova) {
        console.warn('Native: deviceready did not fire within ' + DEVICE_READY_TIMEOUT + 'ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.');
    }
}, DEVICE_READY_TIMEOUT);
//# sourceMappingURL=index.js.map