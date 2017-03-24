import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import _ from 'lodash';

@Injectable()
export class SignatureService {

  private SIG_PATH = 'assets/ionic-native-signatures/';

  constructor(
    private http: Http
  ) {}

  getMethodSignature(methodName: string, pluginName: string) {

    return this.http.get(this.getSigPath(pluginName))
      .map(res => res.json())
      .toPromise()
      .then((sig: any) => {

        const match = _.find(sig.members, { name: methodName });

        if (match) {
          return Promise.resolve(match);
        } else {
          return Promise.reject(null);
        }

      });

  }

  private getSigPath(plugin: string) {
    return this.SIG_PATH +  plugin + '/signature.json';
  }

}
