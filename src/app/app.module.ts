import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CreditCardComponent } from './quote/credit-card/credit-card/credit-card.component';

import { CUSTOM_BREAKPOINTS } from './layout/breakpoints';
import { CustomShowHideDirective } from './layout/custom-show-hide.directive';

//import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, CommonModule,
    FlexLayoutModule.withConfig({ disableDefaultBps: true, addOrientationBps: true }, CUSTOM_BREAKPOINTS), 
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule, MatRadioModule],
  declarations: [ AppComponent, HelloComponent, CreditCardComponent, CustomShowHideDirective ],
  providers:    [ ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
