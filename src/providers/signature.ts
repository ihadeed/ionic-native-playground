import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import _ from 'lodash';

@Injectable()
export class SignatureService {

  private SIG_PATH = 'assets/ionic-native-signatures/';

  private interfaces: string[] = [];
  private plugins: string[] = [];

  constructor(
    private http: Http
  ) {
    this.fetchIndex();
  }

  getInterfaces(): string[] {
    return this.interfaces;
  }

  getPlugins(): string[] {
    return this.plugins;
  }

  getMethodSignature(methodName: string, pluginName: string) {

    return this.getFileContents(this.getPluginSigPath(pluginName))
      .then((sig: any) => {
        const match = _.find(sig.members, { name: methodName });
        !!match && Promise.resolve(match) || Promise.reject(null);
      });

  }

  getInterfaceSignature(interfaceName: string) {
    return this.getFileContents(this.getInterfaceSigPath(interfaceName));
  }

  getInterfaceProperties(interfaceName: string) {
    return this.getInterfaceSignature(interfaceName)
      .then(sig => Promise.resolve(sig.properties));
  }

  private fetchIndex() {
    this.getFileContents(this.SIG_PATH + 'index.json')
      .then((index: any) => {
        this.interfaces = index.interfaces;
        this.plugins = index.classes;
      })
      .catch(e => {
        console.log('error getting index', e);
      });
  }

  private getFileContents(path): any {
    return this.http.get(path)
      .map(res => res.json())
      .toPromise()
      .catch(e => console.log(`Error getting file contents: ${ path }`, e))
  }

  private getInterfaceSigPath(interfaceName: string) {
    return this.SIG_PATH + 'interfaces/' + interfaceName + '.json';
  }

  private getPluginSigPath(className: string) {
    return this.SIG_PATH + 'classes/' + className + '.json';
  }

}
