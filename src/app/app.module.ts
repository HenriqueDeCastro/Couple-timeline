import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NavModule } from './core/components/nav/nav.module';
import { MdSysScrimModule } from './shared/md-sys/components/md-sys-scrim/md-sys-scrim.module';
import { MdSysDrawerModule } from './shared/md-sys/components/md-sys-drawer/md-sys-drawer.module';
import { TitleCasePipe } from '@angular/common';
import { ToolbarModule } from './core/components/toolbar/toolbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToolbarModule,
    NavModule,
    MdSysScrimModule,
    MdSysDrawerModule
  ],
  providers:[
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
    TitleCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
