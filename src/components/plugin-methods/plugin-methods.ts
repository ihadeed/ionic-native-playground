import {Component, EventEmitter, Input, NgZone, Output} from '@angular/core';
import {PluginResultComponent} from "../plugin-result/plugin-result";
import {Content, ModalController} from "ionic-angular";
import {PluginParamsPage} from "../../pages/plugin-params/plugin-params";
import {SignatureService} from "../../providers/signature";

@Component({
  selector: 'plugin-methods',
  templateUrl: 'plugin-methods.html'
})
export class PluginMethodsComponent {

  @Input()
  pluginResult: PluginResultComponent;

  @Input()
  sigName: string;

  _plugin: any;

  @Input()
  set plugin(val: any) {
    this._plugin = val.__proto__;
    this.processPlugin();
  }

  @Output()
  onResult = new EventEmitter<any>();

  @Output()
  onError = new EventEmitter<any>();

  private success = val => {
    this.ngZone.run(() => {
      if (this.pluginResult) {
        this.pluginResult.result = val;
      } else {
        this.onResult.emit(val);
      }
    });
  };

  private error = val => {
    this.ngZone.run(() => {
      if (this.pluginResult) {
        this.pluginResult.error = val;
      } else {
        this.onError.emit(val);
      }
    });
  };


  properties: any[] = [];
  methods: any[] = [];
  subscription: any;

  constructor(
    private ngZone: NgZone,
    private modalCtrl: ModalController,
    private sig: SignatureService,
    private content: Content
  ){
  }

  ngOnDestroy() {
    try {
      this.subscription.unsubscribe();
    } catch (e) {}
  }

  private async processPlugin() {
    if (!this._plugin) return;

    this.properties = [];
    this.methods = [];

    for (let member in this._plugin) {
      const isFunction = typeof this._plugin[member] == 'function';

      if (member === 'constructor') continue;

      let desc;

      if (this.sigName) {
        desc = (await this.sig.getMethodSignature(member, this.sigName)).description;
      }


      const button = {
        text: member,
        handler: async () => {

          const method = this._plugin[member];

          if (isFunction) {

            const getResult = (args: any[] = []) => {
              const result = method.apply(this._plugin, args);

              if (result.then) {
                result.then(this.success.bind(this)).catch(this.error.bind(this));
              } else if (result.subscribe) {
                this.subscription = result.subscribe({
                  next: this.success.bind(this),
                  error: this.error.bind(this),
                  completed: this.success.bind(this)
                });
              } else {
                this.success(result);
              }

              if (this.content && this.content.scrollToTop) {
                this.content.scrollToTop();
              }

            };

            let args: any[];

            if (this.sigName) {
              let sig = await this.sig.getMethodSignature(member, this.sigName);
              if (sig && sig.params && sig.params.length) {
                let params = await this.getParams(sig);
                if (params && params.cancel === true) {
                  return;
                }
                args = params;
              }
            }
            getResult(args);

          } else {
            this.success(method);
          }

        },
        desc: desc
      };

      isFunction ? this.methods.push(button) : this.properties.push(button);

    }
  }

  private getParams(signature?: any): Promise<any> {
    return new Promise<any>((resolve) => {
      const modal = this.modalCtrl.create(PluginParamsPage, { signature });
      modal.present();
      modal.onDidDismiss(resolve);
    });
  }

}
