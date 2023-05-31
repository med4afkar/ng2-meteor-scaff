import '@angular/compiler';
import 'imports/ui/polyfills';
import { Meteor } from 'meteor/meteor';

import { enableProdMode } from '@angular/core';
import { AppModule } from 'imports/ui/app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import "node_modules/primeng/resources/primeng.min.css";
import "node_modules/primeflex/primeflex.css";
import "node_modules/primeng/resources/primeng.min.css";
import "node_modules/primeicons/primeicons.css";
import "node_modules/prismjs/themes/prism-coy.css";
import "node_modules/quill/dist/quill.core.css";
import "node_modules/quill/dist/quill.snow.css";

Meteor.startup( () => {

    if ( Meteor.isProduction ) {
        enableProdMode();
    }

    platformBrowserDynamic().bootstrapModule( AppModule ).then();

} );