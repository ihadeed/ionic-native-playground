import { NavParams, ViewController, AlertController, ModalController } from 'ionic-angular';
import { ObjectCreatorPage } from './pages/object-creator/object-creator';

export class ObjectCreator {

  type: string;
  signature: any;


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
    });
  }

  changeType(i: number) {
    this.selectType()
      .then(type => (this.items[i].type = type) && this.setValue(i, type));
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
    });
  }

  addItem() {
    let name;

    const onTypeSelect = type => {
      if (['object', 'array'].indexOf(type) > - 1) {
        const modal = this.modalCtrl.create(ObjectCreatorPage, { type });
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
    const modal = this.modalCtrl.create(ObjectCreatorPage, {
      type: this.items[i].type,
      value: this.values[i]
    });

    modal.present();
    modal.onDidDismiss(value => value && (this.values[i] = value));
  }

  protected _addItem(type: string = 'string', value?: any, name?: string) {
    this.items.push({ type, name });
    this.setValue(this.values.length, type, value);
  }

  protected setValue(i: number, type: string, value?: any) {
    switch (type) {
      case 'boolean':
        this.values[i] = value || false;
        break;
      case 'number':
        this.values[i] = value || 0;
        break;
      case 'string':
        this.values[i] = value || '';
        break;
      case 'object':
        this.values[i] = value || '{}';
        break;
      case 'array':
        this.values[i] = value || '[]';
        break;
      default:
        this.values[i] = '';
        break;
    }
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
    this.viewCtrl.dismiss();
  }
}
