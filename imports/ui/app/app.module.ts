import '@angular/compiler';
import 'imports/ui/polyfills';

import { AppRoutingModule } from './app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';

//Angular
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//primng
import { ScrollTopModule } from 'primeng/scrolltop';
import { RippleModule } from 'primeng/ripple';
import {SplitButtonModule} from 'primeng/splitbutton';
import {StyleClassModule} from 'primeng/styleclass';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';
import {BadgeModule} from 'primeng/badge';
import {MenuModule} from 'primeng/menu';
import {SidebarModule} from 'primeng/sidebar';
import {InplaceModule} from 'primeng/inplace';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {AvatarModule} from 'primeng/avatar';
import {ProgressBarModule} from 'primeng/progressbar';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {EditorModule} from 'primeng/editor';
import { CarouselModule } from 'primeng/carousel';
import {DialogModule } from 'primeng/dialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {PanelModule} from 'primeng/panel';
import {AccordionModule} from 'primeng/accordion';
import {CardModule} from 'primeng/card';
import {InputSwitchModule} from 'primeng/inputswitch';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {FileUploadModule} from 'primeng/fileupload';
import {DropdownModule} from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';
import {SkeletonModule} from 'primeng/skeleton';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { ChartModule } from 'primeng/chart';
import {MessageService} from "primeng/api";


//Components

import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  imports: [
    EditorModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TranslateModule.forRoot(),
    SplitButtonModule,
    RippleModule,
    HttpClientModule,
    DragDropModule,
    AppRoutingModule,
    StyleClassModule,
    ButtonModule,
    CheckboxModule,
    TableModule,
    DividerModule,
    InputTextModule,
    BadgeModule,
    MenuModule,
    SidebarModule,
    InplaceModule,
    TieredMenuModule,
    AvatarGroupModule,
    AvatarModule,
    ProgressBarModule,
    OverlayPanelModule, 
    CarouselModule,
    DialogModule,
    InputTextareaModule,
    PanelModule,
    AccordionModule,
    CardModule,
    InputSwitchModule,
    ConfirmDialogModule,
    ScrollTopModule,
    FileUploadModule,
    DropdownModule,
    TabViewModule,
    PasswordModule,
    RadioButtonModule,
    SkeletonModule,
    AutoCompleteModule,
    ChartModule
  ],
  providers: [
    MessageService
  ],
  declarations: [
    AppComponent,
    LandingComponent,


  ],
  entryComponents: [
  ],
  bootstrap: [
    AppComponent
  ]
})
@Injectable()
export class AppModule { }
