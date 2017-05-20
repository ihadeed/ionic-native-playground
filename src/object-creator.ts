import { NavParams, ViewController, AlertController, ModalController } from 'ionic-angular';
import { HelpPage } from './pages/help/help';

export class ObjectCreator {

  type: string;
  signature: any;

  actualType: string;

  values: any[] = [];
  items: any[] = [];

  constructor(
    protected navParams: NavParams
    , protected viewCtrl: ViewController
    , protected alertCtrl: AlertController
    , protected modalCtrl: ModalController
  ) {
    this.type = navParams.get('type');
    this.signature = navParams.get('signature');
  }

  selectType() {
    return new Promise<string>((resolve, reject) => {
      const typeAlert = this.alertCtrl.create({
        title: 'Select a type',
        inputs: [
          {
            type: 'radio',
            label: 'Boolean',
            value: 'boolean'
          },
          {
            type: 'radio',
            label: 'Number',
            value: 'number'
          },
          {
            type: 'radio',
            label: 'String',
            value: 'string'
          },
          {
            type: 'radio',
            label: 'Object',
            value: 'object'
          },
          {
            type: 'radio',
            label: 'Array',
            value: 'array'
          },
          {
            type: 'radio',
            label: 'Date',
            value: 'date'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: () => reject()
          },
          {
            text: 'Select',
            handler: type => resolve(type)
          }
        ]
      });
      typeAlert.present();
    }).catch(() => {});
  }

  changeType(i: number) {
    this.selectType()
      .then((type: string) => (this.items[i].type = type) && this.setValue(i, type));
  }

  selectName(currentName: string = '') {
    return new Promise<string>((resolve, reject) => {
      this.alertCtrl.create({
        title: 'Enter property name',
        inputs: [{
          type: 'text',
          label: 'name',
          name: 'name',
          value: currentName
        }],
        buttons: [
          {
            text: 'Cancel',
            handler: () => reject()
          },
          {
            text: 'Select',
            handler: val => resolve(val.name)
          }
        ]
      }).present();
    }).catch(() => {});
  }

  addItem() {
    let name;

    const onTypeSelect = type => {
      if (['object', 'array'].indexOf(type) > - 1) {
        const modal = this.modalCtrl.create('object-creator', { type });
        modal.present();
        modal.onDidDismiss(value => this._addItem(type, value, name));
      } else {
        this._addItem(type, null, name);
      }
    };

    if (this.type === 'object') {
      this.selectName()
        .then(val => {
          name = val;
          this.selectType().then(onTypeSelect.bind(this));
        });
    } else {
      this.selectType().then(onTypeSelect.bind(this));
    }
  }

  editObject(i: number) {
    const modal = this.modalCtrl.create('object-creator', {
      type: this.items[i].type,
      value: this.values[i],
      actualType: this.items[i].actualType
    });

    modal.present();
    modal.onDidDismiss(value => value && (this.values[i] = value));
  }

  reorderItems(indexes) {

    const el1 = this.items[indexes.from],
      el2 = this.values[indexes.from];

    this.items.splice(indexes.from, 1);
    this.values.splice(indexes.from, 1);

    this.items.splice(indexes.to, 0, el1);
    this.values.splice(indexes.to, 0, el2);

  }

  removeItem(index) {
    this.items.splice(index, 1);
    this.values.splice(index, 1);
  }

  cancel() {
    this.viewCtrl.dismiss({
      cancel: true
    });
  }

  showHelp() {
    this.modalCtrl.create(HelpPage, { interfaceName: this.actualType }).present();
  }

  protected _addItem(type: string = 'string', value?: any, name?: string, actualType?: string, optional: boolean = false) {
    this.items.push({ type, name, actualType, optional });
    this.setValue(this.values.length, type, value);
  }

  protected setValue(i: number, type: string, value?: any) {
    this.values[i] = value || this.getDefaultValue(type);
  }

  protected getDefaultValue(type: string) {
    switch (type) {
      case 'boolean':
        return false;
      case 'number':
        return 0;
      case 'string':
        return '';
      case 'object':
        return {};
      case 'array':
        return [];
      case 'date':
        return new Date();
      default:
        return '';
    }
  }

  protected parseType(type: string) {

    // lets start with string as default type
    if (!type) return 'string';

    // first things first
    type = type.toLowerCase();

    switch (type) {
      case 'string':
      case 'number':
      case 'boolean':
      case 'date':
        // no processing needed
        return type;

      default:
        // check if array
        if (type.indexOf('[]') > -1 || type.indexOf('array') > -1) return 'array';
        // if it's none of the above, it's probably a custom type, which is most likely an object
        else return 'object';
    }

  }

}
