import {Page, NavController, Alert, Platform} from 'ionic-angular';
import {Observable} from 'rxjs/Observable';
// Import used plugins from Ionic Native library
import {
    ActionSheet,
    AppAvailability,
    AppRate,
    AppVersion,
    Badge,
    BarcodeScanner,
    Base64ToGallery,
    BatteryStatus,
//BLE,
    Calendar,
    Camera,
    Contacts,
    DatePicker,
    Device,
//Facebook,
    Geolocation,
    //Push,
    StatusBar,
    Toast,
    //TouchID,
    Vibration,
    Network
} from 'ionic-native';
import {StatusObject} from "ionic-native/dist/plugins/batterystatus";

class Plugin {
    constructor (public name, public action, public icon = 'settings') {
    }
}

@Page({
    templateUrl: 'build/pages/main/main.html',
})
export class MainPage {

    private outputCollapsedEh : boolean = true;
    private outputContent : string = "No content available at the moment.";
    private batteryLevelSubscription : any;


    constructor(private nav : NavController, private platform: Platform) {
        console.log("platform is", Device.device);
    }

    more () : void {
        this.nav.present(Alert.create({
            title: 'About',
            subTitle: 'This application was created by Ibrahim Hadeed',
            buttons: [
                'Close',
                {
                    text: 'View Github Profile',
                    handler: () => {
                        // TODO open inappbrowser here
                    }
                }
            ]
        }));
    }

    toggleOutput () : void {
        console.log("Output toggled.");
        this.outputCollapsedEh = !this.outputCollapsedEh;
    }

    /**
     * update output
     * @param input {any}
     * @param error {boolean}
     */
    updateOutput (input : any, error? : boolean) : void {
        console.log("Updating output");

        this.outputContent = '';
        if (error) this.outputContent += '<strong>ERROR</strong> ';

        if (typeof input == 'string') {
            this.outputContent += input;
        }else if (typeof input == 'object') {
            this.outputContent += this.objectToHtml(input);
        } else {
            console.warn("You haven't thought of this type: ", typeof input, input);
        }

        // Uncollapse output if it's collapsed :)

        if(this.outputCollapsedEh) this.toggleOutput();
    }

    /**
     * convert JS object to HTML list
     * @param object
     */
    objectToHtml(object) : string {
        console.log("converting object", object);
        let ot : string = '<ul>';
        for (let property in object) {
            ot += '<li><strong>';
            ot += property;
            ot += '</strong> ';
            if(object[property] === null) {
                ot += 'NULL';
            } else if(typeof object[property] == 'object') {
                ot += this.objectToHtml(object[property]);
            } else {
                ot += object[property]
            }

            ot += '</li>';
        }
        ot += '</ul>';

        return ot;
    }

    /**
     * Tests the geolocation
     */
    geolocation () {
        // Temporary platform ready listener till we implement built-in listener in ionic-native
        this.platform.ready().then(() => {
            Geolocation.getCurrentPosition().then(
                res => this.updateOutput(res),
                err => this.updateOutput(err, true)
            );
        });
    }


    /**
     * show action sheet
     */
    actionsheet () : void {
        let buttonLabels = ['Share via Facebook', 'Share via Twitter'];
        ActionSheet.show({
            'title': 'What do you want with this image?',
            'buttonLabels': buttonLabels,
            'addCancelButtonWithLabel': 'Cancel',
            'addDestructiveButtonWithLabel' : 'Delete',
            'androidTheme' : 5, // THEME_DEVICE_DEFAULT_LIGHT
        }).then(buttonIndex => {
            console.log('Button pressed: ' + buttonLabels[buttonIndex - 1]);
        });
    }

    /**
     * Test app availability. Check if Facebook is installed.
     */
    appavailability (): void {
        if(this.platform.is('ios')){
            AppAvailability.check('facebook://').then(
                ()=> this.updateOutput("Facebook is installed!"),
                ()=> this.updateOutput("Facebook is not installed.")
            );
        }else if(this.platform.is('android')){
            AppAvailability.check('com.facebook.katana').then(
                ()=> this.updateOutput("Facebook is installed!"),
                ()=> this.updateOutput("Facebook is not installed.")
            );
        }else {
            this.updateOutput("Sorry, I've only implemented a demo for iOS and Android", true);
        }
    }

    /**
     * Test App Version plugin
     */
    appversion (): void {
        let _resolved_count = 0,
            _called_count = 0;
        let name, package_name, version_number, version_code;
        let output = () => {
            _called_count++;
            if(_called_count===4 && _resolved_count === 0) {
                this.updateOutput('Error getting version number.', true);
                return;
            }
            if(_resolved_count<4 && _called_count <4) return;
            this.updateOutput("App name: " + name + "" +
                "<br>Package name: " + package_name + "" +
                "<br>App Version: " + version_number + "" +
                "<br>Version Code: " + version_code);
        }
        AppVersion.getAppName().then((data) => {
            _resolved_count++;
            name = data;
            output();
        }, ()=>output());

        AppVersion.getPackageName().then((data) => {
            _resolved_count++;
            package_name = data;
            output();
        }, ()=>output());

        AppVersion.getVersionNumber().then(data=>{
            _resolved_count++;
            version_number = data;
            output();
        }, ()=>output());

        AppVersion.getVersionCode().then(data=>{
            _resolved_count++;
            version_code = data;
            output();
        }, ()=>output());

    }

    /**
     * Test the badge plugin
     */
    badge(): void {
        Badge.set(5).then(
            res => this.updateOutput('Badge has been set to 5.'),
            err => this.updateOutput('Error updating badge.<br>' + err)
        );
    }

    /**
     * Take a photo
     */
    camera () : void {

        let options = {
            targetWidth: 500,
            destinationType: 0
        };

        Camera.getPicture(options)
            .then(
                (photo : any) => this.updateOutput('<img src="data:image/jpeg;base64,'+photo+'" alt="" />'),
                (error : string) => this.updateOutput(error, true)
            );

    }


    /**
     * Scans a barcode then outputs data
     */
    barcodescanner () : void {
        BarcodeScanner.scan().then(
            barcodeData => this.updateOutput(barcodeData),
            error => this.updateOutput(error, true)
        )
    }

    /**
     * Watch / Stop watch on battery status
     */
    batterystatus () : void {
        if(this.batteryLevelSubscription) {
            this.batteryLevelSubscription.unsubscribe();
            this.batteryLevelSubscription = null;
            this.updateOutput("Cancelled battery status watch.");
            return;
        }
        this.updateOutput("Watching the battery level for one minute. You will be notified with changes.<br>Press the Battery status button again to cancel the watch.");
        this.batteryLevelSubscription = BatteryStatus.onChange().subscribe(
            data => Toast.show("Battery level: " + data.level + ". Is plugged in: " + data.isPlugged, "4000", "center").subscribe()
        );

    }

    datepicker () : void {
        DatePicker.show({mode: 'datetime', date: new Date()}).then(
            res => this.updateOutput(res),
            err => this.updateOutput(err, true)
        )
    }

    /**
     * Show a toast
     */
    toast () : void {
        Toast.show('Hello world!', '2000', 'center').subscribe();
    }

    device () : void {

    }

    /**
     * Test the network plugin
     */
    network (): void {
        this.updateOutput(Network.connection);
    }


    /***
     * Plugin list
     */

    private plugins : Array<any> = [
        new Plugin('Action Sheet', () => this.actionsheet(), 'list'),
        new Plugin('App Availability', () => this.appavailability()),
        new Plugin('App Rate', () => AppRate.promptForRating(true)), // Prompt for rating
        new Plugin('App Version',() => this.appversion()),
        new Plugin('Badge', () => this.badge()),
        new Plugin('Barcode Scanner', () => this.barcodescanner(), 'camera'),
        new Plugin('Battery status', ()=>this.batterystatus(), 'battery-full'),
        new Plugin('Camera', () => this.camera(), 'camera'),
        new Plugin('Network', () => this.network()),
        new Plugin('Geolocation',() => this.geolocation(), 'navigate'),
        new Plugin('Toast', () => this.toast()),
        new Plugin('Vibration', () => Vibration.vibrate(2000)), // Vibrate for two seconds

    ];



}
