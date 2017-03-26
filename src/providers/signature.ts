import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import _ from 'lodash';

@Injectable()
export class SignatureService {

  private SIG_PATH = 'assets/ionic-native-signatures/';

  private interfaces: any[] = [];
  private plugins: string[] = [];

  constructor(
    private http: Http
  ) {
    this.fetchIndex();
  }

  getInterfaces(): any[] {
    return this.interfaces;
  }

  getPlugins(): string[] {
    return this.plugins;
  }

  getMethodSignature(methodName: string, pluginName: string) {
    return this.getFileContents(this.getPluginSigPath(pluginName))
      .then((sig: any) => {
        const match = _.find(sig.members, { name: methodName });
        return match? Promise.resolve(match) : Promise.reject(null);
      });
  }

  getInterfaceSignature(interfaceName: string) {
    return this.getFileContents(this.getInterfaceSigPath(interfaceName));
  }

  getInterfaceProperties(interfaceName: string) {
    if (!this.interfaceExists(interfaceName))
      return Promise.reject('No interface exists for this type.');

    return this.getInterfaceSignature(interfaceName)
      .then(sig => Promise.resolve(sig.properties));
  }

  interfaceExists(interfaceName: string) {
    return _.find(this.interfaces, { name: interfaceName });
  }

  private fetchIndex() {
    this.getFileContents(this.SIG_PATH + 'index.json')
      .then((index: any) => {
        this.interfaces = index.interfaces;
        this.plugins = index.classes;
      });
  }

  private getFileContents(path): any {
    return this.http.get(path)
      .map(res => res.json())
      .toPromise();
  }

  private getInterfaceSigPath(interfaceName: string) {
    return this.SIG_PATH + 'interfaces/' + interfaceName + '.json';
  }

  private getPluginSigPath(className: string) {
    return this.SIG_PATH + 'classes/' + className + '.json';
  }

}
