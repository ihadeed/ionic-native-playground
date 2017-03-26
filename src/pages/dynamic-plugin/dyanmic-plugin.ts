import {Component, ReflectiveInjector} from '@angular/core';
import {NavParams} from "ionic-angular";

@Component({
  selector: 'dynamic-plugin-page',
  templateUrl: 'dynamic-plugin.html'
})
export class DynamicPluginPage {

  plugin: any;
  pluginName: string = 'Plugin';
  sigName: string;

  constructor(
    private navParams: NavParams
  ) {
    // get plugin provider
    const pluginProvider = navParams.get('provider');

    // get plugin name
    this.pluginName = navParams.get('name');

    // get signature name if available
    this.sigName = navParams.get('sig');

    // inject provider
    const injector = ReflectiveInjector.resolveAndCreate([pluginProvider]);

    // set the plugin property to the injected plugin
    this.plugin = injector.get(pluginProvider);
  }

}
