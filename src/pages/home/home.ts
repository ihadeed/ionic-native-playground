import { Component } from '@angular/core';

import { NavController, IonicPage, Platform } from 'ionic-angular';

import Plugins from '../../plugins';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  plugins;

  constructor(
    private navCtrl: NavController,
    private platform: Platform
  ) {
    let plugins = [];
    Plugins.forEach(plugin => {

      if (plugin.params && plugin.params.provider) {
        const platforms = plugin.params.provider.getSupportedPlatforms();
        if (platforms && !platforms.find(plt => platform.is(plt.toLowerCase()))) {
          console.log('Plugin ' + plugin.params.provider.getPluginName() + ' is not supported on this platform.');
          return;
        }
      }

      plugins.push(plugin);

    });

    this.plugins = plugins;
  }

  show(plugin: any) {
    this.navCtrl.push(plugin.component, plugin.params);
  }

}

