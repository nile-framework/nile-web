import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// angularfire2
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


// App Routing Module
import { AppRoutingModule } from './app-routing.module';

import { NileWebModule } from './nile-web/nile-web.module';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    // App Routing Module
    AppRoutingModule,
    NileWebModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
